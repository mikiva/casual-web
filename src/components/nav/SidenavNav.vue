<template>
  <router-link :to="to" class="button nav">
    <img v-if="imgSource" :src="imgSource" alt="" class="sidenav-link-icon" />
    <slot></slot>
  </router-link>
</template>

<script>
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "SidenavNav",
  props: {
    to: String,
    icon: String,
  },
  setup(props) {
    const img = ref(props.icon);
    const imgSource = computed(() => {
      try {
        return require(`@/assets/img/icons/${img.value}.svg`);
      } catch (err) {
        return false;
      }
    });
    return { imgSource };
  },
});
</script>

<style scoped></style>
