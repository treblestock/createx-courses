import { defineStore } from "pinia"
import { database } from "@/API"



export const useStoreCourses = defineStore('storeCourses', {
  state: () => ({
    courses: [],
  }),
  getters: {
    findCourse: (state) => (courseId, courses) => {
      courses ??= state.courses // no params usage === search among all the courses
      return courses.find(course => course.id == courseId)
    },
  },
  actions: {
    async fetchCourses() {
      const courses = await database.get('/courses').then(r => JSON.parse(r))
      if (!courses) throw new Error('api failed (no answer) on: storeTeacher.fetchcourses()')
      this.courses = courses
    },
  },

  async onRegister(store) {
    await store.fetchCourses()
  }
})