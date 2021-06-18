import React, { useState } from "react";
import Section from "component/common/Section";
import DesignSelect from "component/common/DesignSelect";

const PeriodCheck = (props) => {
  const [period, setPeriod] = useState({
    time: 0,
    day: 0,
    month: 0,
    year: 0,
  });

  const onClickHandler = (id, value) => {
    setPeriod({ ...period, [id]: value });
  };

  return (
    <Section>
      <div id="contents">
        <div className="select_time">
          <ul>
            <li>
              <span></span>
              <span>시간</span>
            </li>
            <li>
              <span></span>
              <span>일</span>
            </li>
            <li>
              <span></span>
              <span>개월</span>
            </li>
            <li>
              <span></span>
              <span>년</span>
            </li>
          </ul>
        </div>

        <ul className="select_four">
          <li>
            <p>시간</p>
            <DesignSelect
              array={[...Array(24)]}
              onClick={(val) => {
                console.log(val);
                onClickHandler("time", val)}}
            />
          </li>
          <li>
            <p>일</p>
            <DesignSelect
              array={[...Array(32)]}
              onClick={(val) => onClickHandler("day", val)}
            />
          </li>
          <li>
            <p>개월</p>
            <DesignSelect
              array={[...Array(12)]}
              onClick={(val) => onClickHandler("month", val)}
            />
          </li>
          <li>
            <p>년</p>
            <DesignSelect
              array={[...Array(10)]}
              onClick={(val) => onClickHandler("year", val)}
            />
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default PeriodCheck;
