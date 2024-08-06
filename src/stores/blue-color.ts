import { defineStore } from 'pinia'

export const blueColorStore = defineStore('blue', {
  state: () => ({
    blueLight: ['#3d72af', '#3989e6', '#507caf', '#487fbd'] as Array<string>,
    blueMid: ['#1f4088', '#2d4b8b', '#2e509b', '#234da7'] as Array<string>,
    blueDark: ['#190644', '#0e0446', '#150957', '#200957'] as Array<string>
  }),
  getters: {
    blueLightArr: (state) => state.blueLight,
    blueMidArr: (state) => state.blueMid,
    blueDarkArr: (state) => state.blueDark
  },
  actions: {
    fillRightArr(blueSide: string, blueHexColor: string): void {
      if (blueSide === 'light') {
        this.blueLight.push(blueHexColor)
      } else if (blueSide === 'medium') {
        this.blueMid.push(blueHexColor)
      } else if (blueSide === 'dark') {
        this.blueDark.push(blueHexColor)
      }
    },
    removeAColor(blueSide: string, blueHexColor: string): void {
      let newArr: Array<string>

      if (blueSide === 'light') {
        newArr = this.blueLight.filter((color) => color !== blueHexColor)
        this.blueLight = newArr
      } else if (blueSide === 'medium') {
        newArr = this.blueMid.filter((color) => color !== blueHexColor)
        this.blueMid = newArr
      } else if (blueSide === 'dark') {
        newArr = this.blueDark.filter((color) => color !== blueHexColor)
        this.blueDark = newArr
      }
    },
    switchInstance(label: string): Array<string> {
      let arrColors: string[] = []

      switch (label) {
        case 'light':
          arrColors = this.blueLightArr
          break
        case 'medium':
          arrColors = this.blueMidArr
          break
        case 'dark':
          arrColors = this.blueDarkArr
          break
        default:
          throw Error('Something went wrong getting blueColors Array')
      }

      return arrColors
    }
  }
})
