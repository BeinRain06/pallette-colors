<script setup lang="ts"></script>
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

@media (min-width: 160px) {
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
    display: flex;
    justify-content: center;
    font-size: calc(12px + 0.15vw);
    letter-spacing: 1px;
  }

  .nav_game_colors {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .circle_nav_color {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
}
</style>
