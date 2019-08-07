import React from "react";
import "./reviewList.scss";
import { reviewData } from "./data";

const ReviewList = () => {
  return (
    <>
      <strong className="emph_g">튜터링에서 인생튜터 만난 사람들</strong>
      <ul className="list_review">
        {reviewData.map((el, idx) => {
          return (
            <li key={idx}>
              <strong className="tit_review">{el.title}</strong>
              <p className="txt_review">{el.content}</p>
              <p className="txt_info">
                <span>{el.date}</span>
                <span>{el.name}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ReviewList;
