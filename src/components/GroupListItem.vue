<template>
  <div class="list-item" @click="expanded = !expanded" :class="{expanded: expanded}">
    <div class="row">

      <div class="flex-4">
        <div>
          <h4>{{ g.name }}</h4>
          <div>{{ g.note }}</div>
        </div>
      </div>
    </div>
    <div>
      <button class="button-icon">
        <icon v-if="!expanded">chevron_left</icon>
        <icon v-else>expand_more</icon>
      </button>
    </div>
  </div>
  <div class="list-item-expanded" v-show="expanded">
    <div class="row">
      {{g}}
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, ref, toRef} from "vue";
import Icon from "@/components/Shared/Icon.vue";

export default defineComponent({
  components: {
    Icon,
  },
  props: {
    group: Object,
  },
  setup(props) {
    const g = toRef(props, "group");
    const expanded = ref(false);
    return {g, expanded};
  },
});
</script>
