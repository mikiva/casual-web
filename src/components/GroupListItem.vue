<template>
  <div class="list-item expandable" @click="expanded = !expanded" :class="{expanded: expanded}">
    <div class="row center-height">
      <div class="flex-4">
        <div>
          <h4>{{ g.name }}</h4>
          <div class="description">{{ g.note || "No note" }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="expand-content" :class="{ expanded: expanded }">

    <template v-if="expanded">
      <div class="flex-1 p-10">
        <template v-if="g.dependencies.length > 0">
          <div class="list-item header">
            <i>Dependencies</i>
          </div>
          <div class="list-item" v-for="dep in g.dependencies" :key="dep.id">
            {{ dependency(dep) }}
          </div>
        </template>
        <template v-else>
          <div class="row">
            <i>No dependencies</i>
          </div>
        </template>
      </div>
      <div class="p-10">

        <div class="list-item header"><i>Members</i></div>
        <div class="list-item" v-for="member in members" :key="member.alias">
          <div class="row">
            <div class="flex-4">
              <strong>{{ member.alias }}</strong>
            </div>
            <div class="flex-1">
              <pill>Instances: {{ member.instances.length }}</pill>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, toRef } from "vue";
import { useStore } from "vuex";
import Pill from "@/components/Shared/Pill.vue";

export default defineComponent({
  components: { Pill },
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

    const members = computed(() => {
      console.log(g?.value?.id)
      let servers = [...store.getters.servers];
      let executables = [...store.getters.executables];
      servers.push.apply(servers, executables);
      servers = servers.filter((s) => {
        return s.memberships.includes(g?.value?.id)
      });
      return servers
    })

    return { g, expanded, dependency, members };
  },
});
</script>
