<template>
  <div
      class="list-item expandable"
      @click="expanded = !expanded"
      :class="{ expanded: expanded }"
  >
    <div class="row center-height">
      <div class="flex-3">
        <div>
          <h4>{{ s.name }}</h4>
        </div>
      </div>
      <div class="flex-1">
        <pill class="pill">{{ s.category }}</pill>
      </div>
      <div class="flex-1">
        <pill class="pill">{{ transactionMode }}</pill>
      </div>
      <div class="flex-1">
        <pill class="pill">{{ contract }}</pill>
      </div>
    </div>
    <template v-if="expanded">
      <div class="expanded-content">
        <h3>Metrics</h3>
        <div class="row">{{ s.metric.invoked.count }}</div>
        <div class="row">{{ s.metric.invoked.total }}</div>
        <h3>Instances</h3>
        <div class="row" v-for="(instance, idx) in instances" :key="idx">
          <service-instance :instance="instance"></service-instance>
        </div>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, ref, toRef } from "vue";
import { useStore } from "vuex";
import Pill from "@/components/Shared/Pill.vue";
import ServiceInstance from "@/components/Service/ServiceInstance.vue";
import { Contract, Service, Transaction } from "@/models";

export default defineComponent({
  components: {
    Pill,
    ServiceInstance,
  },
  props: {
    service: {
      type: Object as PropType<Service>,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const s = toRef(props, "service");

    const expanded = ref(false);

    const contract = computed(() => {
      return Contract[s.value?.execution?.timeout?.contract];
    });

    const transactionMode = computed(() => {
      return Transaction[s.value?.transaction];
    });

      const sequential = s.value.instances.sequential;
    const instances = computed(() => {

      const inst = sequential.map((se) => {
        let i = { ...store.getters.serverByPid(se.pid) }
        i["ipc"] = store.getters.instanceByPid(se["pid"])["process"]["ipc"]
        return i;
      });
      return inst;
    });

    return { s, contract, instances, expanded, transactionMode };
  },
});
</script>
