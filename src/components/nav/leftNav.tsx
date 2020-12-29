import React, { useEffect, useState } from 'react'
import store from '../../store'
import HeaderImg from '../../assets/topNav/logo.jpg'
import { Image, Menu } from "antd";
import { UploadOutlined, UserOutlined, VideoCameraOutlined, PieChartOutlined  } from '@ant-design/icons'
import { Scrollbars } from 'react-custom-scrollbars'
import MenuItem from "antd/es/menu/MenuItem";
import { NavLink } from "react-router-dom";

function LeftNav() {
  const TotalHeight = document.body.clientHeight
  const iconArrays = [UploadOutlined, UserOutlined, VideoCameraOutlined, PieChartOutlined]
  const userName = '江南小魏晨'
  const [storeState, setStoreState] = useState([])
  useEffect(() => {
    getRoute()
  })
  function getRoute() {
    let storeRouter = store.getState()
    setStoreState(storeRouter.router)
  }
  return (
    <div className={`left-nav`} style={ { height: TotalHeight + 'px' } }>
      <div className={`lef-nav-header`}>
        <Image width={ 120 } height={ 120 } src={ HeaderImg } />
      </div>
      <div className={`left-nav-name`}>
        <div>{ userName }</div>
      </div>
      <div className={`left-nav-menu`}>
        <Scrollbars>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['/']}>
          {
            storeState.map((item: any, index: number) => {
              let MenuIcon = iconArrays[index]
              return (
                <Menu.Item icon={<MenuIcon />} key={ item.path }>
                  <NavLink to={ item.path } activeClassName={`nav-isActive`}>{ item.name }</NavLink>
                </Menu.Item>
              )
            })
          }
        </Menu>
        </Scrollbars>
      </div>
    </div>
  )
}
export default LeftNav