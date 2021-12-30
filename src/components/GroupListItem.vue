<template>
  <div class="list-item">
    <div class="flex-4">
      <h4>{{ g.name }}</h4>
      <div>{{ g.note }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRef } from "vue";

export default defineComponent({
  props: {
    group: Object,
  },
  setup(props) {
    const g = toRef(props, "group");

    return { g };
  },
});
</script>
