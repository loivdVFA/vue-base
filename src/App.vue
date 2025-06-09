<template>
  <!-- <router-view /> -->
  <button class="py-2 px-3 border-[1px] border-C01 ml-3 mt-3 rounded-md" @click="sendNotification">Send Notification</button>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const registerServiceWorker = () => {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.register('/sw.js')
      .then(swReg => {
        console.log('Service Worker is registered', swReg);
      })
      .catch(error => {
        console.error('Service Worker Error', error);
      });
  }
}

function urlBase64ToUint8Array(base64String: any) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
  const rawData =  window.atob(base64);
  return Uint8Array.from([...rawData].map(char => char.charCodeAt(0)));
}

async function subscribeUser() {
  const swRegistration = await navigator.serviceWorker.ready;

  const subscription = await swRegistration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array('BGDVQhQc-2zf5P0zFJOsQQyV2AdAsZ2e2OPdv9fpkMJiJJQEBzLNtgknJltW-_V3VPEycknwc5jIK-8jYuH8gBM')
  });

  console.log('Push subscription:', JSON.stringify(subscription));
  const bodySub = {
     subscription
  }
  // Gửi subscription về server (Node)
  await fetch('https://be-webpush.srv02.dtsmart.dev/subscribe', {
    method: 'POST',
    body: JSON.stringify(bodySub),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
const sendNotification = async () => {
  try {
    const numberRand = Math.random() * 100;
    const bodySend = {
      title: "Loi Test",
      body: `Tin nhan moi ne ${numberRand}`
    }
    await fetch('https://be-webpush.srv02.dtsmart.dev/send',{
      method: 'POST',
      body: JSON.stringify(bodySend),
       headers: {
      'Content-Type': 'application/json'
    }
    })
  } catch (error) {
    console.error(error);
  }
}
onMounted(() => {
  registerServiceWorker();
  subscribeUser()
})
</script>

<style lang="scss"></style>
