import React, { useEffect, useState } from 'react';
import { setContents } from 'js/common_pub';

import Header from 'component/inc/Header';
import Footer from 'component/inc/Footer';
import Identify from './Identify';
import Section from 'component/inc/Section';

const IentifyForm = ({setCheck}) => {

    return(
        <>
        <div id="wrap" className="member">
        {/* wrap start */}
            <Header headerType='back'>본인인증하기</Header>
            <Section>
                <Identify />
            </Section>
            <Footer>
                <p className="btn50"><button type="button" onClick={setCheck}>본인인증하기</button></p>
            </Footer>

        </div>
    </>
    )
}

export default IentifyForm;