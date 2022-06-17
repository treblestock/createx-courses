import { defineStore } from "pinia"

export const useStoreSendFormData = defineStore('storeSendFormData', {
  state: () => ({
    isActive: false,
    data: null,
  }),
  getters: {
    
  },
  actions: {
    sendFormData(data) {
      this.isActive = true
      this.data = data
      setTimeout( () => {
        this.isActive = false
        this.data = null
      }, 1500)
    },
  },
})