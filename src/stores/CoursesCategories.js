import { defineStore } from "pinia"
import { database } from "@/API"
import { parseDateHandler } from "@/helpers"


export const useStoreCoursesCategories = defineStore('storeCoursesCategories', {
  state: () => ({
    coursesCategories: [],
  }),
  getters: {
    findCoursesCategory: (state) => (coursescategoryId, coursesCategories) => {
      coursesCategories ??= state.coursesCategories // no params usage === search among all the coursesCategories
      return coursesCategories.find(coursescategory => coursescategory.id == coursescategoryId)
    },
  },
  actions: {
    async fetchCoursesCategories() {
      const coursesCategories = await database.get('/coursesCategories').then(r => JSON.parse(r, parseDateHandler))
      if (!coursesCategories) throw new Error('api failed (no answer) on: storeTeacher.fetchCoursesCategories()')
      this.coursesCategories = coursesCategories
    },
  },

  async onRegister(store) {
    await store.fetchCoursesCategories()
  }
})