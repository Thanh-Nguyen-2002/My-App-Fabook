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
import {Link} from "react-router-dom"
const Resgiter = () => {
    const [isloading , setIsLoading] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [isShowRePassword, setIsShowRePassword] = useState(false);
    return(
        <div className={styles.container_login}>
            <div style={{minWidth : 380 , maxWidth : 400}}>
                <div className={styles.logo}>
                    <DingtalkOutlined className={styles.logo_icon}/>
                    <h1>Fabook</h1>
                </div>

                <div className={styles.logoweb}>
                    <DingtalkOutlined className={styles.logoweb_icon} />
                </div>
                
                <div className={styles.form_login}>
                    <Form
                        name="normal_login"
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
                                <span className={styles.icon_password} onClick={() => setIsShow(!isShow)}>
                                    {isShow ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                </span>
                            </Form.Item>
                        </div>

                        <div className={styles.input_password}>
                            <div className={styles.label}>Re-password: </div>
                            <Form.Item
                                className={styles.input_wrapper}
                                name="password"
                                rules={[
                                    { required: true, message: "Vui lòng nhập Password của bạn" },
                                    { 
                                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
                                        message: "Mật khẩu phải có ít nhất 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt!"
                                    }
                                ]}
                                
                            >
                                <Input
                                    prefix={<LockOutlined />}
                                    placeholder="Re-password"
                                    type={isShow ? "text" : "password"}
                                    className={styles.input_field}
                                />
                                <span className={styles.icon_password} onClick={() => setIsShowRePassword(!isShowRePassword)}>
                                    {isShowRePassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                </span>
                            </Form.Item>
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
                    <h4>Bạn đã có tài khoản <Link to={`/login`}>Đăng nhập</Link></h4>
                </div>
            </div>
        </div>
    );
};

export default Resgiter;