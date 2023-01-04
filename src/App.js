import "./App.css";


import React, { useEffect, useState } from "react";
import { getTokenFunc, messaging } from "./firebaseinit";
import { onMessage } from "firebase/messaging";

import ReactNotificationComponent from "./components/ReactNotification";

function App() {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });

  useEffect(() => {


    (async () => {
      let token = '';
      token = await getTokenFunc();
      if (token) {
        console.log("Token is", token);
      }
      return token;
    })();


    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      if (payload) {
        console.log(payload, "PAYLOAD")
        setShow(true);
        setNotification({
          title: payload.notification.title,
          body: payload.notification.body,
        });
      }
    });
    


  }, []);


  return (
    <div className="App">
      {show ? (
        <ReactNotificationComponent
          title={notification.title}
          body={notification.body}
        />
      ) : (
        <></>
      )}

    </div>
  );
}

export default App;
