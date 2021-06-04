import React, { useEffect, useState } from 'react';
import { setContents } from '../../../js/common_pub';

import Top from '../../inc/Top';
import Header from '../../inc/Header';
import Footer from '../../inc/Footer';
import Identify from './Identify';

const IentifyForm = (props) => {
    const [containerSize, setContainerSize] = useState(null);

    useEffect(() => {
        setContainerSize(setContents());
        // setBtnDisable(true);     //페이지가 넘어갈때마다 버튼 비활성
    }, [])

    return(
        <>
        <Top />

        <div id="wrap" className="member">
        {/* wrap start */}
            <Header headerType='back'>본인인증하기</Header>

                {containerSize && 
                    <section id="container" style={containerSize}>
                    {/* container start */}
                        <Identify />
                    </section>
                }

            <Footer>
                <p className="btn50"><button type="button">본인인증하기</button></p>
            </Footer>

        </div>
    </>
    )
}

export default IentifyForm;