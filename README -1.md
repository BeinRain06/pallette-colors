# pallette-colors

### customize background-color with `v-for` value - vuejs

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

**I**: case **options API**:

<script>
    export default: {
data: {
return {
count:0;
}
},
methods: {
    /*this here*/
myBgColor(item) { 
return { backgroundColor: item }
}
}
}
</script>

**II**: case **composition API**:

<script setup>
    import {ref} from "vue"

    const count= ref(0)

// this here
    function function myBgColor(item) { 
  return { backgroundColor: item }
}
</script>
