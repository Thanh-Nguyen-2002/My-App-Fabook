import React, {useState} from "react";  
import {Form, Input, Button} from "antd";
import {
    DingtalkOutlined,
    UserOutlined,
    LockOutlined,
    EyeOutlined,
    EyeInvisibleOutlined,
    MailOutlined
} from "@ant-design/icons";
import styles from "../../assets/css/login/Login.module.css"
import {Link, useNavigate} from "react-router-dom"
import axios from "axios";
import { toast } from "react-toastify";
const Resgiter = () => {
    const [isloading , setIsLoading] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [isShowRePassword, setIsShowRePassword] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async(value) => {
        const {
            username,
            password,
            repassword,
            email,
            fullname
        } = value;

        if(password != repassword) {
            toast.error("Mật khẩu chưa khớp. Vui lòng nhập lại !");
        }else {
            setIsLoading(true);
            try {
                const res = await axios.post("https://localhost:5000/api/Auth/register",
                    {
                        username,
                        password,
                        repassword,
                        email,
                        fullname
                    },
                    // Token
                    // {
                    //     headers: {
                    //         Authorization : `Bearer ${token}`,
                    //         "Content-Type" : "application/json"
                    //     }
                    // }
                );
                const result = res.data
                navigate("/");
                toast.success(`Chúc mừng ${result.data.fullname} ${result.message}`);
            }
            catch (err) {
                toast.error(err?.response?.data.message);
            }
            finally{
                setIsLoading(false);
            }
        }
    }


    return(
        <div className={styles.container_login}>
            <div className={styles.logoweb}>
                <DingtalkOutlined className={styles.logoweb_icon} />
                <h4>Fabook giúp bạn kết nối và chia sẻ</h4> 
                <h4>với mọi người trong cuộc sống của bạn.</h4>
            </div>
            <div style={{minWidth : 380 , maxWidth : 400}}>
                <div className={styles.logo}>
                    <DingtalkOutlined className={styles.logo_icon}/>
                    <h1>Fabook</h1>
                </div>

                <div className={styles.form_login}>
                    <Form
                        name="normal_login"
                        onFinish={handleRegister}
                    >
                        <div className={styles.title_formLogin}>
                            <h2>Fabook Đăng ký</h2>
                            <p>Please fill your detail to access your account.</p>
                        </div>

                        <div className={styles.input_username}>
                            <div className={styles.label}>Username:</div>
                            <Form.Item
                                name="username"
                                rules={[{required: true , message : "Vui lòng nhập Username của bạn"}]}
                            >
                                <Input
                                    className={styles.input_field}
                                    prefix={<UserOutlined/>}
                                    placeholder="Username"
                                />
                            </Form.Item>
                        </div>
                        
                        <div className={styles.input_password}>
                            <div className={styles.label}>Password: </div>
                            <Form.Item
                                className={styles.input_wrapper}
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

                        <div className={styles.input_password}>
                            <div className={styles.label}>Re-password: </div>
                            <Form.Item
                                className={styles.input_wrapper}
                                name="repassword"
                                rules={[
                                    { required: true, message: "Vui lòng nhập Password của bạn" },
                                ]}
                                
                            >
                                <Input
                                    prefix={<LockOutlined />}
                                    placeholder="Re-password"
                                    type={isShowRePassword ? "text" : "password"}
                                    className={styles.input_field}
                                />
                                
                            </Form.Item>
                            <span className={styles.icon_password} onClick={() => setIsShowRePassword(!isShowRePassword)}>
                                {isShowRePassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                            </span>
                        </div>

                        <div className={styles.input_email}>
                            <div className={styles.label}>Email: </div>
                            <Form.Item
                                className={styles.input_wrapper}
                                name="email"
                                rules={[{ required: true, message: "Vui lòng nhập Email của bạn" }]}
                                
                            >
                                <Input
                                prefix={<MailOutlined />}
                                placeholder="Email"
                                type="email"
                                className={styles.input_field}
                                />
                            </Form.Item>
                        </div>
                        <div className={styles.input_email}>
                            <div className={styles.label}>FullName: </div>
                            <Form.Item
                                className={styles.input_wrapper}
                                name="fullname"
                                rules={[{ required: true, message: "Vui lòng nhập FullName của bạn" }]}
                                
                            >
                                <Input
                                prefix={<UserOutlined />}
                                placeholder="FullName"
                                type="text"
                                className={styles.input_field}
                                />
                            </Form.Item>
                        </div>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className={styles.form_loginButton}
                            >
                                Đăng ký
                            </Button>
                        </Form.Item>

                    </Form>
                    
                </div>
                <div className={styles.link_register}>
                    <h5>Bạn đã có tài khoản <Link to={`/`}>Đăng nhập</Link></h5>
                </div>
            </div>
        </div>
    );
};

export default Resgiter;