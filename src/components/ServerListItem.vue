<template>
  <div class="list-item ">
    <div class="row center-height">

      <div class="flex-4">
        <div>
          <h4>{{ s.alias }}</h4>
          <div class="description">{{ s.note }}</div>
        </div>
      </div>
      <div class="flex-2">
        <pills>
          <pill>Instances: {{ s.instances?.length }}</pill>
        </pills>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRef } from "vue";
import Pills from "@/components/Shared/Pills.vue";
import Pill from "@/components/Shared/Pill.vue";


export default defineComponent({
  components: {
    Pills,
    Pill
  },
  props: {
    server: Object,
  },
  setup(props) {
    const s = toRef(props, "server");

    return { s };
  },
});
</script>
