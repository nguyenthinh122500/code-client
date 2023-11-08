import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";
import {
  GetListMonHocAction,
  GetListSinhVienDangKyAction,
  DangKyMonHocAction,
} from "../../redux/action/StudentAction";
import { useDispatch, useSelector } from "react-redux";
import DangKy from "./DangKy";

const MainStudent = () => {
  const dispatch = useDispatch();
  const { arrMonHoc, arrSinhVienDangKy } = useSelector(
    (root) => root.StudentReducer
  );

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
      dataIndex: "lopDuKien",
    },
    {
      title: "STC",
      dataIndex: "soTinChi",
    },
    {
      title: "ST PĐ",
      dataIndex: "",
    },
    {
      title: "Ngày thi",
      dataIndex: "ngayThi",
    },
  ];

  useEffect(() => {
    const action = GetListMonHocAction(85564);
    dispatch(action);
    const action1 = GetListSinhVienDangKyAction(85564);
    dispatch(action1);
  }, [dispatch]);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    setSelectedRowKeys(selectedRowKeys);
    setSelectedRows(selectedRows);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: handleRowSelectChange,
  };
  const handleSaveClick = () => {
    for(let selectedRow of selectedRows){
      const maHP = selectedRow.maHocPhan;
      const maMH = selectedRow.maMonHoc;
      const soTC = selectedRow.soTinChi;
      const lopMH = selectedRow.lopDuKien;

      const data = [{
        maSV: "85564",
        maHocPhan: maHP,
        maMonHoc: maMH,
        lopMonHoc: lopMH,
        soTinChi: soTC,
      }];
      const action = DangKyMonHocAction(data);
      dispatch(action);
      }
  };

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
          Danh sách môn học đã đăng ký trong kỳ 2 năm học 2019 - 2020
        </div>
        <hr />
      </div>

      <div style={{ textAlign: "right", marginBottom: "40px" }}>
        <Button type="primary" shape="round" onClick={handleSaveClick}>
          Lưu đăng ký
        </Button>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={arrMonHoc}
        rowKey="maMonHoc"
      />
      <DangKy arrSinhVienDangKy={arrSinhVienDangKy} />
    </div>
  );
};

export default MainStudent;
