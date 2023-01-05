import { initializeApp } from "firebase/app";
import { getMessaging  ,getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyCq9vus5ueWXF8Zl5vz5fQU4q5dz2Nw8yk",
    authDomain: "test-e1fed.firebaseapp.com",
    projectId: "test-e1fed",
    storageBucket: "test-e1fed.appspot.com",
    messagingSenderId: "1064337118186",
    appId: "1:1064337118186:web:99082d0c757a2c37fd9893",
    measurementId: "G-7XSCQZRKP1"
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
export const getTokenFunc = async () =>{
    let currentToken ='';
    try{
        currentToken = await getToken(messaging, { vapidKey: "BElYLj7RHqmjLpF-cfOVOvzNTznQGxBzX6A111adcltId48AFzBCZ6tNEWHIXbkIY1zB5a_WOUwREMyZ98GtgfM" });
        if (currentToken) {
            // setTokenFound(true);
            // console.log("Your: " + currentToken);
        } else {
            // setTokenFound(false)
            console.log('No registration token available. Request permission to generate one.');
        }
    }
    catch(err){
        console.log('An error occurred while retrieving token. ', err);
    }
    return currentToken;
}
// getToken(messaging, { vapidKey: "BElYLj7RHqmjLpF-cfOVOvzNTznQGxBzX6A111adcltId48AFzBCZ6tNEWHIXbkIY1zB5a_WOUwREMyZ98GtgfM" })
// .then((currentToken) => {
   
// }).catch((err) => {
   
// });


(()=>{
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
        }
    });
})();

// export const onMessageListener = () => {
//     let data = {};
//     onMessage(messaging, (payload) => {
//         console.log('Message received. ', payload);
//         data = payload;
//     });
//     return data;
// };


