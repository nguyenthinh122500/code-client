import { Route } from "react-router-dom";

export const HomeTemplate = (props) => {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <div className="page_bg">
            <h1>student page</h1>
            <Component {...propsRoute} />
          </div>
        );
      }}
    />
  );
};
