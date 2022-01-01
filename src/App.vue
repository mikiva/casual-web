<template>
  <topnav></topnav>
  <sidenav></sidenav>
  <div class="content">
    <template v-if="!loading"></template>
    <router-view :key="$route.path"/>
  </div>
</template>

<script>
import {defineComponent, provide, reactive, ref} from "vue";
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
    let loading = ref(true);
    store.dispatch("fetchCasualData").then(() => {
      loading.value = false;
    });

    return {loading}
  },
});
</script>


