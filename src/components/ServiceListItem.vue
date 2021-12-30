<template>
  <div class="list-item">
    <div class="flex-2">
      <h4>{{ s.name }}</h4>
      <div>{{ s.note }}</div>
    </div>
    <div class="flex-4">
        <service-metrics :service="s"></service-metrics>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRef } from "vue";
import ServiceMetrics from "@/components/Service/ServiceMetrics.vue";
export default defineComponent({
  components: {
    ServiceMetrics,
  },
  props: {
    service: Object,
  },
  setup(props) {
    const s = toRef(props, "service");

    return { s };
  },
});
</script>
