<template>
  <div class="card">
    <div class="row">
      <h2>Services</h2>
      <button class="button-icon large" @click="refresh">
        <Icon>refresh</Icon>
      </button>

    </div>
    <div class="row">
      <div class="list clickable">
        <div class="flex-1">
          <input type="checkbox" id="admin-services" v-model="showAdmin"/>
          <label for="admin-services">Include admin services</label>
        </div>
        <div class="row">
          <div class="list-item header">
            <div class="row center-height">
              <div class="flex-3">Name</div>
              <div class="flex-1">Category</div>
              <div class="flex-1">Mode</div>
              <div class="flex-1">Contract</div>
            </div>
          </div>
        </div>
        <service-list-item
            :service="service"
            v-for="(service, idx) in services"
            :key="idx"
        ></service-list-item>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, ref } from "vue";
import { useStore } from "vuex";
import ServiceListItem from "@/components/ServiceListItem.vue";
import Icon from "@/components/Shared/Icon.vue";
export default defineComponent({
  name: "Services",
  components: { ServiceListItem, Icon },
  setup() {
    const store = useStore();
    const showAdmin = ref(false);

    const services = computed(() => {
      let services = store.getters.services;
      if (showAdmin.value) {
        services.push(...adminServices.value);
      }

      return services;
    });

    const adminServices = computed(() => {
      return store.getters.adminServices;
    });

    function refreshServices() {
      store.dispatch("fetchServices");
    }

    return { services, showAdmin, adminServices, refresh: refreshServices };
  },
});
</script>
