<template>
  <div class="list-item">
    <div class="row">
      <div class="flex-2">
        <h4>{{ i.alias }}</h4>
      </div>
      <div class="flex-1">{{ pid }}</div>
      <div class="flex-2">{{ipc}}</div>
      <div class="flex-1">
        <span>{{ state }}</span>
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
      let decoded = "-";
      if (ipc)
        decoded = Buffer.from(ipc, "base64").toString("hex");

      return decoded;
    });
    const pid = computed(() => {
      let pid = i.value.handle?.pid;
      if (!pid)
        pid = i.value.handle

      return pid;
    })
    return { i, state, pid, ipc };
  },
});
</script>
