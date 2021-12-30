<template>
  <div class="list-item">
    <div class="flex-3">
      <div>
        <h4>{{ s.name }}</h4>
        <div>Category: {{ s.category }}</div>
      </div>
    </div>
    <div class="flex-2">
      <service-metrics :service="s"></service-metrics>
      <pills>
        <pill class="pill">{{ s.category }}</pill>
      </pills>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, toRef} from "vue";
import ServiceMetrics from "@/components/Service/ServiceMetrics.vue";
import Pills from "@/components/Shared/Pills.vue";
import Pill from "@/components/Shared/Pill.vue";

export default defineComponent({
  components: {
    ServiceMetrics,
    Pills,
    Pill,
  },
  props: {
    service: Object,
  },
  setup(props) {
    const s = toRef(props, "service");

    return {s};
  },
});
</script>
