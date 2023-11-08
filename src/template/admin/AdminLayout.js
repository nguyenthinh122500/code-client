import { Route } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
            <h1>Admin page</h1>
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
