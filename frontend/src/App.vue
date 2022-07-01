<template>
  <div>
    <div v-if="!userStore.auth">
      <NavBar />
      <router-view />
    </div>
    <div v-else class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col-auto col-md-2 px-sm-2 px-0 bg-dark">
          <SideNav />
        </div>
        <div class="col p-0">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import SideNav from "./components/SideNav.vue";
import { useUser } from "./store/user.js";
export default {
  name: "App",
  components: {
    NavBar,
    SideNav,
  },
  setup() {
    const userStore = useUser();
    return {
      userStore,
    };
  },
  mounted() {
    const userStore = useUser();
    if (localStorage.getItem("username")) {
      userStore.auth = true;
      userStore.username = localStorage.getItem("username");
    } else {
      userStore.auth = false;
    }
  },
};
</script>

<style>
body {
  font-family: "Comfortaa", cursive;
}
</style>
