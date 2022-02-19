<template>
  <div id="nav" class="topnav">
    <div class="brand flex-1">
      <router-link to="/" v-slot="{ navigate }">
        <img src="@/assets/img/casual_left_BW.svg" alt="" @click="navigate"/>
      </router-link>
      <div class="quote">
        <Icon @mouseover="showQuote = true" @mouseout="showQuote = false">format_quote</Icon>
        <div class="quote-wrapper" :key="$route.path">
          <div class="quote-container" :class="{ show: showQuote }">
            <p class="text">{{ quote.quote }}</p>
            <p style="opacity: 0.6"><i>- {{ quote.author }}</i></p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1">
      <div>{{ domainName }}</div>
    </div>
    <pill>{{ runlevel }}</pill>

  </div>
</template>

<script lang="ts">

enum Runlevel {
  Startup,
  Running,
  Shutdown,
  Error
}


import { computed, defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import Pill from "@/components/Shared/Pill.vue";
import Icon from "@/components/Shared/Icon.vue";
import { getQuote } from "@/assets/misc/quotes";

export default defineComponent({
  name: "Topnav",
  components: { Pill, Icon },
  setup() {
    const store = useStore();
    const route = useRoute();
    const img = computed(() => {
      return `@/assets/img/casual_logo_text_lg.svg`;
    });

    const domainName = computed(() => {
      const identity = store.getters.domainInfo?.identity;
      return identity?.name;
    });

    const runlevel = computed(() => {
      const rl = store.getters.domainInfo?.runlevel;
      return Runlevel[rl]
    });
    const casual = computed(() => {
      const identity = store.getters.domainInfo?.identity;
      return identity?.casual || "[version]";
    });

    const showQuote = ref(false);
    const quote = computed(() => {
      route.fullPath;
      return getQuote();
    });

    return { img, domainName, runlevel, casual, showQuote, quote };
  },
});
</script>

<style scoped></style>
