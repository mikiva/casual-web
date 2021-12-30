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
import {defineComponent, computed, reactive, ref} from "vue";
import {useStore} from "vuex";
import ServiceListItem from "@/components/ServiceListItem.vue";

export default defineComponent({
  name: "Services",
  components: {ServiceListItem},
  setup() {
    const store = useStore();
    const showAdmin = ref(false)

    const services = computed(() => {
      let serv = store.getters.services
      if (!showAdmin.value)
        serv = serv.filter((s) => s['category'] !== ".admin")
      return serv
    });

    return {services, showAdmin};
  },
});
</script>
