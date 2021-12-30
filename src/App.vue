<template>
  <topnav></topnav>
  <sidenav></sidenav>
  <div class="content">
    <router-view :key="$route.path"/>
  </div>
</template>

<script>
import {defineComponent, provide, reactive} from "vue";
import {useStore} from "vuex";
import Topnav from "@/components/nav/Topnav.vue";
import Sidenav from "@/components/nav/Sidenav.vue";

export default defineComponent({
  components: {
    Topnav,
    Sidenav,
  },
  setup() {
    const store = useStore();
    store.dispatch("fetchCasualData");
  },
});
</script>


