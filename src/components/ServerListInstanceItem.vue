<template>
  <div class="list-item">
    <div class="row">
      <div class="flex-2">
        <h4>{{ i.alias }}</h4>
        <div>{{ i.pid }}</div>
      </div>
      <div class="flex-1">{{ i.handle?.pid || i.handle }}</div>
      <div class="flex-2" v-if="i.handle.ipc">{{ ipc }}</div>
      <div class="flex-1">
        <pill>{{ state }}</pill>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, toRef } from "vue";
import Pill from "@/components/Shared/Pill.vue";

enum State {
  running,
  spawned,
  scale_out,
  scale_in,
  exit,
  error,
}
export default defineComponent({
  components: {
    Pill,
  },
  props: {
    instance: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const i = toRef(props, "instance");

    const state = computed(() => {
      return State[i.value.state];
    });
    const ipc = computed(() => {
      const ipc = i.value.handle?.ipc;
      const decoded = Buffer.from(ipc, "base64").toString("hex");
      return decoded;
    });
    return { i, state, ipc };
  },
});
</script>
