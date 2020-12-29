/**
 * @todo 路由配置页面
 * @author 江南小魏晨
 */
import React from 'react'
import { HashRouter } from 'react-router-dom'
import routerConfig from './routerConfig'
import RouterView from './routerView'
// import store from '../store/index'
const ReactRouter: React.FC = () => {
  return (
    <HashRouter>
      <RouterView routers={routerConfig.routers}></RouterView>
    </HashRouter>
  )
}
export default ReactRouter