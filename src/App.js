import "./App.css";
import io from "socket.io-client";


import React, { useEffect, useState } from "react";
import { getTokenFunc, messaging } from "./firebaseinit";
import { onMessage } from "firebase/messaging";

import ReactNotificationComponent from "./components/ReactNotification";
import { uuidv4 } from "@firebase/util";

function App() {
  const [socket, setsocket] = useState(io.connect("http://localhost:3300"));
  
  function notifyUsers(){
    const members = [
      {
        admin:false,
        externalEmail:false,
        userId:"473f8d1f-9d1a-4520-bef0-e64869f00e37"
      },
      {
        admin:false,
        externalEmail:false,
        userId:"2"
      },
      {
        admin:true,
        externalEmail:false,
        userId:"3"
      }
    ]
    socket.emit("notify-users",{ members , callInitializer:"473f8d1f-9d1a-4520-bef0-e64869f00e37" })
  }
  socket.emit('connect-workwise',{
    // userId:uuidv4(),
    userId: "473f8d1f-9d1a-4520-bef0-e64869f00e37"
  })
  socket.on("notification-connected",(data)=>{
    console.log(data);
  })
  socket.on("send-notification",(callInitializer)=>{
    console.log(`${callInitializer} is Calling !`);
    //set timeout for 1 minute rinigng etc
    socket.emit("send-notification-reply",{ message:"notification-received",callInitializer});
  })
  socket.on("notify-CallInitializer",(message)=>{
    console.log( message);
    // socket.emit("send-notification-reply",{ message:"notification-received"} ,callInitializer);
  })
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
      console.log('Message received.', payload);
      if (payload) {
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
      <button onClick={notifyUsers}>
        create room
      </button>
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
