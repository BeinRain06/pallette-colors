import { defineStore } from 'pinia'

export const pinkColorStore = defineStore('pink', {
  state: () => ({
    pinkLight: ['#f56fd8'] as Array<string>,
    pinkMid: ['#b91b97'] as Array<string>,
    pinkDark: ['#7d0681'] as Array<string>
  }),
  getters: {
    pinkLightArr: (state) => state.pinkLight,
    pinkMidArr: (state) => state.pinkMid,
    pinkDarkArr: (state) => state.pinkDark
  },
  actions: {
    switchInstance(label: string): Array<string> {
      let arrColors: string[] = []

      switch (label) {
        case 'light':
          arrColors = this.pinkLightArr
          break
        case 'medium':
          arrColors = this.pinkMidArr
          break
        case 'dark':
          arrColors = this.pinkDarkArr
          break
        default:
          throw Error('Something went wrong getting blueColors Array')
      }
      return arrColors
    }
  }
})
