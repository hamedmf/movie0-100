import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
const { Header, Content, Footer } = Layout;

export default function Navbar() {
  return (
    <>
      <Layout className="layout" theme="light">
        <Header>
          <div className="logo" />
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key={"Home"}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key={"About"}>
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key={"Countact-us"}>
              <Link to="/contact">Countact-us</Link>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
      <Searchbar />
    </>
  );
}
