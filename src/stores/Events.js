import { defineStore } from "pinia"
import { database } from "@/API"
import { parseDateHandler } from "@/helpers"


export const useStoreEvents = defineStore('storeEvents', {
  state: () => ({
    events: [],
  }),
  getters: {
    findEvent: (state) => (eventId, events) => {
      events ??= state.events // no params usage === search among all the events
      return events.find(event => event.id == eventId)
    },
  },
  actions: {
    async fetchEvents() {
      const events = await database.get('/events').then(r => JSON.parse(r, parseDateHandler))
      if (!events) throw new Error('api failed (no answer) on: storeTeacher.fetchevents()')
      this.events = events
    },
  },

  async onRegister(store) {
    await store.fetchEvents()
  }
})