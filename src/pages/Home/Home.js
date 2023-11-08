import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MainStudent from "./MainStudent";
const Home = () => {
  const { arrUser } = useSelector((root) => root.HomeReducer);
  console.log(arrUser);
  return (
    <>
      <Header/>
      <MainStudent />
      <Footer/>
    </>
  )
}
export default Home