<template>
  <div class="card">
    <div class="list">
      <div class="list-item">
        <div class="flex-4">
          <div>Service Name</div>
        </div>
      </div>
      <service-list-item
        :service="service"
        v-for="service in services"
        :key="service.id"
      ></service-list-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import ServiceListItem from "@/components/ServiceListItem.vue";

export default defineComponent({
  name: "Services",
  components: { ServiceListItem },
  setup() {
    const store = useStore();

    return { services: computed(() => store.getters.services) };
  },
});
</script>
