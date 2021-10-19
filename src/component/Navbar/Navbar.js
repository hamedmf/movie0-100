import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
const { Header, Content, Footer } = Layout;

export default function Navbar() {
  return (
    <>
      <Layout className="layout">
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
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item key={"home"}>Home</Breadcrumb.Item>
            <Breadcrumb.Item key={"List"}>List</Breadcrumb.Item>
            <Breadcrumb.Item key={"App"}>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
      <Searchbar />
    </>
  );
}
