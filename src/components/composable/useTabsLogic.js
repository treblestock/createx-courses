export function useTabsLogic({insets, body}) {
  function setActiveTab(event) {
    const bodyItems = [...body.value.children]
    const insetElements = [...insets.value.children]
    

    // const inset = event.target.closest('.tabs__insets>*') // TODO: pure css version with body.addEventListener()
    const inset = insetElements.find(inset => inset.contains(event.target) )
    const activeInd = [...inset.parentElement.children].indexOf(inset)
  
    insetElements.forEach(inset => inset.classList.remove('_active') )
    bodyItems.forEach(inset => inset.classList.remove('_active') )
    insetElements[activeInd].classList.add('_active')
    bodyItems[activeInd].classList.add('_active')
  }

  return {
    setActiveTab,
  }
}