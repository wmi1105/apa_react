/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const DesignSelect = ({ array, onClick }) => {

  return (
    <div className="select_box">
      <select className="blind">
        {array.map((n, idx) => (
          <option key={idx} value="">
            {idx}
          </option>
        ))}
      </select>
      <dl className="select_deco">
        <dt>
          <a href="#">0</a>
        </dt>
        <dd>
          <ul>
            {array.map((n, idx) => (
              <li key={idx} onClick={() => onClick(idx)}>
                <a href="#">{idx}</a>
              </li>
            ))}
          </ul>
        </dd>
      </dl>
    </div>
  );
};

export default React.memo(DesignSelect);
