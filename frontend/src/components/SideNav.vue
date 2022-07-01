<template lang="html">
  <div
    class="d-flex sticky-top flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"
  >
    <router-link
      :to="'/'"
      class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
    >
      <span class="fs-5 d-none d-sm-inline pt-3">TravelApp</span>
    </router-link>
    <ul
      class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
      id="menu"
    >
      <li class="nav-item">
        <router-link :to="'/'" class="nav-link align-middle px-0 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-house fs-4"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
            />
            <path
              fill-rule="evenodd"
              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
            />
          </svg>
          <span class="ms-1 d-none d-sm-inline">My Story</span>
        </router-link>
      </li>
      <li>
        <router-link
          :to="'/addtravel'"
          class="nav-link px-0 align-middle text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-geo-alt"
            viewBox="0 0 16 16"
          >
            <path
              d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
            />
            <path
              d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            />
          </svg>
          <span class="ms-1 d-none d-sm-inline">Add Travel</span>
        </router-link>
      </li>
    </ul>
    <hr />
    <div class="dropdown pb-4">
      <a
        href="#"
        class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
        id="dropdownUser1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-person-circle me-1"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
        <span class="d-none d-sm-inline mx-1">{{
          this.userStore.username
        }}</span>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a class="dropdown-item" @click="logOut" href="/">Sign out</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useUser } from "../store/user.js";
export default {
  name: "SideNav",
  setup() {
    const userStore = useUser();
    return {
      userStore,
    };
  },
  methods: {
    logOut() {
      const loader = this.$loading.show();
      this.userStore.$reset();
      localStorage.removeItem("username");
      localStorage.removeItem("x-access-token");
      loader.hide();
    },
  },
};
</script>
<style lang="css"></style>
