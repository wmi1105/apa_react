import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

//input password <-> text 전환
//userInfo, changePassword 에서 사용

/* 
    <ConvertInput
        type={inputType.newKey}
        onClick={(type) => setInputType({...inputType, newKey:type})}
    />
 */

const typeStyle = {
  position: "absolute",
  right: "10px",
  lineHeight: "38px",
  height: "38px",
  fontSize: "15px",
};

const ConvertInput = ({ type, onClick }) => {
  const onClickHandler = () => {
    const toggle = type === "password" ? "text" : "password";
    onClick(toggle);
  };

  return (
    <>
      <span style={typeStyle} onClick={onClickHandler}>
        {type === "password" && <AiOutlineEye />}
        {type === "text" && <AiOutlineEyeInvisible />}
      </span>
    </>
  );
};

export default ConvertInput;
