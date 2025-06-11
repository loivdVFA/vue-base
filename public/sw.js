// // sw.js

self.addEventListener("push", (event) => {
  let data = {};
  try {
    data = event.data.json();
    console.log('[SW] Push data:', data);
  } catch (e) {
    console.error('[SW] Push event data parse error:', e);
  }
  const notification = data.notification || data;
  const title = notification.title || 'Notification';
  event.waitUntil(
    self.registration.showNotification(title, notification)
  );
});

// self.addEventListener('push', function(event) {
//   console.log('[SW] Push Received.', event);

//   let data = {};
//   if (event.data) {
//     data = event.data.json();
//   }

//   console.log(data);
  

//   const options = {
//     body: data.body || 'Default body',
//     icon: './text.png',
//     badge: './text.png',
//     tag: Date.now().toString(),
//     actions: [
//       { action: 'open',  title: 'Open App' },
//       { action: 'close', title: 'Close' }
//     ],
//   };

//  event.waitUntil(
//   self.registration.showNotification(data.title || 'Default title', options)
//     .catch(err => {
//       console.error('showNotification error:', err);
//     })
// );
// });

// self.addEventListener('notificationclick', function(event) {
//   console.log('[SW] Notification click Received.');

//   event.notification.close();
//   event.waitUntil(
//     clients.openWindow('https://your-website.com')
//   );
// });
