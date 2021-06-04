import React from "react";
import FindForm from "component/auth/find/FindForm";

const FindContainer = ({ match }) => {
  const findType = match.params.type;
  
  const onSubmit = (type, { data }) => {
    const returnObj = {
      type : type,
      result : true,
      next : ''
    }

    if(type === 'email'){
      returnObj['result'] = true;
    }else if(type === 'phone'){
      returnObj['result'] = true;
      returnObj['next'] = 'confirm';
    }else if(type === 'confirm'){
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
