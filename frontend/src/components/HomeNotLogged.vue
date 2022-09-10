<template lang="html">
  <div>
    <div class="container-fluid p-5 w-100 hey">
      <div class="row align-items-center my-5">
        <div class="col col-7-sm">
          <h1>
            <strong
              >Store your travels, <br />
              your memories.</strong
            >
          </h1>
          <h3 class="my-3">Save, visualize, modify your daily travels</h3>
          <router-link :to="{ name: 'SignUp' }"
            ><button class="btn btn-primary">
              SignUp for free
            </button></router-link
          >
        </div>
        <div class="col-sm mt-5 mt-sm-0 text-center">
          <img
            src="../assets/images/world.png"
            height="290"
            width="290"
            class="img-fluid"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="container-fluid px-5 my-5">
      <h1 class="my-5 text-center">Functionalities</h1>
      <div class="row text-center gap-5 mb-5">
        <div class="col border rounded shadow p-4">
          <h2>Add Travel</h2>
          <p>Track on the map your travel and the main stages</p>
        </div>
        <div class="col border rounded shadow p-4">
          <h2>Modify Travel</h2>
          <p>In every moment you can modify or remove your travels</p>
        </div>
        <div class="col border rounded shadow p-4">
          <h2>Your story</h2>
          <p>Visualize your story on the map</p>
        </div>
      </div>
    </div>
    <div class="container-fluid p-5 mt-5 bg-light">
      <h1 class="mb-5 text-center">Interactive map</h1>
      <div class="row">
        <div class="col">
          <div class="map border rounded shadow border-3 border-dark mb-5">
            <l-map
              ref="map"
              :zoom="zoom"
              style="height: 400px"
              :center="center"
            >
              <l-tile-layer
                :url="url"
                :attribution="attribution"
              ></l-tile-layer>
            </l-map>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid px-4">
      <footer
        class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
      >
        <p class="col-md-4 mb-0 text-muted">&copy; 2022 TravelApp, Inc</p>
        <p class="nav col-md-4 justify-content-end text-muted">
          Course project - Web programming
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";
export default {
  name: "HomeNotLogged",
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      center: [45.646585834078216, 13.775711602314791], //Trieste
      zoom: 10,
    };
  },
};
</script>

<style lang="css" scoped>
div.hey {
  background-color: rgb(233, 239, 192);
}
</style>
