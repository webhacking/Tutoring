import React from "react";
import "./expBtn.scss";

const ExpBtn = ({ className, onClick }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      지금 무료체험하기
    </button>
  );
};

export default ExpBtn;
