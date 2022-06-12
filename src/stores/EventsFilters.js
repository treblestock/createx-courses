import { defineStore } from "pinia"
import { useStoreEvents } from "./Events"
import { doesIncludeWords } from "@/helpers"
import { toJSDate } from "@/helpers"


export const useStoreEventsFilters = defineStore('storeEventsFilters', {
  state: () => ({
    // filters
    categoryQuery: null,
    eventTypeQuery: null,
    searchQuery: null,

    // sorts
    dateQuery: null,
  }),
  getters: {
    // filers
    filterRules: (state) => ({
      categoryQuery: (event => event.category === state.categoryQuery),
      eventTypeQuery: (event => event.eventType === state.eventTypeQuery),
      searchQuery: (event => doesIncludeWords(event.title, state.searchQuery) ),
    }),
    eventsFiltered() {
      return Object.values(this.filterRules).reduce(
        (filtered, filterCb) => this[filterCb.name] !== null ? filtered.filter(filterCb) : filtered, 
        useStoreEvents().events)
    },
    // sorts
    sortRules: (state) => ({
      dateQuery: ((eventA, eventB) => 
        (toJSDate(eventA.date) - toJSDate(eventB.date) ) 
        * (state.dateQuery === 'inc' ? 1 : -1)
      ),
    }),
    eventsSorted() {
      return Object.values(this.sortRules).reduce(
        (sorted, sortCb) => this[sortCb.name] !== null ? sorted.sort(sortCb) : sorted, 
        [...this.eventsFiltered])
    },
  },
  actions: {

  },
})