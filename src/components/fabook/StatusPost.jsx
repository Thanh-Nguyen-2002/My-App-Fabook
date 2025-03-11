import React from "react";
import styles from "../../assets/css/fabook/StatusPost.module.css"
import { Input } from "antd";
import {
    VideoCameraOutlined,
    FileImageOutlined,
    SmileOutlined
} from "@ant-design/icons"

const StatusPost = () => {
    return(
        <div className={styles.container}>
            <div className={styles.post_input}>
                <div className={styles.post_input__top}>
                    <div className={styles.post_input__avatar}>
                        <img src="/anh_dai-dien.jpg" alt="Ảnh đại diện" />
                    </div>
                    <div className={styles.post_input__text}>
                        <h5 style={{margin : 0}}>Thành ơi, bạn đang nghĩ gì thế?</h5>
                    </div>
                </div>
                <div className={styles.post_input__hr}></div>
                <div className={styles.post_input__active}>
                    <div className={styles.post_input__active_live}>
                        <VideoCameraOutlined className={styles.iconlive}/>
                        <b>Video trực tiếp</b>
                    </div>
                    <div className={styles.post_input__active_image}>
                        <FileImageOutlined className={styles.iconimage}/>
                        <b>Ảnh/video</b>
                    </div>
                    <div className={styles.post_input__active_status}>
                        <SmileOutlined className={styles.iconstatus}/>
                        <b>Cảm xúc/hoạt động</b>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatusPost;