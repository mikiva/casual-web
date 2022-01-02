<template>
  <div class="card">
    <div class="row">
      <h2>Servers</h2>
    </div>
    <div class="list">
      <div class="list-item header"></div>
      <server-list-item
        :server="server"
        v-for="server in servers"
        :key="server.id"
      ></server-list-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import ServerListItem from "@/components/ServerListItem.vue";

export default defineComponent({
  name: "Servers",
  components: { ServerListItem },
  setup() {
    const store = useStore();
    return {
      servers: computed(() => store.getters.servers),
      instances: computed(() => store.getters.serverInstances),
    };
  },
});
</script>
