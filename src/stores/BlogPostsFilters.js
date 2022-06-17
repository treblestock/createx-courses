import { defineStore } from "pinia"
import { useStoreBlogPosts } from "./BlogPosts"
import { doesIncludeWords } from "@/helpers"
import { toJSDate } from "@/helpers"
import { storeToRefs } from "pinia"


export const useStoreBlogPostsFilters = defineStore('storeBlogPostsFilters', {
  state: () => ({
    // filters
    categoryQuery: null,
    postTypeQuery: null,
    tagsQuery: [],
    searchQuery: null,
    // sorts
    dateQuery: null,
  }),
  getters: {
    // filters
    filterRules: (state) => ({
      categoryQuery: (blogPost => blogPost.category === state.categoryQuery),
      postTypeQuery: (blogPost => blogPost.postType === state.postTypeQuery),
      tagsQuery: (blogPost => 
        !state.tagsQuery.length ? true : state.tagsQuery.every(tag => blogPost.tags.includes(tag) )
      ),
      searchQuery: (blogPost => doesIncludeWords(blogPost.title, state.searchQuery) ),
    }),
    blogPostsFiltered() {
      return Object.values(this.filterRules).reduce(
        (filtered, filterCb) => this[filterCb.name] !== null ? filtered.filter(filterCb) : filtered, 
      useStoreBlogPosts().blogPosts)
    },
    // sorts
    sortRules: (state) => ({
      dateQuery: ((a, b) => 
        (toJSDate(a.date) - toJSDate(b.date) ) 
        * (state.dateQuery === 'inc' ? 1 : -1)
      ),
    }),
    blogPostsSorted() {
      return Object.values(this.sortRules).reduce(
        (sorted, sortCb) => this[sortCb.name] !== null ? sorted.sort(sortCb) : sorted, 
      [...this.blogPostsFiltered])
    },
  },
  actions: {

  },
})