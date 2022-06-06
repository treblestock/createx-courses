export function onRegister({app, pinia, store, options}) {
  if (!options.onRegister) return
  options.onRegister(store)
}

// NOTE: onRegister is a store async hook, nevertheless a plugin,
// lanching the hook isn't have to be async, because 
// the plugin is aimed to just laucnh it, and async function (which onRegister is)
// has all the required to manage async logic itself