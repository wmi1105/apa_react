
import React from "react";
import DaumPostcode from "react-daum-postcode";
import Section from "component/common/Section";

const KakaoPost = ({ onAddress }) => {

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

    const address = {
      post : data.zonecode,
      old: data.jibunAddress,
      load: data.roadAddress, //도로주소
      extra: '('+extraAddr+')',
    };

    onAddress(address);
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
      <Section>
        <DaumPostcode style={postCodeStyle} onComplete={onCompletePost} />
      </Section>
    </>
  );
};

export default KakaoPost;
