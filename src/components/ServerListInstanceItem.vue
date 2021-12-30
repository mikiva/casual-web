<template>
  <div class="list-item">
    <div class="flex-2">
      <h4>{{ i.alias }}</h4>
      <div>{{ i.pid }}</div>
    </div>
    <div class="flex-1">{{ i.handle?.pid || i.handle }}</div>
    <div class="flex-2" v-if="i.handle.ipc">{{ ipc }}</div>
    <div class="flex-1">
      <div class="pill-list">
        <span class="pill">{{ state }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, defineComponent, toRef } from "vue";
export default defineComponent({
  props: {
    instance: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const i = toRef(props, "instance");

    const state = computed(() => {
      switch (i.value.state) {
        case 0:
          return "Running";
        default:
          return "Unknown";
      }
    });

    const ipc = computed(() => {
      const ipc = i.value.handle?.ipc;
      let decoded = ipc;
      decoded = atob(ipc)
        .split("")
        .map(function (aChar) {
          return ("0" + aChar.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("");
      return decoded;
    });
      return { i, state, ipc };
  },
});
</script>
