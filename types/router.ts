import 'vue-router'
declare module 'vue-router' {
    interface RouteMeta {
        auth?: boolean
        guest?: boolean

        permission?: string
        number?: number
    }
}
