export interface RouterConfigType {
    routers: routerConfigItems[]
}
export interface routerConfigItems {
    path: string,
    component: Function,
    children?: routerConfigItems,
    to?: string
}