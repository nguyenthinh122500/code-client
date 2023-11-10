import React from 'react'
import { Menu } from 'antd';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import history from "../../history.js";
export default function Admin() {
  const items = [
    {
      label: 'Tổ chức phụ đạo',
      key: 'tcpd',
      children: [
        {
          label: 'QL Đợt phụ đạo',
          key: '/dotphudao',
        },
        {
          label: 'Thanh toán tiền phụ đạo',
          key: '/thanhtoan',
        },
        {
          label: 'Thống kê',
          key: '/thongke',
        },
      ],
    },
    {
      label: 'Phân công GV phụ đạo',
      key: 'gv',
      children: [
        {
          label: 'Mô hình theo lớp',
          key: '/mohinhtheolop',
        },
        {
          label: 'Mô hình theo nhóm lớp',
          key: 'mohinhtheonhomlop',
        },
      ],
    },
    {
      label: 'Bộ môn - Môn học',
      key: 'ql',
      children: [
        {
          label: 'Quản lý Bộ môn',
          key: '/quanlybomon',
        },
        {
          label: 'Quản lý Môn học',
          key: '/quanlymonhoc',
        },
      ],
    },
    {
      label: 'Hệ thống',
      key: 'ht',
      children: [
        {
          label: 'Cài đặt hệ thống',
          key: 'caidathethong',
        },
        {
          label: 'QL người dùng',
          key: '/quanlynguoidung',
        },
        {
          label: 'Backup dữ liệu',
          key: '/backupdulieu',
        },
      ],
    }
  ];
  const [current, setCurrent] = useState('');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    history.push(e.key)
  };
  return (
    <div>
      <Header/>
      <div className="header-top-strip">
          <Menu className="container-xxl header-top-strip text-white fw-bold" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </div>
        <Content className="page_bg"/>
        <Footer/>
    </div>
  )
}

function Content(){
}