import React, { useEffect, useState } from "react";
import Footer from "component/inc/Footer";
import Section from "component/inc/Section";

const Terms = ({ itemVisible, onSumbit }) => {
  const [btnDisable, setBtnDisable] = useState(true);
  const [checked, setChecked] = useState({
    all: false,
    tos: false,
    privacy: false,
    privacyAgree: false,
    location: false,
    eft: false,
    marketing: false,
  });

  const checkAll = () => {
    const value = !checked.all;
    const obj = { ...checked };
    Object.keys(checked).map((key) => {
      if (key !== "marketing") obj[key] = value;
      return null;
    });

    setChecked(obj);
  };

  const checkUnit = (key) => {
    const copyObj = { ...checked, [key]: !checked[key] };
    delete copyObj.all;
    delete copyObj.marketing;

    const mapToArr = Object.keys(copyObj);
    const checkFilter = mapToArr.filter((item) => copyObj[item]);

    if (checkFilter.length === mapToArr.length) {
      setChecked({
        ...copyObj,
        marketing: checked.marketing,
        all: true,
      });
    } else {
      setChecked({
        ...copyObj,
        marketing: checked.marketing,
        all: false,
      });
    }
  };

  const formSubmitHandler = () => {
    const checkedValue = { ...checked };
    delete checkedValue.all;

    onSumbit(checkedValue);
  };

  useEffect(() => {
    if (checked.all) setBtnDisable(false);
    else setBtnDisable(true);
  }, [checked]);

  return (
    <>
      <Section>
        <div id="contents">
          <form className="agreed_all">
            <p className="first_info">
              이용약관에 동의하고
              <br />
              어디아파 서비스를 이용해보세요!
            </p>

            <ul className="n_check_list must">
              <li>
                <label className="normal_check">
                  <input
                    type="checkbox"
                    title="동의합니다 선택"
                    className="all"
                    value={checked.all}
                    onClick={checkAll}
                  />
                  <span className="fake"></span>
                  <span className="txt">모든 약관에 동의</span>
                </label>
              </li>
              <li>
                <label className="normal_check">
                  <input
                    type="checkbox"
                    title="동의합니다 선택"
                    value={checked.tos}
                    onClick={() => checkUnit("tos")}
                  />
                  <span className="fake"></span>
                  <span className="txt">어디아파 서비스 이용약관 (필수)</span>
                </label>
                <button type="button" onClick={() => itemVisible("tos")}>
                  약관보기
                </button>
              </li>
              <li>
                <label className="normal_check">
                  <input
                    type="checkbox"
                    title="동의합니다 선택"
                    value={checked.privacy}
                    onClick={() => checkUnit("privacy")}
                  />
                  <span className="fake"></span>
                  <span className="txt">개인정보 처리방침 (필수)</span>
                </label>
                <button type="button" onClick={() => itemVisible("privacy")}>
                  약관보기
                </button>
              </li>
              <li>
                <label className="normal_check">
                  <input
                    type="checkbox"
                    title="동의합니다 선택"
                    value={checked.privacyAgree}
                    onClick={() => checkUnit("privacyAgree")}
                  />
                  <span className="fake"></span>
                  <span className="txt">개인정보 수집 및 이용약관(필수)</span>
                </label>
                <button
                  type="button"
                  onClick={() => itemVisible("privacyAgree")}
                >
                  약관보기
                </button>
              </li>
              <li>
                <label className="normal_check">
                  <input
                    type="checkbox"
                    title="동의합니다 선택"
                    name="location"
                    value={checked.location}
                    onClick={() => checkUnit("location")}
                  />
                  <span className="fake"></span>
                  <span className="txt">위치정보 서비스 이용약관 (필수)</span>
                </label>
                <button type="button" onClick={() => itemVisible("location")}>
                  약관보기
                </button>
              </li>
              <li>
                <label className="normal_check">
                  <input
                    type="checkbox"
                    title="동의합니다 선택"
                    value={checked.eft}
                    onClick={() => checkUnit("eft")}
                  />
                  <span className="fake"></span>
                  <span className="txt">전자금융거래 이용약관 (필수)</span>
                </label>
                <button type="button" onClick={() => itemVisible("eft")}>
                  약관보기
                </button>
              </li>
            </ul>
            <ul className="n_check_list">
              <li>
                <label className="normal_check">
                  <input
                    type="checkbox"
                    title="동의합니다 선택"
                    name="marketing"
                    value={checked.marketing}
                    onClick={() =>
                      setChecked({ ...checked, marketing: !checked.marketing })
                    }
                  />
                  <span className="fake"></span>
                  <span className="txt">마케팅 정보 수신 동의 (선택)</span>
                  {/* <Marketing /> */}
                </label>
                <button
                  type="button"
                  className="click_show_evt"
                  data-link-show="pop_mar"
                  onClick={() => itemVisible("marketing")}
                >
                  약관보기
                </button>
              </li>
            </ul>
          </form>
        </div>
      </Section>

      <Footer>
        <p className="btn50">
          <button
            type="button"
            onClick={formSubmitHandler}
            disabled={btnDisable}
          >
            동의하고 계속진행
          </button>
        </p>
      </Footer>
    </>
  );
};

export default Terms;
