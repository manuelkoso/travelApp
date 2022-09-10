<template>
  <div class="add-travel">
    <div class="container-fluid rounded px-5 py-4 header">
      <h2>Add Travel</h2>
    </div>
    <div class="add-form container-fluid rounded px-5 py-4 mb-3">
      <div class="row rounded gap-3 p-0 m-0">
        <div class="col-md p-0">
          <input v-model="date" type="date" class="form-control" />
        </div>
        <div class="col-md p-0">
          <input v-model="vehicle" class="form-control" placeholder="Vehicle" />
        </div>
        <div class="d-grid col-md-2 text-end p-0">
          <button
            type="button"
            class="btn btn-primary btn-block"
            @click="sendData()"
            :disabled="
              date === '' ||
              vehicle === '' ||
              routeMarkers.length === 0 ||
              stageMarkers.length === 0
            "
          >
            Add travel
          </button>
        </div>
      </div>
    </div>
    <div class="px-5 mt-3">
      <nav>
        <div class="nav nav-pills" id="nav-tab" role="tablist">
          <button
            class="btn btn-track-route btn-outline-success active me-2"
            data-bs-toggle="tab"
            type="button"
            role="tab"
            @click="setTrackRoute()"
          >
            Route
          </button>
          <button
            class="btn btn-track-stages btn-outline-danger"
            data-bs-toggle="tab"
            type="button"
            role="tab"
            @click="setTrackStages()"
          >
            Stages
          </button>
        </div>
      </nav>
      <hr />
      <div
        class="map border rounded border-2 border-success mb-5"
        :class="{ 'border-danger': trackStages }"
      >
        <l-map
          ref="map"
          :zoom="zoom"
          style="height: 400px"
          :center="center"
          @click="addMarker"
        >
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-marker
            v-for="(marker, i) in routeMarkers"
            :key="i"
            :lat-lng="marker"
            @click="removeMarker"
          ></l-marker>
          <div>
            <l-marker
              :icon="icon"
              v-for="(marker, i) in stageMarkers"
              :key="i"
              :lat-lng="marker"
              @click="removeMarker"
            ></l-marker>
            <l-icon
              :icon-size="dynamicSize"
              :icon-anchor="dynamicAnchor"
              icon-url="static/location-pin.png"
            ></l-icon>
          </div>
          <l-polyline
            :lat-lngs="polyline.latlngs"
            :color="polyline.color"
          ></l-polyline>
        </l-map>
      </div>
    </div>
  </div>
</template>

<script>
import L from "leaflet";
import { useUser } from "../store/user.js";
import { LMap, LTileLayer, LMarker, LPolyline, LIcon } from "vue2-leaflet";
import axios from "axios";
export default {
  name: "AddTravel",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPolyline,
    LIcon,
  },
  setup() {
    const userStore = useUser();
    return {
      userStore,
    };
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      center: [45.646585834078216, 13.775711602314791], //Trieste
      zoom: 10,
      polyline: {
        latlngs: [],
        color: "green",
      },
      icon: L.icon({
        iconUrl: require("../assets/images/markers/location-pin.png"),
        iconSize: [32, 37],
        iconAnchor: [16, 37],
      }),
      staticAnchor: [16, 37],
      iconSize: 64,
      trackRoute: true,
      trackStages: false,
      routeMarkers: [],
      stageMarkers: [],
      date: "",
      vehicle: "",
    };
  },
  computed: {
    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    },
  },
  methods: {
    removeMarker(event) {
      if (this.trackRoute) {
        for (let i = 0; i < this.routeMarkers.length; i++) {
          if (
            event.latlng.lat === this.routeMarkers[i][0] &&
            event.latlng.lng === this.routeMarkers[i][1]
          ) {
            this.routeMarkers.splice(i, 1);
            this.polyline.latlngs.splice(i, 1);
          }
        }
      } else if (this.trackStages) {
        for (let i = 0; i < this.stageMarkers.length; i++) {
          if (
            event.latlng.lat === this.stageMarkers[i][0] &&
            event.latlng.lng === this.stageMarkers[i][1]
          ) {
            this.stageMarkers.splice(i, 1);
          }
        }
      }
    },
    addMarker(event) {
      const position = [event.latlng.lat, event.latlng.lng];
      if (this.trackRoute) {
        this.polyline.latlngs.push(position);
        this.routeMarkers.push(position);
      } else if (this.trackStages) {
        this.stageMarkers.push(position);
      }
      this.center = position;
    },
    setTrackRoute() {
      this.trackRoute = true;
      this.trackStages = false;
    },
    setTrackStages() {
      this.trackRoute = false;
      this.trackStages = true;
    },
    async sendData() {
      const loader = this.$loading.show();
      await axios
        .put(
          "travel/add",
          {
            date: this.date,
            vehicle: this.vehicle,
            pointsOfRoute: this.routeMarkers,
            pointsOfStages: this.stageMarkers,
          },
          {
            headers: {
              "x-access-token": localStorage.getItem("x-access-token"),
            },
          }
        )
        .then(() => {
          loader.hide();
          this.date = "";
          this.vehicle = "";
          this.routeMarkers = [];
          this.stageMarkers = [];
          this.polyline.latlngs = [];
          this.$toasted.show("Travel saved correctly!");
        })
        .catch((error) => {
          loader.hide();
          console.log(error);
          localStorage.removeItem("x-access-token");
          localStorage.removeItem("username");
          this.userStore.$reset();
          this.$router.push("/");
        });
    },
  },
};
</script>

<style scoped>
div.header {
  background-color: rgb(233, 239, 192);
}
</style>
