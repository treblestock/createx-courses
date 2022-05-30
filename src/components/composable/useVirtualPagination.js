import { ref, computed, watch } from 'vue'
export function useVirtualPagination(items) {
  // UI:
  // primitiveItems :='item'
  // limiter
  // pagination 


  // useVirtualPaginaton(posts)
  // const {limit, pages, currentPage, currentPageItems: currentPagePosts} = useVirtualPaginaton(posts)


  const limit = ref(2)
  const currentPage = ref(1)

  const pages = computed(
    () => new Array(Math.ceil(items.value.length / limit.value))
      .fill(0)
      .map((item, ind) => ++ind)
  )


  let startInd = computed(() => limit.value * (currentPage.value - 1) )
  let endInd = computed(() => startInd.value + limit.value)
  const currentPageItems = computed(() => items.value.slice(startInd.value, endInd.value))

  return {
    limit,
    pages,
    currentPage,
    currentPageItems,
  }
}