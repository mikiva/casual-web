<template>
  <div class="card">
    <div class="row">
      <h2>Servers</h2>
      <div>
        <button class="button-icon large" @click="refresh">
          <Icon>refresh</Icon>
        </button>
      </div>
    </div>
    <div class="list clickable">
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

import Icon from "@/components/Shared/Icon.vue"

export default defineComponent({
  name: "Servers",
  components: { ServerListItem, Icon },
  setup() {
    const store = useStore();

    function refreshServers() {
      store.dispatch("fetchDomain");
    }


    return {
      servers: computed(() => store.getters.servers),
      instances: computed(() => store.getters.serverInstances),
      refresh: refreshServers
    };
  },
});
</script>
