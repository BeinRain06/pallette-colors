import { defineStore } from 'pinia'

import { picturesCol } from './images'

export const myWebsiteColorStore = defineStore('website', {
  state: () => ({
    projects: {
      0: {
        title: 'TdS-ResTaurant',
        bgColors: [
          { alias: '#24a163', tool: 'css' },
          { alias: '#224721', tool: 'css' },
          { alias: '#1c7e4d', tool: 'css' },
          { alias: '#213547', tool: 'css' },
          { alias: '#b6bda6', tool: 'css' },
          { alias: '#d1e26f', tool: 'css' }
        ],
        textColors: [
          { alias: '#b6bda6', tool: 'css', bg: '#b6bda6' },
          { alias: '#333', tool: 'css', bg: '#333' },
          { alias: '#fff', tool: 'css', bg: '#fff' }
        ],
        colorsMood: ['Welcoming', 'Comfortable', 'Natural'],
        storyPattern: ['Natural Cooks', 'Send to your home', 'on Quick Time'],
        pictures: [picturesCol.tds_1, picturesCol.tds_1, picturesCol.tds_1]
      },
      1: {
        title: 'Blog-app-Tech',
        bgColors: [
          { alias: 'bg-gray-800', tool: 'tailwindcss' },
          { alias: 'bg-purple-600', tool: 'tailwindcss' },
          { alias: 'bg-blue-800', tool: 'tailwindcss' },
          { alias: '#f4f4f4', tool: 'css' }
        ],
        textColors: [
          { alias: 'text-gray-200', tool: 'tailwindcss', bg: 'bg-gray-200' },
          { alias: 'text-gray-300', tool: 'tailwindcss', bg: 'bg-gray-300' },
          { alias: 'text-purple-500', tool: 'tailwindcss', bg: 'bg-gray-300' }
        ],
        colorsMood: ['Neutral', 'Communicative', 'Peacefull'],
        storyPattern: ['Articles', 'Review', 'On the Desk'],
        pictures: [picturesCol.blogtech_1, picturesCol.blogtech_2, picturesCol.blogtech_3]
      }
    }
  }),
  getters: {
    baseProjects: (state) => state.projects
  },
  actions: {}
})
