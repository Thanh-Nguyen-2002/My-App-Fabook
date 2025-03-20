import React from "react";
import styles from "../../assets/css/friend/FriendsHome.module.css"
import FriendsRequest from "./FriendRequests";
import FriendsSuggestions from "./FriendSuggestions";
const FriendsHome = () => {

    return(
        <div className={styles.container}>
            <FriendsRequest/>
            
            <div className={styles.crossbar}></div>

            <FriendsSuggestions />
        </div>
    )
}

export default FriendsHome;