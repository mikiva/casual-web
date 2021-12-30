<template>
  <div class="pill-list">
    <slot></slot>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Pills"
});
</script>

<style scoped>

</style>