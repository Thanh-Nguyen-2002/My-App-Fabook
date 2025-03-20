import React, {useState, useEffect} from "react";
import styles from "../../assets/css/friend/FriendsHome.module.css"
import axios from "axios";
import { toast } from "react-toastify";
import CardDetailsRequest from "./Details/CardDetailsRequest";

const FriendsSuggestions = () => {
    const [isLoading, setIsLoading] = useState(false);
    const userId = localStorage.getItem("id");
    const [listData, setListData] = useState([]);
    
    
    const getAllUser = async () => {
        setIsLoading(true);
        try{
            const res = await axios.get(`https://localhost:5000/api/Friend/not-friends/${userId}`);
            setListData(res.data.data);
        }
        catch (err) {
            toast.error(err?.response?.data.message);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getAllUser();
    }, []);
    return(
        <div>
            <div className={styles.friends_suggestions}>
                <h3>Những người bạn có thể biết</h3>
                
                <div 
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '24px',
                    justifyItems : 'center'
                  }}>

                    {listData.map((user) => (
                        <CardDetailsRequest key={user.id} data={user} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default FriendsSuggestions;