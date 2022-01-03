<template>
  <div>
    <strong>{{ instance.alias }}</strong> <i>ipc:</i>{{ $fromBase64(instance.ipc) }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServiceInstances",
  props: {
    instance: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped></style>
