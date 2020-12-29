/**
 * @todo 主页
 * @author 江南小魏晨
 */
import React, { useEffect, useState } from 'react' // 引入react
import { Link } from 'react-router-dom' // 引入react路由
import store from '../../store' // 引入redux
import * as request from '../../api/interface/login' // 引入接口文档
import * as utilRequest from '../../api/interface/util' // 引入接口文档
import logoImage from '../../assets/topNav/logo.jpg' // 引入图片
import { Image, Layout, Menu, message } from 'antd' // antDesign模块
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons' // 图标
import RouterView from '../../router/routerView' // 引入自定义路由
const { Sider, Content, Header } = Layout

function HomeIndex(props: any) {
  const [user, setUser] = useState({
    username: '',
    password: '',
    nickname: '',
    birthday: '',
    city: '',

  })
  useEffect(() => {
    getUser()
    getDictionaries()
  }, [])
  // 获取用户信息
  function getUser() {
    let data = {
      userId: store.getState().userId
    }
    request.getUser(data).then((res: any) => {
      if (res.success) {
        setUser(res.data)
      } else {
        message.error(res.message)
      }
    })
  }
  function clickMenu(item: any) {
    props.history.push(item.key)
  }
  // 调取全部字典数据
  function getDictionaries() {
    let data = {
      dictionaryArray: 'dictionary_sex,dictionary_jurisdiction'
    }
    utilRequest.getDictionaries(data).then((res: any) => {
      console.log(res.data)
    })
  }
  return (
    <div className={`home`}>
      <div className={`home-nav`}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[props.routers[0].path]}>
          {
            props.routers.map((item: any) => {
              return (
                <Menu.Item key={item.path} icon={<UserOutlined />} onClick={item => { clickMenu(item) }}>
                  {item.name}
                </Menu.Item>
              )
            })
          }
        </Menu>
        <Link to={`/home`}>hpme</Link>
      </div>
        <RouterView routers={props.routers} />
    </div>
  )
}

export default HomeIndex