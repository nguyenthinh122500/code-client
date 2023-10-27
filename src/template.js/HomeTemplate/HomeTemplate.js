import { Fragment } from "react";
import { Route, NavLink } from "react-router-dom";

export const HomeTemplate = (props) => {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <div className="page_bg">
            <h1>Xin chào</h1>
            <Component {...propsRoute} />
          </div>
        );
      }}
    />
  );
};
