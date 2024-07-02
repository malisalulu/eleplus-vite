<template>
  <div class="m-1 test">{{ count }}</div>
  <div class="m-7.5">World</div>
  <span class="bg-blue w-80 h-10 ml-10 m-1">This is a test</span>
</template>
<script setup>
console.log('hello')
import { ref } from 'vue'
const count = ref(0)
count.value++
</script>
<style scoped lang="scss">
.test {
  color: $color-danger;
}
</style>
