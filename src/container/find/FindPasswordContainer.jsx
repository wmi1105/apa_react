import React from "react";
import { withRouter } from "react-router-dom";
import SerEmail from "component/auth/find/SerEmail";

const FindPasswordContainer = ({history, match}) => {

  const onClickHandler = () => {
    //비밀번호 변경 완료
    history.push("/login/email/.user.changePassword");
  }

  return(
    <>
      <SerEmail onClick={onClickHandler}/>
    </>
  )
};

export default withRouter(FindPasswordContainer);
