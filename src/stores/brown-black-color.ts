import { defineStore } from 'pinia'

export const brownBlackColorStore = defineStore('brown-black', {
  state: () => ({
    brownBlackLight: ['#423f3f'] as Array<string>,
    brownBlackMid: ['#332727'] as Array<string>,
    brownBlackDark: ['#333'] as Array<string>
  }),
  getters: {
    brownBlackLightArr: (state) => state.brownBlackLight,
    brownBlackMidArr: (state) => state.brownBlackMid,
    brownBlackDarkArr: (state) => state.brownBlackDark
  },
  actions: {
    switchInstance(label: string): Array<string> {
      let arrColors: string[] = []

      switch (label) {
        case 'light':
          arrColors = this.brownBlackLightArr
          break
        case 'medium':
          arrColors = this.brownBlackMidArr
          break
        case 'dark':
          arrColors = this.brownBlackDarkArr
          break
        default:
          throw Error('Something went wrong getting blueColors Array')
      }
      return arrColors
    }
  }
})
