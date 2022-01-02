<template>
  <div id="nav" class="topnav">
    <div class="brand">
      <router-link to="/" v-slot="{ navigate }">
        <img src="@/assets/img/casual_left_BW.svg" alt="" @click="navigate" />
      </router-link>
    </div>
    <router-link to="/servers">Servers</router-link>
    <router-link to="/servers/instances">Servers Instances</router-link>
    <router-link to="/executables">Executables</router-link>
    <router-link to="/executables/instances">Executables Instances</router-link>
    <router-link to="/groups">Groups</router-link>
    <router-link to="/services">Services</router-link>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Topnav",
  setup() {
    const img = computed(() => {
      return `@/assets/img/casual_logo_text_lg.svg`;
    });

    return { img };
  },
});
</script>

<style scoped></style>
