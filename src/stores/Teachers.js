import { defineStore } from "pinia"
import { database } from "@/API"
import { parseDateHandler } from "@/helpers"



export const useStoreTeachers = defineStore('storeTeachers', {
  state: () => ({
    teachers: [],
  }),
  getters: {
    findTeacher: (state) => (teacherId, teachers) => {
      teachers ??= state.teachers // no params usage === search among all the teachers
      return teachers.find(teacher => teacher.id == teacherId)
    },
  },
  actions: {
    async fetchTeachers() {
      const teachers = await database.get('/teachers').then(r => JSON.parse(r, parseDateHandler))
      if (!teachers) throw new Error('api failed (no answer) on: storeTeacher.fetchTeachers()')
      this.teachers = teachers
    },
  },

  async onRegister(store) {
    await store.fetchTeachers()
  }
})