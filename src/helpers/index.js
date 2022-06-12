const getRandom = (from, to) => Math.floor(from + Math.random() * (to - from + 1))
const getRandomItem = (arr) => arr[getRandom(0, arr.length - 1) ]

const setOfSubsets = (arr) =>
  arr.reduce((sets, item) => sets.concat(sets.map(set => [...set, item]) ), [[]])

// replacements
const arrShuffled = (arr) => {
  let res = [...arr]
  res.forEach( (item, ind) => {
    const ind2 = getRandom(0, res.length - 1)
    ;([res[ind], res[ind2]] = [res[ind2], res[ind]])
  })
  return res
}
const strShuffled = (str, sep=' ') => arrShuffled(str.split(sep)).join(' ')
const shuffled = (arg) => Array.isArray(arg) ? arrShuffled(arg) : strShuffled(arg)



// Strings
const doesIncludeWords = (str, substr) => {
  str = str.toLowerCase()
  substr = substr.toLowerCase()
  const substrWords = substr.split(' ').filter(item => item != '')
  const regexCond = substrWords.reduce((reg, word) => `(${word}.*)` , '.*')
  const r = new RegExp(regexCond)

  return r.exec(str)
}


// date
// JSON-dateParser
const r = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const isDate = str => r.exec(str)

const parseDateHandler = (key, value) => 
  isDate(value) ? separateDate(new Date(value)) : value

// toJSDate 
const toJSDate = (dateObj) =>
  new Date(dateObj.year, monthMap.indexOf(dateObj.month), dateObj.date )
  


const monthMap = [
  'January', 'February', 'March',
  'April', 'May', 'June',
  'July', 'August', 'September',
  'October', 'Novemmbar', 'December',
]
function separateDate(date) {
  return {
    date: date.getDate(),
    month: monthMap[date.getMonth()],
    year: date.getFullYear(),
  }
}



export
// module.exports = 
{
  getRandom,
  getRandomItem,
  setOfSubsets,

  shuffled,
  // strings
  doesIncludeWords,

  // date
  parseDateHandler,
  toJSDate,

}