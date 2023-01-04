import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReactNotificationComponent = ({ title, body }) => {
  console.log("ReactNotificationComponent", title, body);
  toast(title , {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  return (
    <div>
      <ToastContainer />
    </div>
  );


};



export default ReactNotificationComponent;