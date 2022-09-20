import "./App.css";
import Topnav from "./organizer/topnav/topnav";
import Home from "./organizer/home/home";
import Footer from "./organizer/footer/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Search } from "./organizer/home/search/search";
import { LikedItem } from "./organizer/home/LikedItems/LikedItem";
import Setting from "./organizer/home/setting/setting";
import Doctor from "./organizer/doctor/doctor";
import MyaAccount from "./organizer/myaccount/myaccount";
import { createContext, useContext, useEffect } from "react";
import { detectmedia } from "./organizer/dark";
import IntitalizeFireBaseMessaging from "./organizer/firebase";

import LoginAndRegister from "./organizer/Lr/login";
import Popup, { SPopup } from "./organizer/global/errbox";
import Demo from "./organizer/imageuploader/image";

// context
export const authContext = createContext(
  localStorage.getItem("access_token") ? 1 : 0
);
function App() {
  function messf() {
    const messaging = window.firebase.messaging();
    messaging.onMessage(function (payload) {
      console.log(payload);
      const notificationOption = {
        body: payload.notification.body,
        icon: payload.notification.icon,
      };

      if (Notification.permission === "granted") {
        var notification = new Notification(
          payload.notification.title,
          notificationOption
        );
        console.log(messaging.getToken());
        notification.onclick = function (ev) {
          ev.preventDefault();
          window.open(payload.notification.click_action, "_blank");
          notification.close();
        };
      }
    });
    messaging.onTokenRefresh(function () {
      messaging
        .getToken()
        .then(function (newtoken) {
          console.log("New Token : " + newtoken);
        })
        .catch(function (reason) {
          console.log(reason);
        });
    });
  }
  useEffect(() => {
    try {
      if (window.firebase.messaging.isSupported()) {
        IntitalizeFireBaseMessaging();

        messf();
      }
    } catch {}
    detectmedia();
    document.title = "TheSteth";
  }, []);
  return (
    <authContext.Provider value={localStorage.getItem("access_token") ? 1 : 0}>
      <div className="mainapp ">
        <Topnav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/li" component={LikedItem} />
          <Route path="/setting" component={Setting} />
          <Route path="/doc/:DOCID" component={Doctor} />
          <Route path="/ma" component={MyaAccount} />
          <Route path="/image" component={Demo} />
          <Route path="/" component={LoginAndRegister} />
        </Switch>
        <Footer />
        <Popup />
        <SPopup />
      </div>
    </authContext.Provider>
  );
}

export default App;
