import { createStore } from "vuex";
import { InformationService } from "@/services";


interface Server {
  instances: any,
  alias: string
}

export default createStore({
  state: {
    servers: [] as Server[],
    executables: [] as Server[],
    groups: [],
    services: [],
  },
  getters: {
    servers: function (state) {
      return state.servers;
    },
    serverInstances: function (state) {

      const instances = [] as any[]

      state.servers.forEach(s => {
        for (const inst of s.instances) {
          inst['alias'] = s.alias
          instances.push(inst)
        }

      })
      return instances
    },
    executableInstances: function (state) {

      const instances = [] as any[]

      state.executables.forEach(s => {
        for (const inst of s.instances) {
          inst['alias'] = s.alias
          instances.push(inst)
        }

      })
      return instances
    },
    executables: function (state) {
      return state.executables;
    },
    groups: function (state) {
      return state.groups;
    },
    services: function (state) {
      return state.services;
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
      console.log("SET GROUPS", payload)
      state.groups = payload;
    },
    setServices: function (state, payload) {
      state.services = payload;
    },
  },
  actions: {
    getDomain: function ({ commit }) {
      return InformationService.getDomain().then((res) => {
        commit('setServers', res.servers);
        commit('setExecutables', res.executables);
        commit('setGroups', res.groups);
      })
    },
    getServices: function ({ commit }) {
      return InformationService.getServices().then((res) => {
        commit('setServices', res.services);
      })
    },
    fetchCasualData: function ({ dispatch }) {

      const domain = dispatch('getDomain')
      const services = dispatch('getServices')

      return Promise.all([domain, services]).then((res) => {
        console.log(res)

      })



    }

  },
  modules: {},
});
