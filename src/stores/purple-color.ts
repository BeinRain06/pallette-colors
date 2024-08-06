import { defineStore } from 'pinia'

export const purpleColorStore = defineStore('purple', {
  state: () => ({
    purpleLight: ['#cc3ac0'] as Array<string>,
    purpleMid: ['#8b1582'] as Array<string>,
    purpleDark: ['#52074c'] as Array<string>
  }),
  getters: {
    purpleLightArr: (state) => state.purpleLight,
    purpleMidArr: (state) => state.purpleMid,
    purpleDarkArr: (state) => state.purpleDark
  },
  actions: {
    switchInstance(label: string): Array<string> {
      let arrColors: string[] = []

      switch (label) {
        case 'light':
          arrColors = this.purpleLightArr
          break
        case 'medium':
          arrColors = this.purpleMidArr
          break
        case 'dark':
          arrColors = this.purpleDarkArr
          break
        default:
          throw Error('Something went wrong getting blueColors Array')
      }
      return arrColors
    }
  }
})
