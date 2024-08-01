<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import CardColors from './components/CardColors.vue'
import MyWebsiteColor from './components/MyWebsiteColor.vue'
import PersonalizedGradient from './components/PersonalizedGradient.vue'
import MindColors from './components/MindColors.vue'
import SeekInspiration from './components/SeekInspiration.vue'
</script>

<template>
  <header>
    <nav class="nav_pallette">
      <div class="logo_wrapper">
        <h3 class="logo_pallette">Palette Colors</h3>
      </div>
      <div class="nav_right">
        <span class="title_nav">colors</span>
        <div class="nav_game_colors">
          <div id="green_nav" class="circle_nav_color"></div>
          <div id="purple_nav" class="circle_nav_color"></div>
          <div id="yellow_nav" class="circle_nav_color"></div>
        </div>
      </div>
    </nav>
  </header>
  <main class="main_display w-screen">
    <h3 class="title_main_display edu-au-vic-wa-nt-hand-500">Colors Range</h3>
    <div class="colors_push_wrapper">
      <div class="box_selection py-2 px-4 mr-6 my-2">
        <div id="select_color" class="select_color w-100 flex gap-1">
          <span class="label_select_color">push color</span>
          <span id="angle_up_down" class="angle_up_down mx-1 relative top-1">&#65086;</span>
        </div>

        <div class="modal_push_selection absolute right-0 w-40 h-auto">
          <div class="select_color_item py-1 px-2">
            <div class="color_selection" data-index="0"></div>
            <div class="dropdown_select flex justify-start">
              <span class="label_select_color">push color</span>
              <span id="angle_up_down" class="angle_up_down mx-1 relative bottom-1 items-stretch"
                >&#65085;</span
              >
            </div>
          </div>
          <div class="select_color_item py-1 px-2">
            <div class="color_selection" data-index="1"></div>
            <div class="label_selection">
              <span class="label_select_color"> Blue </span>
            </div>
          </div>
          <div class="select_color_item py-1 px-2">
            <div class="color_selection" data-index="2"></div>
            <div class="label_selection">
              <span class="label_select_color"> Green </span>
            </div>
          </div>
          <div class="select_color_item py-1 px-2">
            <div class="color_selection" data-index="3"></div>
            <div class="label_selection">
              <span class="label_select_color"> purple </span>
            </div>
          </div>
          <div class="select_color_item py-1 px-2">
            <div class="color_selection" data-index="4"></div>
            <div class="label_selection">
              <span class="label_select_color"> Orange </span>
            </div>
          </div>
          <div class="select_color_item py-1 px-2">
            <div class="color_selection" data-index="5"></div>
            <div class="label_selection">
              <span class="label_select_color"> Yellow </span>
            </div>
          </div>
          <div class="select_color_item py-1 px-2">
            <div class="color_selection" data-index="6"></div>
            <div class="label_selection">
              <span class="label_select_color"> pink </span>
            </div>
          </div>
          <div class="select_color_item py-1 px-2">
            <div class="color_selection" data-index="7"></div>
            <div class="label_selection">
              <span class="label_select_color"> Red </span>
            </div>
          </div>
          <div class="select_color_item py-1 px-2">
            <div class="color_selection" data-index="8"></div>
            <div class="label_selection">
              <span class="label_select_color"> White/Gray </span>
            </div>
          </div>
          <div class="select_color_item py-1 px-2">
            <div class="color_selection" data-index="9"></div>
            <div class="label_selection">
              <span class="label_select_color"> Black </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="blue_color_section" class="p-4 my-4 w-100">
      <div class="title_section_wrap">
        <div
          class="title_section_label w-100 flex justify-center text-2xl md:text-3xl lg:text-4xl"
          data-index="1"
        >
          <h2 class="px-4 py-2 my-2">Blue</h2>
        </div>
        <div class="stack_underline">
          <div class="stack_underline"></div>
        </div>
        <div class="stack_underline_1">
          <div class="stack_underline_1"></div>
        </div>
        <div class="stack_underline_2">
          <div class="stack_underline_2"></div>
        </div>
      </div>
      <div class="blue_color_wrapper">
        <div id="light_blue" class="light_blue_container">
          <CardColors label="blue-light" />
        </div>
        <div id="medium_blue" class="medium_blue_container"></div>
        <div id="dark_blue" class="dark_blue_container"></div>
      </div>
    </section>
    <section id="my_website_color" class="my_website_color w-100">
      <MyWebsiteColor />
    </section>
    <section id="personalized_gradient" class="personalized_gradient w-100">
      <PersonalizedGradient />
    </section>
    <section id="mind_colors" class="mind_colors w-100">
      <MindColors />
    </section>
    <section id="seek_inspiration" class="seek_inspiration w-100">
      <SeekInspiration />
    </section>
  </main>
</template>

<style scoped>
#green_nav {
  background-color: #2ea162;
}
#purple_nav {
  background-color: #a12ea1;
}
#yellow_nav {
  background-color: #f8ee5c;
}

.edu-au-vic-wa-nt-hand-500 {
  font-family: 'Edu AU VIC WA NT Hand', cursive;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}

.stack_underline,
.stack_underline_1,
.stack_underline_2 {
  width: 80%;
  height: 2px;
  margin: 0.25rem auto;
  background-color: #ddd;
  border-radius: 3px;
}

.stack_underline_1 {
  width: 70%;
}

.stack_underline_2 {
  width: 60%;
}

.color_selection[data-index='0'] {
  background-color: #cbe0f3;
}
.color_selection[data-index='1'] {
  background-color: #0b5194;
}
.color_selection[data-index='2'] {
  background-color: #2ea162;
}
.color_selection[data-index='3'] {
  background-color: #a12ea1;
}
.color_selection[data-index='4'] {
  background-color: #eb8e23;
}
.color_selection[data-index='5'] {
  background-color: #d4d282;
}
.color_selection[data-index='6'] {
  background-color: #a52a8a;
}
.color_selection[data-index='7'] {
  background-color: #a52a2a;
}
.color_selection[data-index='8'] {
  background-color: #ccc;
}
.color_selection[data-index='9'] {
  background-color: #222;
}

.title_section_label[data-index='1'] {
  color: #0b5194;
}

@media (min-width: 210px) {
  .nav_pallette {
    width: 100vw;
    height: 60px;
    padding: 0 1rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    background-color: #eee;
    border-top: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
  }

  .nav_pallette .logo_wrapper {
    color: #2ea162;
    padding: 0.25rem 1rem;
  }

  .nav_pallette .nav_right {
    width: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    gap: 0.15rem;
  }

  .title_nav {
    width: 100%;
    color: #f59e4d;
    font-weight: bold;
    display: flex;
    justify-content: center;
    font-size: calc(14px + 0.15vw);
    letter-spacing: 1px;
  }

  .nav_game_colors {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .circle_nav_color {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .main_display {
    padding: 1rem;
    margin: 0 auto;
  }

  .title_main_display {
    padding-left: 1rem;
    color: #d4d282;
  }

  .colors_push_wrapper {
    width: 100%;
    padding: 1rem 0.5rem;
    margin: 1rem 0;
    display: flex;
    justify-content: flex-end;
  }

  .box_selection {
    margin-right: 4.5rem;
    padding: 0.25rem 0.75rem;
    cursor: pointer;
    background-color: #ddd;
    border-radius: 8px;
    outline-offset: -3px;
    outline: 1px solid #fff;
  }

  .modal_push_selection {
    display: flex;
    display: none;
    margin: 0.75rem 3.7rem 0 0;
    border: 2px solid #ddd;
    flex-direction: column;
  }

  .select_color_item {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
    transition: all 350ms ease-in-out;
  }

  .select_color_item:hover:nth-child(odd) {
    background-color: #ddd;
  }
  .select_color_item:hover:nth-child(even) {
    background-color: #ccc;
  }

  .color_selection {
    width: 16px;
    height: 8px;
    border: 1px solid #ddd;
  }

  .title_section_wrap {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
}

@media (min-width: 1024px) {
}
</style>
