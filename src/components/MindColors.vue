<script setup lang="ts"></script>
<template>
  <div class="mind_colors_container w-100">
    <div class="title_mind_wrap">
      <h3 class="title_gradient_wrap karla-600 p-2">Mind Colors Trial</h3>
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
                <tbody class="table_content">
                  <tr>
                    <th
                      class="title_element_color w-48 font-medium border border-solid border-black"
                    >
                      pallette-color_1
                    </th>
                  </tr>
                  <tr class="table_elements">
                    <td class="element_color">color1</td>
                    <td class="element_color">color2</td>
                    <td class="element_color">color3</td>
                  </tr>
                  <tr class="table_elements">
                    <td class="element_color">color4</td>
                    <td class="element_color">color5</td>
                    <td class="element_color">color6</td>
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

@media (min-width: 260px) {
  .title_mind_wrap {
    height: 140px;
    margin-top: 4rem;
    font-size: calc(20px + 0.1vw);
    display: flex;
    justify-content: center;
  }

  .title_pattern {
    font-size: calc(16px + 0.15vw);
  }

  .title_element_color {
    height: 35px;
  }

  .mind_pattern_content {
    width: 80%;
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
    height: 36px;
    border: 1px solid black;
    border-top: none;
  }

  .header_pattern_container .left_square_pattern {
    position: absolute;
    top: -17px;
    left: -1px;
    width: 45px;
    height: 17px;
    border: 1px solid black;
    border-bottom: none;
  }

  .header_pattern_container .right_square_pattern {
    position: absolute;
    top: -36px;
    right: -1px;
    width: 80px;
    height: 36px;
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
    background-color: red;
  }

  .base_pattern_content {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .table_content {
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: center;
    gap: 0.1rem;
  }

  .table_elements .element_color {
    width: 10rem;
    padding-left: 0.75rem;
    height: 35px;
    border: 1px solid black;
  }
}
</style>
