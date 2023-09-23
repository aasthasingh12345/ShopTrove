import React from "react";
import Layout from "./../components/Layout/Layout";
import { useContext } from "react";
import {AuthContext} from "../context/auth";
const HomePage = () => {
  const {auth,setAuth}=useContext(AuthContext)
  return (
    <Layout title={"Best Offers"}>
      <h1>HomePage</h1>
      <pre>{JSON.stringify(auth,null,4)}</pre>
      
    </Layout>
  );
};

export default HomePage;
