import { defineStore } from 'pinia'

export const greenColorStore = defineStore('green', {
  state: () => ({
    greenLight: ['#81ff5b'] as Array<string>,
    greenMid: ['#38a516'] as Array<string>,
    greenDark: ['#195207'] as Array<string>
  }),
  getters: {
    greenLightArr: (state) => state.greenLight,
    greenMidArr: (state) => state.greenMid,
    greenDarkArr: (state) => state.greenDark
  },
  actions: {
    switchInstance(label: string): Array<string> {
      let arrColors: string[] = []

      switch (label) {
        case 'light':
          arrColors = this.greenLightArr
          break
        case 'medium':
          arrColors = this.greenMidArr
          break
        case 'dark':
          arrColors = this.greenDarkArr
          break
        default:
          throw Error('Something went wrong getting blueColors Array')
      }
      return arrColors
    }
  }
})

/* switch (arrLabel[1]) {
  case 'light':
    arrColors = useBlueStore.blueLightArr
    console.log('arrColors :', arrColors)
    break
  case 'medium':
    arrColors = useBlueStore.blueMidArr
    break
  case 'dark':
    arrColors = useBlueStore.blueDarkArr
    break
  default:
    throw Error('Something went wrong getting blueColors Array')
} */
