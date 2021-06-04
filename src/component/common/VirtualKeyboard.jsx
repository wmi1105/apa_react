import React, { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import Keyboard from 'react-virtual-keyboard';

import{bodyYesScroll} from '../../js/common_pub.js';

var display = {
  'accept': '등록',
  'cancel': '취소',
  'bksp': '삭제',
  'shift': '쌍자음'
};
var customLayout = {
  default: [
    "ㅂ ㅈ ㄷ ㄱ ㅅ ㅕ ㅕ ㅑ ㅐ ㅔ",
    " ㅁ ㄴ ㅇ ㄹ ㅎ ㅗ ㅓ ㅏ ㅣ ",
    "{shift} ㅋ ㅌ ㅊ ㅍ ㅠ ㅜ ㅡ {bksp}",
    "{cancel} {accept}",
  ],
  "shift" : [
    "ㅃ ㅉ ㄸ ㄲ ㅆ ㅛ ㅕ ㅑ ㅒ ㅖ",
    "ㅁ ㄴ ㅇ ㄹ ㅎ ㅗ ㅓ ㅏ ㅣ",
    "{shift} ㅋ ㅌ ㅊ ㅍ ㅠ ㅜ ㅡ {bksp}",
    "{cancel} {accept}",
  ]
};

const VirtualKeyboard = ({visible, setDisplay}) => {
    const keyboard = useRef();
    const [input, setInput] = useState('');

    const onInputChanged = (data) => {
        setInput(data);
        // this.setState({ input: data });
      }
      
      const onInputSubmitted = (data) => {
        console.log("Input submitted:", data);
      }

      // $(document).on(
      //   "click", ".lay_pop_blind", function(){
      //   setDisplay('none');
      //   return false;
      // });

      useEffect(() => {
        if(display === 'none'){
          $(".lay_pop_blind, .popup").stop().fadeOut("500");
          bodyYesScroll();
        }
      },[display])
     
    return(
      <>
        <p className="lay_pop_blind" style={{display:visible, opacity: '0.3'}}></p>
        {visible === 'block' && <div className="ui-keyboard">
          <Keyboard
              value={input}
              name='keyboard'
              options={{
                  type:"input",
                  alwaysOpen: true,
                  usePreview: false,
                  useWheel: false,
                  stickyShift: false,
                  appendLocally: true,
                  color: "light",
                  updateOnChange: true,
                  initialFocus: true,
                  // layout: "qwerty",
                  // display: {"accept" : "Submit"}
                  layout: "custom",
                  display,
                  customLayout
              }}
              onChange={onInputChanged}
              onAccepted={onInputSubmitted}
              ref={k => {
                console.log(k)
                return keyboard.current = k}}
              />
            </div>
          }
        </>
    )
}

export default VirtualKeyboard;