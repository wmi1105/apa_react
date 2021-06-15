import KakaoPostContainer from "container/user/KakaoPostContainer";
import Container from "pages/inc/Container";
import React, { useState } from "react";
import { withRouter } from "react-router";

const KakaoPostPage = ({ history }) => {
  const [page, setPage] = useState("post");

  const onClick = () => {
    if(page === 'post'){
      history.goBack()
    }else{
      window.location.reload();
    }
  };

  return (
    <Container
      wrap="member"
      header={false}
      footer={false}
      nav={true}
      navOption={{
        headerId: page === "post" ? "close" : "back",
        headerPath: onClick,
        title: page === "post" ? "주소검색" : "상세주소입력",
      }}
    >
      <KakaoPostContainer onPage={(val) => setPage(val)} />
    </Container>
  );
};

export default withRouter(KakaoPostPage);

