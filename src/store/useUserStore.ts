export const userStores = defineStore({
    id: 'user',
    state: () => ({
        user: {
            id: '1',
            name: '浩呆',
            phone: '091111111',
            password: '123456',
            permissions: [],
            active: '1'
        } as UserModel | undefined,
    }),
    actions: {
        setUser(data: UserModel) {
            this.user = data
        },
        async getCurrentUser() {
            // const { data } = await http.request<ApiData<UserModel>>({
            //     url: 'user/info',
            // })
            // this.user = data
        },
    },
}
)