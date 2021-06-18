import React from "react";
import Section from "component/common/Section";
import Image from "component/common/Image";
import { withRouter } from "react-router-dom";

const List = ({ items, onClickSort, onClickHeart, history }) => {
  const onClickDetail = (key) => {
    history.push('/nTalk/detail')
  }

  return (
    <>
      <Section>
        <div id="contents">
          {/* contents start */}

          <p className="vis">
            생활 속 건강상식으로
            <br />
            <span>가족 건강</span>을 지키세요.
          </p>

          <div className="tap_wrap">
            {/* tap_wrap start */}

            <ul className="normal_tap type2">
              <li className="on">
                <button type="button">
                  <span>건강상식</span>
                </button>
              </li>
              <li>
                <button type="button">
                  <span>의약상식</span>
                </button>
              </li>
              <li>
                <button type="button">
                  <span>보건의료제도</span>
                </button>
              </li>
              <li>
                <button type="button">
                  <span>찜한N톡</span>
                </button>
              </li>
            </ul>

            <div className="tap_cont">
              {/* tap_cont start */}

              <div className="list_top">
                {/* list_top start */}
                <p>
                  총 <span>12</span>개의 항목이 있습니다.
                </p>
                <button
                  type="button"
                  className="filter click_show_evt"
                  data-link-show="filter_sort"
                  onClick={onClickSort}
                >
                  정렬순서
                </button>
              </div>
              {/* list_top end */}

              <ul className="ntalk_list">
                {items.map((item, idx) => (
                  <li key={item.key}>
                    <p className="img">
                      <button type="button" onClick={() => onClickDetail(item.key)}>
                        <Image src={item.img} />
                      </button>
                    </p>

                    <div className="desc">
                      {/* desc start */}
                      <p className="cate cate1">{item.category}</p>
                      <button type="button" className="subject" onClick={() => onClickDetail(item.key)}>
                        {item.label}
                      </button>
                      <p className="date">{item.date}</p>
                      <button
                        type="button"
                        className={`heart click_add_on ${
                          item.heart ? "on" : ""
                        }`}
                        onClick={() => onClickHeart(item.key)}
                      >
                        찜하기
                      </button>
                    </div>
                    {/* desc end */}
                  </li>
                ))}
              </ul>
            </div>
            {/* tap_cont end */}
          </div>
          {/* tap_wrap end */}
        </div>
      </Section>
    </>
  );
};

export default withRouter(List);
