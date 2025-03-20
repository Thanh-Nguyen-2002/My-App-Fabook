import React, { useState } from "react";
import styles from "../../../assets/css/friend/CardDetails.module.css"
import axios from "axios";
import { toast } from "react-toastify";

const CardDetails = ({data}) => {
    const [isloading, setLoading] = useState(false);
    const userId = localStorage.getItem("id");
    
    const handleAccept = async (friendId) => {
        
        setLoading(true);
        try {
            const res = await axios.put("https://localhost:5000/api/Friend/accept",
                {
                    userId,
                    friendId
                }
            );

            const result = res.data;
            toast.success(result.message);
        } catch (err) {
            toast.error(err?.response?.data.message);
        } finally {
            setLoading(false);
        }

    }

    const handleCancle = async (Canclefriend) => {
        setLoading(true);
        const friendId = Canclefriend;
        try {
            const res = await axios.put("https://localhost:5000/api/Friend/reject", 
                {
                    userId,
                    friendId
                }
            )
            
            const result = res.data;
            toast.success(result.data.message);
        } catch (err) {
            toast.error(err?.response?.data.message);
        } finally {
            setLoading(false);
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.card_img}>
                <img src="/img1.png" alt="Ảnh đại diện" />
            </div>
            <div className={styles.card_info}>
                <div className={styles.info_details}>
                    <span>{data?.fullName}</span>
                    
                    <p> ? Bạn chung</p>
                </div>
                <div className={styles.btn_card}>
                    <div className={styles.btn_accept} onClick={() => handleAccept(data.userId)}>
                        <span>Xác nhận</span>
                    </div>
                    <div className={styles.btn_delete} onClick={() => handleCancle(data.userId)}>
                        <span>Xóa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetails;