<template>
  <div class="card">
    <div class="row">
      <h2>Queues</h2>
      <div>
        <button class="button-icon large" @click="refresh">
          <Icon>refresh</Icon>
        </button>
      </div>
    </div>
    <div class="list clickable">
      <div class="list-item header">
        <div class="row">
          <div class="flex-3">Name</div>
          <div class="flex-1">Count</div>
          <div class="flex-1">Size</div>
        </div>
      </div>

      <queue-list-item :queue="queue" v-for="(queue, idx) in queues" :key="idx"></queue-list-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import QueueListItem from "@/components/QueueListItem.vue";
import Icon from "@/components/Shared/Icon.vue";

export default defineComponent({
  name: "Queues",
  components: { QueueListItem, Icon },
  setup() {
    const store = useStore();
    const expanded = ref(false);

    const queues = computed(() => {
      return store.getters.queues;
    });

    function refreshQueues() {
      store.dispatch("fetchQueues");

    }

    return { queues, expanded, refresh: refreshQueues };
  },
});
</script>
