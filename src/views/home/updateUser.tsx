import React from 'react'
import { Button, DatePicker, Form, Input } from 'antd'
import axios from '../../util/httpRequest'

function UpdateUser(props: any) {
  const formLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 }
  }
  const defaultUser = {

  }
  const submitForm = (value: any) => {
    axios({
      method: 'post',
      url: '/user/insertUser',
      headers: {
        'Content-Type': 'application/json'
      },
      data: value
    }).then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }
  return(
    <div className={`update-user`}>
      <div className={`update-user-container`}>
        <Form {...formLayout} initialValues={ defaultUser } size={`small`} onFinish={ submitForm }>
          <Form.Item label={`昵称`} name={`nickname`} rules={[{required: true, message: '请输入昵称'}]}>
            <Input />
          </Form.Item>
          <Form.Item label={`真实姓名`} name={`realname`}>
            <Input />
          </Form.Item>
          <Form.Item label={`电子邮箱`} name={`email`}>
            <Input />
          </Form.Item>
          <Form.Item label={`电话`} name={`phone`}>
            <Input />
          </Form.Item>
          <Form.Item label={`身份证号码`} name={`idcard`}>
            <Input />
          </Form.Item>
          <Form.Item label={`出生日期`} name={`birthday`}>
            <DatePicker style={{width: '100%'}} placeholder={`请选择出生日期`} />
          </Form.Item>
          <Form.Item>
            <Button htmlType={`submit`} type={`primary`} size={`small`}>提交</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
export default UpdateUser