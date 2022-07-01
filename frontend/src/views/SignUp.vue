<template lang="html">
  <div class="d-flex justify-content-center">
    <div class="signup-card shadow border rounded p-3 mx-3 bg-light">
      <h3 class="mb-3">Sign Up</h3>
      <form @submit.prevent="handleSubmit">
        <div class="form-group mb-3">
          <input
            v-model="email"
            type="email"
            class="form-control shadow-none"
            placeholder="Email"
          />
        </div>
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
            :disabled="!(this.email && this.username && this.password)"
          >
            Submit
          </button>
        </div>
        <footer>
          <div class="d-flex justify-content-center">
            <span
              >Do yuo have an account?
              <router-link class="text-decoration-none" to="/login"
                >Login</router-link
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
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      username: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      const loader = this.$loading.show();
      await axios
        .post("user/create", {
          email: this.email,
          username: this.username,
          password: this.password,
        })
        .then(() => {
          loader.hide();
          this.$router.push("/login");
          this.$toasted.show("User created!");
        })
        .catch((error) => {
          loader.hide();
          console.log(error);
          this.$toasted.show("Choose another username!", {
            type: "error",
          });
        });
    },
  },
};
</script>
<style>
.signup-card {
  width: 400px;
  margin-top: 6%;
}
</style>
