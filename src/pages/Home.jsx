import React from "react";
import styles from "../assets/css/fabook/Home.module.css";
import StatusPost from "../components/fabook/StatusPost";
import Story from "../components/fabook/Story";
import Chat from "../components/fabook/Chat";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/fabook/Sidebar";
import ViewPost from "../components/fabook/ViewPost";

const Home = () => {
    return (
        <div className={`container-fluid ${styles.container} p-0 m-0`}>
            <div className={`${styles.sidebarFixed}`} >
                <Sidebar />
            </div>
            <div className={`${styles.centerContent}`}>
                <div className={styles.content}>
                    <div className={styles.container_statuspost}>
                        <StatusPost />
                    </div>
                    <div className={styles.container_story}>
                        <Story />
                    </div>
                    <div className={styles.container_viewpost}>
                        <ViewPost/>
                    </div>
                </div>
            </div>

            <div className={`${styles.chatPanel}`}>
                <Chat />
            </div>
        </div>
    );
};

export default Home;
