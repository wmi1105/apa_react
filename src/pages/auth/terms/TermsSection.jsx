import React, { useEffect, useMemo, useRef, useState } from "react";
import Eft from "./Eft";
import Privacy from "./Privacy";
import Tos from "./Tos";
import Marketing from "./Marketing";
import Location from "./Location";
import PrivacyAgree from "./PrivacyAgree";

const TermsSection = ({ item, setVisible }) => {
  const headerRef = useRef();
  const [containerStyle, setContainerStyle] = useState(null);

  const header = useMemo(() => {
    if (item === "tos") return "서비스 이용약관";
    else if (item === "privacy") return "개인정보 처리방침";
    else if (item === "privacyAgree") return "개인정보 수집 및 이용약관";
    else if (item === "location") return "위치정보 서비스 이용약관";
    else if (item === "eft") return "전자금융거래 이용약관";
    else if (item === "marketing") return "마케팅 정보 수신 동의";
  }, [item]);

  useEffect(() => {
    const style = {
      top: headerRef.current.offsetHeight,
      height: window.innerHeight - headerRef.current.offsetHeight,
      backgroundColor: "#fff",
    };
    setContainerStyle(style);
  }, []);

  return (
    <>
      <div id="wrap" className="member">
        <header id="header" className="close_header" ref={headerRef}>
          {/* header start */}
          <h1>{header}</h1>
          <p className="close">
            <button onClick={() => setVisible()}>화면 닫기</button>
          </p>
        </header>

        {containerStyle && (
          <section id="container" style={containerStyle}>
            <div id="contents" style={{ padding: "30px" }}>
              {item === "tos" && <Tos />}
              {item === "privacy" && <Privacy />}
              {item === "privacyAgree" && <PrivacyAgree />}
              {item === "location" && <Location />}
              {item === "eft" && <Eft />}
              {item === "marketing" && <Marketing />}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default TermsSection;
