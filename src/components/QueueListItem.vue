<template>
  <div
      class="list-item expandable"
      @click="expanded = !expanded"
      :class="{ expanded: expanded }"
  >
    <div class="row center-height">
      <div class="flex-3">
        <div>
          <h4>{{ q.name }}</h4>
        </div>
      </div>
      <div class="flex-1">
        <pill>{{ q.count }}</pill>
      </div>
      <div class="flex-1">
        <pill>{{ q.size }}</pill>
      </div>
    </div>
    <template v-if="expanded">
      <div class="expanded-content">
        {{ q }}
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, ref, toRef } from "vue";
import { useStore } from "vuex";
import Pills from "@/components/Shared/Pills.vue";
import Pill from "@/components/Shared/Pill.vue";

export default defineComponent({
  components: {
    Pill
  },
  props: {
    queue: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const q = toRef(props, "queue");

    const expanded = ref(false);

    return { q, expanded };
  },
});
</script>
