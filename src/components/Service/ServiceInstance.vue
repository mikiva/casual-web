<template>
  <div>
    {{ instance }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServiceInstances",
  props: {
    instance: Object
  },

});
</script>

<style scoped>

</style>