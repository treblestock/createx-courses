import categories from './data/categories.js'
import teachers from './data/teachers.js'
import courses from './data/courses.js'
import events from './data/events.js'
import posts from './data/posts.js'
import tags from './data/tags.js'
import reviews from './data/reviews.js'

// const categories = require('./data/categories.js')
// const teachers = require('./data/teachers.js')
// const courses = require('./data/courses.js')
// const events = require('./data/events.js')
// const posts = require('./data/posts.js')
// const tags = require('./data/tags.js')
// const reviews = require('./data/reviews.js')




const requestResponseMatches = {
  '/categories': categories,
  '/teachers': teachers,
  '/courses': courses,
  '/events': events,
  '/posts': posts,
  '/tags': tags,

  '/reviews': reviews,
}




class Database {
  constructor(requestResponseMatches) {
    this.requestResponseMatches = requestResponseMatches
  }
  get(query) {
    query = query.startsWith('/') ? query : '/' + query
    return Promise.resolve(this.requestResponseMatches[query])
    // return this.requestResponseMatches[query]
  }
}
export const database = new Database(requestResponseMatches)