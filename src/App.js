import React from "react";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Layout from "./Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Layout />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
