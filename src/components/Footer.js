import React from 'react'
const Footer = () => {
  return (
    <>
     <footer className="py-4">
          <div className="container-xxl">
              <div className="ro">
                  <p className="text-center mb-0 text-white">
                  Copyright &copy; 
                  {new Date().getFullYear()}; Powered by Bui Viet Hoang
                  </p>
              </div>
          </div>
      </footer>
    </>
  )
}

export default Footer