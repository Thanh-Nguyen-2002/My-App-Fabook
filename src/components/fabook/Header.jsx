import React, {useState} from "react"
import {
    DingtalkOutlined,
    AppstoreOutlined,
    MessageOutlined,
    BellOutlined,
    SearchOutlined
} from "@ant-design/icons";
import { Input, Menu, Modal } from "antd";
import styles from '../../assets/css/fabook/Header.module.css'
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {users} from "../../constants/label"

const Header = () => {

    const [isModalOpen, setIsModalOpen]  = useState(false);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

    const showModel = () => {
        setIsModalOpen(true);
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    }
    const handleOk = () => {
        setIsModalOpen(false);
    }

    const idLogout = parseInt(localStorage.getItem("id"), 10);

    // API LOGOUT
    const handleLogout = async () => {
        setIsLoading(true);
        try {
            const res = await axios.post("https://localhost:5000/api/Auth/logout",
                {
                    idLogout
                },
                // {
                //     headers: {
                //         Authorization : `Bearar ${token}`,
                //         "Content-Type" : "application/json"
                //     }
                // }
            )

            navigate("/");
            toast.success(res.data.message);
            localStorage.clear("id");

        }
        catch (err) {
            toast.error(err.response?.data?.message);
        }
        finally {
            setIsLoading(false);
        }
        
    }



    return(
        <div className={styles.container}>
            <div className={styles.container_left}>
                <div className={styles.container_left_icon}>
                    <DingtalkOutlined />
                </div>
                <div className={styles.container_left_icon}>
                    <SearchOutlined />
                </div>
            </div>
            <Menu
                mode="horizontal"
                selectedKeys={[location.pathname]}
                className={styles.customMenu}
                items={[
                    {
                        key : users.HomePage.key,
                        label: <Link className={styles.link_pages} to={users.HomePage.key}>{users.HomePage.label}</Link>
                    },
                    {
                        key : users.Friend.key,
                        label : <Link className={styles.link_pages} to={users.Friend.key}>{users.Friend.label}</Link>
                    },
                    {
                        key : users.Video.key,
                        label : <Link className={styles.link_pages} to={users.Video.key}>{users.Video.label}</Link>
                    },
                    {
                        key : users.Groups.key,
                        label : <Link className={styles.link_pages} to={users.Groups.key}>{users.Groups.label}</Link>
                    }
                ]}
            />

            <div className={styles.container_right}>
                <div className={styles.container_right_icon}>
                    <AppstoreOutlined />
                </div>
                <div className={styles.container_right_icon}>
                    <MessageOutlined />
                </div>
                <div className={styles.container_right_icon}>
                    <BellOutlined />
                </div>
                <div className={styles.container_right_icon}>
                    <img onClick={showModel} src="/anh_dai-dien.jpg" alt="Ảnh đại diện" />
                </div>            
            </div>

            <Modal
                open= {isModalOpen}
                onOk = {handleOk}
                onCancel = {handleCancel}
                loading= {isLoading}
            >
                <div onClick={handleLogout} className={styles.btn_logout}>Logout</div>
            </Modal>
            
        </div>
    )
}
export default Header;