import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import PostDetail from "./PostDetail";
import Section from "./Section";

const Postcode = ({ setVisible, allAddress }) => {
  const [isOpenPost, setIsOpenPost] = useState(true);

  const [post, setPost] = useState(""); //우편번호
  const [address, setAddress] = useState({
    old: "",
    load: "",
    extra: "",
  }); // 입력한 주소

  const onCompletePost = (data) => {
    // let loadAddress = data.address;
    let extraAddr = "";

    // if (data.addressType === 'R') {
    if (data.bname !== "") {
      extraAddr += data.bname;
    }
    if (data.buildingName !== "") {
      extraAddr +=
        extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
    }
    // loadAddress += extraAddr !== "" ? ` (${extraAddr})` : "";
    // }

    setPost(data.zonecode);
    const address = {
      old: data.jibunAddress,
      load: data.roadAddress, //도로주소
      extra: extraAddr,
    };

    setAddress(address);
    setIsOpenPost(false);
  };

  const onDetail = (val) => {
    //   setAddressDetail(detail);
    const addr = address.load + ", " + val +"("+address.extra+")";

    allAddress(addr); //전체주소
  };

  const postCodeStyle = {
    display: "block",
    position: "relative",
    width: "100%",
    height: "100%",
    padding: "0",
  };


  return (
    <>
      <div id="wrap" className="member">
      {isOpenPost && (
          <>
            <header id="header" className={`close_header`}>
              <h1>주소검색하기</h1>
              <p className="close">
                <span onClick={() => setVisible(false)}>화면 닫기</span>
              </p>
            </header>

            <Section>
                <DaumPostcode
                  style={postCodeStyle}
                  onComplete={onCompletePost}
                />
            </Section>
          </>
        )}

        {!isOpenPost && (
          <>
            <header id="header" className="back_header">
              <h1>상세주소 입력</h1>
              <p className="back">
                <span onClick={() => setIsOpenPost(true)}>이전 페이지로 이동</span>
              </p>
            </header>

            <Section>
              {/* 상세주소 입력 */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#fff",
                }}
              >
                <PostDetail
                  post={post}
                  address={address}
                  onDetail={onDetail}
                  onClick={() => setVisible(false)}
                />
              </div>
            </Section>
          </>
        )}
      </div>
    </>
  );
};

export default Postcode;
