import { userStores } from '@/store/useUserStore'
export default () => {

    //登入檢查
    function isLogin(): boolean {
        return !!userStores().user
    }


    return { isLogin }
}
