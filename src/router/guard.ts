import useAuth from '@/composables/useAuth'
import { CacheEnum } from '@/enum/cacheEnum'
import { store } from '@/utils'
import { RouteName } from '@/enum/RouteName'
import { Toast } from 'vant'
import type { RouteLocationNormalized, Router } from 'vue-router'
import { userStores } from '@/store/useUserStore'

class Guard {
  constructor(private router: Router) { }
  public run() {
    this.router.beforeEach(this.beforeEach.bind(this))
  }

  private async beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    if (to.meta?.auth && !this.token()) {
      store.set(CacheEnum.REDIRECT_ROUTE_NAME, to.name)
      return { name: 'login' }
    }
    if (to.meta.guest && this.token()) return from

  }

  private token(): string | null {
    return store.get(CacheEnum.TOKEN_NAME)
  }
}


let isInit = false
export default (router: Router) => {
  router.beforeEach(beforeEach)
}

//路由守卫
async function beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
  await init()
  const { isLogin } = useAuth()

  if (to.meta.auth && !isLogin()) {
    store.set(CacheEnum.REDIRECT_ROUTE_NAME, to.fullPath)
    Toast.success('請登入後操作')
    return { name: RouteName.LOGIN }
  }

  if (to.meta.guest && isLogin()) return '/'

  if (to.meta.title) useTitle(to.meta.title as string)
}

//初始应用
async function init() {
  if (isInit === true) return
  isInit = true
  const userStore = userStores()
  await Promise.all([userStore.getCurrentUser()])
}