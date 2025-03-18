import React, { useState } from "react";
import {
    UsergroupAddOutlined,
    DownOutlined
} from "@ant-design/icons"
import styles from "../../assets/css/fabook/Sidebar.module.css"
import { Link } from "react-router-dom";

const Sidebar = () => {

    const [ishover, setIsHover] = useState(false);

    return(
        <div className={styles.container}>
            <div className={styles.List_function}>
                <div className={styles.function_item}>
                    <img src="/anh_dai-dien.jpg" alt="Ảnh đại diện" className={styles.img_fun} />
                    <p>Nguyễn Thành</p>
                </div>
                <Link to="/friends" className={styles.item}>
                    <div className={styles.function_item}>
                        <UsergroupAddOutlined className={styles.icon} />
                        <p>Bạn bè</p>
                    </div>
                </Link>
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
            <div 
                className={styles.groupSection}
                onMouseLeave={() => setIsHover(false)}
                onMouseEnter={() => setIsHover(true)}
            >
                <div 
                    className={styles.groupSection_title}
                    
                >
                    <h5>Lối tắt của bạn</h5>
                    {ishover && (
                        <b className={styles.groupSection_title__btn}>Chỉnh sửa</b>
                    )}
                    
                </div>
                
                <div className={styles.group_item}>
                    <img src="/img1.png" alt="Ảnh đại diện group" />  
                    <p>123</p>
                </div>
                <div className={styles.group_item}>
                    <img src="/img1.png" alt="Ảnh đại diện group" />   
                    <p>123</p>
                </div>
                <div className={styles.group_item}>
                    <img src="/img1.png" alt="Ảnh đại diện group" />  
                    <p>123</p>
                </div>
                <div className={styles.group_item}>
                    <div className={styles.box_icon}>
                        <DownOutlined className={styles.icon_down} />
                    </div>
                    <p>Xem thêm</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;