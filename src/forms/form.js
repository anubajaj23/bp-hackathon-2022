import React, { useState } from 'react';
import axios from 'axios';
import { DatePicker, Space } from 'antd';
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
const todayDate = (date) => {
  date= dayjs().startOf('day');
    return date;
};

// const Calendar = () =>(

//   <Space direction="vertical" size={12}>
//     <DatePicker
//       format="YYYY-MM-DD"
//       disabledDate={disabledDate} 
//       defaultValue ={dayjs}
//     /> 
//   </Space>
// );


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

const App = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {

  //   const ok = {...values,'dateOfParking': values['dateOfParking'].format('YYYY-MM-DD')
  // }

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
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
         >
        <Input />
      </Form.Item>

      {/* <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password  size="large" />
      </Form.Item> */}

      <Form.Item
        name="name"
        label="Name"
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

      {/* <Form.Item
        name="employeeid"
        label="Employee ID"
        tooltip="What is your employee id?"
        rules={[
          {
            required: true,
            message: 'Please input your employee id!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item> */}


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

{/* 
      <Form.Item
        name="company"
        label="Company"
      >
        <Input />
      </Form.Item> */}


<Form.Item
        name="slot"
        label="Slot"
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



      <Form.Item name="dateOfParking" label="Date" >
        <DatePicker  
        format="YYYY-MM-DD"
        disabledDate={disabledDate}
        
      
        />
      </Form.Item>


      <Form.Item
        name="address"
        label="Address"
        rules={[
          {
            required: true,
            message: 'Please input your address',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>


      

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;









