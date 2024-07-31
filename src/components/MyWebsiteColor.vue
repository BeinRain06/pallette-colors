<script setup lang="ts"></script>

<template>
  <div class="website_container w-100 py-4 px-2 flex flex-col">
    <div class="title_melting_wrap w-100 my-2 md:w-2/5">
      <h3 class="title_melting karla-600 p-2">My Website Melting Colors</h3>
    </div>
    <div class="web_app_concern w-100 my-4 flex flex-col">
      <div class="w-100 flex justify-start">
        <span class="app_list_number mr-2">1.</span>
        <h2 class="title_app_concern mx-2">Blog-app-tech</h2>
      </div>
      <div class="web_app_theory">
        <div class="app_preliminary_side w-100 lg:w-1/2 h-100 flex gap-2">
          <div class="picture_app_wrapper">
            <div class="picture_app" data-index="0"></div>
            <div class="picture_app" data-index="1"></div>
            <div class="picture_app" data-index="2"></div>
            <div class="picture_bullet_wrapper">
              <div class="picture_bullet active_bullet" data-index="0"></div>
              <div class="picture_bullet" data-index="1"></div>
              <div class="picture_bullet" data-index="2"></div>
            </div>
          </div>
          <div class="color_cementation min-w-min w-3/5 h-100 flex flex-col bg-pink-400">
            <div class="color_background_wrap w-100 my-2">
              <span class="title_cementation edu-au-vic-wa-nt-hand-530">Background Color</span>
              <ul class="color_background w-100 py-1 px-2 flex justify-center">
                <li class="color_cement"><div class="color_circ_app circ_active"></div></li>
                <li class="color_cement"><div class="color_circ_app"></div></li>
                <li class="color_cement"><div class="color_circ_app"></div></li>
                <li class="color_cement"><div class="color_circ_app"></div></li>
              </ul>
              <div id="suit_background" class="suit_hex_value"></div>
            </div>
            <div class="color_text_wrap w-100 my-1">
              <span class="title_cementation edu-au-vic-wa-nt-hand-530">Text Color</span>
              <ul class="color_text w-100 py-1 px-2 flex justify-center">
                <li class="color_cement"><div class="color_circ_app circ_active"></div></li>
                <li class="color_cement"><div class="color_circ_app"></div></li>
                <li class="color_cement"><div class="color_circ_app"></div></li>
              </ul>
              <div id="suit_text" class="suit_hex_value"></div>
            </div>
          </div>
        </div>
        <div class="app_pattern_side w-100 lg:w-1/2 h-100 flex gap-2">
          <div class="color_mood_wrap w-1/2 bg-purple-200">
            <div class="pattern_ct">
              <h3 class="title_pattern_ct inter-400">Colors Mood</h3>
              <ul class="pattern_list w-9/12 flex flex-col justify-center items-center mx-auto">
                <li class="moody_sensation karla-530">Adventure</li>
                <li class="moody_sensation karla-530">World</li>
                <li class="moody_sensation karla-530">Passionate</li>
              </ul>
            </div>
          </div>
          <div class="color_story_wrap w-1/2 bg-blue-200">
            <div class="pattern_ct">
              <h3 class="title_pattern_ct inter-400">Story</h3>
              <ul class="pattern_list w-9/12 flex flex-col justify-center items-center mx-auto">
                <li class="moody_sensation karla-530">Village Arrival</li>
                <li class="moody_sensation karla-530">Hunting</li>
                <li class="moody_sensation karla-530">Love</li>
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

@media (min-width: 260px) {
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
    height: 320px;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .picture_app_wrapper {
    position: relative;
    width: 40%;
    height: 100%;
    gap: 0.1rem;
    margin: 0;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 100%;
    overflow-x: hidden;
    transition: all 650ms ease-in-out;
  }

  .picture_app {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  .picture_app[data-index='0'] {
    background-image: url('../assets/images/Screenshot-1.png');
    background-repeat: no-repeat;
    background-position: left 44% center;
    background-size: cover;
  }

  .picture_app[data-index='1'] {
    background-image: url('../assets/images/Screenshot-2.png');
    background-repeat: no-repeat;
    background-position: left 44% center;
    background-size: cover;
  }

  .picture_app[data-index='2'] {
    background-image: url('../assets/images/Screenshot-3.png');
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
  }

  .color_cement .color_circ_app {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid black;
  }

  .color_circ_app.circ_active {
    border: 2px dotted yellow;
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
</style>
