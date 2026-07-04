// 1. استيراد مكتبات Firebase (يجب أن تكون في الأعلى)
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// 2. تهيئة Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDHL6QiJ6a0MZcW3Y6RZ24ZHDQi2TyiFBw",
    projectId: "nxlelmhla",
    messagingSenderId: "501510494869",
    appId: "1:501510494869:web:a6b7e16233206d755b999c"
});

const messaging = firebase.messaging();

// 3. كود الـ PWA والكاش الخاص بك
const CACHE_NAME = 'nxl-cache-v3';
const urlsToCache = [
  './Nxl.html',
  './manifest.json',
  './image.PNG'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  // الحفاظ على شرط استثناء Firebase عشان الشات يفضل حي
  if (event.request.url.includes('firebaseio.com') || event.request.url.includes('googleapis.com')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

// 4. استقبال الإشعارات في الخلفية
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/image.PNG'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
