import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
// const { Content} = Layout;
export const AdminLayout = (props) => {
  const { Component, ...restProps } = props;
  return (
      <>
        <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <>
          <Header/>
          <div className="page_bg">
            <Navbar />
            <Component {...propsRoute} />
          </div>
          <Footer/>
          </>
        );
      }}
    />
      </>
    );
};