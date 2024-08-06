<script setup lang="ts">
import { ref, computed } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { blueColorStore } from '../stores/blue-color'
import { greenColorStore } from '../stores/green-color'
import { purpleColorStore } from '../stores/purple-color'
import { orangeColorStore } from '../stores/orange-color'
import { yellowColorStore } from '../stores/yellow-color'
import { pinkColorStore } from '../stores/pink-color'
import { redColorStore } from '../stores/red-color'
import { whiteGrayColorStore } from '../stores/white-gray-color'
import { brownBlackColorStore } from '../stores/brown-black-color'

const props = defineProps<{ label: string }>()

let valueArr = ref([])
let category = ref('')

const arrBgColors = computed(() => {
  const arrLabel = props.label.split('-')
  category.value = arrLabel[1]
  let arrCollect

  if (arrLabel[0] === 'blue') {
    const useBlueColorStore = blueColorStore()
    arrCollect = useBlueColorStore.switchInstance(arrLabel[1], arrLabel[0])
  } else if (arrLabel[0] === 'green') {
    const useGreenColorStore = greenColorStore()
    arrCollect = useGreenColorStore.switchInstance(arrLabel[1], arrLabel[0])
  } else if (arrLabel[0] === 'purple') {
    const usePurpleColorStore = purpleColorStore()
    arrCollect = usePurpleColorStore.switchInstance(arrLabel[1], arrLabel[0])
  } else if (arrLabel[0] === 'orange') {
    const useOrangeColorStore = orangeColorStore()
    arrCollect = useOrangeColorStore.switchInstance(arrLabel[1], arrLabel[0])
  } else if (arrLabel[0] === 'yellow') {
    const useYellowColorStore = yellowColorStore()
    arrCollect = useYellowColorStore.switchInstance(arrLabel[1], arrLabel[0])
  } else if (arrLabel[0] === 'pink') {
    const usePinkColorStore = pinkColorStore()
    arrCollect = usePinkColorStore.switchInstance(arrLabel[1], arrLabel[0])
  } else if (arrLabel[0] === 'red') {
    const useRedColorStore = redColorStore()
    arrCollect = useRedColorStore.switchInstance(arrLabel[1], arrLabel[0])
  } else if (arrLabel[0] === 'white') {
    const useWhiteGrayColorStore = whiteGrayColorStore()
    arrCollect = useWhiteGrayColorStore.switchInstance(arrLabel[1], arrLabel[0])
  } else if (arrLabel[0] === 'black') {
    const useBrownBlackColorStore = brownBlackColorStore()
    arrCollect = useBrownBlackColorStore.switchInstance(arrLabel[1], arrLabel[0])
  }

  return arrCollect
})

function myBgColor(item) {
  return { backgroundColor: item }
}
</script>

<template>
  <div class="card_color_container w-100 my-2 p-2">
    <div class="card_color_content">
      <div class="color_range_contrast">
        <div
          class="bar_mini_range relative top-0 w-100 mx-2 bg-gray-500"
          style="height: 1px; box-shadow: 2px 1px 3px red"
        ></div>
        <div class="box_range_label">
          <span class="range_label">{{ category }}</span>
        </div>
        <div class="square_range_wrapper w-100 flex justify-center gap-4">
          <div class="mini_square_range w-5 h-2 border border-solid border-current"></div>
          <div class="mini_square_range w-5 h-2 border border-solid border-current"></div>
          <div class="mini_square_range w-5 h-2 border border-solid border-current"></div>
        </div>
      </div>
      <div class="range_colors_wrap">
        <div class="range_colors">
          <div class="association_color" v-for="(item, i) in arrBgColors">
            <div class="color_bg" :style="myBgColor(item)"></div>
            <div class="bg_hex_label">{{ item }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 210px) {
  .card_color_content {
    width: 100%;
    padding: 0.5rem;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .card_color_content .color_range_contrast {
    width: 8rem;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .color_range_contrast .box_range_label {
    margin: 1rem 0.75rem 0.75rem;
    height: 62%;
    display: grid;
    place-items: center;
    border: 1px solid black;
  }

  .card_color_content .range_colors_wrap {
    width: 90vw;
  }
  .card_color_content .range_colors {
    width: 100%;
    padding: 1rem 0.5rem;
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(max(var(--box-color-min-width), var(--box-color-max-width)), 1fr)
    );
    grid-auto-rows: 126px;

    column-gap: var(--gap-layout);
    row-gap: calc(var(--gap-layout) + 10px);
  }

  .range_colors .association_color {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    border: 1px solid black;
  }

  .association_color .color_bg {
    width: 100%;
    height: 82%;
  }

  .association_color .bg_hex_label {
    letter-spacing: 1.5px;
    padding: 3px 0;
    @apply leading-tight text-sm text-center;
  }
}

@media (min-width: 460px) {
  .card_color_content {
    width: 100%;
    flex-direction: row;
    align-items: baseline;
  }

  .card_color_content .color_range_contrast {
    height: 140px;
  }

  .card_color_content .range_colors_wrap {
    width: 80%;
  }

  .card_color_content .range_colors {
    padding: 1rem;
  }
}

@media (min-width: 640px) {
  .card_color_content .color_range_contrast {
    width: 15%;
    height: 140px;
  }

  .card_color_content .range_colors {
    padding: 1rem 1.5rem;
  }
}
</style>
