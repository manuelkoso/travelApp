import { defineStore } from "pinia";

export const useUser = defineStore("main", {
  state: () => {
    return {
      auth: false,
      username: "",
    };
  },
  getters: {},
  actions: {},
});
