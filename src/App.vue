<template>
  <div id="nav" class="topnav">
    <router-link to="/">Home</router-link>
    <router-link to="/servers">Servers</router-link>
    <router-link to="/servers/instances">Servers Instances</router-link>
    <router-link to="/executables">Executables</router-link>
    <router-link to="/executables/instances">Executables Instances</router-link>
    <router-link to="/groups">Groups</router-link>
    <router-link to="/services">Services</router-link>
  </div>
  <div class="content">
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import { defineComponent, provide, reactive } from "vue";
//import store from "@/store";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();
    store.dispatch("fetchCasualData");
  },
});
</script>


