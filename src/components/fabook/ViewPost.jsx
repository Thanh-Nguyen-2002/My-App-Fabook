import React from "react";
import styles from "../../assets/css/fabook/ViewPost.module.css"
import {
    CloseOutlined,
    DashOutlined,
    LikeOutlined,
    SmileOutlined,
    HeartOutlined,
    MessageOutlined,
    SendOutlined
} from "@ant-design/icons"

const ViewPost = () => {
    const data_ViewPost = [
        {
            id: 1,
            groupName: "React Việt Nam",
            author: "Nguyễn Văn A",
            time: "1 giờ trước",
            status: "Công khai",
            description: "Đây là bài viết đầu tiên trong group React Việt Nam. Cùng nhau chia sẻ kiến thức nha!",
            images: ["/img1.png", "/img1.png", "/img1.png"],
            reactionsCount: 120,
            commentsCount: 45,
            sharesCount: 10
        },
        {
            id: 2,
            groupName: "Hội Web Developer",
            author: "Trần Thị B",
            time: "3 giờ trước",
            status: "Riêng tư",
            description: "Mọi người xem giúp em lỗi này với ạ, em không hiểu sao nó không hiển thị dữ liệu.",
            images: ["/img1.png", "/img1.png"],
            reactionsCount: 56,
            commentsCount: 12,
            sharesCount: 5
        }
    ];

    return (
        <div className={styles.container_Viewpost}>
            {data_ViewPost.map((post) => (
                <div key={post.id} className={styles.ViewPost_details}>
                    <div className={styles.viewPostHeader}>
                        <div className={styles.title_userInfo}>
                            <img src="/img1.png" alt="" />
                            <div className={styles.title_userInfo__details}>
                                <b>{post.groupName}</b>
                                <b>{post.author} . {post.time} . {post.status}</b>
                            </div>
                        </div>
                        <div className={styles.title_actionIcons}>
                            <DashOutlined />
                            <CloseOutlined />
                        </div>
                    </div>
                    <div className={styles.viewPostDescription}>
                        <p>{post.description}</p>
                    </div>
                    <div>
                        {post.images.map((imgSrc, index) => (
                             <img key={index} src={imgSrc} alt={`img-${index}`} />
                        ))}
                    </div>

                    <div className={styles.viewPostFooter}>
                        <div className={styles.postReactions}>
                            <div className={styles.reactionIcons}>
                                <div>
                                    <LikeOutlined />
                                    <SmileOutlined />
                                    <HeartOutlined />
                                </div>

                                <p>{post.reactionsCount}</p>
                            </div>
                            <div className={styles.postStatus}>
                                <b>{post.commentsCount} bình luận</b>
                                <b>{post.sharesCount} lượt chia sẻ</b>
                            </div>
                        </div>
                        <div style={{ background: "#dbd8d8", height: 1 }}></div>
                        <div className={styles.postActions}>
                            <div className={styles.postActions_btn}>
                                <LikeOutlined />
                                <span>Thích</span>
                            </div>
                            <div className={styles.postActions_btn}>
                                <MessageOutlined />
                                <span>Bình luận</span>
                            </div>
                            <div className={styles.postActions_btn}>
                                <SendOutlined />
                                <span>Chia sẻ</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}


        </div>
    )
}
export default ViewPost;