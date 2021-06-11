import React, { useState } from "react";

import TermsContainer from "container/auth/TermsContainer";
import TermsSection from "pages/auth/terms/TermsSection";
import Container from "pages/inc/Container";

const TermsPage = (props) => {
  const [itemVisible, setItemVisible] = useState("");
  const [clickNav, setClickNav] = useState(false);

  const onClick = () => {
    setClickNav(true);
  };

  return (
    <>
      <Container
        wrap="member"
        header={false}
        footer={false}
        nav={true}
        navOption={{
          headerId: "close",
          headerPath: onClick,
          title: "약관동의",
        }}
      >
        <TermsContainer
          onItemVisible={(val) => setItemVisible(val)}
          clickNav={clickNav}
          onClickNav={(val) => setClickNav(val)}
        />
      </Container>

      {itemVisible !== "" && (
        <TermsSection
          item={itemVisible}
          setVisible={() => setItemVisible("")}
        />
      )}
    </>
  );
};

export default TermsPage;
