import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined
} from "@ant-design/icons";
// import { LoadingOutlined } from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";

export default Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Crypto World</Link>
        </Typography.Title>
        {/* <Button class="menu-control-container"></Button> */}
      </div>
    </div>
  );
};
