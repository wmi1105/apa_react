import React from 'react';

import heart from "image/common/icn_mmenu_heart.svg";       //내 몸 관리
import icn_mmenu_remote from "image/common/icn_mmenu_remote.svg";   //비대면 진료
import icn_mmenu_doc from "image/common/icn_mmenu_doc.svg";     //나의 문서함
import icn_mmenu_hos from "image/common/icn_mmenu_hos.svg";     //나의 병원
import icn_mmenu_drug from "image/common/icn_mmenu_drug.svg";      //나의 약국

const MyMenuSvg = ({id}) =>
    (
        <>
            {id === 'heart' && <img src={heart} alt="" />}
            {id === 'icn_mmenu_remote' && <img src={icn_mmenu_remote} alt="" />}
            {id === 'icn_mmenu_doc' && <img src={icn_mmenu_doc} alt="" />}
            {id === 'icn_mmenu_hos' && <img src={icn_mmenu_hos} alt="" />}
            {id === 'icn_mmenu_drug' && <img src={icn_mmenu_drug} alt="" />}
            
        </>
    );

export default MyMenuSvg;