import React, { useMemo } from 'react';
import { withRouter } from 'react-router';


const Header = ({headerType, children:title, history}) => {

    const moveBtn = useMemo(() => {
      if(headerType === 'close') 
        return <p className="close"><button type="button" onClick={() => history.push('/index')}>화면 닫기</button></p>;
      else if(headerType === 'back') 
        return <p className="back"><button type="button" onClick={() => history.goBack()}>이전 페이지로 이동</button></p>
    }, [headerType, history])

    return(
        <> 
        <header id="header" className={headerType+`_header`}>
          {/* header start */}
          <h1>{title}</h1>
          {moveBtn}
        </header>
        {/* header end */}
        </>
    )
}

export default withRouter(Header);