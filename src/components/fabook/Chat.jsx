import React from "react";  
import styles from "../../assets/css/fabook/Chat.module.css"
import {
    SearchOutlined,
    DashOutlined,
    UserOutlined
} from "@ant-design/icons"

const Chat = () => {

    const data = [
        {
            id : 1,
            img : "img1.png",
            name : "Hoàng Nhật"
        },
        {
            id : 2,
            img : "img1.png",
            name : "Tuấn Nghiện"
        },
        {
            id : 3,
            img : "img1.png",
            name : "Mọi đen"
        },
        {
            id : 4,
            img : "img1.png",
            name : "Cẩm Ly"
        },
        {
            id : 5,
            img : "img1.png",
            name : "Nguyễn Thảo"
        }
    ]

    return(
        <div className={styles.container}>
            <div
            style={{
                display : 'flex',
                flexDirection : 'column',
                rowGap : 10,
                padding : "0px 0px 15px 0px"
            }}>
                <div 
                style={{
                    display: 'flex',
                    justifyContent : 'space-between',
                    paddingBottom : 10
                }}>
                    <h5 style={{margin : 0}}>Người liên hệ</h5>
                    <div 
                    style={{
                        display : 'flex',
                        gap : 10,
                        fontSize : 18
                    }}>
                        <SearchOutlined />
                        <DashOutlined />
                    </div>
                </div>

                {data.map((item) => (
                    <div key={item.id}  className={styles.friend}>
                        <div style={{alignItems : 'center'}}>
                            <img style={{width : 40, borderRadius : '50%'}} src={item.img} alt="" />
                            <div></div>
                        </div>
                        <b>{item.name}</b>
                        
                    </div>
                ))}
            </div>
            <div style={{height :2 , background : "#bdb9b9" , boxSizing : 'border-box'}}></div>
            <div
            style={{
                display : 'flex',
                flexDirection : 'column',
                rowGap : 10,
                justifyContent : 'flex-start',
                padding : '15px 0px'
            }}>
                <div>
                    <h5 style={{margin : 0 , padding : 0 , float : 'left'}}>Đoạn chat cộng đồng</h5>
                </div>
                
                {data.map((item) => (
                    <div key={item.id}  className={styles.friend2}>
                        <div style={{alignItems : 'center'}}>
                            <img style={{width : 40, borderRadius : '50%'}} src={item.img} alt="" />
                            <div></div>
                        </div>
                        <b>{item.name}</b>
                        
                    </div>
                ))}
            </div>
            <div style={{height :2 , background : "#bdb9b9" ,boxSizing : 'border-box'}}></div>
            <div
            style={{
                display : 'flex',
                flexDirection : 'column',
                rowGap : 10,
                justifyContent : 'flex-start',
                padding : '15px 0px'
            }}>
                <div>
                    <h5 style={{margin : 0 ,float : 'left'}}>Nhóm chat</h5>
                </div>

                {data.map((item) => (
                    <div key={item.id}  className={styles.friend}>
                        <div style={{alignItems : 'center'}}>
                            <img style={{width : 40, borderRadius : '50%'}} src={item.img} alt="" />
                            <div></div>
                        </div>
                        <b>{item.name}</b>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chat;