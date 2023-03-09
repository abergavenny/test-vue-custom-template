import Vue from "vue";
import Vuex from "vuex";

import randomModule from "./modules/randomModule";

import type { RootState } from "@/types";

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
    hello: "world",
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    random: randomModule,
  },
});
