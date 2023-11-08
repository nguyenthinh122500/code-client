import { Route } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const StudentLayout = (props) => {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <>
            <Header/>
            <div className="page_bg">
              <h1>student page</h1>
              <Component {...propsRoute} />
            </div>
            <Footer/>
          </>
        );
      }}
    />
  );
};
