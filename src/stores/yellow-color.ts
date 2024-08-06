import { defineStore } from 'pinia'

export const yellowColorStore = defineStore('yellow', {
  state: () => ({
    yellowLight: ['#f3f56f'] as Array<string>,
    yellowMid: ['#bec03c'] as Array<string>,
    yellowDark: ['#c1c40d'] as Array<string>
  }),
  getters: {
    yellowLightArr: (state) => state.yellowLight,
    yellowMidArr: (state) => state.yellowMid,
    yellowDarkArr: (state) => state.yellowDark
  },
  actions: {
    switchInstance(label: string): Array<string> {
      let arrColors: string[] = []

      switch (label) {
        case 'light':
          arrColors = this.yellowLightArr
          break
        case 'medium':
          arrColors = this.yellowMidArr
          break
        case 'dark':
          arrColors = this.yellowDarkArr
          break
        default:
          throw Error('Something went wrong getting blueColors Array')
      }
      return arrColors
    }
  }
})
