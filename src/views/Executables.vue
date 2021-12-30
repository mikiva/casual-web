<template>
  <div class="card">
    <div class="list">
      <div class="list-item">
        <div class="flex-4">
          <div>Server Alias</div>
        </div>
        <div class="flex-2">Instances</div>
      </div>
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
    console.log(store.getters);
    //const servers = computed(() => store.getters.servers);

    return {
      servers: computed(() => store.getters.executables),
      instances: computed(() => store.getters.serverInstances),
    };
  },
});
</script>
