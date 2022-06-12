import { defineStore } from "pinia"
import { useStoreCourses } from "./Courses"
import { doesIncludeWords } from "@/helpers"


export const useStoreCoursesFilters = defineStore('storeCoursesFilters', {
  state: () => ({
    categoryQuery: null,
    searchQuery: null,
  }),
  getters: {
    filterRules: (state) => ({
      categoryQuery: (course => course.category === state.categoryQuery),
      searchQuery: (course => doesIncludeWords(course.title, state.searchQuery) ),
    }),
    coursesFiltered() {
      return Object.values(this.filterRules).reduce(
        (filtered, filterCb) => this[filterCb.name] !== null ? filtered.filter(filterCb) : filtered, 
      useStoreCourses().courses)
    },
  },
  actions: {

  },
})