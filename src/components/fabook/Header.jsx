import React from "react"
import {
    DingtalkOutlined,
    AppstoreOutlined,
    MessageOutlined,
    BellOutlined,
    SearchOutlined
} from "@ant-design/icons";
import { Input } from "antd";
import styles from '../../assets/css/fabook/Header.module.css'

const Header = () => {
    return(
        <div className={styles.container}>
            <div className={styles.container_left}>
                <div className={styles.container_left_icon}>
                    <DingtalkOutlined />
                </div>
                <div className={styles.container_left_icon}>
                    <SearchOutlined />
                </div>
            </div>
            <div className={styles.container_right}>
                <div className={styles.container_right_icon}>
                    <AppstoreOutlined />
                </div>
                <div className={styles.container_right_icon}>
                    <MessageOutlined />
                </div>
                <div className={styles.container_right_icon}>
                    <BellOutlined />
                </div>
                <div className={styles.container_right_icon}>
                    <img src="/anh_dai-dien.jpg" alt="Ảnh đại diện" />
                </div>            
            </div>
            
        </div>
    )
}
export default Header;