/**
 * @todo 登录页内容
 * @author 江南小魏晨
 */
import React from 'react'
import * as request from '../../api/interface/login'
import { Button, Form, Input, message } from 'antd'
import store from '../../store/index'

function LoginIndex(props: any) {
  // 表单布局样式
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 }
  }
  // 登录按钮布局样式
  const itemLayout = {
    wrapperCol: { offset: 4, span: 20 }
  }
  // 表单成功提交回调
  const loginFinish = (value: any) => {
    // axios({
    //   method: 'post',
    //   url: '/user/loginUser',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   data: value
    // }).then((res: any) => {
    //   if (res.data.success) {
    //     getUserIdToRedux(res.data.data)
    //     message.success(res.data.message)
    //     props.history.push('/')
    //   } else {
    //     message.error(res.data.message)
    //   }
    // }).catch(err => {
    //   message.error(err.message)
    // })

    request.login(value).then((res: any) => {
      if (res.success) {
        getUserIdToRedux(res.data)
        message.success(res.message)
        props.history.push('/')
      } else {
        message.error(res.message)
      }
    })
  }
  // 获取登录参数，放入redux里
  function getUserIdToRedux(item: string) {
    const action = {
      type: 'LoginSuccess',
      value: item
    }
    store.dispatch(action)
  }
  // 表单提交失败回调
  const loginFinishFailed = (errorInfo: any) => {
    console.log(errorInfo, 'filed')
  }
  return (
    <div className={`login`}>
      <div className={`login-container`}>
        <Form {...layout} name={`login`} initialValues={{ username: '', password: '' }} onFinish={ loginFinish } onFinishFailed={ loginFinishFailed }>
          <Form.Item label={`用户名`} name={`username`} rules={[{ required: true, message: '请输入用户名' }]}>
            <Input />
          </Form.Item>
          <Form.Item label={`密码`} name={`password`} rules={[{ required: true, message: '请输入密码' }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item {...itemLayout}>
            <Button type={`primary`} htmlType={`submit`} className={`login-button`}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default LoginIndex