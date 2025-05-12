// public/firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDGd46aygR0tw-_i-LX6CAn_vq5fvuqs6g",
    authDomain: "fir-app-dd59e.firebaseapp.com",
    projectId: "fir-app-dd59e",
    storageBucket: "fir-app-dd59e.firebasestorage.app",
    messagingSenderId: "1012372477750",
    appId: "1:1012372477750:web:2755a8da377c01daf00597"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
