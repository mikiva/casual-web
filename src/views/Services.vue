<template>
  <div class="card">
    <div class="row">
      <h2>Services</h2>
    </div>
    <div class="row">

      <div class="list">
        <div class="flex-1">
          <input type="checkbox" id="admin-services" v-model="showAdmin">
          <label for="admin-services">Show admin services</label>
        </div>
        <div class="row">
          <div class="list-item header">
            <div class="row center-height">
              <div class="flex-3">
                Name
              </div>
              <div class="flex-1">
                Category
              </div>
              <div class="flex-1">
                Mode
              </div>
              <div class="flex-1">
                Contract
              </div>

            </div>
          </div>
        </div>
        <service-list-item
            :service="service"
            v-for="service in services"
            :key="service.id"
        ></service-list-item>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, ref } from "vue";
import { useStore } from "vuex";
import ServiceListItem from "@/components/ServiceListItem.vue";

export default defineComponent({
  name: "Services",
  components: { ServiceListItem },
  setup() {
    const store = useStore();
    const showAdmin = ref(false)

    const services = computed(() => {
      let serv = store.getters.services
      if (!showAdmin.value)
        serv = serv.filter(
          (s) => ![".admin", ".deprecated"].includes(s["category"])
        );
      return serv;
    });

    return { services, showAdmin };
  },
});
</script>
