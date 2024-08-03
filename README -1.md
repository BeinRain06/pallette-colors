# pallette-colors

## 1. customize background-color with `v-for` value - vuejs

<br>

one wa to customize background of differents boxes according to value **mapped** on v-for is to use a `method` (**function**) that will be passed inside the inner attribute `"style"` in a way that it is **bound** ( `v-bind` or `:`)

> ```js
> <template>
> <div class="range_colors">
>
> <div class="association_color" v-for="(item, i) in arrBgColors">
>
> <div class="color_bg" :style="myBgColor(item)"></div>
>
> <div class="bg_hex_label">{{ item }}</div>
> </div>
> </div>
> </template>
> ```

`**I**: case **options API**:`

> ```js
> <script>
>   export default: {
>     data: {
>       return {
>          count:0;
>       }
>     },
>     methods: {
>        /*this here*/
>       myBgColor(item) {
>       return { backgroundColor: item }
>      }
>    }
>  }
> </script>
> ```

`**II**: case **composition API**:`

> ```js
> <script setup>
>    import {ref} from "vue"
>    const count= ref(0)
>    // this here
>    function myBgColor(item) {
>       return { backgroundColor: item }
>    }
> </script>
> ```

<br>

## 2. equivalent of querySelectorAll with `v-for` in vue3js

<br>

- you need to study **Templates Ref** in vue3JS.

- Link : [https://vuejs.org/guide/essentials/template-refs.html](https://vuejs.org/guide/essentials/template-refs.html)

## 2. execute Ctrl+copy by clicking a button in vuejs

We use the **clipboard copy text** notion of javascript

see the example under :

Link : [https://www.w3schools.com/howto/howto_js_copy_clipboard.asp](https://www.w3schools.com/howto/howto_js_copy_clipboard.asp)

The **essentials points** is to be able to **obtain the current input value** and to apply method `**navigator**` like **select()** and **writeText()**

see sample example in vuejs:

> ```js
> function handleCopy(e) {
>   const i = parseInt(e.currentTarget.getAttribute('data-index'))
>   const item = e.currentTarget.getAttribute('data-item')
>   const itemsValue = Array.from(itemsArrValue.value)
>   itemsValue[i].select()
>   navigator.clipboard.writeText(itemsValue[i].value)
> }
> ```
