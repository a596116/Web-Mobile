export const userStores = defineStore({
    id: 'user',
    state: () => ({
        user: undefined as UserModel | undefined,
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