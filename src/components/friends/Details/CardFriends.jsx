import React from "react";
import styles from "../../../assets/css/friend/CardFriends.module.css"

const CardFriends = ({data}) => {
    return(
        <div className={styles.container}>
            <div className={styles.cardDetail}>
                <div className={styles.cardDetail_image}>
                    <img src="/img1.png" alt="Ảnh đại diện" />
                </div>
                <div className={styles.cardDetail_info}>
                    <span>{data.fullName}</span>
                    <span>? bạn chung</span>
                </div>
            </div>
        </div>
    )
}
export default CardFriends;