import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import store from '../../store/index'
import logoImg from '../../assets/topNav/logo.jpg'
import { Image } from "antd";

function TopNav(props: any) {
  const [storeState, setStoreState] = useState({ router: [] })
  useEffect(() => {
    init()
  })

  function init() {
    setStoreState(store.getState())
  }

  return (
    <div className={`topNav`}>
      <div className={`topNav-logo`}>
        <Image width={ 60 } height={ 60 } src={ logoImg } />
      </div>
      <div className={`topNav-title`}>Title</div>
      <div className={`topNav-router`}>
        {
          storeState.router.map(item => {
            return (
              <Link key={item['path']} to={item['path']}>
                <div className={`topNav-router-item`}>
                  <div className={`${item['imgBg']}`}></div>
                  <div className={`topNav-router-name`}>{item['name']}</div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default TopNav