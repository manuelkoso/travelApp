import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import SignUp from "@/views/SignUp.vue";
import AddTravel from "@/views/AddTravel.vue";
import LogIn from "@/views/LogIn.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/addtravel",
    name: "AddTravel",
    component: AddTravel,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
