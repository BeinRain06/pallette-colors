import { defineStore } from 'pinia'

export const redColorStore = defineStore('red', {
  state: () => ({
    redLight: ['#e24646'] as Array<string>,
    redMid: ['#ca1313'] as Array<string>,
    redDark: ['#a11818'] as Array<string>
  }),
  getters: {
    redLightArr: (state) => state.redLight,
    redMidArr: (state) => state.redMid,
    redDarkArr: (state) => state.redDark
  },
  actions: {
    switchInstance(label: string): Array<string> {
      let arrColors: string[] = []

      switch (label) {
        case 'light':
          arrColors = this.redLightArr
          break
        case 'medium':
          arrColors = this.redMidArr
          break
        case 'dark':
          arrColors = this.redDarkArr
          break
        default:
          throw Error('Something went wrong getting blueColors Array')
      }
      return arrColors
    }
  }
})
