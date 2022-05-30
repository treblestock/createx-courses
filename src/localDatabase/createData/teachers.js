const path = require('path')
const fs = require('fs')

const { shuffled } = require('../../helpers')

const description = 'Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam.'

let id = 0  
function teacherFactory({name, pos}) {
  return ({
    id: ++id,
    name,
    pos,

    description: shuffled(description),

    imgTeacher: `/src/assets/img/content/teachers/for-teachers/0${id}.webp`,
    imgCourse: `/src/assets/img/content/teachers/for-courses/0${id}.webp`,
    socials: [
      'facebook.com',
      'instagram.com',
      'linkedin.com',
      'twitter.com',
    ],

    rate: 4.5 + id / 100,
    courses: [], //? Not clear what todo
    students: 232 - id * 3,
  })
}


const teachersData = [
  {
    name: 'Dianne Russell',
    pos: 'Founder and CEO',
  },
  {
    name: 'Jerome Bell',
    pos: 'Founder and Program Director',
  },
  {
    name: 'Kristin Watson',
    pos: 'Marketer, Curator of Marketing Course',
  },
  {
    name: 'Marvin McKinney',
    pos: 'PM, Curator of Management Course',
  },
  {
    name: 'Leslie Alexander Li',
    pos: 'Curator of HR & Recruting Course',
  },
  {
    name: 'Kathryn Murphy',
    pos: 'Analyst and Marketing specialist',
  },
  {
    name: 'Brooklyn Simmons',
    pos: 'Curator of Development Course',
  },
  {
    name: 'Cody Fisher',
    pos: 'UX Designer, Curator of Design Course',
  },
]
const teachers = teachersData.map(teacherFactory)
const outputPath = path.join(__dirname, '..', 'data', 'teachers.js')
fs.writeFileSync(outputPath,
  'const teachers = \n' 
  + JSON.stringify(teachers) 
  + '\n\nexport default JSON.stringify(teachers)\n' 
  + '// module.exports = JSON.stringify(teachers)'
)