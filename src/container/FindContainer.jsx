import React from "react";
import FindForm from "component/auth/find/FindForm";

const FindContainer = ({ match }) => {
  const findType = match.params.type;
  
  const onSubmit = (type, { data }) => {
    const returnObj = {
      type : type,
      result : true,
      data
    }

    if(type === 'email'){   //비밀번호찾기 -> 이메일 입력
      returnObj['result'] = true;
    }else if(type === 'phone'){   //이메일찾기 -> 번호 입력
      returnObj['result'] = true;
      returnObj['next'] = 'confirm';
    }else if(type === 'confirm'){   //이메일찾기 -> 인증번호 확인
      returnObj['result'] = true;
      returnObj['next'] = 'emailCheck';
    }

    return returnObj;
  };

  return (
    <>
      <FindForm
        type={findType}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default FindContainer;
