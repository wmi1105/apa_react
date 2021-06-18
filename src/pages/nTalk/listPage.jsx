import NtalkListContainer from "container/nTalk/NtalkListContainer";
import Container from "pages/inc/Container";
import React from "react";

const ListPage = (props) => {
  return (
    <>
      <Container
        wrap="ntalk"
        header={false}
        footer={false}
        nav={true}
        navOption={{
          headerId: "back",
          headerPath: "back",
          title: "건강N톡",
        }}
      >
          <NtalkListContainer />
      </Container>
    </>
  );
};

export default ListPage;
