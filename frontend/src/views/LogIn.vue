<template lang="html">
  <div class="d-flex justify-content-center">
    <div class="login-card bg-light border shadow rounded p-3 mx-3">
      <h3 class="mb-3">Login</h3>
      <form @submit.prevent="handleSubmit">
        <div class="form-group mb-3">
          <input
            v-model="username"
            type="text"
            class="form-control shadow-none"
            placeholder="Username"
          />
        </div>
        <div class="form-group mb-4">
          <input
            v-model="password"
            type="password"
            class="form-control shadow-none"
            placeholder="Password"
          />
        </div>
        <div class="clearfix mb-3">
          <button
            class="btn btn-primary float-end"
            :disabled="!(this.username && this.password)"
          >
            Submit
          </button>
        </div>
        <footer>
          <div class="d-flex justify-content-center links">
            <span
              >Don't yuo have an account?
              <router-link class="text-decoration-none" to="/signup"
                >Sign Up</router-link
              ></span
            >
          </div>
        </footer>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useUser } from "../store/user.js";
export default {
  name: "LogIn",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      const loader = this.$loading.show();
      const userStore = useUser();
      await axios
        .post("user/authenticate", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          loader.hide();
          userStore.auth = true;
          userStore.username = this.username;
          localStorage.setItem(
            "x-access-token",
            response.data["x-access-token"]
          );
          localStorage.setItem("username", this.username);
          this.$router.push("/");
        })
        .catch((error) => {
          loader.hide();
          console.log(error);
          this.$toasted.show("Credential incorrect!", {
            type: "error",
          });
        });
    },
  },
};
</script>
<style>
.login-card {
  margin-top: 6%;
  width: 400px;
}
</style>
