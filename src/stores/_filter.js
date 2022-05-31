import { defineStore } from "pinia"

export const useStoreFilter = defineStore('storeFilter', {
  state: () => ({
    // queryStr = ref('') v-model
  }),
  getters: {
    items: () => [], // useStore().items
    searchRegex() {
      return this.queryStr
      ? new RegExp(queryStr.value.split(' ')
        .reduce((reg, word) => reg += '(' + word + ').*', '.*'))
      : ''
    },
    searchedItems() {
      return this.items.filter(item => item.mathch(this.searchRegex) )
    },
  },
  actions: {
    
  },
})