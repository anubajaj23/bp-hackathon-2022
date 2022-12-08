import React from 'react';
// import './index.css';
import {
  Button,
  Form,
  Input,
  Select,
} from 'antd';
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
      span: 15,
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
  const afterSubmit =(e) =>{
    e.preventDefault();
    console.log("lol");
  }
  const onFinish = (values) => {
    // e.preventDefault();
    // console.log("lol");
    
    console.log('Received values of form: ', values);
    // if (form){
    //   form.addEventListener("submit", (e) => {
    //   e.preventDefault();

    // }

    // axios.post('https://7617-124-247-201-168.eu.ngrok.io/users',values)
    // .then(function (response) {
    //   console.log(response);
    // })

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
      form={form}
      name="register"
      onFinish={onFinish}
      onSubmit={afterSubmit}
      initialValues={{
        prefix: '91',
      }}
      scrollToFirstError
    >
      <Form.Item
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

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

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

      <Form.Item
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
      </Form.Item>


      <Form.Item
        name="vehicleno"
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
        name="company"
        label="Company"
      >
        <Input />
      </Form.Item>
    


      <Form.Item
        name="phone"
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

      <Form.Item {...tailFormItemLayout} >
        <Button type="primary" htmlType="submit" >
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;