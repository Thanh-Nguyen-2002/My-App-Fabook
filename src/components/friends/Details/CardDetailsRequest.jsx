import React, { useState, useEffect } from "react";
import styles from "../../../assets/css/friend/CardDetails.module.css";
import { toast } from "react-toastify";
import axios from "axios";

const CardDetailsRequest = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [ishidden, setIsHidden] = useState(false);
  const [isshow, setIsShow] = useState(true);
  const [isRemove, setIsRemove] = useState(false);

  const userId1 = parseInt(localStorage.getItem("id"),10);
  const requesterId = userId1;

  useEffect(() => {
    if (data.status === "pending") {
      setIsShow(false);
    }
    if (data.status !== "pending") {
      setIsRemove(true);
    }
  }, [data.status]);

  const isVisible = isRemove && ishidden;

  const handleRequest = async (userId2) => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        "https://localhost:5000/api/Friend/send-request",
        {
          userId1,
          userId2,
          requesterId,
        }
      );

      toast.success(res.data.message);
    } catch (err) {
      toast.error(err?.response?.data?.message || "Có lỗi xảy ra");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemove = async (userId2) => {
    setIsLoading(true);

    try {
      const result = await axios.put("https://localhost:5000/api/Friend/reject", {
        userId1,
        userId2,
        requesterId,
      });

      toast.success(result.data.message);
    } catch (err) {
      toast.error(err?.response?.data.message)
    } finally {
      setIsLoading(false);
    }
  };

  return !isVisible ? (
    <div className={styles.container}>
      <div className={styles.card_img}>
        <img src="/img1.png" alt="Ảnh đại diện" />
      </div>
      <div className={styles.card_info}>
        <div className={styles.info_details}>
          <span>{data?.fullName}</span>
          <p>? Bạn chung</p>
        </div>
        <div className={styles.btn_card}>
          {isshow && (
            <div className={styles.btn_accept}>
              <span
                onClick={() => {
                  handleRequest(data.id);
                  setIsShow(false);
                }}>
                Thêm bạn bè
              </span>
            </div>
          )}
          <div className={styles.btn_delete}>
            <span
              onClick={() => {
                handleRemove(data.id);
                setIsShow(true);
                setIsHidden(true)
              }}>
              Gỡ
            </span>
          </div>
        </div>
      </div>
    </div>
    
  ) :(null)
};

export default CardDetailsRequest;
