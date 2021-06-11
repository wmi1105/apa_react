import React, { useCallback } from "react";
import Container from "pages/inc/Container";
import OverAccountContainer from "container/auth/OverAccountContainer";
import { withRouter } from "react-router";

const OverAccountPage = ({ history }) => {

  const onClick = useCallback(() => {
    history.push("/auth/identify");
  }, [history])

  return(
    <Container
      wrap="member"
      header={false}
      footer={false}
      nav={true}
      navOption={{
        headerId: "back",
        headerPath: onClick,
        title: "가입회원 안내",
      }}
    >
      <OverAccountContainer />
    </Container>
  )
};

export default withRouter(OverAccountPage);
