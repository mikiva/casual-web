<template>
  <div class="list-item" @click="expanded = !expanded">
    <div class="row center-height">
      <div class="flex-4">
        <div>
          <h4>{{ g.name }}</h4>
          <div class="description">{{ g.note || "No note" }}</div>
        </div>
      </div>
      <div>
        <button class="button-icon">
          <icon v-if="!expanded">chevron_left</icon>
          <icon v-else>expand_more</icon>
        </button>
      </div>
    </div>
    <template v-if="expanded">
      <template v-if="g.dependencies.length > 0">
        <div class="row">
          <i>Dependencies</i>
        </div>
        <div class="row" v-for="dep in g.dependencies" :key="dep">
          <strong>{{ dependency(dep) }}</strong>
        </div>
      </template>
      <template v-else>
        <div class="row">
          <i>No dependencies</i>
        </div>
      </template>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, toRef } from "vue";
import { useStore } from "vuex";
import Icon from "@/components/Shared/Icon.vue";

export default defineComponent({
  components: {
    Icon,
  },
  props: {
    group: Object,
  },
  setup(props) {
    const store = useStore();
    const g = toRef(props, "group");
    const expanded = ref(false);

    function dependency(groupId) {
      const dep = store.getters.groupById(groupId);
      return dep?.name;
    }

    return { g, expanded, dependency };
  },
});
</script>
