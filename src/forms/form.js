import React, { useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import "./form.css";
import {
  Button,
  Form,
  Input,
  Select,
} from 'antd';

import Layout from '../layout/Parking'


// const disabledDate = (current) => {
//   return current && current < dayjs().startOf('day');;
// };
// const todayDate = (date) => {
//   date= dayjs().startOf('day');
//     return date;
// };

const handler = (e)=>{
  console.log(e.target.value)
}



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

const ParkingForm = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    axios.post('http://localhost:8080/addUser',values)
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


   const [isActive, setActive] = useState("false");
    // const ToggleClass = () => {
    // setActive(!isActive); 
    // };

  const ontick =(e) => {
    // setActive(current => !current);
    e.currentTarget.classList.toggle('hidden');
    document.querySelector(".layoutSelection").classList.toggle('hidden');
    setActive(!isActive);
  };



    
  return (

    <>
    
    <div className="row mb-5 mt-5 d-flex justify-content-center bg-white p-5">

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

      <label className="col-2"> Select Travel Date: </label>
      {/* <span className='dateSpan'> */}
       <input
        className="datelabel"
        type="date"
        id="dt"
        onChange={handler}
        min={new dayjs().startOf("day").format("YYYY-MM-DD")}
        defaultValue={new dayjs().startOf("day").format("YYYY-MM-DD")}
      /> 
      {/* </span> */}


       {/* <Form.Item name="dateOfParking"  >
        <DatePicker  
        format="YYYY-MM-DD"
        disabledDate={disabledDate}
        // defaultValue={new }
      
        />
      </Form.Item> */}


      <section className='layoutSelection'>
     <Form.Item  name="slot1"
        label="." >
        <Layout />
      </Form.Item >
      </section>

      <button type="button" value="Next" className="btn btn-dark"  onClick={ontick}> Submit </button>

      <section className={isActive ? "hidden" : null}>
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
        <Button type="primary" htmlType="submit" >
          Reserve
        </Button>
      </Form.Item>
      </section>
    </Form>
  </div>
  </>
  );
};
export default ParkingForm;