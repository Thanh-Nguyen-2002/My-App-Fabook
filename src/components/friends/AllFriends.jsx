import React, { useEffect, useState } from "react";
import CardFriends from "./Details/CardFriends";
import ViewInfoFriend from "./Details/ViewInfoFriend";
import styles from "../../assets/css/friend/AllFriend.module.css"
import { toast } from "react-toastify";
import axios from "axios";

const AllFriends = () => {
    const [isloading, setIsLoading] = useState(false);
    const userId = localStorage.getItem("id");

    const [listFriends, setListFriends] = useState([]);

    const getFriends = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get(`https://localhost:5000/api/Friend/all-friends/${userId}`);
            
            setListFriends(res.data.data);
        } catch (err) {
            toast.error(err?.response?.data.message);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        getFriends();
    }, []);

    return(
        <div className={styles.container}>
            <div className={styles.cardFriend}>
                <h5>Tất cả bạn bè</h5>
                {listFriends.map((friend) => (
                    <CardFriends key={friend.id} data={friend}/>
                ))}

            </div>
            <div className={styles.viewInfoFriend}>
                <ViewInfoFriend/>
            </div>
        </div>
    )
}

export default AllFriends;