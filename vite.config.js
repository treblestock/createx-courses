import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
// export default defineConfig({
//   base: '/createx-courses_page/',
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src')
//     },
//   },
//   plugins: [vue()]
// })
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src')
        },
      },
      plugins: [vue()]
    }
  } else {
    return {
      base: '/createx-courses_page/',
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src')
        },
      },
      plugins: [vue()]
    }
  }
})
