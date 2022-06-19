const path = require('path')
const fs = require('fs')

const { shuffled, getRandomItem, getRandom, setOfSubsets } = require('../helpersDataGeneration')

const body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.'

const categories = ["Marketing", "Management", "HR & Recruting", "Design", "Development"]
const names = [
  "Leanne Graham",
  "Romaguera Crona",
  "Ervin Howell",
  "Deckow Crist",
  "Clementine Bauch",
  "Romaguera Jacobson",
  "Patricia Lebsack",
  "Robel Corkery",
  "Chelsey Dietrich",
  "Keebler LLC",
  "Dennis Schulist",
  "Considine Lockman",
]


let id = 0
function reviewsFactory() {
  return ({
    id: ++id,
    body: shuffled(body),

    student: {
      img: `/img/content/students/0${id}.webp`,
      pos: 'position',
      name: getRandomItem(names),
      course: getRandomItem(categories),
    },
  })
}



const reviewsData = new Array(7).fill(0)

const reviews = reviewsData.map(reviewsFactory)
const outputPath = path.join(__dirname, '..', 'data', 'reviews.js')
fs.writeFileSync(outputPath,
  'const reviews = \n' 
  + JSON.stringify(reviews) 
  + '\nexport default JSON.stringify(reviews)\n' 
  + '// module.exports = JSON.stringify(reviews)'
)