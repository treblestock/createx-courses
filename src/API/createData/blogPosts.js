const path = require('path')
const fs = require('fs')


const { shuffled, getRandomItem, getRandom, setOfSubsets } = require('../helpersDataGeneration')

const categories = ["Marketing", "Management", "HR & Recruting", "Design", "Development"]

const description = 'Malesuada in augue mi feugiat morbi a aliquet enim. Elementum lacus, pellentesque etiam arcu tristique ac'
const p = "At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel."
const lis = [
  "A fermentum in morbi pretium aliquam adipiscing donec tempus.",
  "Vulputate placerat amet pulvinar lorem nisl.",
  "Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.",
  "Etiam duis lobortis in fames ultrices commodo nibh.",
] 

const blogPostTypes = ['video', 'podcast', 'article']
const tags = [
  "marketing",
  "recruiting",
  "coding",
  "learning",
  "HR",
  "self-development",
]


let id = 0
function blogPostsFactory({title}) {
  return ({
    id: ++id,
    
    title,
    description: shuffled(description) + '...',

    img: `/img/content/blogPosts/0${id}.webp`,
    teacherId: getRandom(1, 8),
    timeToRead: getRandom(4, 10),
    date: new Date(2021, 6, id * 4),
    category: getRandomItem(categories),
    postType: getRandomItem(blogPostTypes),
    tags: getRandomItem(setOfSubsets(tags) ),
    
    content: [
      {pb: shuffled(p) },
      {p: shuffled(p) },
      {p: shuffled(p) },
      {quote: shuffled(p) },
      {p: shuffled(p) },
      {ul: {
        icon: 'tick-circled',
        lis: shuffled(lis),
      }},
      {p: shuffled(p) },
    ],
  })
}



const blogPostsData = [
  {title: "What is traffic arbitrage and does it really make money?"},
  {title: "How to choose the first programming language for a beginner"},
  {title: "Should you choose a creative profession if you are attracted to creativity?"},
  {title: "HR statistics: job search,  interviews, hiring and recruiting"},
  {title: "What to do and who to talk to if you want to get feedback on the product"},
  {title: "What are color profiles and how they work in graphic design"},
  {title: "Startup: how to build a team that will live longer than a year"},
  {title: "How to get customers to love your business from the start"},
]


const blogPosts = blogPostsData.map(blogPostsFactory)
const outputPath = path.join(__dirname, '..', 'data', 'blogPosts.js')
fs.writeFileSync(outputPath,
  'const blogPosts = \n' 
  + JSON.stringify(blogPosts) 
  + '\n\nexport default JSON.stringify(blogPosts)\n' 
  + '// module.exports = JSON.stringify(blogPosts)'
)