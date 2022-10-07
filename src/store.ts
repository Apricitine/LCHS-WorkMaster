import { defineStore } from "pinia";

const useStore = defineStore("main", () => {
  const username = "me";
  return { username };
});

export default useStore;
