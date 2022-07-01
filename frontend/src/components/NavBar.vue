<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg px-3 sticky-top">
    <router-link :to="'/'" class="navbar-brand"> TravelApp</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link :to="'/login'" class="nav-link">LogIn</router-link>
        </li>
        <li class="nav-item mr-auto">
          <router-link :to="'/signup'" class="nav-link">SignUp</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useUser } from "../store/user.js";
export default {
  name: "NavBar",
  setup() {
    const userStore = useUser();
    return {
      userStore,
    };
  },
  methods: {
    logOut() {
      this.userStore.$reset();
      localStorage.removeItem("username");
      localStorage.removeItem("x-access-token");
    },
  },
};
</script>
