import React, { useState } from "react";
import Header from "component/inc/Header";
import TermsSection from "./items/TermsSection";
import Terms from "./Terms";

const TermsFrom = ({onSumbit}) => {
  const [itemVisible, setItemVisible] = useState(false);
  const [termsItem, setTermsItem] = useState('');

  const termsItemHandler = (type) => {
    setItemVisible(true);
    setTermsItem(type);
  };

  return (
    <>
      <div id="wrap" className="member">
        <Header headerType="back">약관동의</Header>
        <Terms itemVisible={termsItemHandler} onSumbit={onSumbit}/>
      </div>

      {itemVisible && (
          <TermsSection item={termsItem} setVisible={setItemVisible} />
        )}
    </>
  );
};

export default TermsFrom;
