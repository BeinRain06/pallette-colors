import { defineStore } from 'pinia'

export const mindTestColorStore = defineStore('mind-test', {
  state: () => ({
    trialAssociation: {
      0: {
        title: 'Black Attitude',
        colorsArr1: ['black', '', 'white'],
        colorsArr2: ['', '', 'thin gray']
      },
      1: {
        title: 'Exclusive',
        colorsArr1: ['black', '', 'mid gray'],
        colorsArr2: ['', '', '']
      },
      2: {
        title: 'Appealing',
        colorsArr1: ['thin gray', 'yellow', 'yellow'],
        colorsArr2: ['tergal', 'gray', 'glowing']
      },
      3: {
        title: 'Appealing',
        colorsArr1: ['green', 'normal', ''],
        colorsArr2: ['', 'blue', 'jean']
      },
      4: {
        title: 'Universal',
        colorsArr1: ['green', 'bold', ''],
        colorsArr2: ['white', '', '']
      },
      5: {
        title: 'Universal',
        colorsArr1: ['blue', 'normal', ''],
        colorsArr2: ['white', '', '']
      },
      6: {
        title: 'Dietetics (Health)',
        colorsArr1: ['citron', 'mellow', 'papaya'],
        colorsArr2: ['green', 'flowers', '']
      },
      7: {
        title: 'Cool On the Go',
        colorsArr1: ['blue', 'jean', 'gray'],
        colorsArr2: ['middle', 'gray', 'thin']
      },
      8: {
        title: 'Marvelous',
        colorsArr1: ['thin tergal', 'yellow', 'rose'],
        colorsArr2: ['thin', 'black', 'thin']
      },
      9: {
        title: 'staring',
        colorsArr1: ['green/flower', 'brown/yellow', 'white/gray'],
        colorsArr2: ['broke', 'black', 'ray']
      },
      10: {
        title: 'Lovely',
        colorsArr1: ['brown', 'mid', ''],
        colorsArr2: ['', 'yellow', 'chalky']
      },
      11: {
        title: 'Experimental',
        colorsArr1: ['black', 'yellow', 'chalky'],
        colorsArr2: ['', 'yellow', 'standard']
      },
      12: {
        title: 'Lovely',
        colorsArr1: ['rose', 'thin', ''],
        colorsArr2: ['', 'rose', 'heavy']
      },
      13: {
        title: 'Zen-Attitude',
        colorsArr1: ['yellow', 'chalky', ''],
        colorsArr2: ['yellow', 'chalky', 'tergal']
      },
      14: {
        title: 'Belonging Place',
        colorsArr1: ['brown', 'mid', 'gray-white'],
        colorsArr2: ['', 'yellow', 'chalky']
      },
      15: {
        title: 'Sports',
        colorsArr1: ['gray-yellow', 'mid', 'blue'],
        colorsArr2: ['standard', '', 'white']
      },
      16: {
        title: 'Lovely',
        colorsArr1: ['red', '', ''],
        colorsArr2: ['green', 'flower', '']
      },
      17: {
        title: 'Cool Attitude',
        colorsArr1: ['black', 'broken-white', ''],
        colorsArr2: ['brown', 'yellow', 'light']
      },
      18: {
        title: 'Convenient',
        colorsArr1: ['gray-turn', 'black', 'gray'],
        colorsArr2: ['mid', '', 'white']
      },
      19: {
        title: 'Immersive',
        colorsArr1: ['blue', 'marine', ''],
        colorsArr2: ['', 'gray', 'mid']
      },
      20: {
        title: 'Transporting',
        colorsArr1: ['blue', 'marine', 'gray'],
        colorsArr2: ['mid', 'black', 'soft']
      },
      21: {
        title: 'Appealing',
        colorsArr1: ['brown-turn', 'red', 'yellow'],
        colorsArr2: ['leaf', 'ceil-sponge', '']
      },
      22: {
        title: 'Nature',
        colorsArr1: ['orange', 'yellow', 'leaf'],
        colorsArr2: ['ceil-sponge', 'brown-black', 'soft']
      }
    }
  }),
  getters: {
    catchMelting: (state) => Object.values(state.trialAssociation)
  },
  actions: {}
})
