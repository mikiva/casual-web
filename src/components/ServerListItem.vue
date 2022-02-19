<template>
  <div class="list-item expandable" @click="expanded = !expanded" :class="{ expanded: expanded }">
    <div class="row center-height">
      <div class="flex-4">
        <div>
          <h4>{{ s.alias }}</h4>
          <div class="description">{{ s.note }}</div>
        </div>
      </div>
      <div class="flex-2">
        <pills>
          <pill>Instances: {{ instanceCount }}</pill>
        </pills>
      </div>
    </div>
  </div>
  <div class="expand-content" :class="{ expanded: expanded }">
    <template v-if="expanded">
      <div class="p-10">

        <div class="list-item  header">
          <div class="row">

            <i class="flex-2">Instances</i>
            <i class="flex-1">pid</i>
            <i class="flex-2">ipc</i>
            <i class="flex-1">state</i>
          </div>
        </div>

        <servers-list-instances-item
            v-for="(instance, idx) in instances"
            :key="idx"
            :instance="instance"
        ></servers-list-instances-item>
      </div>
      <div class="p-10">
        <div class="list-item header"><i>Group memberships</i></div>
        <div class="list-item" v-for="(membership, idx) in memberships" :key="idx">
          {{ membership }}
        </div>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, toRef } from "vue";
import { useStore } from "vuex";
import ServersListInstancesItem from "@/components/ServerListInstanceItem.vue";
import Pills from "@/components/Shared/Pills.vue";
import Pill from "@/components/Shared/Pill.vue";

export default defineComponent({
  components: {
    Pills,
    Pill,
    ServersListInstancesItem
  },
  props: {
    server: Object,
  },
  setup(props) {
    const store = useStore();
    const s = toRef(props, "server");
    const expanded = ref(false);

    const instances = computed(() => {
      const instances = [] as any[];
      for (const inst of s.value?.instances) {
        const i = { ...inst };
        i["alias"] = s.value?.alias;
        instances.push(i);
      }
      return instances;
    });
    const instanceCount = computed(() => {
      return instances.value.length;
    });

    const memberships = computed(() => {
      const memberships = [] as any[];
      for (const inst of s.value?.memberships) {
        const i = inst;
        //i["alias"] = s.value?.alias;
        const group = store.getters.groupById(i);
        memberships.push(group.name);
      }
      return memberships;

    })


    return { s, expanded, instances, memberships , instanceCount};
  },
});
</script>
