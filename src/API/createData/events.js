const path = require('path')
const fs = require('fs')


const { shuffled, getRandomItem, getRandom } = require('../../helpers')

let forWhom = [
  "Specialists with more than 1 year of active work experience",
  "Mobile app designers who want to improve their skills in solving business problems, creating, and testing human-centered interfaces",
  "Professional designers who want to feel more confident in UX",
]
let body = 'Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.'

let weWillTalk = [
  { title: 'Aliquet lectus urna viverra in odio.', body: shuffled(body), },
  { title: 'Orci commodo, viverra orci mollis ut euismod.', body: shuffled(body), },
  { title: 'Sagittis vitae facilisi rutrum amet mauris quisque vel.', body: shuffled(body), },
  { title: 'In id dolor quis nunc, urna hendrerit pharetra.', body: shuffled(body), },
]

const prices = [
  0, 0, 
  0, 0,
  100, 170,
  200, 220,
]
const eventLinks = ['facebook.com']
const eventTypes = ['Workshop', 'Lecture', 'Master-class']
const times = [
  '10:00-11:00', '10:00-12:00', '10:00-13:00',
  '11:00-12:00', '11:00-13:00', '11:00-14:00',
  '12:00-13:00', '12:00-14:00', '12:00-15:00',
  '13:00-14:00', '13:00-15:00', '13:00-16:00',
  '14:00-15:00', '14:00-16:00', '14:00-17:00',
]

let id =0 
function eventsFactory({category, title, price, teacherId}) {
  return ({
    id: ++id,
    
    title,
    category,
    eventType: getRandomItem(eventTypes),
    teacherId,
    content: {
      weWillTalk: shuffled(weWillTalk),
      forWhom: shuffled(forWhom),
    },
    price,
    date: new Date(2021, 6, id * 4),
    time: getRandomItem(times),
    eventLink: eventLinks[0],
  })
}


const eventsData = [
  {
    category: "Marketing",
    title: "Formation of the organizational structure of the company in the face of uncertainty.",
    price: 30,
    teacherId: 4,
  },
  {
    category: "Management",
    title: "Building a customer service department. Best Practices.",
    price: 0,
    teacherId: 5,
  },
  {
    category: "HR & Recruting",
    title: "How to apply methods of speculative design in practice. Worldbuilding prototyping.",
    price: 10,
    teacherId: 2,
  },
  {
    category: 'Marketing',
    title: "Find and evaluate: search and assessment tools for candidates.",
    price: 5,
    teacherId: 4,
  },
  {
    category: 'Design',
    title: "Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI",
    price: 20,
    teacherId: 1,
  },
  {
    category: 'Management',
    title: "Marketing or growth hacking: main differences and what business needs",
    price: 0,
    teacherId: 3,
  },
  {
    category: 'Development',
    title: "How to brief a client and present your design to approve it from the first show.",
    price: 0,
    teacherId: 7,
  },
  {
    category: 'HR & Recruting',
    title: "Who is a project manager and do I want to be PM?",
    price: 150,
    teacherId: 6,
  },
  {
    category: 'Design',
    title: "The company's business page as an additional tool to support the announcement of vacancies.",
    price: 0,
    teacherId: 8,
  },
]
const events = eventsData.map(eventsFactory)
const outputPath = path.join(__dirname, '..', 'data', 'events.js')
fs.writeFileSync(outputPath,
  'const events = \n' 
  + JSON.stringify(events) 
  + '\n\nexport default JSON.stringify(events)\n' 
  + '// module.exports = JSON.stringify(events)'
)