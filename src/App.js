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
import Spinner from "component/package/Spinner";
import SndPasswordPage from "pages/user/sndPasswordPage";
import IdentificationPage from "pages/auth/identificationPage";
import LoginEmailPage from "pages/login/emailPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path="/" component={Home} exact/>

      {/* redirect
        * /대신 .로 입력 (/user/info -> .user.info) 
        * 다음 경로까지 지정할 때 nextPage를 ''안에 넣음(/login 다음 /home일 때 .login'.home')
      */}
      <Route path="/login/email/:redirect" component={LoginEmailPage} />
      <Route path="/auth/sndPassword/:use/:redirect" component={SndPasswordPage} exact />
      <Route path="/auth/identification/:use/:redirect" component={IdentificationPage} />

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
          loading={<Spinner />}
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
