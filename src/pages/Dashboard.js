import React from 'react';
import {BsArrowDownRight,BsArrowUpRight} from 'react-icons/bs'
import { Column } from '@ant-design/plots';
import { Button, Table } from 'antd';
const columns = [
  {
    title: 'SNo',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}
const Dashboard = () => {
  const data = [
    {
      type: 'Jan',
      sales: 38,
    },
    {
      type: 'Feb',
      sales: 52,
    },
    {
      type: 'Mar',
      sales: 61,
    },
    {
      type: 'Apr',
      sales: 145,
    },
    {
      type: 'June',
      sales: 48,
    },
    {
      type: 'July',
      sales: 38,
    },
    {
      type: 'AUg',
      sales: 38,
    },
    {
      type: 'Sep',
      sales: 38,
    },
    {
      type: 'Oct',
      sales: 38,
    },
    {
      type: 'Nov',
      sales: 38,
    },
    {
      type: 'Dec',
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color: ({ type }) => {

      return "#212529";
    },
    label: {
      
      position: 'middle',
    
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Month',
      },
      sales: {
        alias: 'Income',
      },
    },
  };
  return (
    <div>
      <h3 className='mb-4 text-end'>Dashboard</h3>
      <div className='row'>
        <div className='col-md-4'>
          <div className='bg-white p-3 rounded-3 mb-3 align-items-end'>
            <div>
              <p>TOTAL</p>
              <h4 className='mb-0'>$11100</h4>
            </div>
            <div className="d-flex flex-column align-items-end">
              <h6 className="text-end green"><BsArrowDownRight /> 32%</h6>
              <p className="text-end">Total to April 2022</p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='bg-white p-3 rounded-3 mb-3'>
            <div>
              <p>TOTAL</p>
              <h4 className='mb-0'>$11100</h4>
            </div>
            <div className="d-flex flex-column align-items-end">
              <h6 className="text-end green"> <BsArrowDownRight /> 32%</h6>
              <p className="text-end">Total to April 2022</p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='bg-white p-3 rounded-3'>
            <div>
              <p>TOTAL</p>
              <h4 className='mb-0'>$11100</h4>
            </div>
            <div className="d-flex flex-column align-items-end">
              <h6 className="text-end green"><BsArrowDownRight/> 32% </h6>
              <p className="text-end">Total to April 2022</p>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-4'>
        <h3 className="mb-4"> Income Statics</h3>
        <div>
        <Column {...config} />
        </div>
      </div>
      <div className="mt-4">
       <h3 className='mb-4'>Recent orders</h3> 
       <div><Table columns={columns} dataSource={data1} /></div>
      </div>
    </div>
  );
};

export default Dashboard;