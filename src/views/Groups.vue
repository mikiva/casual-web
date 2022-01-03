<template>
  <div class="card">
    <div class="row"><h2>Groups</h2></div>
    <div class="list clickable">
      <div class="list-item header"></div>
      <group-list-item
        :group="group"
        v-for="group in groups"
        :key="group.id"
      ></group-list-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import GroupListItem from "@/components/GroupListItem.vue";

export default defineComponent({
  name: "Groups",
  components: { GroupListItem },
  setup() {
    const store = useStore();
    return { groups: computed(() => store.getters.groups) };
  },
});
</script>
