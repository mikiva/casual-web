<template>
  <div class="card">
    <div class="row">
      <h2>Server Instances</h2>
    </div>
    <div class="row">
      <div class="list">
        <div class="list-item header">
          <div class="row">

            <div class="flex-2">
              <div>Server Alias</div>
            </div>
            <div class="flex-1">pid</div>
            <div class="flex-2">ipc</div>
            <div class="flex-1">State</div>
          </div>
        </div>
        <server-list-instance-item
            v-for="(instance, idx) in instances"
            :key="idx"
            :instance="instance"
        >
        </server-list-instance-item>
      </div>
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
      servers: computed(() => store.getters.servers),
      instances: computed(() => store.getters.serverInstances),
    };
  },
});
</script>
