<script setup lang="ts"></script>
<template>
  <div class="inspiring_wrapper mt-12 py-2">
    <div class="title_inspiring_wrap my-4">
      <h3 class="title_inspiring karla-600 p-2">Seek InspiraTion</h3>
    </div>
    <div class="inspiring_container w-100">
      <div class="inspiring_content w-100 p-2">
        <ul class="inspiring_list">
          <li class="inspiring_item">
            <div class="inspiring_square" style="background-color: #2c912c"></div>
            <p class="inspiring_element edu-au-vic-wa-nt-hand-400">Colors Books Cover</p>
          </li>
          <li class="inspiring_item">
            <div class="inspiring_square" style="background-color: #b34327"></div>
            <p class="inspiring_element edu-au-vic-wa-nt-hand-400">Clothes Fitting Colors</p>
          </li>
          <li class="inspiring_item">
            <div class="inspiring_square" style="background-color: #750967"></div>
            <p class="inspiring_element edu-au-vic-wa-nt-hand-400">
              <span>Painting Wall Colors</span>
              <span class="mx-2">(External house/ Internal house)</span>
            </p>
          </li>
          <li class="inspiring_item">
            <div class="inspiring_square" style="background-color: #f1ef51"></div>
            <p class="inspiring_element edu-au-vic-wa-nt-hand-400">Others Existing Websites</p>
          </li>
        </ul>
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

.edu-au-vic-wa-nt-hand-400 {
  font-family: 'Edu AU VIC WA NT Hand', cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

@media (min-width: 260px) {
  .title_inspiring_wrap {
    font-size: calc(28px + 0.15vw);
    display: flex;
    justify-content: center;
  }

  .inspiring_list {
    padding-left: 1rem;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }

  .inspiring_item {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .inspiring_item .inspiring_square {
    width: 10px;
    height: 10px;
    border: 1px solid black;
  }

  .inspiring_item .inspiring_element {
    width: 80%;
    font-size: calc(16px + 0.15vw);
  }
}
</style>
