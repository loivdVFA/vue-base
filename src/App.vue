<template>
  <!-- <router-view /> -->
  <button class="py-2 px-3 border-[1px] border-C01 ml-3 mt-3 rounded-md" @click="sendNotification">Send
    Notification</button>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { client } from './utils/ably';

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

const sendNotification = async () => {
  try {
    const bodyNotification = {
      title: "hello",
      body: "Content"
    }
    await fetch('http://localhost:3000/send-notification', {
      method: "POST",
      body: JSON.stringify(bodyNotification),
      headers: {
        'Content-Type': 'application/json',
      }
    })
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  registerServiceWorker();
  console.log(client);
  client.push.activate(async (deviceDetails, callback) => {
    console.log(deviceDetails);
    const deviceRegistration = await fetch('http://localhost:3000/get-device', {
      method: "POST",
      body: JSON.stringify(deviceDetails),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    // const deviceRegistration = await registerThroughYourServer(deviceDetails);
    // const deviceRegistrationJson = await deviceRegistration.json();
    // callback(deviceRegistrationJson);
  });

})


</script>

<style lang="scss"></style>
