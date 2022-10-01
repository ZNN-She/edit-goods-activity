//编辑 
import React, { ReactElement } from 'react';
import {Input, Form, Button} from 'antd-mobile'
import './index.less';

const FormItem = Form.Item;

interface EditProps {
  data: {
    name: string
    label: string
    value: string
    [key: string]: any
  }[]
  onFinish: (valus: {
    name: string
    label: string
    value: string
    [key: string]: any
  }[]) => void
}

export default function Edit({data = [], onFinish}: EditProps) {

  const onFinishClick = (values: any) => {
    console.log(values)
    const newData = data.map(item => {
      item.value = values[item.name];
      return item;
    })
    onFinish(newData)
  }

  return (
    <div className='edit-container'>
      <Form 
      onFinish={onFinishClick}
      layout='horizontal'
      footer={
          <>
            <Button type='submit' color='primary' size='mini'>
            预览
          </Button>
          &nbsp;
          <Button type='submit' color='primary' size='mini'>
            添加商品
          </Button>
          </>
        }> 
        {
          data.map(item => (
            <FormItem name={item.name} label={item.label}>
              <Input style={{ '--text-align': 'right' }} placeholder='请输入价格' defaultValue={item.value}></Input>
            </FormItem>
          ))
        }
      </Form>
    </div>
  )
}