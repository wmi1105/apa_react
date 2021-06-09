import React, { useState } from "react";

import TermsContainer from "container/auth/TermsContainer";
import TermsSection from "pages/auth/terms/TermsSection";
import Container from "pages/inc/Container";

const TermsPage = (props) => {
  const [itemVisible, setItemVisible] = useState("");

  return (
    <>
      <Container
        wrap="member"
        header={false}
        footer={false}
        nav={true}
        navOption={{ 
          headerId: "back",
          headerPath: "back",
          title: "약관동의",
        }}
      >
        <TermsContainer onItemVisible={(val) => setItemVisible(val)} />
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
