import React, { useState } from "react";
import FindForm from "../component/auth/find/FindForm";

const FindContainer = ({ match }) => {
  const findType = match.params.type;
  const [submitResult, setSubmitResult] = useState({
      type : '',
      result: false
  });

  const onSubmit = (type, { data }) => {
    if (type === "phone") {
      setSubmitResult({
        type: "phone",
        result: true,
        next : 'confirm'
      });
    }

    if (type === "confirm") {

      setSubmitResult({
        type: "confirm",
        result: true,
        next : findType
      });
    }
  };

  return (
    <>
      <FindForm
        type={findType}
        onSubmit={onSubmit}
        submitResult={submitResult}
      />
    </>
  );
};

export default FindContainer;
