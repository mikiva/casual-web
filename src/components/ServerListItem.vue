<template>
  <div class="list-item">
    <div class="flex-4">
      <h4>{{ s.alias }}</h4>
      <div>{{ s.note }}</div>
    </div>
    <div class="flex-2">
      <div class="pill-list">

      <span class="pill">{{ s.instances?.length }}</span>
      </div>
      </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRef } from "vue";

export default defineComponent({
  props: {
    server: Object,
  },
  setup(props) {
    const s = toRef(props, "server");

    return { s };
  },
});
</script>
