// TODO: make pure js-dom logic body.addEventListener()
// TODO: adapt logic for setup Created
import { ref } from "vue"
export function useSliderLogic({body, pagination, shift}) {
  let activeInd = 0
  let currentShift = ref(0)
  // const bodyItems = [...body.value.children] //! mounted defined only (runtime) 
  // const pageElements = [...pagination.value.children]
  // const maxInd = bodyItems.length - 1

  
  function updateCurrentShift() {
    const bodyItems = [...body.value.children]
    let newShift = 0
    for (const bodyItem of bodyItems) {
      if (bodyItem.classList.contains('_active') ) break

      const styles = window.getComputedStyle(bodyItem)
      const parnentStyles = window.getComputedStyle(bodyItem.parentElement)
      
      const delta = Number.parseFloat(styles.width) 
        + Number.parseFloat(styles.marginLeft) 
        + Number.parseFloat(styles.marginRight)
        + (Number.parseFloat(parnentStyles.gap) || 0)
      
      newShift += delta
    }
    currentShift.value = -newShift
  }

  function updateCSSClasses() {
    //* Full usage (beautiful code composition)
    // const bodyItems = [...body.value.children]
    // const pageElements = [...pagination.value.children]
    // const maxInd = bodyItems.length - 1
    
    // pageElements.forEach(page => page.classList.remove('_active') )
    // bodyItems.forEach(item => item.classList.remove('_active') )
    // pageElements[activeInd].classList.add('_active')
    // bodyItems[activeInd].classList.add('_active')


    const bodyItems = [...body.value.children]
    bodyItems.forEach(item => item.classList.remove('_active') )
    bodyItems[activeInd].classList.add('_active')
    
    if (!pagination) return
    const pageElements = [...pagination.value.children]
    pageElements.forEach(page => page.classList.remove('_active') )
    pageElements[activeInd].classList.add('_active')
  }
  
  function setSlideActive(event) {
    const pageElements = [...pagination.value.children]
    
    const page = pageElements.find(page => page.contains(event.target) )
    activeInd = [...page.parentElement.children].indexOf(page)
    updateCSSClasses()
    if (shift) updateCurrentShift()
  }
  function setNextSlideActive() {
    const bodyItems = [...body.value.children]
    const maxInd = bodyItems.length - 1
    
    activeInd = (activeInd + 1) % (maxInd + 1)
    updateCSSClasses()
    if (shift) updateCurrentShift()
  }
  function setPrevSlideActive() {
    const bodyItems = [...body.value.children]
    const maxInd = bodyItems.length - 1
    
    activeInd = (activeInd - 1) >= 0 ? activeInd - 1 : maxInd
    updateCSSClasses()
    if (shift) updateCurrentShift()
  }

  return {
    setSlideActive,
    setNextSlideActive,
    setPrevSlideActive,
    currentShift,
  }
}