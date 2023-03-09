import type { ActionTree, GetterTree, MutationTree } from "vuex";
import type { RandomState, RootState } from "@/types";

const getters: GetterTree<RandomState, RootState> = {};

const mutations: MutationTree<RandomState> = {};

const actions: ActionTree<RandomState, RootState> = {};

export default {
  state: {
    value: 0,
  } as RandomState,
  getters,
  mutations,
  actions,
};
