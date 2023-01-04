//eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
//eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");


// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken  } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyCq9vus5ueWXF8Zl5vz5fQU4q5dz2Nw8yk",
    authDomain: "test-e1fed.firebaseapp.com",
    projectId: "test-e1fed",
    storageBucket: "test-e1fed.appspot.com",
    messagingSenderId: "1064337118186",
    appId: "1:1064337118186:web:99082d0c757a2c37fd9893",
    measurementId: "G-7XSCQZRKP1"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage (function (payload) {
    console.log(payload,"PAYLOAD BACKGROUNG");
    const notificationTitle = payload.notification.title + "-----";
    const notificationOptions ={
        body: payload.notification.body,
    };
    return self.registration.showNotification(notificationTitle, notificationOptions);
})
