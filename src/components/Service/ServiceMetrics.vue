<template>
<div class="pill-list">

  <service-metric-pill>Invoked: {{    service.metric?.invoked?.count  }}</service-metric-pill>
  <service-metric-pill>Total time: {{    service.metric?.invoked?.total  }}</service-metric-pill>
</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ServiceMetricPill from "@/components/Service/ServiceMetricPill.vue";

export default defineComponent({
  components: {
    ServiceMetricPill,
  },
  props: {
    service: Object,
  },
});
</script>
