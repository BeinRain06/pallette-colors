<script setup lang="ts">
import { ref, computed } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { blueColorStore } from '../stores/blue-color'

const props = defineProps<{ label: string }>()

let valueArr = ref([])

const arrBgColors = computed(() => {
  console.log('props elements:', props)

  let arrColors = [] as Array<string>

  const arrLabel = props.label.split('-')

  console.log('arrLabel :', arrLabel)

  if (arrLabel[0] === 'blue') {
    const useBlueStore = blueColorStore()

    switch (arrLabel[1]) {
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
    }
  } else if (arrLabel[0] === 'green') {
  } else if (arrLabel[0] === 'purple') {
  } else if (arrLabel[0] === 'orange') {
  } else if (arrLabel[0] === 'orange') {
  } else if (arrLabel[0] === 'yellow') {
  } else if (arrLabel[0] === 'pink') {
  } else if (arrLabel[0] === 'red') {
  } else if (arrLabel[0] === 'white') {
  } else if (arrLabel[0] === 'black') {
  }

  return arrColors
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
          <span class="range_label">strong</span>
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
@media (min-width: 260px) {
  .card_color_content {
    width: 100%;
    padding: 0.5rem;
    position: relative;
    display: flex;
    gap: 1rem;
  }
  .card_color_content .color_range_contrast {
    width: 15%;
    height: 140px;
    display: flex;
    flex-direction: column;
  }

  .color_range_contrast .box_range_label {
    margin: 1rem 0.75rem 0.75rem;
    height: 62%;
    display: grid;
    place-items: center;
    border: 1px solid black;
  }

  .card_color_content .range_colors_wrap {
    width: 80%;
  }
  .card_color_content .range_colors {
    width: 100%;
    padding: 1rem 1.5rem;
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
</style>
