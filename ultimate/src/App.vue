<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'

</script>

<template>

  <div class="wrapper">
    <div v-for="n in 19999" class="box"><span :data-num="n">{{ String.fromCharCode(n) }}</span></div>
  </div>
</template>


<style scoped>

.box {
  background-color: #444;
  color: #fff;
  font-size: 150%;
  text-align: center;
}

.box:nth-child(even) {
  background-color: #ccc;
  color: #000;
}

.wrapper {
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(99, 50px);
  grid-template-rows: repeat(99, 50px);
  grid-auto-flow: column;
  /*overflow: hidden;*/
  width: 100vw;
  height: 100vh;
}

.wrapper span {
  font-size: 200%;
}

</style>

