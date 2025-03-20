import React, {useState, useEffect} from "react";
import styles from "../../assets/css/friend/FriendsHome.module.css"
import axios from "axios";
import { toast } from "react-toastify";
import CardDetails from "./Details/CardDetails";

const FriendsRequest = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [listDataFriendRequest, setListDataFriendRequest] = useState([]);
    const userId = localStorage.getItem("id");
    useEffect(() => {
        getAllFriendsRequest();
    }, []);

    const getAllFriendsRequest = async () => {
            setIsLoading(true);
            try {
                const result = await axios.get(`https://localhost:5000/api/Friend/received-requests/${userId}`);
    
                setListDataFriendRequest(result.data.data);
            } catch (err) {
                toast.error(err?.response?.data.message)
            } finally {
                setIsLoading(false);
            }
        }

    return(
        <div>
            <div className={styles.friends_request}>
                <h3>Lời mời kết bạn</h3>
                <div 
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '24px',
                    justifyItems : 'center'
                }}>

                    {listDataFriendRequest.map((listUserRequest) => (
                        <CardDetails key={listUserRequest.id}  data={listUserRequest} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default FriendsRequest;