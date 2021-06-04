import { Route } from 'react-router-dom';

// import VirtualKeyboard from './component/common/VirtualKeyboard';

import 'css/master.css';
// import './css/swiper.css';
import 'css/common.css';
import 'css/sub.css';
import 'css/index.css';

import  'js/common_pub.js';
import 'js/design_select.js';

import LoginContainer from './container/LoginContainer';
import HomeForm from './component/home/HomeForm';
import FindContainer from './container/FindContainer';
import JoinContainer from './container/JoinContainer';
import IdentifyContainer from './container/IdentifyContainer';
import UserContainer from './container/UserContainer';
import TermsContainer from './container/TermsContainer';
// import './js/jquery.keyboard.js';
// import './js/jquery.keyboard.extension-all';

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomeForm} exact/>
      <Route path="/index" component={HomeForm} exact/>
      
      <Route path="/login" component={LoginContainer} exact/>
      <Route path="/login/:type" component={LoginContainer}/>

      <Route path="/find/:type" component={FindContainer}/>


      <Route path="/terms" component={TermsContainer} exact/>
      <Route path="/join" component={JoinContainer} exact/>
      <Route path="/join/:type" component={JoinContainer} exact/>

      <Route path="/identify" component={IdentifyContainer} exact/>
      
      <Route path="/user/:type" component={UserContainer} exact/>
      <Route path="/user/:type/:page" component={UserContainer}/>

      
    </div>
  );
}

export default App;



/* 

/index            홈
/login            로그인 메인
/login/email      이메일 로그인
/terms            약관동의
/identify         본인인증
/join             가입방법 선택
/join/selectType  가입방법 선택
/join/info        회원가입 회원정보 입력
/join/complete    회원가입 완료
/join/overAccount 본인인증 후 중복회원 있음
/join/joinOut     탈퇴

/find/password    비밀번호 찾기
/find/email       이메일 찾기

/user/info    //사용자 정보 조회, 수정
/user/account //비밀번호 변경



*/
