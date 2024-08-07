<script setup lang="ts">
import { ref, computed } from 'vue'
import { mindTestColorStore } from '../stores/mind-color-trial'

const arrMindAssociation = computed(() => {
  const useMindTestColorStore = mindTestColorStore()

  const catchArr = useMindTestColorStore.catchMelting

  console.log('catchArr:', catchArr)

  return catchArr
})
</script>
<template>
  <div class="mind_colors_container w-100">
    <div class="title_mind_wrap">
      <h3 class="title_mind karla-600 p-2">Mind Colors Trial</h3>
    </div>
    <div class="mind_pattern_wrapper w-100 my-2">
      <div class="mind_pattern_content">
        <div class="header_pattern_container">
          <div class="left_square_pattern"></div>
          <div class="right_square_pattern"></div>
          <div class="line_pattern_upper"></div>
          <div class="title_pattern_wrap w-100 flex justify-center">
            <span class="title_pattern">Adventure</span>
          </div>
        </div>
        <div class="base_pattern_container w-100">
          <div class="base_pattern_content">
            <div class="base_pattern_one w-100">
              <table class="table_colors w-100">
                <tbody class="table_content" v-for="(mindColor, i) in arrMindAssociation">
                  <tr>
                    <th
                      class="title_element_color w-48 font-medium border border-solid border-black"
                    >
                      {{ mindColor.title }}
                    </th>
                  </tr>
                  <tr class="table_elements">
                    <td class="element_color" v-for="(item, i) in mindColor.colorsArr1">
                      {{ item }}
                    </td>
                  </tr>
                  <tr class="table_elements">
                    <td class="element_color" v-for="(item, i) in mindColor.colorsArr2">
                      {{ item }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.karla-600 {
  font-family: 'Karla', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}

.element_color:nth-child(odd) {
  background-color: #ad846c;
}
.element_color:nth-child(even) {
  background-color: #82b98b;
}

@media (min-width: 210px) {
  .title_mind_wrap {
    height: 120px;
    margin-top: 2rem;
    font-size: calc(25px + 0.15vw);
    display: flex;
    justify-content: center;
  }

  .title_pattern_wrap {
    padding-top: 0.25rem;
    font-size: calc(16px + 0.15vw);
  }

  .title_element_color {
    height: 35px;
  }

  .mind_pattern_content {
    width: 94%;
    padding: 0.5rem 0;
    margin: 0.5rem 0 1.5rem;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .mind_pattern_content .header_pattern_container {
    position: relative;
    width: 100%;
    height: 26px;
    background-color: #c1d3ab;
    border: 1px solid black;
    border-top: none;
  }

  .header_pattern_container .left_square_pattern {
    position: absolute;
    top: -14px;
    left: -1px;
    width: 45px;
    height: 14px;
    background-color: #a6bd89;
    border: 1px solid black;
    border-bottom: none;
  }

  .header_pattern_container .right_square_pattern {
    position: absolute;
    top: -25px;
    right: -1px;
    width: 80px;
    height: 25px;
    background-color: #a6bd89;
    border: 1px solid black;
    border-top-right-radius: 12px;
    border-bottom: none;
  }

  .header_pattern_container .line_pattern_upper {
    position: absolute;
    top: -1px;
    left: 42px;
    width: calc(100% - 120px);
    height: 1px;
    background-color: #383636;
  }

  .base_pattern_content {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .table_content {
    width: 100%;
    height: 116px;
    margin: 1.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.15rem;
  }

  .table_content:nth-child(odd) .title_element_color {
    width: 8rem;
    color: #fff;
    background-color: #333;
  }

  .table_content:nth-child(even) .title_element_color {
    width: 8rem;
    color: #fff;
    background-color: #333333dc;
  }

  .table_elements .element_color {
    width: 29vw;
    color: #fff;
    padding-left: 0.75rem;
    height: 35px;
    font-size: calc(12px + 0.1vw);
    border: 1px solid black;
  }
}

@media (min-width: 420px) {
  .mind_pattern_content {
    width: 90%;
  }

  .mind_pattern_content .header_pattern_container {
    height: 36px;
  }

  .header_pattern_container .left_square_pattern {
    position: absolute;
    top: -17px;
    height: 17px;
  }

  .header_pattern_container .right_square_pattern {
    position: absolute;
    top: -36px;
    right: -1px;
    height: 36px;
  }
  .table_elements .element_color {
    font-size: 15px;
  }
}

@media (min-width: 980px) {
  .title_mind_wrap {
    height: 140px;
    margin-top: 4rem;
    font-size: calc(26px + 0.15vw);
  }

  .mind_pattern_content {
    width: 84%;
  }

  .table_content {
    height: 35px;
    margin: 0;
    flex-direction: row;
    gap: 0.1rem;
  }

  .table_content:nth-child(odd) .title_element_color {
    width: 9rem;
    display: flex;
    justify-content: center;
    flex-shrink: 0;
  }

  .table_content:nth-child(even) .title_element_color {
    width: 9rem;
    display: flex;
    justify-content: center;
    flex-shrink: 0;
  }

  .table_elements .element_color {
    width: 10rem;
    height: 35px;
  }
}
</style>
