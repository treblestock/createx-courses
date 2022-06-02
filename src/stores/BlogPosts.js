import { defineStore } from "pinia"
import { database } from "@/API"



export const useStoreBlogPosts = defineStore('storeBlogPosts', {
  state: () => ({
    blogPosts: [],
  }),
  getters: {
    findBlogPost: (state) => (blogPostId, blogPosts) => {
      blogPosts ??= state.blogPosts // no params usage === search among all the blogPost
      return blogPosts.find(blogPost => blogPost.id == blogPostId)
    },
  },
  actions: {
    async fetchBlogPosts() {
      const blogPosts = await database.get('/blogPosts').then(r => JSON.parse(r))
      if (!blogPosts) throw new Error('api failed (no answer) on: storeTeacher.fetchblogPost()')
      this.blogPosts = blogPosts
    },
  },

  async onRegister(store) {
    await store.fetchBlogPosts()
  }
})