import { defineStore } from "pinia"
import { database } from "@/API"
import { parseDateHandler } from "@/helpers"


export const useStoreCreateX = defineStore('storeCreateX', {
  state: () => ({
    createX: null,
  }),
  getters: {
    findReview: (state) => (reviewId, createX) => {
      createX ??= state.createX // no params usage === search among all the CreateX
      return createX.find(review => review.id == reviewId)
    },
  },
  actions: {
    async fetchCreateX() {
      const createX = await database.get('/createX').then(r => JSON.parse(r, parseDateHandler))
      if (!createX) throw new Error('api failed (no answer) on: storeTeacher.fetchCreateX()')
      this.createX = createX
    },
  },

  async onRegister(store) {
    await store.fetchCreateX()
  }
})