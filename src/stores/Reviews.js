import { defineStore } from "pinia"
import { database } from "@/API"



export const useStoreReviews = defineStore('storeReviews', {
  state: () => ({
    reviews: [],
  }),
  getters: {
    findReview: (state) => (reviewId, reviews) => {
      reviews ??= state.reviews // no params usage === search among all the reviews
      return reviews.find(review => review.id == reviewId)
    },
  },
  actions: {
    async fetchReviews() {
      const reviews = await database.get('/reviews').then(r => JSON.parse(r))
      if (!reviews) throw new Error('api failed (no answer) on: storeTeacher.fetchreviews()')
      this.reviews = reviews
    },
  },

  async onRegister(store) {
    await store.fetchReviews()
  }
})