/**
 * @todo 路由配置明细
 * @author 江南小魏晨
 */
import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { RouterConfigType } from '../interface/router'
import store from '../store/index'

const RouterView: React.FC<RouterConfigType> = (props) => {
  let arr = props.routers
  return (
    <Switch>
      {
        arr.map(element => {
          return (
            <Route path={element.path}
                   render={
                     (prop) => {
                       console.log(23,prop)
                       return <element.component routers={element.children} {...prop} key={element.path}></element.component>
                     }
                   } key={element.path}>
            </Route>
          )
        })
      }
    </Switch>
  )
}
export default RouterView