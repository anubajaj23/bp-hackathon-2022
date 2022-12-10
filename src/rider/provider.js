import React, { useState } from "react";
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

const Provider = () => {
  const [data, setData] = useState([]);
  const [isShown, setIsShown] = useState(false);


  const [form] = Form.useForm();
  const onFinish = (values) => {
    axios.post('https://reqres.in/api/posts',values)
    .then(function (response) {
      console.log(response);
      setData(response.data)
      setIsShown(true);
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

    <>
    
    <div className="row mt-5 ">
       
    </div>
    <div className="row mt-5 d-flex justify-content-center">
      {!isShown && 
    <Form
      {...formItemLayout}
      labelAlign="left"
      form={form}
      className=" col col-8"
      name="provider"
      id="provider"
      onFinish={onFinish}
      initialValues={{
        prefix: '91',
      }}
      scrollToFirstError
    >
       <h2 className="col col-8">Please fill following provider details</h2>
      <Form.Item 
       text-color="red"
        name="name"
        className="p3"
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
        className="p3"
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
        className="p3"
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
        <Button type="primary" htmlType="submit" className="btn btn-dark">
        Find a travel mate
        </Button>
      </Form.Item>
    </Form>
}
    </div>
    

    <div>
        {isShown && <div className="row mt-5 d-flex justify-content-center">  <h3>Booking Details</h3><table cellPadding="0" cellSpacing="0" className="table table-bordered" border="1px">
       
          
        <thead className="thead-dark">
       
        <tr border="1px">
                      <td><b>Pincode</b> </td>  <td>121005 </td>
          </tr>
          <tr>
                      <td><b>Travel Date</b></td> 
                      <td>10/12/2022</td>
                  </tr>
                  <tr>
                      <td><b>Vehicle Number</b></td> 
                      <td>HR-12354</td>
                  </tr>
          </thead>
          </table>
          <h3 className="mt-5">Other Details</h3>

          <table cellPadding="0" cellSpacing="0" className="table">

          <thead>
              <tr>
                  <th>Type</th>
                  <th>Name</th>
                  <th>Phone</th>
              </tr>
          </thead>

          <tbody>
                  <tr>
                      <td>Provider</td>
                      <td>Anand Sharma</td>
                      <td>9999255457</td>
                  </tr>

                  <tr>
                      <td>Rider</td>
                      <td>Anu Bajaj</td>
                      <td>9999999999</td>
                  </tr>

                  <tr>
                      <td>Rider</td>
                      <td>Mayank</td>
                      <td>9875657444</td>
                  </tr>
              
          </tbody>
      </table><button className=" col-3 mt-5 btn btn-success"> Connect via Whatsapp </button></div>
      
      }
      </div>

    </>
  );
};
export default Provider;
