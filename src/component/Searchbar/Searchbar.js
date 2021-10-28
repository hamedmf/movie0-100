import React from "react";
import { Input, Space } from "antd";
import container from "./Searchbar.module.scss";

const { Search } = Input;
export default function Searchbar() {
  return (
    <div className={container.search}>
      <Space direction="vertical" className={container.searchitem}>
        <Search
          className={container.searchelement}
          style={{ height: "200" }}
          placeholder="input search text"
          enterButton
        />
      </Space>
    </div>
  );
}
