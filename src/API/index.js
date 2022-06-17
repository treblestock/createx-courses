import categories from './data/categories.js'
import teachers from './data/teachers.js'
import courses from './data/courses.js'
import coursesCategories from './data/coursesCategories.js'
import events from './data/events.js'
import blogPosts from './data/blogPosts.js'
import tags from './data/tags.js'
import reviews from './data/reviews.js'
import contacts from './data/contacts.js'
import socials from './data/socials.js'
import benefits from './data/benefits.js'


const requestResponseMatches = {
  '/categories': categories,
  '/teachers': teachers,
  '/courses': courses,
  '/coursesCategories': coursesCategories,
  '/events': events,
  '/blogPosts': blogPosts,
  '/tags': tags,

  '/reviews': reviews,
  '/contacts': contacts,
  '/socials': socials,
  '/benefits': benefits,
}




class Database {
  constructor(requestResponseMatches) {
    this.requestResponseMatches = requestResponseMatches
  }
  get(query) {
    query = query.startsWith('/') ? query : '/' + query
    return Promise.resolve(this.requestResponseMatches[query])
  }
}
export const database = new Database(requestResponseMatches)