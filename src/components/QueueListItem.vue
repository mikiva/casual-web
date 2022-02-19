<template>
  <div class="list-item expandable"
       @click="expandQueue(!expanded)"
       :class="{ expanded: expanded }"
  >
    <div class="row center-height">
      <div class="flex-3">
        <h4>{{ q.name }}</h4>
      </div>
      <div class="flex-1">
        <span>{{ group }}</span>
      </div>
      <div class="flex-1">
        <span>{{ q.count }}</span>
      </div>
      <div class="flex-1">
        <span>{{ q.size }}</span>
      </div>
    </div>
  </div>

  <div class="expand-content" ref="container" :class="{expanded: expanded}">
    <template v-if="loading">
      <div class="p-10">
        <span class="loader"></span>
      </div>
    </template>
    <template v-if="expanded && !loading">
      <div ref="qMessages" class="flex-1 p-10">
        <div class="list-item header">
          <div class="row">
            <div class="flex-3">Message ID</div>
            <div class="flex-1">Size</div>
            <div class="flex-1">State</div>
            <div class="flex-1">Type</div>
            <div class="flex-1">Timestamp</div>
          </div>
        </div>

        <div class="list-item" v-for="(message, idx) in q.messages" :key="idx">
          <div class="row">
            <div class="flex-3">{{ $fromBase64(message.id) }}</div>
            <div class="flex-1">
              <span>{{ message.size }}</span>
            </div>
            <div class="flex-1">
              <span>{{ state(message.state) }}</span>
            </div>
            <div class="flex-1">
              <span>{{ message.type }}</span>
            </div>
            <div class="flex-1">
              <span>{{ $fromUnixtime(message.timestamp) }}</span>
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

import { computed, defineComponent, ref, toRef, watch, nextTick } from "vue";
import { useStore } from "vuex";
import Pill from "@/components/Shared/Pill.vue";

export default defineComponent({
  components: {},
  props: {
    queue: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const q = toRef(props, "queue");
    const messages = computed(() => q.value.messages);
    const expanded = ref(false);
    const loading = ref(false)
    const container = ref<HTMLDivElement>();
    const qMessages = ref<HTMLDivElement>();

    const group = computed(() => {
      return q.value.group
    })

    async function expandQueue(val) {
      expanded.value = val

      if (expanded.value) {
        loading.value = true;
        await store.dispatch("fetchQueueMessages", { name: q.value.name });
      }
      loading.value = false;
    }

    function state(st) {
      return State[st]
    }

    watch(messages, (val) => {

      if (val === undefined) {
        //store.dispatch("fetchQueueMessages", { name: q.value.name });
        expandQueue(false);
        return;
      }

    });

    return { q, expanded, expandQueue, state, container, qMessages, loading, group };
  },
});
</script>
