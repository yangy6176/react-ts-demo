/**
 * @todo 路由配置信息
 * @author 江南小魏晨
 */
// 一级页面
import LoginIndex from '../views/login' // 登录页
import HomeIndex from '../views/home' // 首页

// 二级页
import HomeView from '../views/home/home' // 首页 -> 主页
import AbilityView from '../views/home/ability' // 首页 -> 业务能力
import WorksView from '../views/home/works' // 首页 -> 作品集
import UpdateUser from '../views/home/updateUser' // 首页 -> 用户信息修改
import { RouterConfigType } from '../interface/router'
const config = {
  routers: [
    {
      path: '/login',
      component: LoginIndex
    },
    {
      path: '/',
      component: HomeIndex,
      children: [
        {
          path: '/home',
          component: HomeView
        },
        {
          path: '/ability',
          component: AbilityView
        },
        {
          path: '/works',
          component: WorksView
        }
      ]
    },
    {
      path: '/updateUser',
      component: UpdateUser
    }
  ]
}
export default config as RouterConfigType