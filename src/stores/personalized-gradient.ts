import { defineStore } from 'pinia'

export const gradientStore = defineStore('gradient', {
  state: () => ({
    colors: {
      0: {
        title: 'Green To Blue',
        backgroundImage: [
          ' linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
          ' linear-gradient(to top, #051937, #003b63, #005f74, #00815f, #2f9f29)',
          'linear-gradient(to right, #327424, #3e943a, #47b652, #4dd96c, #4efd89)'
        ]
      }
    }
  }),
  getters: {
    gradientColors: (state) => state.colors
  },
  actions: {}
})
