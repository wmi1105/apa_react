//https://www.npmjs.com/package/react-datepicker
//https://reactdatepicker.com/

import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import moment from 'moment';
import { getYear, getMonth } from "date-fns";
import {range} from 'lodash';
import ko from 'date-fns/locale/ko'; // 한국어적용
import "react-datepicker/dist/react-datepicker.css";
import 'css/datePicker.css';

registerLocale("ko", ko) // 한국어적용




const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

const DatePickerJS = ({defaultDate, changeDate}) => {
  const [startDate, setStartDate] = useState(new Date(defaultDate));
  const years = range(1960, getYear(new Date()) + 1, 1);  //시작연도, 마지막 연도

  const onChangeHandler = (date) => {
    setStartDate(date);
    // changeDate(date);

    const format = moment(date).format('YYYY-MM-DD');
    changeDate(format);
  }

  return (
    <div>
      <DatePicker
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {"<"}
            </button>
            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>  
                  {option}
                </option>
              ))}
            </select>

            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {">"}
            </button>
          </div>
        )}
        selected={startDate}
        onChange={(date) => onChangeHandler(date)}
        dateFormat={"yyyy-MM-dd"}
        locale={ko}
      />
    </div>
  );
};

export default DatePickerJS;
