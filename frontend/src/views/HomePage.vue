<template>
  <div>
    <div v-if="userStore.auth">
      <HomeLogged />
    </div>
    <div v-else>
      <HomeNotLogged />
    </div>
  </div>
</template>

<script>
import { useUser } from "../store/user.js";
import HomeLogged from "../components/HomeLogged.vue";
import HomeNotLogged from "../components/HomeNotLogged.vue";
export default {
  name: "HomePage",
  components: {
    HomeLogged,
    HomeNotLogged,
  },
  setup() {
    const userStore = useUser();
    return { userStore };
  },
};
</script>
<style></style>
