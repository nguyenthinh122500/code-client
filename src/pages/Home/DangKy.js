import React, { useState } from 'react'
import { Table,Button } from "antd";
import { HuyDangKyMonHocAction } from '../../redux/action/StudentAction';
import { useDispatch } from "react-redux";

export default function DangKy(props) {
  
    const dispatch = useDispatch();
    const {arrSinhVienDangKy} = props;
    console.log( "day la data",arrSinhVienDangKy);
    const columns = [
        {
          title: "Mã MH",
          dataIndex: "maHocPhan",
        },
        {
          title: "Tên môn học",
          dataIndex: "tenMonHoc",
        },
        {
          title: "Lớp MH",
          dataIndex: "lopMonHoc",
        },
        {
          title: "STC",
          dataIndex: "soTinChi",
        },
        {
          title: "ST PĐ",
          dataIndex: "soTietPhuDao",
        },
        {
          title: "Ngày thi",
          dataIndex: "ngayThi",
        },
        {
          title: "GV phụ đạo",
          dataIndex: "",
        },
        {
          title: "SĐT GV",
          dataIndex: "",
        },
        {
          title: "Email GV",
          dataIndex: "",
        },
      ];
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    setSelectedRowKeys(selectedRowKeys);
    setSelectedRows(selectedRows);
    console.log(selectedRows);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: handleRowSelectChange,
  };
  const handleDeleteClick = () =>{
    for(const selectedRow of selectedRows){
      const maSV = selectedRow.maSV;
      const maMH = selectedRow.maMonHoc;
      
      const action = HuyDangKyMonHocAction(maSV,maMH);
      dispatch(action);
    }
  }
  return (

    <div style={{ margin: "0 40px" }}>
    <div style={{ marginBottom: 16 }}>
      <div
        style={{
          textAlign: "center",
          padding: "30px 0",
          fontSize: "30px",
          fontWeight: 600,
        }}
      >
        Danh sách môn học Đợt đăng ký môn học phụ đạo block 2 học kỳ I năm học 2019 
      </div>
      <hr />
    </div>
    <div style={{ textAlign: "right", marginBottom: "40px" }}>
    <Button type="primary" shape="round" danger onClick={handleDeleteClick}>
        Xóa đăng ký
    </Button>
    </div>
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={arrSinhVienDangKy}
      rowKey="maMonHoc"
    />
  </div>
    
  )
}
