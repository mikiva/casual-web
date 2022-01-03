<template>
  <div
      class="list-item expandable"
      @click="expandQueue(!expanded)"
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
        <div class="list-item" v-for="(message, idx) in q.messages" :key="idx">

          <div class="row">
            <div class="flex-3">{{ $fromBase64(message.id) }}</div>
            <div class="flex-1">
              <pill>{{ message.size }}</pill>
            </div>
            <div class="flex-1">
              <pill>{{ state(message.state) }}</pill>
            </div>
            <div class="flex-1">
              <pill>{{ message.type }}</pill>
            </div>
            <div class="flex-1">
              <pill>{{ message.timestamp }}</pill>
            </div>
          </div>

        </div>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
enum State {
  Enqueued = 1,
  Committed,
  Dequeued
}

import { computed, defineComponent, inject, reactive, ref, toRef, watch } from "vue";
import { useStore } from "vuex";
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

    function expandQueue(val) {
      expanded.value = val

      if (expanded.value)
        store.dispatch("fetchQueueMessages", { name: q.value.name });
    }

    function state(st) {
      return State[st]
    }

    watch(q, () => {
      expandQueue(false)
    });
    return { q, expanded, expandQueue, state };
  },
});
</script>
