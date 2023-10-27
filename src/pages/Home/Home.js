import React, { useEffect } from "react";
import { GetListBusinessAction } from "../../redux/action/HomeAction";
import { useDispatch, useSelector } from "react-redux";
export default function Home() {
  const dispatch = useDispatch();
  const {arrBusiness} = useSelector(root =>root.HomeReducer);
  console.log(arrBusiness)
  useEffect(() => {
    const action = GetListBusinessAction();
    dispatch(action);
  }, []);
  return <div>
    Xin chào
  </div>;
}
