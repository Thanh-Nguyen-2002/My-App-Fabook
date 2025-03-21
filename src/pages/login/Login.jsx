import React, {useState} from "react";  
import {Form, Input, Button, message} from "antd";
import {
    DingtalkOutlined,
    UserOutlined,
    LockOutlined,
    EyeOutlined,
    EyeInvisibleOutlined
} from "@ant-design/icons";
import styles from "../../assets/css/login/Login.module.css"
import {Link , useNavigate} from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify";

const Login = () => {
    const [isloading , setIsLoading] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const nagative = useNavigate();

    const handleLogin = async (value) => {
        const {username , password} = value;
        setIsLoading(true);

        try {
            const res = await axios.post("https://localhost:5000/api/Auth/login", 
                {
                    username,
                    password
                },
                // Viết token
                // {
                //     headers: {
                //         Authorization: `Bearer ${token}`,
                //         "Content-Type" : "application/json"
                //     }
                // }
            );

            const user = res.data;
            
            localStorage.setItem("isActive", user.data.isActive);
            localStorage.setItem("id", user.data.id);
            
            nagative("/fabook");
            toast.success(`Welcome, ${user.data.fullName}`);
        }
        catch (error) {
            toast.error(error.response?.data?.message );
        }

        finally {
            setIsLoading(false);
        }


    }
    
    return(
        <div className={styles.container_login}>
            <div className={styles.logoweb}>
                <DingtalkOutlined className={styles.logoweb_icon} />
                <h4>Fabook giúp bạn kết nối và chia sẻ</h4> 
                <h4>với mọi người trong cuộc sống của bạn.</h4>
            </div>
            <div style={{minWidth: 300, maxWidth : 400 , margin : 0 , padding : 0}}>
                <div className={styles.logo}>
                    <DingtalkOutlined className={styles.logo_icon}/>
                    <h1>Fabook</h1>
                </div>

                
                
                <div className={styles.form_login}>
                    <Form
                        name="normal_login"
                        onFinish={handleLogin}
                    >
                        <div className={styles.title_formLogin}>
                            <h2>Fabook Đăng nhập</h2>
                            <p>Please fill your detail to access your account.</p>
                        </div>

                        <div className={styles.input_username}>
                            <label className={styles.label} htmlFor="Username">Username:</label>
                            <Form.Item
                                name="username"
                                rules={[{required: true , message : "Vui lòng nhập Username của bạn"}]}
                            >
                                <Input
                                    prefix={<UserOutlined/>}
                                    placeholder="Username"
                                    className={styles.input_field}
                                />
                            </Form.Item>
                        </div>
                        
                        <div className={styles.input_password}>
                            <label className={styles.label}>Password: </label>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: "Vui lòng nhập Password của bạn" }]}
                                >
                                <Input
                                    prefix={<LockOutlined />}
                                    placeholder="Password"
                                    type={isShow ? "text" : "password"}
                                    className={styles.input_field}
                                />
                            </Form.Item>
                            <span className={styles.icon_password} onClick={() => setIsShow(!isShow)}>
                                {isShow ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                            </span>

                        </div>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className={styles.form_loginButton}
                                loading= {isloading}
                            >
                                Đăng nhập
                            </Button>
                        </Form.Item>

                    </Form>
                    
                </div>
                <div className={styles.link_register}>
                    <h5>Bạn chưa có tài khoản? <Link to={`/register`}>Tạo tài khoản</Link></h5>
                </div>
            </div>
        </div>
    );
};

export default Login;