import { BrowserRouter, Route } from "react-router-dom";
import DynamicRoute from "react-dynamic-route";

import "css/master.css";
// import './css/swiper.css';
import "css/common.css";
import "css/sub.css";
import "css/index.css";

import "js/common_pub.js";
import "js/design_select.js";
import Home from "pages/homePage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path="/" component={Home} exact/>
        <DynamicRoute
          page={(path) =>
            import(`./pages${path}Page`)
              .then((module) => module.default)
              .catch((e) => {
                if (/not find module/.test(e.message)) {
                  return import("pages/error/404").then((module) => module.default);
                }
                throw e;
              })
          }
          // loading={null}
          // props={{
          //   someProp1,
          //   someProp2,  // `someProp1` and `someProp2` are transfered to `module.dedault` above finally
          // }}
          onError={(e, history) => {
            if (/Loading chunk \d+ failed/.test(e.message)) {
              window.location.reload();
              return;
            }
            throw e;
          }}
        />
    </BrowserRouter>
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
