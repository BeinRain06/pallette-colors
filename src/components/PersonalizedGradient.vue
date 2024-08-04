<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { gradientStore } from '../stores/personalized-gradient'
const props = defineProps<{ indexColor: string }>()

let newIndex = reactive({ count: 1 })

let status = reactive({ inState: false })

const itemRefs = ref([])
const itemRockets = ref([])
const itemAquariums = ref([])
const itemsArrValue = ref([])

let arrGradTitle = computed(() => {
  const useGradientStore = gradientStore()

  const gradientsArr = useGradientStore.gradientColors[props.indexColor]

  return gradientsArr.title
})

let arrGradColor = computed(() => {
  const useGradientStore = gradientStore()

  const gradientsArr = useGradientStore.gradientColors[props.indexColor]

  console.log(gradientsArr.backgroundImage)

  return gradientsArr.backgroundImage
})

function bgGradient(item) {
  console.log('item: ', item)
  return { backgroundImage: item }
}

function handleToggling(e) {
  const itemsInput = Array.from(itemRefs.value)
  const itemsRoc = Array.from(itemRockets.value)
  const itemsAqua = Array.from(itemAquariums.value)

  console.log('aqua:', itemsAqua)

  const i = parseInt(e.currentTarget.getAttribute('data-index'))

  itemsInput.forEach((elt, j) => {
    console.log(elt)
    if (i === j) {
      console.log(`itemsInput[${i}]:`, itemsInput[i])
      let newStatus = itemsInput[i].checked ? false : true

      itemsInput[i].checked = newStatus

      if (newStatus) {
        itemsRoc[i].classList.add('active_gradient')
        itemsAqua[i].classList.add('active_gradient')
      } else {
        itemsRoc[i].classList.remove('active_gradient')
        itemsAqua[i].classList.remove('active_gradient')
      }
    } else {
      itemsInput[j].checked = false
    }
  })

  const useGradientStore = gradientStore()

  const gradientsItem = useGradientStore.gradientColors[props.indexColor]
  const gradientsArr = gradientsItem.backgroundImage
}

function handleCopy(e) {
  console.log(e.target)
  const item = e.target.getAttribute('data-item')
  const i = parseInt(e.target.getAttribute('data-index'))

  const itemsValue = Array.from(itemsArrValue.value)

  console.log(itemsValue[i].nextElementSibling)

  itemsValue[i].nextElementSibling.classList.add('active_btn')
  setTimeout(() => {
    itemsValue[i].nextElementSibling.classList.remove('active_btn')
  }, 700)

  itemsValue[i].select()
  navigator.clipboard.writeText(itemsValue[i].value)
}
</script>

<template>
  <div class="gradient_container w-100 my-2 sm:m-2">
    <div class="title_gradient_wrap w-100 my-2 md:w-2/5">
      <h3 class="title_gradient karla-600 p-2">Personalized Gradient</h3>
    </div>
    <div class="gradient_ct w-100 py-2 sm:p-2 my-2">
      <div class="inline-flex">
        <h3 class="title_gradient_list inter-300">{{ arrGradTitle }}</h3>
      </div>
      <ul class="gradient_list">
        <li class="gradient_box w-100 h-100 p-2" v-for="(item, i) in arrGradColor">
          <div class="gradient_space_color">
            <div id="rocket_gradient" class="rocket_gradient_color" ref="itemRockets">
              <div id="launch_upper_rocket" class="upper_rocket">
                <div class="upper_rocket_ct" :style="bgGradient(item)"></div>
              </div>
              <div id="launch_base_rocket" class="lower_rocket">
                <div class="lower_rocket_ct" :style="bgGradient(item)"></div>
              </div>
            </div>
            <div id="aquarium_gradient" class="aquarium_gradient_color" ref="itemAquariums">
              <div class="aquarium_gradient_ct" :style="bgGradient(item)">
                <div class="relative top-0 h-100">
                  {{ item }}
                  <input
                    type="text"
                    :value="item"
                    id="myInput"
                    class="input_clipboard"
                    :data-index="i"
                    ref="itemsArrValue"
                  />
                  <button
                    class="aquarium_copy_link hover:bg-gray-300 hover:text-blue-800"
                    :data-item="item"
                    :data-index="i"
                    @click.prevent="handleCopy"
                  >
                    copy
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="gradient_toggle_wrapper">
            <label
              for="gradient_effect"
              class="toggle_gradient"
              :data-index="i"
              @click.prevent="handleToggling"
            >
              <input type="checkbox" id="gradient_effect" class="gradient_effect" ref="itemRefs" />
              <div class="toggle_fulfilled"><p class="toggle_fulltext">sleep</p></div>
            </label>
          </div>
        </li>
      </ul>
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

.inter-300 {
  font-family: 'Inter', sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  font-variation-settings: 'slnt' 0;
}

@media (min-width: 210px) {
  .title_gradient_wrap {
    max-width: 580px;
    font-size: calc(20px + 0.1vw);
    display: flex;
    justify-content: flex-start;
  }

  .input_clipboard {
    position: absolute;
    width: 100%;
    height: auto;
    visibility: hidden;
  }

  .aquarium_copy_link {
    position: absolute;
    cursor: pointer;
    width: 2rem;
    margin: 5px 0;
    top: -24px;
    left: 0;
    border-radius: 3px;
    border: 1px solid #fff;
    opacity: 1;
    transform: scale(0.98);
    transition:
      background-color 350ms ease,
      color 370ms ease-in-out 280ms;
  }

  .aquarium_copy_link.active_btn {
    animation: anim-button 650ms ease-in-out backwards;
  }

  .gradient_ct {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title_gradient_list {
    padding: 0.5rem 0;
    font-size: calc(16px + 0.1vw);
    border-bottom-left-radius: 5px;
    border-bottom: 1px solid #c0bebe;
  }

  .gradient_list {
    width: 100%;
    padding: 0.5rem 0;
    margin: 0.5rem auto;
    display: grid;
    grid-template-columns: repeat(auto, 1fr);
    grid-auto-rows: 110px;
    column-gap: 10px;
    row-gap: calc(var(--gap-layout) + 10px);
  }

  .gradient_space_color {
    width: 100%;
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.65rem;
  }

  .gradient_space_color .rocket_gradient_color {
    width: 17%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    flex-shrink: 0;
  }

  .rocket_gradient_color .upper_rocket {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border: 1px solid #9e9e9e;
    border-bottom: none;
  }

  .rocket_gradient_color .upper_rocket_ct {
    position: absolute;
    top: 22%;
    left: 0;
    width: 12%;
    height: 180%;
    background-blend-mode: soft-light;
    animation: anim-rocket-upper 650ms ease-in-out forwards;
    z-index: 3;
  }

  .rocket_gradient_color .lower_rocket {
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid #9e9e9e;
    border-top: none;
  }

  .rocket_gradient_color .lower_rocket_ct {
    position: absolute;
    top: 0;
    left: 0;
    animation: anim-rocket-lower 600ms ease-in-out 380ms forwards;
    z-index: 1;
  }

  .rocket_gradient_color.active_gradient .upper_rocket_ct {
    animation: anim-rocket-upper-act 650ms ease-in-out forwards;
  }

  .rocket_gradient_color.active_gradient .lower_rocket_ct {
    animation: anim-rocket-lower-act 650ms ease-in-out forwards;
  }

  .aquarium_gradient_color {
    position: relative;
    width: 83%;
    height: 100%;
    border-radius: 5px;
    border: 1px solid #9e9e9e;
  }

  .aquarium_gradient_color .aquarium_gradient_ct {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    padding-top: 20px;
    color: #fdfdfd;
    font-size: calc(10px + 0.1vw);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    transform: translateY(100%);
    opacity: 0;
    visibility: hidden;
    transition: all 950ms ease-in-out 1s;
  }

  .aquarium_gradient_color.active_gradient .aquarium_gradient_ct {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
    transition: all 950ms ease-in-out 1s;
  }

  .gradient_toggle_wrapper {
    width: 60px;
    height: auto;
    margin: 0.75rem 0 0.5rem;
  }

  .gradient_toggle_wrapper .toggle_gradient {
    position: relative;
    width: 60px;
    height: 9px;
  }

  .gradient_toggle_wrapper .gradient_effect {
    display: none;
    position: absolute;
    top: 0;
    width: 8px;
    height: 8px;
  }

  .toggle_gradient .toggle_fulfilled {
    position: relative;
    top: 0;
    left: 0;
    width: 60px;
    height: 18px;
    border-radius: 9px;
    background: #ddd;
    z-index: 1;
  }

  .toggle_fulfilled::before {
    content: '';
    position: absolute;
    width: 17px;
    height: 17px;
    background-color: #555;
    border-radius: 50%;
    transform: translateX(43px);
    transition: all 400ms ease-in;
  }

  .toggle_fulfilled p.toggle_fulltext {
    color: #333;
    font-size: calc(10px + 0.1vw);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(-10px);
    transition: all 0.3s ease-in;
  }

  .gradient_effect:checked + .toggle_fulfilled p.toggle_fulltext {
    transform: translateX(10px);
    color: #3cb46e;
    font-weight: bold;
  }

  .gradient_effect:checked ~ .toggle_fulfilled::before {
    transform: translateX(0);
    background-color: #e7803b;
  }
}

@media (min-width: 330px) {
  .gradient_list {
    padding: 0.5rem;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 130px;
  }
}

@media (min-width: 460px) {
  .gradient_list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 600px) {
  .gradient_list {
    width: 90%;
    padding: 0.5rem 2rem;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(max(var(--box-color-min-width), var(--box-color-max-width)), 1fr)
    );
    grid-auto-rows: 130px;
    column-gap: var(--gap-layout);
    row-gap: calc(var(--gap-layout) + 10px);
  }
}

@keyframes anim-rocket-lower {
  0% {
    width: 12%;
    height: 100%;
    visibility: hidden;
  }
  100% {
    width: 100%;
    height: 100%;
    visibility: visible;
  }
}

@keyframes anim-rocket-lower-act {
  0% {
    width: 100%;
    height: 100%;
    visibility: visible;
  }
  100% {
    width: 12%;
    height: 100%;
    visibility: hidden;
  }
}

@keyframes anim-rocket-upper {
  0% {
    width: 100%;
    height: 180%;
    visibility: visible;
  }
  100% {
    width: 12%;
    height: 180%;
    visibility: hidden;
  }
}

@keyframes anim-rocket-upper-act {
  0% {
    width: 12%;
    height: 180%;
    visibility: hidden;
  }
  100% {
    width: 100%;
    height: 180%;
    visibility: visible;
  }
}

@keyframes anim-aquarium {
  0% {
    opacity: 1;
    visibility: visible;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
    visibility: hidden;
  }
}

@keyframes anim-aquarium-act {
  0% {
    transform: translateY(100%);
    opacity: 0;
    visibility: hidden;
  }
  100% {
    color: #fdfdfd;
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
}

@keyframes anim-button {
  0% {
    opacity: 1;
    transform: scale(0.9);
  }
  100% {
    opacity: 0.9;
    transform: scale(0.9);
  }
}
</style>
