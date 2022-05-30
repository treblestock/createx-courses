const path = require('path')
const fs = require('fs')


const { shuffled } = require('../../helpers')

let description = 'Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam.'
let youWillLearn = [
  "A fermentum in morbi pretium aliquam adipiscing donec tempus.",
  "Vulputate placerat amet pulvinar lorem nisl.",
  "Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.",
  "Etiam duis lobortis in fames ultrices commodo nibh.",
  "Fringilla in nec risus congue venenatis pretium posuere nec.",
  "Cursus eu pretium, vulputate tempus quam massa sed at.",
]
let forWhom = [
  "Specialists with more than 1 year of active work experience",
  "Mobile app designers who want to improve their skills in solving business problems, creating, and testing human-centered interfaces",
  "Professional designers who want to feel more confident in UX",
  "Specialists who would like to structure their knowledge, fill in the gaps",
]
const body = 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'
courseProgram = [
  { title: 'Aliquet lectus urna viverra in odio.', body: shuffled(body), },
  { title: 'Orci commodo, viverra orci mollis ut euismod.', body: shuffled(body), },
  { title: 'Sagittis vitae facilisi rutrum amet mauris quisque vel.', body: shuffled(body), },
  { title: 'In id dolor quis nunc, urna hendrerit pharetra.', body: shuffled(body), },
  { title: 'Est, ut tempus id rutrum facilisi.', body: shuffled(body), },
  { title: 'Amet nec in pellentesque.', body: shuffled(body), },
  { title: 'Massa vel arcu mauris, id vel rhoncus mattis quis.', body: shuffled(body), },
  { title: 'Neque, cursus sapien nullam id.', body: shuffled(body), },
]

let id = 0
function coursesFactory({category, title, price, teacherId}) {
  return ({
    id: ++id,

    title,
    category,
    teacherId,
    content: {
      description: shuffled(description),
      youWillLearn: shuffled(youWillLearn),
      forWhom: shuffled(forWhom),
      courseProgram: shuffled(courseProgram),
    },
    price,
    dates: {
      start: new Date(2021, 6, id * 4),
      end: new Date(2021, 6 + 2, id * 4),
    },
  })
}


const coursesData = [
  {
    category: "Marketing",
    title: "The Ultimate Google Ads Training Course",
    price: 480,
    teacherId: 4,
  },
  {
    category: "Management",
    title: "Prduct Management Fundamentals",
    price: 200,
    teacherId: 5,
  },
  {
    category: "HR & Recruting",
    title: "HR  Management and Analytics",
    price: 100,
    teacherId: 2,
  },
  {
    category: 'Marketing',
    title: 'Brand Management & PR Communications',
    price: 500,
    teacherId: 4,
  },
  {
    category: 'Design',
    title: 'Graphic Design Basic',
    price: 400,
    teacherId: 1,
  },
  {
    category: 'Management',
    title: 'Business Development Management',
    price: 530,
    teacherId: 3,
  },
  {
    category: 'Development',
    title: 'Highload Software Architecture',
    price: 600,
    teacherId: 7,
  },
  {
    category: 'HR & Recruting',
    title: 'Human Resources – Selection and Recruitment',
    price: 150,
    teacherId: 6,
  },
  {
    category: 'Design',
    title: 'User Experience. Human-centered Design',
    price: 240,
    teacherId: 8,
  },
]
const courses = coursesData.map(coursesFactory)
const outputPath = path.join(__dirname, '..', 'data', 'courses.js')
fs.writeFileSync(outputPath,
  'const courses = \n' 
  + JSON.stringify(courses) 
  + '\n\nexport default JSON.stringify(courses)\n' 
  + '// module.exports = JSON.stringify(courses)'
)