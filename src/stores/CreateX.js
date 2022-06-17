import { defineStore } from "pinia"
import { database } from "@/API"
import { parseDateHandler } from "@/helpers"


export const useStoreCreatex = defineStore('storeCreatex', {
  state: () => ({
    createx: null,
    // categories: null,
    benefits: null,
  }),
  getters: {
    findReview: (state) => (reviewId, createx) => {
      createx ??= state.createx // no params usage === search among all the Createx
      return createx.find(review => review.id == reviewId)
    },
  },
  actions: {
    async fetchCreatex() {
      const createx = await database.get('/createx').then(r => JSON.parse(r, parseDateHandler))
      if (!createx) throw new Error('api failed (no answer) on: storeTeacher.fetchCreatex()')
      this.createx = createx
    },
    async fetchBenefits() {
      const benefits = await database.get('/benefits').then(r => JSON.parse(r, parseDateHandler))
      if (!benefits) throw new Error('api failed (no answer) on: storeTeacher.fetchBenefits()')
      this.benefits = benefits
    },
    // async fetchCategories() {
    //   const categories = await database.get('/categories').then(r => JSON.parse(r, parseDateHandler))
    //   if (!categories) throw new Error('api failed (no answer) on: storeTeacher.fetchCategories()')
    //   this.categories = categories
    // },
  },

  async onRegister(store) {
    await store.fetchCreatex()
    await store.fetchBenefits()
    // await store.fetchCategories()
  }
})