/**
 * @todo 登录模块接口
 * @author 江南小魏晨
 */
import server from '../../util/httpRequest' // 加载http拦截
import qs from 'qs' // 加载中间件
const baseUrl = '/api' // 配置默认请求地址
/*
  登录
 */
export function login(data: Object) {
  return server({
    url: `${baseUrl}/user/loginUser`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  })
}
/*
  根据id获取用户全部信息
 */
export function getUser(data: Object) {
  return server({
    url: `${baseUrl}/user/getUser`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  })
}