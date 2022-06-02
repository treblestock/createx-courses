// import { watch } from "vue"

export function stateCashing({app, pinia, store, options}) {
  if (options.stateCashingIgnore) return
  const localState = JSON.parse(localStorage.getItem(store.$id) )
  if (localState) store.$state = localState
  else console.log('there is no saved state', store.$id)

  // 1) 
  store.$subscribe((mutation, state) => {
    localStorage.setItem(store.$id, JSON.stringify(state) )
  }, { detached: true } )
  // 2)
  // watch(
  //   () => store.$state,
  //   (state) => {
  //     localStorage.setItem(store.$id, JSON.stringify(state) )
  //   },
  //   { deep: true }
  // )
}