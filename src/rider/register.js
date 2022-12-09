import React from 'react';
import axios from 'axios';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import {
  Button,
  Form,
  Input,
  Select,
} from 'antd';


const disabledDate = (current) => {
  return current && current < dayjs().startOf('day');;
};

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span:8,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Register = () => {

  const [form] = Form.useForm();
  const onFinish = (values) => {
    axios.post('http://192.168.1.29:9000/addUser',values)
    .then(function (response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error)
    });
    
    console.log('Received values of form: ', values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
      </Select>
    </Form.Item>
  );
    
  return (
    <Form
      {...formItemLayout}
      labelAlign="left"
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: '91',
      }}
      scrollToFirstError
    >


      <Form.Item 
       text-color="red"
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          }
        ]}
         >
        <Input />
      </Form.Item>

      <Form.Item
        name="pincode"
        label="Pin code"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="vehicleNo"
        label="Vehicle No"
        tooltip="What is your License plate number?"
        rules={[
          {
            required: true,
            message: 'Please input your Vehicle No!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        name="phoneNo"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            required:true,
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item name="dateOfTravelling" label="Travel Date" >
        <DatePicker  
        format="YYYY-MM-DD"
        disabledDate={disabledDate}
        />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Register;
