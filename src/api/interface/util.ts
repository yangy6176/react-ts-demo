/**
 * @todo 通用类接口合集
 */
import server from '../../util/httpRequest' // 加载http拦截
import qs from 'qs' // 引入中间件
const baseUrl = '/api' // 配置默认请求地址
// 获取字典数据
export function getDictionaries(data: Object) {
  return server({
    url: `${baseUrl}/dictionary/getDictionary`,
    method: 'post',
    data: qs.stringify(data)
  })
}