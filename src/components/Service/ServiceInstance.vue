<template>
  <div>
    <strong>{{ instance.alias }}</strong> <i>ipc:</i>{{ ipc }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "ServiceInstances",
  props: {
    instance: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { instance } = toRefs(props);
    const ipc = computed(() => {
      const decoded = Buffer.from(
          instance?.value?.ipc,
          "base64"
      ).toString("hex");
      return decoded;
    });
    return { ipc }
  }
});
</script>

<style scoped></style>
