import React from 'react'
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
              <div className="col-6 d-flex gap-12">
                  <img src={logo} alt="" className='img-logo'/>
                  <div className='d-flex flex-column justify-content-center'>
                    <p className="text-white mb-0 fs-6 fw-bold">
                    TRƯỜNG ĐẠI HỌC XÂY DỰNG
                    </p>
                    <p className='text-white mb-0'>National University of Civil Engineering</p>
                  </div>
              </div>
              <div className="col-6 d-flex flex-column align-items-end justify-content-end">
                  <p className="text-white mb-0 fw-bold text-uppercase">
                    Hệ thống đăng ký học phụ đạo 
                  </p>
                  <p className='text-white mb-0'>
                    Dành cho sinh viên nước ngoài
                  </p>
              </div>
           </div>
          </div>
        </header> 
    </>
  )
}

export default Header