<template>
  <div class="card">
    <div class="row">
      <h2>Service Instances</h2>
    </div>
    <div class="row">
      <div class="list">
        <div class="list-item header">
          <div class="row">
            <div class="flex-3">
              <div>Service</div>
            </div>
            <div class="flex-1">pid</div>
            <div class="flex-1">State</div>
            <div class="flex-2">Alias</div>
          </div>
        </div>
        <div v-for="(instance, idx) in instances" :key="idx" class="list-item">
          <div class="row">
            <div class="flex-3">{{ instance.name }}</div>
            <div class="flex-1">{{ instance.pid }}</div>
            <div class="flex-1">
              <pill>{{ state(instance.state) }}</pill>
            </div>
            <div class="flex-2">{{ instance.alias }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, watch } from "vue";
import { useStore } from "vuex";
import Pill from "@/components/Shared/Pill.vue";

enum State {
  idle,
  busy,
}

export default defineComponent({
  name: "Services Instances",
  components: { Pill },
  setup() {
    const store = useStore();

    const instances = computed(() => store.getters.serviceInstances);
    const state = (state) => {
      return State[state];
    };

    return {
      instances,
      state,
    };
  },
});
</script>
