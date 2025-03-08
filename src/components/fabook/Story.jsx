import React from "react";
import styles from "../../assets/css/fabook/Story.module.css"
import {
    PlusOutlined,
}from "@ant-design/icons"


const Story = () => {
    const data = [
        {
            id: 1,
            name : "Trần Hà Anh",
            img_daidien : "/vite.svg",
            new : "/vite.svg"
        },
        {
            id: 2,
            name : "Trần Hà Anh",
            img_daidien : "/vite.svg",
            new : "/vite.svg"
        },
        {
            id: 3,
            name : "Trần Hà Anh",
            img_daidien : "/vite.svg",
            new : "/vite.svg"
        },
        {
            id: 4,
            name : "Trần Hà Anh",
            img_daidien : "/vite.svg",
            new : "/vite.svg"
        },
        {
            id: 5,
            name : "Trần Hà Anh",
            img_daidien : "/vite.svg",
            new : "/vite.svg"
        }
    ]

    return(
        <div className={styles.story}>
            <div className={styles.story_create}>
                <div className={styles.story_create__avatar}>
                    <img src="/anh_dai-dien.jpg" alt="Ảnh đại diện" />
                    <div className={styles.story_create_icon}>
                        <PlusOutlined />
                    </div>
                </div>
                <div className={styles.story_create_title}>
                    <h4>Tạo tin</h4>
                </div>
            </div>
            <div className={styles.story_view}>
                {data.map((item) => (
                    <div key={item.id} className={styles.story_view_item}>
                        <img src={item.new} alt="Story" />
                        <h4>{item.name}</h4>
                        <div>
                            <img src={item.img_daidien} alt="Ảnh đại diện" />
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    );
};
export default Story;