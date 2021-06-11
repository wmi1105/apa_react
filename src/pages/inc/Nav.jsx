import React from 'react';
import { withRouter } from 'react-router';

const Nav = (props) => {

    const { headerId, headerPath, history } = props;

    const onClickHandler = () => {
        switch (headerPath) {
        case "close":
            history.push("/home");
            break;

        case "back":
            history.goBack();
            break;

        default:
            // history.push(headerPath);
            headerPath()
            break;
        }
    };

    return(
        <header id="header" className={headerId + `_header`}>
            <h1>{props.title}</h1>
            <p className={headerId}>
            <button type="button" onClick={onClickHandler}>
                {headerId === "close" ? "화면 닫기" : "이전 페이지로 이동"}
            </button>
            </p>
        </header>
        )
};

export default withRouter(Nav);