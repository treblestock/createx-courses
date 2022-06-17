import { defineStore } from "pinia"
import { database } from "@/API"
import { parseDateHandler } from "@/helpers"


export const useStoreCreatex = defineStore('storeCreatex', {
  state: () => ({
    socials: [],
    contacts: null,
    benefits: null,
  }),
  getters: {

  },
  actions: {
    async fetchContacts() {
      const contacts = await database.get('/contacts').then(r => JSON.parse(r, parseDateHandler))
      if (!contacts) throw new Error('api failed (no answer) on: storeTeacher.fetchContacts()')
      this.contacts = contacts
    },
    async fetchSocials() {
      const socials = await database.get('/socials').then(r => JSON.parse(r, parseDateHandler))
      if (!socials) throw new Error('api failed (no answer) on: storeTeacher.fetchSocials()')
      this.socials = socials
    },
    async fetchBenefits() {
      const benefits = await database.get('/benefits').then(r => JSON.parse(r, parseDateHandler))
      if (!benefits) throw new Error('api failed (no answer) on: storeTeacher.fetchBenefits()')
      this.benefits = benefits
    },
  },

  async onRegister(store) {
    await store.fetchContacts()
    await store.fetchSocials()
    await store.fetchBenefits()
  },
})