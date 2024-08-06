<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { myWebsiteColorStore } from '../stores/mywebsite-color'

const props = defineProps<{
  myproject: {
    title: string
    bgColors: Array<{ alias: string; tool: string }>
    textColors: Array<{ alias: string; tool: string }>
    colorsMood: Array<string>
    storyPattern: Array<string>
    pictures: Array<any>
  }
  indexproject: number
}>()

const labelOne = ref('background')
const labelTwo = ref('text')

const bgCircle = ref([])
let bgCircleArr = ref([])
const txtCircle = ref([])
let bgDisplay = reactive({
  bgTool: '',
  suitBgColor: ''
})

let txtDisplay = reactive({
  txtTool: '',
  suitTextColor: ''
})

const imageItemsOne = ref([])
const imageItemsTwo = ref([])
const imageItemsThree = ref([])

const project = computed(() => {
  return props.myproject
})

const indexproject = computed(() => {
  return props.indexproject
})

const colorsmood = computed(() => {
  return props.myproject.colorsMood
})

const storypattern = computed(() => {
  return props.myproject.storyPattern
})

async function pictureCover(project, i) {
  console.log('items in:', i)

  const pictureWrapOne = await Array.from(imageItemsOne.value)
  const pictureWrapTwo = await Array.from(imageItemsTwo.value)
  const pictureWrapThree = await Array.from(imageItemsThree.value)

  console.log(`pictureWrapOne ${i} :`, pictureWrapOne[i])
  console.log(`pictureWrapTwo ${i} :`, pictureWrapTwo[i])
  console.log(`pictureWrapThree ${i} :`, pictureWrapThree[i])

  pictureWrapOne[i].style.backgroundImage = `${project.pictures[0]}`
  pictureWrapTwo[i].style.backgroundImage = `${project.pictures[1]}`
  pictureWrapThree[i].style.backgroundImage = `${project.pictures[2]}`
}

async function fnBgTextColor(item, i, label) {
  const itemTool = item.tool
  const itemAlias = item.alias
  let itemBgText = item?.bg

  const circleArrElts = Array.from(bgCircle.value)

  const txtArrElts = Array.from(txtCircle.value)

  if (itemTool === 'css') {
    const natureWrapper =
      label === 'background'
        ? setTimeout(() => {
            circleArrElts.forEach((elt, j) => {
              if (i === j) {
                elt.style.backgroundColor = itemAlias
              }
            })
          }, 4000)
        : setTimeout(() => {
            txtArrElts.forEach((elt, j) => {
              if (i === j) {
                elt.style.backgroundColor = itemAlias
              }
            })
          }, 4000)
  } else if (itemTool === 'tailwindcss') {
    const natureWrapper =
      label === 'background'
        ? setTimeout(() => {
            circleArrElts.forEach((elt, j) => {
              if (i === j) {
                elt.classList.add(itemAlias)
              }
            })
          }, 4000)
        : setTimeout(() => {
            txtArrElts.forEach((elt, j) => {
              if (i === j) {
                elt.classList.add(itemBgText)
              }
            })
          }, 4000)
  }
}

function backgroundOrTextActive(i, label) {
  let circleArr
  if (label === 'background') {
    circleArr = Array.from(bgCircle.value)
  } else {
    circleArr = Array.from(txtCircle.value)
  }

  circleArr.forEach((item, j) => {
    if (i === j) {
      item.classList.add('circ_active')
      console.log('item here:', item)

      const color = item.getAttribute('data-alias')
      const cssFramework = item.getAttribute('data-css')

      if (label === 'background') {
        console.log(color)
        console.log(cssFramework)
        bgDisplay.suitBgColor = color
        bgDisplay.bgTool = `( ${cssFramework} )`
      } else if (label === 'text') {
        txtDisplay.suitTextColor = color
        txtDisplay.txtTool = `( ${cssFramework} )`
      }
    } else {
      item.classList.remove('circ_active')
    }
  })
}

function resetDataColor(e) {
  console.log(e.target)
  if (!e.target.classList.contains('color_circ_app')) {
    bgDisplay.bgTool = ''
    bgDisplay.suitBgColor = ''
    txtDisplay.suitTextColor = ''
    txtDisplay.txtTool = ''
    const lastActive = document.querySelector('.circ_active')
    lastActive.classList.remove('circ_active')
  }
}
</script>

<template>
  <div class="website_container w-100 py-2 sm:py-4 sm:px-2 flex flex-col">
    <div class="web_app_concern w-100 my-4 flex flex-col">
      <div class="w-100 flex justify-start">
        <span class="app_list_number mr-2">1.</span>
        <h2 class="title_app_concern mx-2">{{ project.title }}</h2>
      </div>
      <div class="web_app_theory">
        <div class="app_preliminary_side">
          <div class="picture_app_wrapper">
            <div
              class="picture_app"
              data-index="0"
              :style="async (indexproject) => pictureCover(project, indexproject)"
              ref="imageItemsOne"
            ></div>
            <div
              class="picture_app"
              data-index="1"
              :style="async (indexproject) => pictureCover(project, indexproject)"
              ref="imageItemsTwo"
            ></div>
            <div
              class="picture_app"
              data-index="2"
              :style="async (indexproject) => pictureCover(project, indexproject)"
              ref="imageItemsThree"
            ></div>
            <div class="picture_bullet_wrapper">
              <div class="picture_bullet active_bullet" data-index="0"></div>
              <div class="picture_bullet" data-index="1"></div>
              <div class="picture_bullet" data-index="2"></div>
            </div>
          </div>
          <div class="color_cementation bg-pink-400">
            <div class="color_background_wrap w-100 my-2" @click.prevent="resetDataColor">
              <span class="title_cementation edu-au-vic-wa-nt-hand-530">Background Color</span>
              <ul class="color_background w-100 py-1 px-2 flex justify-center">
                <li class="color_cement" v-for="(item, i) in project.bgColors">
                  <div
                    class="color_circ_app"
                    :style="fnBgTextColor(item, i, labelOne)"
                    :data-alias="item.alias"
                    :data-css="item.tool"
                    ref="bgCircle"
                    @click.prevent="backgroundOrTextActive(i, labelOne)"
                  ></div>
                </li>
              </ul>
              <div id="suit_background" class="suit_hex_value">{{ bgDisplay.suitBgColor }}</div>
              <div id="background_tool" class="w-100 flex justify-center my-2">
                {{ bgDisplay.bgTool }}
              </div>
            </div>
            <div class="color_text_wrap w-100 my-1" @click.prevent="resetDataColor">
              <span class="title_cementation edu-au-vic-wa-nt-hand-530">Text Color</span>
              <ul class="color_text w-100 py-1 px-2 flex justify-center">
                <li class="color_cement" v-for="(item, i) in project.textColors">
                  <div
                    class="color_circ_app"
                    :style="fnBgTextColor(item, i, labelTwo)"
                    :data-alias="item.alias"
                    :data-css="item.tool"
                    ref="txtCircle"
                    @click.prevent="backgroundOrTextActive(i, labelTwo)"
                  ></div>
                </li>
              </ul>
              <div id="suit_text" class="suit_hex_value">{{ txtDisplay.suitTextColor }}</div>
              <div id="text_tool" class="w-100 flex justify-center my-2">
                {{ txtDisplay.txtTool }}
              </div>
            </div>
          </div>
        </div>
        <div class="app_pattern_side">
          <div class="color_mood_wrap w-100 sm:w-1/2 h-44 sm:h-auto bg-purple-200">
            <div class="pattern_ct">
              <h3 class="title_pattern_ct inter-400">Colors Mood</h3>
              <ul class="pattern_list w-9/12 flex flex-col justify-center items-center mx-auto">
                <li class="moody_sensation karla-530" v-for="(item, i) in colorsmood">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <div class="color_story_wrap w-100 sm:w-1/2 h-44 sm:h-auto bg-blue-200">
            <div class="pattern_ct">
              <h3 class="title_pattern_ct inter-400">Story</h3>
              <ul class="pattern_list w-9/12 flex flex-col justify-center items-center mx-auto">
                <li class="moody_sensation karla-530" v-for="(item, i) in storypattern">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inter-400 {
  font-family: 'Inter', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: 'slnt' 0;
}

.karla-530 {
  font-family: 'Karla', sans-serif;
  font-optical-sizing: auto;
  font-weight: 530;
  font-style: normal;
}

.karla-600 {
  font-family: 'Karla', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}

.edu-au-vic-wa-nt-hand-530 {
  font-family: 'Edu AU VIC WA NT Hand', cursive;
  font-optical-sizing: auto;
  font-weight: 530;
  font-style: normal;
}

.playfair-display-600 {
  font-family: 'Playfair Display', serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}

@media (min-width: 210px) {
  .title_melting_wrap {
    max-width: 580px;
    font-size: calc(20px + 0.1vw);
    display: flex;
    justify-content: flex-start;
  }

  .app_list_number {
    font-size: calc(14px + 0.15vw);
  }

  .title_app_concern {
    font-size: calc(15px + 0.15vw);
  }

  .web_app_theory {
    width: 100%;
    height: 850px;
    padding: 1rem 0.25rem;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .app_preliminary_side {
    width: 100%;
    height: 440px;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    gap: 0.5rem;
  }

  .picture_app_wrapper {
    position: relative;
    width: 100%;
    height: 42%;
    gap: 0.1rem;
    margin: 0;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 100%;
    overflow-x: hidden;
    border-radius: 5px;
    transition: all 650ms ease-in-out;
  }

  .picture_app {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  .picture_app[data-index='0'] {
    background-repeat: no-repeat;
    background-position: left 44% center;
    background-size: cover;
  }

  .picture_app[data-index='1'] {
    background-repeat: no-repeat;
    background-position: left 44% center;
    background-size: cover;
  }

  .picture_app[data-index='2'] {
    background-repeat: no-repeat;
    background-position: left 44% center;
    background-size: cover;
  }

  .picture_bullet_wrapper {
    position: absolute;
    width: 100%;
    padding: 0.25rem 0;
    bottom: 1rem;
    display: flex;
    justify-content: center;
  }

  .picture_bullet {
    width: 8px;
    height: 8px;
    margin: 0 5px;
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid gray;
  }

  .picture_bullet.active_bullet {
    background-color: yellow;
  }

  .color_cementation {
    width: 100%;
    min-width: min-content;
    height: 58%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
  }

  .title_cementation {
    width: 100%;
    color: #333;
    padding: 0.25rem 0;
    font-size: calc(13px + 0.2vw);
    display: flex;
    justify-content: center;
  }

  .suit_hex_value {
    width: 80%;
    height: 2rem;
    margin: 0.35rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(13px + 0.1vw);
    border-radius: 5px;
    border: 1px solid #ddd;
  }

  .color_cement {
    list-style: none;
    width: 18px;
    height: 18px;
    margin: 0.25rem 0.25rem;
    z-index: 1;
  }

  .color_cement .color_circ_app {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid black;
    cursor: pointer;
    z-index: 5;
  }

  .color_circ_app.circ_active {
    border: 2px dotted yellow;
  }

  .app_pattern_side {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .title_pattern_ct {
    width: 100%;
    padding: 0.5rem;
    font-size: calc(13px + 0.15vw);
    font-weight: bolder;
    text-align: center;
  }

  .pattern_list .moody_sensation {
    width: 100%;
    padding: 0.25rem;
    margin: 0.5rem 0;
    list-style: square;
    font-size: calc(12px + 0.25vw);
  }
}

@media (min-width: 460px) {
}

@media (min-width: 640px) {
  .web_app_theory {
    height: 500px;
    padding: 1rem;
  }

  .app_preliminary_side {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-shrink: 1;
    gap: 0.5rem;
  }

  .picture_app_wrapper {
    width: 50%;
    height: 100%;
  }

  .color_cementation {
    width: 50%;
    height: 100%;
  }

  .app_pattern_side {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
}

@media (min-width: 760px) {
  .picture_app_wrapper {
    width: 45%;
  }

  .color_cementation {
    width: 55%;
  }
}

@media (min-width: 1024px) {
  .web_app_theory {
    height: 350px;
    margin-top: 0;
    flex-direction: row;
  }

  .picture_app_wrapper {
    width: 40%;
    border-radius: 0;
  }

  .color_cementation {
    width: 60%;
    border-radius: 0;
  }

  .app_pattern_side {
    height: auto;
  }

  .pattern_list {
    margin-top: 2rem;
  }
}
</style>
