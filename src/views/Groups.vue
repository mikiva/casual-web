<template>
  <div class="card">
    <div class="list">
      <div class="list-item">
        <div class="flex-4">
          <div>Group Name</div>
        </div>
      </div>
      <group-list-item
        :group="group"
        v-for="group in groups"
        :key="group.id"
      ></group-list-item>
    </div>
    {{ g }}
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
