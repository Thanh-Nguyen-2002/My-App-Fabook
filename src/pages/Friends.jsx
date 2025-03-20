import React from "react";
import styles from "../assets/css/friend/Friends.module.css"
import FriendsSidebar from "../components/friends/FriendsSidebar";
import { Outlet } from "react-router-dom";

const Friends = () => {
    return(
        <div className={styles.container}>
            <div className={styles.friends_sidebar}>
                <FriendsSidebar />
            </div>

            <div className={styles.friends_content}>
                <Outlet />
            </div>
        </div>
    );
};

export default Friends;