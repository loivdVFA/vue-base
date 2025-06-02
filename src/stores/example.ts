import { defineStore } from 'pinia'

export const useExampleStore = defineStore('exampleStore', {
  state: () => ({
    notificationFunc: null as any,
  }),
  actions: {
  },
})
