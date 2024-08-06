import { defineStore } from 'pinia'

export const whiteGrayColorStore = defineStore('white-gray', {
  state: () => ({
    whiteGrayLight: ['#fff'] as Array<string>,
    whiteGrayMid: ['#eee'] as Array<string>,
    whiteGrayDark: ['#ccc'] as Array<string>
  }),
  getters: {
    whiteGrayLightArr: (state) => state.whiteGrayLight,
    whiteGrayMidArr: (state) => state.whiteGrayMid,
    whiteGrayDarkArr: (state) => state.whiteGrayDark
  },
  actions: {
    switchInstance(label: string): Array<string> {
      let arrColors: string[] = []

      switch (label) {
        case 'light':
          arrColors = this.whiteGrayLightArr
          break
        case 'medium':
          arrColors = this.whiteGrayMidArr
          break
        case 'dark':
          arrColors = this.whiteGrayDarkArr
          break
        default:
          throw Error('Something went wrong getting blueColors Array')
      }
      return arrColors
    }
  }
})
