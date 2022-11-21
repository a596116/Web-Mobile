import axios, { type AxiosRequestConfig } from 'axios'
import { CacheEnum } from '@/enum/cacheEnum'
import { store } from '@/utils'
import router from '@/router'
import { Toast } from 'vant'
import { HttpStatus } from '@/enum/HttpStatus'
interface IOptions {
    loading?: boolean
    message?: boolean
    clearValidateError?: boolean
}
export default class Axios {
    private instance
    private loading: Array<any> = []
    private options: IOptions = { loading: true, message: true, clearValidateError: true }
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)
        this.interceptors()
    }

    public async request<T>(config: AxiosRequestConfig, options?: IOptions): Promise<T> {
        this.options = Object.assign(this.options, options ?? {})
        return new Promise(async (resolve, reject) => {
            try {
                const res = await this.instance.request<T>(config)
                resolve(res.data)
            } catch (error) {
                reject(error)
            }
        })
    }

    private interceptors() {
        this.interceptorsRequest()
        this.interceptorsResponse()
    }

    // 請求攔截
    private interceptorsRequest() {
        this.instance.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                if (this.options.loading) {
                    this.loading.push(Toast.loading({
                        message: '加載中...',
                        forbidClick: true,
                    }))
                }
                config.headers = {
                    Authorization: 'Bearer ' + store.get(CacheEnum.TOKEN_NAME),
                }
                return config
            },
            (error) => {
                console.error('請求失敗')
                return Promise.reject(error)
            },
        )
    }

    // 響應攔截
    private interceptorsResponse() {
        this.instance.interceptors.response.use(
            async (response) => {
                if (response.data?.message) {
                    Toast({
                        type: response.data.code === 20000 ? 'success' : 'fail',
                        message: response.data.message,
                        duration: 2000,
                    })
                }
                this.loading.forEach(l => l.close())
                this.options = { loading: true, message: true, clearValidateError: true }
                return response
            },
            (error) => {
                this.loading.forEach(l => l.close())
                this.options = { loading: true, message: true, clearValidateError: true }
                const {
                    response: { status, data },
                } = error
                const { message } = data

                switch (status) {
                    case HttpStatus.UNAUTHORIZED:
                        store.remove(CacheEnum.TOKEN_NAME)
                        router.push({ name: 'login' })
                        break
                    case HttpStatus.UNPROCESSABLE_ENTITY:
                        // errorStore().setErrors(error.response.data.errors)
                        break
                    case HttpStatus.FORBIDDEN:
                        Toast.fail({ message: message ?? '沒有操作權限' })
                        break
                    case HttpStatus.NOT_FOUND:
                        router.push({ name: 'notFound' })
                        break
                    case HttpStatus.TOO_MANY_REQUESTS:
                        Toast.fail({ message: message ?? '操作過於頻繁，請稍候在嘗試' })
                        break
                    default:
                        if (message) {
                            Toast.fail({ message: message ?? '服務器錯誤' })
                        }
                        return Promise.reject(error)
                }
            }
        )
    }
}
