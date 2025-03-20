import React from "react";
import { Menu, Button, Flex } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  SettingOutlined,
  HomeOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  TeamOutlined,
  GiftOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import styles from "../../assets/css/friend/FriendsSidebar.module.css";

const FriendsSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname.split("/").pop(); // lấy phần cuối cùng của path

  return (
    <div className={styles.container}>
      <div className={styles.friends_header}>
        <h3>Bạn bè</h3>
        <div className={styles.setting_btn}>
          <SettingOutlined />
        </div>
      </div>

      <Menu
        mode="inline"
        selectedKeys={[currentPath === "friends" ? "home" : currentPath]}
        className={styles.friends_menu}>

        <Menu.Item
          key="home"
          icon={<HomeOutlined style={{ color: "rgb(152, 151, 151)" ,fontSize: 18 }}/>}
          style={{
            display: "flex",
            justifyContent: "flex-start",
          }}>
          <Link className={styles.text} to="">
            <span>Trang chủ</span>
          </Link>
        </Menu.Item>

        <Menu.Item
          key="requests"
          icon={<UserAddOutlined style={{ color: "rgb(152, 151, 151)",fontSize: 18  }} />}>
          <Link className={styles.text} to="requests">
            <span>Lời mời kết bạn</span>
          </Link>
        </Menu.Item>

        <Menu.Item
          key="suggestions"
          icon={<UsergroupAddOutlined style={{ color: "rgb(152, 151, 151)",fontSize: 18  }} />}>
          <Link className={styles.text} to="suggestions">
            <span>Gợi ý</span>
          </Link>
        </Menu.Item>

        <Menu.Item
          key="all-friends"
          icon={<TeamOutlined style={{ color: "rgb(152, 151, 151)",fontSize: 18  }}/>}>
          <Link className={styles.text} to="all-friends">
            <span>Tất cả bạn bè</span>
          </Link>
        </Menu.Item>

        <Menu.Item
          key="birthdays"
          icon={<GiftOutlined style={{ color: "rgb(152, 151, 151)",fontSize: 18  }}/>}>
          <Link className={styles.text} to="birthdays">
            <span>Sinh nhật</span>
          </Link>
        </Menu.Item>

        <Menu.Item
          key="custom-list"
          icon={<UnorderedListOutlined style={{ color: "rgb(152, 151, 151)",fontSize: 18  }} />}>
          <Link className={styles.text} to="custom-list">
            <span>Danh sách tuỳ chỉnh</span>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default FriendsSidebar;
