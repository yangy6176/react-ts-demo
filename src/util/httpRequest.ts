/**
 * @todo 封装http请求
 * @author 江南小魏晨
 */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios' // 引入axios
/*
  配置默认请求头
 */
axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
}
axios.defaults.timeout = 30000 // 配置默认请求时间
const httpRequest =axios.create({
  timeout: 1000 * 30, // 配置请求时间
  withCredentials: true // 是否允许跨域
})
// request拦截
httpRequest.interceptors.request.use(
  (config: AxiosRequestConfig ) => {
    console.log(config, 'requestConfig')
    return config
  }
)
// response拦截
httpRequest.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    const res = response.data
    if (!response.status || response.status !== 200) {
      return Promise.reject(res || 'error')
    } else {
      /*
        请求参数只保留data中内容
       */
      return Promise.resolve(res)
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default httpRequest