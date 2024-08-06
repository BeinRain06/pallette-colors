import { defineStore } from 'pinia'

export const orangeColorStore = defineStore('orange', {
  state: () => ({
    orangeLight: ['#cca53a'] as Array<string>,
    orangeMid: ['#866b1f'] as Array<string>,
    orangeDark: ['#5c4506'] as Array<string>
  }),
  getters: {
    orangeLightArr: (state) => state.orangeLight,
    orangeMidArr: (state) => state.orangeMid,
    orangeDarkArr: (state) => state.orangeDark
  },
  actions: {
    switchInstance(label: string): Array<string> {
      let arrColors: string[] = []

      switch (label) {
        case 'light':
          arrColors = this.orangeLightArr
          break
        case 'medium':
          arrColors = this.orangeMidArr
          break
        case 'dark':
          arrColors = this.orangeDarkArr
          break
        default:
          throw Error('Something went wrong getting blueColors Array')
      }
      return arrColors
    }
  }
})
