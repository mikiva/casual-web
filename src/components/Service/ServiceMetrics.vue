<template>
  <pills class="pill-list">
    <pill>Invoked: {{ service.metric?.invoked?.count }}</pill>
    <pill>Total time: {{ service.metric?.invoked?.total }}</pill>
  </pills>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Pills from "@/components/Shared/Pills.vue";
import Pill from "@/components/Shared/Pill.vue";

export default defineComponent({
  components: {
    Pills,
    Pill,
  },
  props: {
    service: Object,
  },
});
</script>
