import React, {useRef} from "react";
import styles from "../../assets/css/fabook/Story.module.css"
import {
    PlusOutlined,
}from "@ant-design/icons"


const Story = () => {
    const storyRef = useRef(null);

    const handleNext = () => {
    storyRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    const handlePrev = () => {
    storyRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };


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
    
        <div className={styles.container}>
            <button className={styles.nav_left} onClick={handlePrev}>&lt;</button>
            <div className={styles.story} ref={storyRef}>
                    <div className={styles.story_create}>
                        <div className={styles.story_create__avatar}>
                            <img src="/anh_dai-dien.jpg" alt="Ảnh đại diện" />
                            <div className={styles.story_create_icon}>
                                <PlusOutlined />
                            </div>
                        </div>
                        <div className={styles.story_create_title}>
                            <h6>Tạo tin</h6>
                        </div>
                    </div>
                    <div className={styles.story_view}>
                        {data.map((item) => (
                            <div key={item.id} className={styles.story_view_item}>
                                <img src={item.new} alt="Story" />
                                <h6 style={{margin : 0}} className={styles.view_story_name}>{item.name}</h6>
                                <div className={styles.view_story_avatar}>
                                    <img src={item.img_daidien} alt="Ảnh đại diện" />
                                </div>
                            </div>
                        ))}
                        
                    </div>    
            </div>
            <button className={styles.nav_right} onClick={handleNext}>&gt;</button>
        </div>
    );
};
export default Story;