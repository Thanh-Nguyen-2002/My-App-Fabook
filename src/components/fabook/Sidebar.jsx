import React from "react";
import {
    UsergroupAddOutlined,
    DownOutlined
} from "@ant-design/icons"
import styles from "../../assets/css/fabook/Sidebar.module.css"

const Sidebar = () => {
    return(
        <div className={styles.container}>
            <div className={styles.List_function}>
                <div className={styles.function_item}>
                    <img src="/anh_dai-dien.jpg" alt="Ảnh đại diện" className={styles.img_fun} />
                    <p>Nguyễn Thành</p>
                </div>
                <div className={styles.function_item}>
                    <UsergroupAddOutlined className={styles.icon} />
                    <p>Bạn bè</p>
                </div>
                <div className={styles.function_item}>
                    <UsergroupAddOutlined className={styles.icon} />
                    <p>Bạn bè</p>
                </div>
                <div className={styles.function_item}>
                    <UsergroupAddOutlined className={styles.icon} />
                    <p>Bạn bè</p>
                </div>
                <div className={styles.function_item}>
                    <UsergroupAddOutlined className={styles.icon}/>
                    <p>Bạn bè</p>
                </div>
                <div className={styles.function_item}>
                    <UsergroupAddOutlined className={styles.icon} />
                    <p>Bạn bè</p>
                </div>
                <div className={styles.function_item}>
                    <UsergroupAddOutlined className={styles.icon} />
                    <p>Bạn bè</p>
                </div>
                <div className={styles.function_item}>
                    <div className={styles.box_icon}>
                        <DownOutlined className={styles.icon_down} />
                    </div>
                    <p>Xem thêm</p>
                </div>
                <div
                style={{
                    height : 1,
                    background:'#6d6d6d'
                }}>
                </div>
            </div>
            <div className={styles.groupSection}>
                <h5>Lối tắt của bạn</h5>
                <div className={styles.function_item}>
                    <img src="" alt="" />
                    <p>123</p>
                </div>
                <div className={styles.function_item}>
                    <img src="" alt="" />   
                    <p>123</p>
                </div>
                <div className={styles.function_item}>
                    <img src="" alt="" />
                    <p>123</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;