import React, { useMemo } from "react";
import SwipSlider from "component/package/SwipSlider";
import thum_test1 from "image/thum/thum_test1.png";
import thum_test2 from "image/thum/thum_test2.png";
import thum_test3 from "image/thum/thum_test3.png";
import { withRouter } from "react-router-dom";

const contents = [
  {
    img: thum_test1,
    category: "건강상식",
    title: "집콕생활, 비타민 D 결핍에 대처하는방법",
    date: "2021.01.11",
  },
  {
    img: thum_test2,
    category: "의약상식",
    itle: "집콕생활, 비타민 D 결핍에 대처하는방법",
    date: "2021.01.11",
  },
  {
    img: thum_test3,
    category: "보건의료제도",
    title: "집콕생활, 비타민 D 결핍에 대처하는방법",
    date: "2021.01.11",
  },
];

const HealthNTalk = ({history}) => {
  
  const onClickDetail = (id) => {
    history.push('/nTalk/detail')
  }

  const items = useMemo(() => {
    return contents.map((item) => (
      <>
        <p className="img">
          <button type="button"  onClick={onClickDetail}>
            <img src={item.img} alt="" />
          </button>
        </p>

        <div className="inner">
          {/* inner start */}
            <p className="type type1">{item.category}</p>
            <strong>
              <button type="button" onClick={onClickDetail}>{item.title}</button>
            </strong>
            <p className="date">{item.date}</p>
          <p className="like click_add_on">
            <button type="button">좋아요</button>
          </p>
        </div>
      </>
    ));
  }, []);

  const setSwipPage = (page) => {
    console.log(page);
  };

  return (
    <>
      <article className="health">
        {/* health start */}
        <h2>건강N톡</h2>

        <SwipSlider
          items={items}
          swipPage={(page) => setSwipPage(page)}
          options={{
            loop: false,
            slidesPerView: 1.2,
            centeredSlides: false,
            spaceBetween: 10,
            updateOnWindowResize: true,
            navigation: true,
            pagination: {
              clickable: true,
            },
          }}
        />

        <div className="swiper_pag_wrap">
          <div className="swiper-pagination"></div>
        </div>

        <p className="more">
          <button type="button" onClick={() => history.push('/nTalk/list')}>HOME</button>
        </p>
      </article>
      {/* health end */}
    </>
  );
};

export default withRouter(HealthNTalk);
