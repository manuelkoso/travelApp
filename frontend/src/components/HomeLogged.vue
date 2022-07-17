<template lang="html">
  <div class="home-logged">
    <div class="opac">
      <div class="container-fluid py-4 px-5 header">
        <h2>My Story</h2>
      </div>
      <div class="container-fluid px-5 py-4 mb-2">
        <div class="row p-0 m-0 gap-2">
          <div class="col p-0 m-0">
            <input v-model="date" type="date" class="form-control" />
          </div>
          <div class="col-3 d-grid p-0 text-end">
            <button
              type="button"
              class="btn btn-primary"
              :disabled="date === ''"
              @click="handleSubmit()"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div class="px-5 mt-3">
        <nav>
          <div class="nav nav-pills" id="nav-tab" role="tablist">
            <button
              class="btn btn-outline-success active me-2"
              id="nav-map-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-map"
              type="button"
              role="tab"
              aria-controls="nav-map"
              aria-selected="true"
            >
              Map
            </button>
            <button
              class="btn btn-outline-success"
              id="nav-info-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-info"
              type="button"
              role="tab"
              aria-controls="nav-info"
              aria-selected="false"
            >
              Travels
            </button>
          </div>
        </nav>
        <hr />
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active rounded"
            id="nav-map"
            role="tabpanel"
            aria-labelledby="nav-map-tab"
          >
            <div class="map border rounded shadow border-2 border-success mb-3">
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
                <div v-for="(travel, k) in travels" :key="'a' + k">
                  <l-marker
                    :icon="icon"
                    v-for="(position, i) in travel.stages.latlng"
                    :key="'b' + i"
                    :lat-lng="position"
                  ></l-marker>
                  <l-icon
                    :icon-size="dynamicSize"
                    :icon-anchor="dynamicAnchor"
                    icon-url="static/location-pin.png"
                  ></l-icon>
                </div>
                <div v-for="(travel, i) in travels" :key="i">
                  <l-polyline
                    :lat-lngs="travel.route.latlng"
                    :color="travel.route.color"
                  ></l-polyline>
                  <l-marker :lat-lng="travel.route.latlng[0]">
                    <l-popup>
                      <h5>Route {{ i + 1 }}</h5>
                    </l-popup>
                  </l-marker>
                </div>
              </l-map>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-info"
            role="tabpanel"
            aria-labelledby="nav-info-tab"
          >
            <div v-if="this.travels.length === 0">No travels</div>
            <div v-else class="table-responsive mb-5">
              <table class="table text-center">
                <thead class="thead rounded">
                  <tr>
                    <th scope="col">Route</th>
                    <th scope="col">Vehicle</th>
                    <th scope="col">Stages</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody class="align-middle">
                  <tr v-for="(travel, i) in travels" :key="i">
                    <td scope="row">{{ i + 1 }}</td>
                    <td>{{ travel.vehicle }}</td>
                    <td>{{ travel.stages.latlng.length }}</td>
                    <td class="m-0">
                      <button
                        type="button"
                        class="btn btn-sm btn-success mx-1 border-0 shadow-none"
                        @click="modifyTravel(travel, i + 1)"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-danger border-0 shadow-none"
                        @click="deleteTravel(travel, i + 1)"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-trash3"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="this.travelToModify !== ''"
      id="modify-route"
      class="modify-route bg-light border shadow rounded px-3 py-2 translate-middle"
    >
      <div class="container p-0">
        <div class="row p-0">
          <div class="col text-end pe-2 text-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
              @click="notModify()"
            >
              <path
                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
              />
            </svg>
          </div>
          <div class="row">
            <div class="col">
              <h4 class="mr-auto">Route {{ this.travelToModify.index }}</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="add-form container-fluid rounded px-0 pb-3">
        <div class="row rounded gap-3 p-0 m-0">
          <div class="col-md p-0">
            <input v-model="dateToModify" type="date" class="form-control" />
          </div>
          <div class="col-md p-0">
            <input
              v-model="vehicleToModify"
              class="form-control"
              placeholder="Vehicle"
            />
          </div>
          <div class="d-grid col-md-2 text-end p-0">
            <button
              type="button"
              class="btn btn-primary btn-sm btn-block"
              @click="submitModific()"
            >
              Modify
            </button>
          </div>
        </div>
      </div>
      <nav>
        <div class="nav nav-pills" id="nav-tab" role="tablist">
          <button
            class="btn btn-success btn-sm active me-1"
            data-bs-toggle="tab"
            type="button"
            role="tab"
            @click="setTrackRoute()"
          >
            Track Route
          </button>
          <button
            class="btn btn-danger btn-sm active"
            data-bs-toggle="tab"
            type="button"
            role="tab"
            @click="setTrackStages()"
          >
            Track Stages
          </button>
        </div>
      </nav>
      <hr />
      <div
        class="rounded border border-3 border-success"
        :class="{ 'border-danger': trackStages }"
      >
        <l-map
          ref="map"
          :zoom="zoom"
          style="height: 270px"
          :center="center"
          @click="addMarker"
        >
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-marker
            v-for="(marker, i) in this.travelToModify.route.latlng"
            :key="i"
            :lat-lng="marker"
            @click="removeMarker"
          ></l-marker>
          <div>
            <l-marker
              :icon="icon"
              v-for="(marker, i) in this.travelToModify.stages.latlng"
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
            :lat-lngs="this.travelToModify.route.latlng"
            :color="this.travelToModify.route.color"
          ></l-polyline>
        </l-map>
      </div>
    </div>
  </div>
</template>
<script>
import L from "leaflet";
import { useUser } from "../store/user.js";
import {
  LMap,
  LTileLayer,
  LMarker,
  LPolyline,
  LIcon,
  LPopup,
} from "vue2-leaflet";
import axios from "axios";
export default {
  name: "HomeLogged",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPolyline,
    LIcon,
    LPopup,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      center: [45.646585834078216, 13.775711602314791],
      zoom: 10,
      date: "",
      dateToModify: "",
      vehicleToModify: "",
      travels: [],
      trackRoute: true,
      trackStages: false,
      travelToModify: "",
      polyline: {
        latlngs: [],
        color: "green",
      },
      icon: L.icon({
        iconUrl: require("../assets/images/markers/location-pin.png"),
        iconSize: [32, 37],
        iconAnchor: [16, 37],
      }),
      iconSize: 64,
      help: false,
    };
  },
  setup() {
    const userStore = useUser();
    return {
      userStore,
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
    setTrackRoute() {
      this.trackRoute = true;
      this.trackStages = false;
    },
    setTrackStages() {
      this.trackRoute = false;
      this.trackStages = true;
    },
    addMarker(event) {
      const position = [event.latlng.lat, event.latlng.lng];
      if (this.trackRoute) {
        this.travelToModify.route.latlng.push(position);
      } else if (this.trackStages) {
        this.travelToModify.stages.latlng.push(position);
      }
      this.center = position;
    },
    removeMarker(event) {
      if (this.trackRoute) {
        for (let i = 0; i < this.travelToModify.route.latlng.length; i++) {
          if (
            event.latlng.lat === this.travelToModify.route.latlng[i][0] &&
            event.latlng.lng === this.travelToModify.route.latlng[i][1]
          ) {
            this.travelToModify.route.latlng.splice(i, 1);
          }
        }
      } else if (this.trackStages) {
        for (let i = 0; i < this.travelToModify.stages.latlng.length; i++) {
          if (
            event.latlng.lat === this.travelToModify.stages.latlng[i][0] &&
            event.latlng.lng === this.travelToModify.stages.latlng[i][1]
          ) {
            this.travelToModify.stages.latlng.splice(i, 1);
          }
        }
      }
    },
    modifyTravel(travel, index) {
      let opacSections = document.getElementsByClassName("opac");
      this.travelToModify = travel;
      this.dateToModify = this.travelToModify.date;
      this.vehicleToModify = this.travelToModify.vehicle;
      this.travelToModify.index = index;
      opacSections[0].style.opacity = "0.3";
      opacSections[1].style.opacity = "0.3";
      location.href = "#";
      location.href = "#modify-route";
      this.center = this.travelToModify.route.latlng[0];
    },
    notModify() {
      let opacSections = document.getElementsByClassName("opac");
      this.travelToModify = "";
      opacSections[0].style.opacity = "1";
      opacSections[1].style.opacity = "1";
    },
    async handleSubmit() {
      const loader = this.$loading.show();
      const dateEpoch = new Date(this.date).getTime();
      const path = "travel/get/" + dateEpoch;
      this.travels = [];
      await axios
        .get(path, {
          headers: {
            "x-access-token": localStorage.getItem("x-access-token"),
          },
        })
        .then((response) => {
          const jsonResponse = response.data.message;
          const travels = JSON.parse(jsonResponse);
          for (let j = 0; j < travels.length; j++) {
            let travel = {
              id: travels[j].id,
              vehicle: travels[j].vehicle,
              date: this.date,
              route: {
                latlng: [],
                color: "green",
              },
              stages: {
                latlng: [],
              },
            };
            for (let i = 0; i < travels[j].pointsOfStages.length; i++) {
              let stagePosition = JSON.parse(travels[j].pointsOfStages[i]);
              travel.stages.latlng.push(stagePosition);
            }
            for (let i = 0; i < travels[j].pointsOfRoute.length; i++) {
              let routePosition = JSON.parse(travels[j].pointsOfRoute[i]);
              travel.route.latlng.push(routePosition);
            }
            this.travels.push(travel);
          }
          if (this.travels.length !== 0) {
            this.center = this.travels[0].route.latlng[0];
          } else {
            this.center = [45.646585834078216, 13.775711602314791];
          }
          loader.hide();
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
    changeState() {
      this.trackRoute = !this.trackRoute;
      this.trackStages = !this.trackStages;
    },
    async submitModific() {
      const loader = this.$loading.show();
      await axios
        .put(
          "travel/modify",
          {
            id: this.travelToModify.id,
            date: this.dateToModify,
            vehicle: this.vehicleToModify,
            pointsOfRoute: this.travelToModify.route.latlng,
            pointsOfStages: this.travelToModify.stages.latlng,
          },
          {
            headers: {
              "x-access-token": localStorage.getItem("x-access-token"),
            },
          }
        )
        .then(() => {
          loader.hide();
          this.$toasted.show("Travel modified correctly!");
          this.notModify();
          document.getElementById("nav-map-tab").click();
          this.handleSubmit();
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
    async deleteTravel(travel) {
      const loader = this.$loading.show();
      await axios
        .delete("/delete", {
          id: travel.id,
          date: travel.date,
          vehicle: travel.vehicle,
          pointsOfRoute: travel.route.latlng,
          pointsOfStages: travel.stages.latlng,
        })
        .then(() => {
          loader.hide();
          this.$toasted.show("Travel modified correctly!");
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

<style lang="css">
div.header {
  background-color: rgb(233, 239, 192);
}

div.modify-route {
  position: absolute;
  top: 50%;
  left: 50%;
  max-height: 100%;
  max-width: 100%;
  z-index: 1000000;
  overflow: auto;
}

svg {
  cursor: pointer;
}
</style>
