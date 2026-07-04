importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDHL6QiJ6a0MZcW3Y6RZ24ZHDQi2TyiFBw",
    projectId: "nxlelmhla",
    messagingSenderId: "501510494869",
    appId: "1:501510494869:web:a6b7e16233206d755b999c"
});

const messaging = firebase.messaging();
