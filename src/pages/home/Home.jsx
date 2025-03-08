import React from "react";
import Header from "../../components/fabook/Header";
import styles from "../../assets/css/fabook/Home.module.css"
import StatusPost from "../../components/fabook/StatusPost";
import Story from "../../components/fabook/Story";

const Home = () => {
    return(
        <div className={styles.container}>
            <div className={styles.container_header}>
                <Header />
            </div>
            <div className={styles.container_statuspost}>
                <StatusPost />
            </div>
            <div className={styles.container_story}>
                <Story />
            </div>
        </div>
    );
};
export default Home;