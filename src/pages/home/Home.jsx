import React from "react";
import Header from "../../components/fabook/Header";
import styles from "../../assets/css/fabook/Home.module.css";
import StatusPost from "../../components/fabook/StatusPost";
import Story from "../../components/fabook/Story";
import Chat from "../../components/fabook/Chat";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../components/fabook/Sidebar";

const Home = () => {
    return (
        <div className={`container-fluid ${styles.container} p-0 m-0`}>
            <div className={styles.container_header}>
                <Header />
            </div>

            <div className={`${styles.container_main}`}>
                <div className="row g-0">
                    <div className={`col-2 ${styles.sidebarFixed}`} >
                        <Sidebar />
                    </div>
                    <div className={`col-8 ${styles.centerContent}`}>
                        <div className="row g-0">
                            <div className="col-3"></div>
                            <div className="col-6">
                                <div className={styles.container_statuspost}>
                                    <StatusPost />
                                </div>
                                <div className={styles.container_story}>
                                    <Story />
                                </div>
                            </div>
                            <div className="col-3"></div>
                        </div>
                    </div>

                    <div className={`col-2 ${styles.chatPanel}`}>
                        <Chat />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
