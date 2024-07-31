<script setup lang="ts"></script>

<template>
  <div class="gradient_container w-100 m-2">
    <div class="title_gradient_wrap w-100 my-2 md:w-2/5">
      <h2 class="title_gradient_container karla-600 p-2">Personalized Gradient</h2>
    </div>
    <div class="gradient_ct w-100 p-2 my-2">
      <div class="inline-flex">
        <h3 class="title_gradient inter-300">Green To Blue</h3>
      </div>
      <ul class="gradient_list">
        <li class="gradient_box w-100 h-100 p-2">
          <div class="gradient_space_color">
            <div id="rocket_gradient" class="rocket_gradient_color">
              <div id="launch_upper_rocket" class="upper_rocket">
                <div class="upper_rocket_ct"></div>
              </div>
              <div
                id="launch_base_rocket"
                class="lower_rocket"
                style="
                  background-image: linear-gradient(
                    to left bottom,
                    #053705,
                    #005d37,
                    #00866d,
                    #00b0aa,
                    #12daeb
                  );
                "
              >
                <div class="lower_rocket_ct"></div>
              </div>
            </div>
            <div id="aquarium_gradient" class="aquarium_gradient_color">
              <div class="aquarium_gradient_ct"></div>
            </div>
          </div>
          <div class="gradient_toggle_wrapper">
            <label for="gradient_effect" class="toggle_gradient">
              <input type="checkbox" id="gradient_effect" class="gradient_effect" />
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

@media (min-width: 260px) {
  .title_gradient_container {
    font-size: calc(20px + 0.1vw);
    display: flex;
    justify-content: flex-start;
  }
  .gradient_ct {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title_gradient {
    padding: 0.5rem 0;
    font-size: calc(16px + 0.1vw);
    border-bottom-left-radius: 5px;
    border-bottom: 1px solid #c0bebe;
  }

  .gradient_list {
    width: 90%;
    padding: 0.5rem 2rem;
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(max(var(--box-color-min-width), var(--box-color-max-width)), 1fr)
    );
    grid-auto-rows: 130px;
    column-gap: var(--gap-layout);
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
    width: 100%;
    height: 100%;
    background-color: transparent;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border: 1px solid #9e9e9e;
    border-bottom: none;
  }

  .upper_rocket .upper_rocket_ct {
    position: absolute;
    top: 0;
    left: 0;
    width: 10%;
    height: 100%;
    background-image: none;
    transition: all 350ms ease-in-out;
  }

  .rocket_gradient_color .lower_rocket {
    width: 100%;
    height: 100%;
    border: 1px solid #9e9e9e;
    border-top: none;
  }

  .lower_rocket .lower_rocket_ct {
    position: absolute;
    top: 0;
    left: 0;
    width: 10%;
    height: 100%;
    background-image: none;
    transition: all 350ms ease-in-out;
  }

  .rocket_gradient_color.active_gradient .upper_rocket_ct,
  .rocket_gradient_color.active_gradient .lower_rocket_ct {
    width: 100%;
    height: 100%;
    background-image: var(--background-image-upper-lower-rocket);
    transition: all 650ms ease 1s;
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
    background-image: none;
    transform: translateY(100%);
    transition: all 650ms ease-in-out 1s;
    opacity: 0;
    visibility: hidden;
  }

  .rocket_gradient_color.active_gradient .aquarium_gradient_ct {
    top: 0;
    background-image: var(--background-image-upper-lower-rocket);
    transition: all 450ms ease;
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
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
</style>
