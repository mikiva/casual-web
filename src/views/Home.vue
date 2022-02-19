<template>
  <h3>Casual admin gui</h3>
  <p>Here be dragons.</p>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  setup() {
    const store = useStore();
    const information = computed(() => {
      return store.getters.domainInfo;
    });
    const runlevel = computed(() => {
      return information.value.runlevel;
    });
    const version = computed(() => {
      return information.value.version;
    });
    const identity = computed(() => {
      return information.value.identity;
    });
    return { runlevel, version, identity };
  },
});
</script>
