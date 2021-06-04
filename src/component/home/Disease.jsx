import React from "react";

const Disease = (props) => {
  return (
    <>
      <article className="disease">
        {/* disease start */}
        <h2>신규질환 소개</h2>

        <section className="swiper-container">
          {/* swiper-container start */}
          <ul className="swiper-wrapper">
            <li className="swiper-slide">
              <p className="img">
                <button type="button">
                  <img src="/apa/image/thum/test_dea.png" alt="" />
                </button>
              </p>
              <dl>
                <dt>
                  <button type="button">가정의학과</button>
                </dt>
                <dd>
                  <button type="button">편도선염</button>
                </dd>
              </dl>
              <p className="desc">
                <button type="button">
                  여러 원인으로 인해 전신 저항력이 감퇴 되었을 때 편도 내
                  세균으로 인한 급성 감염 질환입니다.
                </button>
              </p>
            </li>
            <li className="swiper-slide">
              <p className="img">
                <button type="button">
                  <img src="/apa/image/thum/test_dea.png" alt="" />
                </button>
              </p>
              <dl>
                <dt>
                  <button type="button">가정의학과</button>
                </dt>
                <dd>
                  <button type="button">편도선염</button>
                </dd>
              </dl>
              <p className="desc">
                <button type="button">
                  2여러 원인으로 인해 전신 저항력이 감퇴 되었을 때 편도 내
                  세균으로 인한 급성 감염 질환입니다.
                </button>
              </p>
            </li>
            <li className="swiper-slide">
              <p className="img">
                <button type="button">
                  <img src="/apa/image/thum/test_dea.png" alt="" />
                </button>
              </p>
              <dl>
                <dt>
                  <button type="button">가정의학과</button>
                </dt>
                <dd>
                  <button type="button">편도선염</button>
                </dd>
              </dl>
              <p className="desc">
                <button type="button">
                  3여러 원인으로 인해 전신 저항력이 감퇴 되었을 때 편도 내
                  세균으로 인한 급성 감염 질환입니다.
                </button>
              </p>
            </li>
          </ul>
        </section>
        {/* swiper-container end */}

        <p className="more">
          <button type="button">HOME</button>
        </p>
      </article>
      {/* disease end */}
    </>
  );
};

export default Disease;
