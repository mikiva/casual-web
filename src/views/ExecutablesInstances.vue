<template>
  <div class="card">
    <div class="list">
      <div class="list-item">
        <div class="flex-2">
          <div>Server Alias</div>
        </div>
        <div class="flex-1">pid</div>
        <div class="flex-1">State</div>
      </div>
      <server-list-instance-item
        v-for="(instance, idx) in instances"
        :key="idx"
        :instance="instance"
      >
      </server-list-instance-item>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import ServerListInstanceItem from "@/components/ServerListInstanceItem.vue";
export default defineComponent({
  name: "Servers",
  components: { ServerListInstanceItem },
  setup() {
    const store = useStore();

    return {
      instances: computed(() => store.getters.executableInstances),
    };
  },
});
</script>
