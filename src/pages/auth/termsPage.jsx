import React, { useEffect, useState, c } from "react";

import TermsContainer from "container/auth/TermsContainer";
import TermsSection from "pages/auth/terms/TermsSection";
import Container from "pages/inc/Container";
import { withRouter } from "react-router-dom";

const TermsPage = ({ history }) => {
  const [itemVisible, setItemVisible] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [close, setClose] = useState(false);

  useEffect(() => {
    const unblock = history.block((location, action) => {
          if (!close && action === "POP") {
            setModalVisible(true);
            return false;
          }
        });
    return () => unblock()
  },[history, close]);

  return (
    <>
      <Container
        wrap="member"
        header={false}
        footer={false}
        nav={true}
        navOption={{
          headerId: "close",
          headerPath: () => setModalVisible(true),
          title: "약관동의",
        }}
      >
        <TermsContainer
          onItemVisible={(val) => setItemVisible(val)}
          modalVisible={modalVisible}
          onClickModal={(val) => {
            setModalVisible(val);
            if(val){
              setClose(val)
              history.goBack()
            }
          }}
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

export default withRouter(TermsPage);
