<template>
  <div class="sidenav">
    <div class="sidenav-links">
      <div class="row">
        <sidenav-nav icon="servers" to="/servers">Servers
          <pill>{{ serverCount }}</pill>
        </sidenav-nav>
      </div>
      <div class="row">
        <sidenav-nav to="/servers/instances">Servers Instances</sidenav-nav>
      </div>
      <div class="row">
        <sidenav-nav icon="executables" to="/executables">Executables <pill>{{executableCount}}</pill></sidenav-nav>
      </div>
      <div class="row">
        <sidenav-nav to="/executables/instances">Executables Instances</sidenav-nav>
      </div>
      <div class="row">
        <sidenav-nav icon="groups" to="/groups">Groups
          <pill>{{ groupCount }}</pill>
        </sidenav-nav>
      </div>
      <div class="row">
        <sidenav-nav icon="services" to="/services">Services
          <pill>{{ serviceCount }}</pill>
        </sidenav-nav>
      </div>
    </div>
  </div>
</template>

<script>
import {computed, defineComponent} from "vue";
import Pill from "@/components/Shared/Pill.vue";
import SidenavNav from "@/components/nav/SidenavNav";
import {useStore} from "vuex";

export default defineComponent({
  name: "Sidenav",
  components: {
    SidenavNav,
    Pill
  },
  setup() {
    const store = useStore();

    const serverCount = computed(() => {
      return store.getters.servers.length;
    });
    const executableCount = computed(() => {
      return store.getters.executables.length;
    });
    const serviceCount = computed(() => {
      return store.getters.services.length;
    });
    const groupCount = computed(() => {
      return store.getters.groups.length;
    });


    return {serverCount, serviceCount, groupCount, executableCount}
  }
});
</script>

<style scoped>

</style>