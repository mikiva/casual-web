import { createStore } from "vuex";
import { InformationService } from "@/services";
import { Service, ServiceInstances } from "@/models";

interface Server {
  instances: any;
  alias: string;
}

export default createStore({
  strict: true,
  state: {
    servers: [] as Server[],
    executables: [] as Server[],
    groups: [],
    services: [] as Service[],
    serviceInstances: {} as ServiceInstances,
    queues: []
  },
  getters: {
    servers: function (state) {
      return state.servers;
    },
    serverByPid: function (state) {
      return function (pid) {
        const servers = state.servers;
        for (const s of servers) {
          if (s.instances.some((i) => i.handle.pid === pid)) return s;
        }
        return null;
      };
    },
    serverInstances: function (state) {
      const instances = [] as any[];

      state.servers.forEach((s) => {
        for (const inst of s.instances) {
          const i = { ...inst };
          i["alias"] = s.alias;
          instances.push(i);
        }
      });
      return instances;
    },
    executableInstances: function (state) {
      const instances = [] as any[];

      state.executables.forEach((s) => {
        for (const inst of s.instances) {
          const i = { ...inst };
          i["alias"] = s.alias;
          instances.push(i);
        }
      });
      return instances;
    },
    executables: function (state) {
      return state.executables;
    },
    groups: function (state) {
      return state.groups;
    },
    groupById: function (state) {
      return function (id) {
        const groups = state.groups;
        return groups.find((g) => g["id"] === id);
      };
    },
    services: function (state) {
      return state.services.filter((s) =>
        ![".admin", ".deprecated"].includes(s["category"])
      );
    },
    adminServices: function (state) {
      const services = state.services;
      return services.filter((s) =>
        [".admin", ".deprecated"].includes(s["category"])
      );
    },
    serviceInstances: function (state, getters) {
      const services = state.services;
      const instances = [] as any[];
      services.forEach((service) => {
        for (const inst of service.instances.sequential) {
          const i = { ...inst };
          i["alias"] = getters.serverByPid(inst.pid).alias;
          i["name"] = service.name;
          Object.assign(i, getters.instanceByPid(inst.pid));

          instances.push(i);
        }
      });

      return instances;
    },
    instanceByPid: function (state) {
      return function (pid) {
        const instances = state.serviceInstances.sequential;
        for (const ins of instances) {
          if (ins["process"]["pid"] === pid) {
            return ins;
          }
        }
        return null;
      };
    },
    queues: function (state) {
      return state.queues;
    },
  },
  mutations: {
    setServers: function (state, payload) {
      state.servers = payload;
    },
    setExecutables: function (state, payload) {
      state.executables = payload;
    },
    setGroups: function (state, payload) {
      state.groups = payload;
    },
    setServices: function (state, payload) {
      state.services = payload;
    },
    setServiceInstances: function (state, payload) {
      state.serviceInstances = payload;
    },
    setQueues: function (state, payload) {
      payload.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
      state.queues = payload;
    },
  },
  actions: {
    fetchDomain: function ({ commit }) {
      return InformationService.getDomain().then((res) => {
        commit("setServers", res.servers);
        commit("setExecutables", res.executables);
        commit("setGroups", res.groups);
      });
    },
    fetchServices: function ({ commit }) {
      return InformationService.getServices().then((res) => {
        commit("setServices", res.services);
        commit("setServiceInstances", res.instances);
      });
    },
    fetchQueues: function ({ commit }) {
      return InformationService.getQueues().then((res) => {
        commit("setQueues", res.queues);
      });
    },
    fetchCasualData: function ({ dispatch }) {
      const domain = dispatch("fetchDomain");
      const services = dispatch("fetchServices");
      const queues = dispatch("fetchQueues");

      return Promise.all([domain, services]).then((res) => {
        //  console.log(res)
      });
    },
  },
  modules: {},
});
