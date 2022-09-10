(function(){"use strict";var t={6928:function(t,e,a){a(6992),a(8674),a(9601),a(7727);var r=a(8935),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.userStore.auth?a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row flex-nowrap"},[a("div",{staticClass:"col-auto col-md-2 px-sm-2 px-0 bg-dark"},[a("SideNav")],1),a("div",{staticClass:"col p-0"},[a("router-view")],1)])]):a("div",[a("NavBar"),a("router-view")],1)])},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-dark bg-dark navbar-expand-lg px-3 sticky-top"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v(" TravelApp")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav ms-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("LogIn")])],1),a("li",{staticClass:"nav-item mr-auto"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/signup"}},[t._v("SignUp")])],1)])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=a(3863),c=(0,l.Q_)("main",{state:function(){return{auth:!1,username:""}},getters:{},actions:{}}),u={name:"NavBar",setup:function(){var t=c();return{userStore:t}},methods:{logOut:function(){this.userStore.$reset(),localStorage.removeItem("username"),localStorage.removeItem("x-access-token")}}},d=u,v=a(1001),m=(0,v.Z)(d,o,i,!1,null,null,null),p=m.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex sticky-top flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"},[a("router-link",{staticClass:"d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none",attrs:{to:"/"}},[a("span",{staticClass:"fs-5 d-none d-sm-inline pt-3"},[t._v("TravelApp")])]),a("ul",{staticClass:"nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start",attrs:{id:"menu"}},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link align-middle px-0 text-white",attrs:{to:"/"}},[a("svg",{staticClass:"bi bi-house fs-4",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"}})]),a("span",{staticClass:"ms-1 d-none d-sm-inline"},[t._v("My Story")])])],1),a("li",[a("router-link",{staticClass:"nav-link px-0 align-middle text-white",attrs:{to:"/addtravel"}},[a("svg",{staticClass:"bi bi-geo-alt",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"}}),a("path",{attrs:{d:"M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}})]),a("span",{staticClass:"ms-1 d-none d-sm-inline"},[t._v("Add Travel")])])],1)]),a("hr"),a("div",{staticClass:"dropdown pb-4"},[a("a",{staticClass:"d-flex align-items-center text-white text-decoration-none dropdown-toggle",attrs:{href:"#",id:"dropdownUser1","data-bs-toggle":"dropdown","aria-expanded":"false"}},[a("svg",{staticClass:"bi bi-person-circle me-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"}})]),a("span",{staticClass:"d-none d-sm-inline mx-1"},[t._v(t._s(this.userStore.username))])]),a("ul",{staticClass:"dropdown-menu dropdown-menu-dark text-small shadow"},[a("li",[a("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:t.logOut}},[t._v("Sign out")])])])])],1)},g=[],f={name:"SideNav",setup:function(){var t=c();return{userStore:t}},methods:{logOut:function(){var t=this.$loading.show();this.userStore.$reset(),localStorage.removeItem("username"),localStorage.removeItem("x-access-token"),t.hide()}}},b=f,y=(0,v.Z)(b,h,g,!1,null,null,null),k=y.exports,w={name:"App",components:{NavBar:p,SideNav:k},setup:function(){var t=c();return{userStore:t}},mounted:function(){var t=c();localStorage.getItem("username")?(t.auth=!0,t.username=localStorage.getItem("username")):t.auth=!1}},C=w,x=(0,v.Z)(C,s,n,!1,null,null,null),_=x.exports,S=a(2809),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.userStore.auth?a("div",[a("HomeLogged")],1):a("div",[a("HomeNotLogged")],1)])},T=[],Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-logged"},[a("div",{staticClass:"opac"},[t._m(0),a("div",{staticClass:"container-fluid px-5 py-4 mb-2"},[a("div",{staticClass:"row p-0 m-0 gap-2"},[a("div",{staticClass:"col p-0 m-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})]),a("div",{staticClass:"col-3 d-grid p-0 text-end"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:""===t.date},on:{click:function(e){return t.handleSubmit()}}},[t._v(" Search ")])])])]),a("div",{staticClass:"px-5 mt-3"},[t._m(1),a("hr"),a("div",{staticClass:"tab-content",attrs:{id:"nav-tabContent"}},[a("div",{staticClass:"tab-pane fade show active rounded",attrs:{id:"nav-map",role:"tabpanel","aria-labelledby":"nav-map-tab"}},[a("div",{staticClass:"map border rounded shadow border-2 border-success mb-3"},[a("l-map",{ref:"map",staticStyle:{height:"400px"},attrs:{zoom:t.zoom,center:t.center}},[a("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._l(t.travels,(function(e,r){return a("div",{key:"a"+r},[t._l(e.stages.latlng,(function(e,r){return a("l-marker",{key:"b"+r,attrs:{icon:t.icon,"lat-lng":e}})})),a("l-icon",{attrs:{"icon-size":t.dynamicSize,"icon-anchor":t.dynamicAnchor,"icon-url":"static/location-pin.png"}})],2)})),t._l(t.travels,(function(e,r){return a("div",{key:r},[a("l-polyline",{attrs:{"lat-lngs":e.route.latlng,color:e.route.color}}),a("l-marker",{attrs:{"lat-lng":e.route.latlng[0]}},[a("l-popup",[a("h5",[t._v("Route "+t._s(r+1))])])],1)],1)}))],2)],1)]),a("div",{staticClass:"tab-pane fade",attrs:{id:"nav-info",role:"tabpanel","aria-labelledby":"nav-info-tab"}},[0===this.travels.length?a("div",[t._v("No travels")]):a("div",{staticClass:"table-responsive mb-5"},[a("table",{staticClass:"table text-center"},[t._m(2),a("tbody",{staticClass:"align-middle"},t._l(t.travels,(function(e,r){return a("tr",{key:r},[a("td",{attrs:{scope:"row"}},[t._v(t._s(r+1))]),a("td",[t._v(t._s(e.vehicle))]),a("td",[t._v(t._s(e.stages.latlng.length))]),a("td",{staticClass:"m-0"},[a("button",{staticClass:"btn btn-sm btn-success mx-1 border-0 shadow-none",attrs:{type:"button"},on:{click:function(a){return t.modifyTravel(e,r+1)}}},[a("svg",{staticClass:"bi bi-pencil-square",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"}})])]),a("button",{staticClass:"btn btn-sm btn-danger border-0 shadow-none",attrs:{type:"button"},on:{click:function(a){return t.deleteTravel(e)}}},[a("svg",{staticClass:"bi bi-trash3",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"}})])])])])})),0)])])])])])]),""!==this.travelToModify?a("div",{staticClass:"modify-route bg-light border shadow rounded px-3 py-2 translate-middle",attrs:{id:"modify-route"}},[a("div",{staticClass:"container p-0"},[a("div",{staticClass:"row p-0"},[a("div",{staticClass:"col text-end pe-2 text-dark"},[a("svg",{staticClass:"bi bi-x-lg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},on:{click:function(e){return t.notModify()}}},[a("path",{attrs:{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h4",{staticClass:"mr-auto"},[t._v("Route "+t._s(this.travelToModify.index))])])])])]),a("div",{staticClass:"add-form container-fluid rounded px-0 pb-3"},[a("div",{staticClass:"row rounded gap-3 p-0 m-0"},[a("div",{staticClass:"col-md p-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.dateToModify,expression:"dateToModify"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.dateToModify},on:{input:function(e){e.target.composing||(t.dateToModify=e.target.value)}}})]),a("div",{staticClass:"col-md p-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.vehicleToModify,expression:"vehicleToModify"}],staticClass:"form-control",attrs:{placeholder:"Vehicle"},domProps:{value:t.vehicleToModify},on:{input:function(e){e.target.composing||(t.vehicleToModify=e.target.value)}}})]),a("div",{staticClass:"d-grid col-md-2 text-end p-0"},[a("button",{staticClass:"btn btn-primary btn-sm btn-block",attrs:{type:"button",disabled:""===t.dateToModify||""===t.vehicleToModify||0===t.travelToModify.route.latlng.length||0===t.travelToModify.stages.latlng.length},on:{click:function(e){return t.submitModific()}}},[t._v(" Modify ")])])])]),a("nav",[a("div",{staticClass:"nav nav-pills",attrs:{id:"nav-tab",role:"tablist"}},[a("button",{staticClass:"btn btn-success btn-sm active me-1",attrs:{"data-bs-toggle":"tab",type:"button",role:"tab"},on:{click:function(e){return t.setTrackRoute()}}},[t._v(" Track Route ")]),a("button",{staticClass:"btn btn-danger btn-sm active",attrs:{"data-bs-toggle":"tab",type:"button",role:"tab"},on:{click:function(e){return t.setTrackStages()}}},[t._v(" Track Stages ")])])]),a("hr"),a("div",{staticClass:"rounded border border-3 border-success",class:{"border-danger":t.trackStages}},[a("l-map",{ref:"map",staticStyle:{height:"270px"},attrs:{zoom:t.zoom,center:t.center},on:{click:t.addMarker}},[a("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._l(this.travelToModify.route.latlng,(function(e,r){return a("l-marker",{key:r,attrs:{"lat-lng":e},on:{click:t.removeMarker}})})),a("div",[t._l(this.travelToModify.stages.latlng,(function(e,r){return a("l-marker",{key:r,attrs:{icon:t.icon,"lat-lng":e},on:{click:t.removeMarker}})})),a("l-icon",{attrs:{"icon-size":t.dynamicSize,"icon-anchor":t.dynamicAnchor,"icon-url":"static/location-pin.png"}})],2),a("l-polyline",{attrs:{"lat-lngs":this.travelToModify.route.latlng,color:this.travelToModify.route.color}})],2)],1)]):t._e()])},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid py-4 px-5 header"},[a("h2",[t._v("My Story")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("div",{staticClass:"nav nav-pills",attrs:{id:"nav-tab",role:"tablist"}},[a("button",{staticClass:"btn btn-outline-success active me-2",attrs:{id:"nav-map-tab","data-bs-toggle":"tab","data-bs-target":"#nav-map",type:"button",role:"tab","aria-controls":"nav-map","aria-selected":"true"}},[t._v(" Map ")]),a("button",{staticClass:"btn btn-outline-success",attrs:{id:"nav-info-tab","data-bs-toggle":"tab","data-bs-target":"#nav-info",type:"button",role:"tab","aria-controls":"nav-info","aria-selected":"false"}},[t._v(" Travels ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead rounded"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Route")]),a("th",{attrs:{scope:"col"}},[t._v("Vehicle")]),a("th",{attrs:{scope:"col"}},[t._v("Stages")]),a("th",{attrs:{scope:"col"}})])])}],$=a(7906),L=a(6198),I=(a(561),a(9014)),O=a.n(I),A=a(5148),N=a(6512),R=a(9118),E=a(9774),P=a(4306),U=a(4774),B=a(6166),H=a.n(B),j={name:"HomeLogged",components:{LMap:A.Z,LTileLayer:N.Z,LMarker:R.Z,LPolyline:E.Z,LIcon:P.Z,LPopup:U.Z},data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',center:[45.646585834078216,13.775711602314791],zoom:10,date:"",dateToModify:"",vehicleToModify:"",travels:[],trackRoute:!0,trackStages:!1,travelToModify:"",polyline:{latlngs:[],color:"green"},icon:O().icon({iconUrl:a(1521),iconSize:[32,37],iconAnchor:[16,37]}),iconSize:64,help:!1}},setup:function(){var t=c();return{userStore:t}},computed:{dynamicSize:function(){return[this.iconSize,1.15*this.iconSize]},dynamicAnchor:function(){return[this.iconSize/2,1.15*this.iconSize]}},methods:{setTrackRoute:function(){this.trackRoute=!0,this.trackStages=!1},setTrackStages:function(){this.trackRoute=!1,this.trackStages=!0},addMarker:function(t){var e=[t.latlng.lat,t.latlng.lng];this.trackRoute?this.travelToModify.route.latlng.push(e):this.trackStages&&this.travelToModify.stages.latlng.push(e),this.center=e},removeMarker:function(t){if(this.trackRoute)for(var e=0;e<this.travelToModify.route.latlng.length;e++)t.latlng.lat===this.travelToModify.route.latlng[e][0]&&t.latlng.lng===this.travelToModify.route.latlng[e][1]&&this.travelToModify.route.latlng.splice(e,1);else if(this.trackStages)for(var a=0;a<this.travelToModify.stages.latlng.length;a++)t.latlng.lat===this.travelToModify.stages.latlng[a][0]&&t.latlng.lng===this.travelToModify.stages.latlng[a][1]&&this.travelToModify.stages.latlng.splice(a,1)},modifyTravel:function(t,e){var a=document.getElementsByClassName("opac");this.travelToModify=t,this.dateToModify=this.travelToModify.date,this.vehicleToModify=this.travelToModify.vehicle,this.travelToModify.index=e,a[0].style.opacity="0.3",location.href="#",location.href="#modify-route",this.center=this.travelToModify.route.latlng[0]},notModify:function(){var t=document.getElementsByClassName("opac");this.travelToModify="",t[0].style.opacity="1"},handleSubmit:function(){var t=this;return(0,L.Z)((0,$.Z)().mark((function e(){var a,r,s;return(0,$.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.$loading.show(),r=new Date(t.date).getTime(),s="travel/get/"+r,t.travels=[],e.next=6,H().get(s,{headers:{"x-access-token":localStorage.getItem("x-access-token")}}).then((function(e){for(var r=e.data.message,s=JSON.parse(r),n=0;n<s.length;n++){for(var o={id:s[n].id,vehicle:s[n].vehicle,date:t.date,route:{latlng:[],color:"green"},stages:{latlng:[]}},i=0;i<s[n].pointsOfStages.length;i++){var l=JSON.parse(s[n].pointsOfStages[i]);o.stages.latlng.push(l)}for(var c=0;c<s[n].pointsOfRoute.length;c++){var u=JSON.parse(s[n].pointsOfRoute[c]);o.route.latlng.push(u)}t.travels.push(o)}0!==t.travels.length?t.center=t.travels[0].route.latlng[0]:t.center=[45.646585834078216,13.775711602314791],a.hide()})).catch((function(e){a.hide(),console.log(e),localStorage.removeItem("x-access-token"),localStorage.removeItem("username"),t.userStore.$reset(),t.$router.push("/")}));case 6:case"end":return e.stop()}}),e)})))()},changeState:function(){this.trackRoute=!this.trackRoute,this.trackStages=!this.trackStages},submitModific:function(){var t=this;return(0,L.Z)((0,$.Z)().mark((function e(){var a;return(0,$.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.$loading.show(),e.next=3,H().put("travel/modify",{id:t.travelToModify.id,date:t.dateToModify,vehicle:t.vehicleToModify,pointsOfRoute:t.travelToModify.route.latlng,pointsOfStages:t.travelToModify.stages.latlng},{headers:{"x-access-token":localStorage.getItem("x-access-token")}}).then((function(){a.hide(),t.$toasted.show("Travel modified correctly!"),t.notModify(),document.getElementById("nav-map-tab").click(),t.handleSubmit()})).catch((function(e){a.hide(),console.log(e),localStorage.removeItem("x-access-token"),localStorage.removeItem("username"),t.userStore.$reset(),t.$router.push("/")}));case 3:case"end":return e.stop()}}),e)})))()},deleteTravel:function(t){var e=this;return(0,L.Z)((0,$.Z)().mark((function a(){var r;return(0,$.Z)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.$loading.show(),a.next=3,H()["delete"]("travel/delete/"+t.id,{headers:{"x-access-token":localStorage.getItem("x-access-token")}}).then((function(){r.hide(),e.$toasted.show("Travel was deleted correctly!"),document.getElementById("nav-map-tab").click(),e.handleSubmit()})).catch((function(t){r.hide(),console.log(t),localStorage.removeItem("x-access-token"),localStorage.removeItem("username"),e.userStore.$reset(),e.$router.push("/")}));case 3:case"end":return a.stop()}}),a)})))()}}},D=j,V=(0,v.Z)(D,Z,z,!1,null,null,null),J=V.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container-fluid p-5 w-100 hey"},[a("div",{staticClass:"row align-items-center my-5"},[a("div",{staticClass:"col col-7-sm"},[t._m(0),a("h3",{staticClass:"my-3"},[t._v("Save, visualize, modify your daily travel")]),a("router-link",{attrs:{to:{name:"SignUp"}}},[a("button",{staticClass:"btn btn-primary"},[t._v(" SignUp for free ")])])],1),t._m(1)])]),t._m(2),a("div",{staticClass:"container-fluid p-5 mt-5 bg-light"},[a("h1",{staticClass:"mb-5 text-center"},[t._v("Interactive map")]),a("div",{staticClass:"row"},[t._m(3),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"map border rounded shadow border-3 border-dark mb-5"},[a("l-map",{ref:"map",staticStyle:{height:"400px"},attrs:{zoom:t.zoom,center:t.center}},[a("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}})],1)],1)])])]),t._m(4)])},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[a("strong",[t._v("Store your travel, "),a("br"),t._v(" your memories.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm mt-5 mt-sm-0 text-center"},[r("img",{staticClass:"img-fluid",attrs:{src:a(6253),height:"290",width:"290",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid px-5 my-5"},[a("h1",{staticClass:"my-5 text-center"},[t._v("Functionalities")]),a("div",{staticClass:"row text-center gap-5 mb-5"},[a("div",{staticClass:"col border rounded shadow p-4"},[a("h2",[t._v("Add Travel")]),a("p",[t._v("Track on the map your travel and the main stages")])]),a("div",{staticClass:"col border rounded shadow p-4"},[a("h2",[t._v("Modify Travel")]),a("p",[t._v("In every moment you can modify or remove your travels")])]),a("div",{staticClass:"col border rounded shadow p-4"},[a("h2",[t._v("Your story")]),a("p",[t._v("Visualize your story on the map")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col"},[a("h2",[t._v("Simply track your route and stages")]),a("p",[t._v("Just click on the map and track your memory.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid px-4"},[a("footer",{staticClass:"d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"},[a("p",{staticClass:"col-md-4 mb-0 text-muted"},[t._v("© 2022 TravelApp, Inc")]),a("p",{staticClass:"nav col-md-4 justify-content-end text-muted"},[t._v(" Course project - Web programming ")])])])}],q={name:"HomeNotLogged",components:{LMap:A.Z,LTileLayer:N.Z},data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',center:[45.646585834078216,13.775711602314791],zoom:10}}},Q=q,Y=(0,v.Z)(Q,W,F,!1,null,"3b865a34",null),G=Y.exports,K={name:"HomePage",components:{HomeLogged:J,HomeNotLogged:G},setup:function(){var t=c();return{userStore:t}}},X=K,tt=(0,v.Z)(X,M,T,!1,null,null,null),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center"},[a("div",{staticClass:"signup-card shadow border rounded p-3 mx-3 bg-light"},[a("h3",{staticClass:"mb-3"},[t._v("Sign Up")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("div",{staticClass:"form-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control shadow-none",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"form-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control shadow-none",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),a("div",{staticClass:"form-group mb-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control shadow-none",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("div",{staticClass:"clearfix mb-3"},[a("button",{staticClass:"btn btn-primary float-end",attrs:{disabled:!(this.email&&this.username&&this.password)}},[t._v(" Submit ")])]),a("footer",[a("div",{staticClass:"d-flex justify-content-center"},[a("span",[t._v("Do yuo have an account? "),a("router-link",{staticClass:"text-decoration-none",attrs:{to:"/login"}},[t._v("Login")])],1)])])])])])},rt=[],st={name:"SignUp",data:function(){return{email:"",username:"",password:""}},methods:{handleSubmit:function(){var t=this;return(0,L.Z)((0,$.Z)().mark((function e(){var a;return(0,$.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.$loading.show(),e.next=3,H().post("user/create",{email:t.email,username:t.username,password:t.password}).then((function(){a.hide(),t.$router.push("/login"),t.$toasted.show("User created!")})).catch((function(e){a.hide(),console.log(e),t.$toasted.show("Choose another username!",{type:"error"})}));case 3:case"end":return e.stop()}}),e)})))()}}},nt=st,ot=(0,v.Z)(nt,at,rt,!1,null,null,null),it=ot.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add-travel"},[t._m(0),a("div",{staticClass:"add-form container-fluid rounded px-5 py-4 mb-3"},[a("div",{staticClass:"row rounded gap-3 p-0 m-0"},[a("div",{staticClass:"col-md p-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})]),a("div",{staticClass:"col-md p-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.vehicle,expression:"vehicle"}],staticClass:"form-control",attrs:{placeholder:"Vehicle"},domProps:{value:t.vehicle},on:{input:function(e){e.target.composing||(t.vehicle=e.target.value)}}})]),a("div",{staticClass:"d-grid col-md-2 text-end p-0"},[a("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"button",disabled:""===t.date||""===t.vehicle||0===t.routeMarkers.length||0===t.stageMarkers.length},on:{click:function(e){return t.sendData()}}},[t._v(" Add travel ")])])])]),a("div",{staticClass:"px-5 mt-3"},[a("nav",[a("div",{staticClass:"nav nav-pills",attrs:{id:"nav-tab",role:"tablist"}},[a("button",{staticClass:"btn btn-track-route btn-outline-success active me-2",attrs:{"data-bs-toggle":"tab",type:"button",role:"tab"},on:{click:function(e){return t.setTrackRoute()}}},[t._v(" Route ")]),a("button",{staticClass:"btn btn-track-stages btn-outline-danger",attrs:{"data-bs-toggle":"tab",type:"button",role:"tab"},on:{click:function(e){return t.setTrackStages()}}},[t._v(" Stages ")])])]),a("hr"),a("div",{staticClass:"map border rounded border-2 border-success mb-5",class:{"border-danger":t.trackStages}},[a("l-map",{ref:"map",staticStyle:{height:"400px"},attrs:{zoom:t.zoom,center:t.center},on:{click:t.addMarker}},[a("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._l(t.routeMarkers,(function(e,r){return a("l-marker",{key:r,attrs:{"lat-lng":e},on:{click:t.removeMarker}})})),a("div",[t._l(t.stageMarkers,(function(e,r){return a("l-marker",{key:r,attrs:{icon:t.icon,"lat-lng":e},on:{click:t.removeMarker}})})),a("l-icon",{attrs:{"icon-size":t.dynamicSize,"icon-anchor":t.dynamicAnchor,"icon-url":"static/location-pin.png"}})],2),a("l-polyline",{attrs:{"lat-lngs":t.polyline.latlngs,color:t.polyline.color}})],2)],1)])])},ct=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid rounded px-5 py-4 header"},[a("h2",[t._v("Add Travel")])])}],ut={name:"AddTravel",components:{LMap:A.Z,LTileLayer:N.Z,LMarker:R.Z,LPolyline:E.Z,LIcon:P.Z},setup:function(){var t=c();return{userStore:t}},data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',center:[45.646585834078216,13.775711602314791],zoom:10,polyline:{latlngs:[],color:"green"},icon:O().icon({iconUrl:a(1521),iconSize:[32,37],iconAnchor:[16,37]}),staticAnchor:[16,37],iconSize:64,trackRoute:!0,trackStages:!1,routeMarkers:[],stageMarkers:[],date:"",vehicle:""}},computed:{dynamicSize:function(){return[this.iconSize,1.15*this.iconSize]},dynamicAnchor:function(){return[this.iconSize/2,1.15*this.iconSize]}},methods:{removeMarker:function(t){if(this.trackRoute)for(var e=0;e<this.routeMarkers.length;e++)t.latlng.lat===this.routeMarkers[e][0]&&t.latlng.lng===this.routeMarkers[e][1]&&(this.routeMarkers.splice(e,1),this.polyline.latlngs.splice(e,1));else if(this.trackStages)for(var a=0;a<this.stageMarkers.length;a++)t.latlng.lat===this.stageMarkers[a][0]&&t.latlng.lng===this.stageMarkers[a][1]&&this.stageMarkers.splice(a,1)},addMarker:function(t){var e=[t.latlng.lat,t.latlng.lng];this.trackRoute?(this.polyline.latlngs.push(e),this.routeMarkers.push(e)):this.trackStages&&this.stageMarkers.push(e),this.center=e},setTrackRoute:function(){this.trackRoute=!0,this.trackStages=!1},setTrackStages:function(){this.trackRoute=!1,this.trackStages=!0},sendData:function(){var t=this;return(0,L.Z)((0,$.Z)().mark((function e(){var a;return(0,$.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.$loading.show(),e.next=3,H().put("travel/add",{date:t.date,vehicle:t.vehicle,pointsOfRoute:t.routeMarkers,pointsOfStages:t.stageMarkers},{headers:{"x-access-token":localStorage.getItem("x-access-token")}}).then((function(){a.hide(),t.date="",t.vehicle="",t.routeMarkers=[],t.stageMarkers=[],t.polyline.latlngs=[],t.$toasted.show("Travel saved correctly!")})).catch((function(e){a.hide(),console.log(e),localStorage.removeItem("x-access-token"),localStorage.removeItem("username"),t.userStore.$reset(),t.$toasted.show("Travel saved correctly!"),t.$router.push("/")}));case 3:case"end":return e.stop()}}),e)})))()}}},dt=ut,vt=(0,v.Z)(dt,lt,ct,!1,null,"483bcebe",null),mt=vt.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center"},[a("div",{staticClass:"login-card bg-light border shadow rounded p-3 mx-3"},[a("h3",{staticClass:"mb-3"},[t._v("Login")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("div",{staticClass:"form-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control shadow-none",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),a("div",{staticClass:"form-group mb-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control shadow-none",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("div",{staticClass:"clearfix mb-3"},[a("button",{staticClass:"btn btn-primary float-end",attrs:{disabled:!(this.username&&this.password)}},[t._v(" Submit ")])]),a("footer",[a("div",{staticClass:"d-flex justify-content-center links"},[a("span",[t._v("Don't yuo have an account? "),a("router-link",{staticClass:"text-decoration-none",attrs:{to:"/signup"}},[t._v("Sign Up")])],1)])])])])])},ht=[],gt={name:"LogIn",data:function(){return{username:"",password:""}},methods:{handleSubmit:function(){var t=this;return(0,L.Z)((0,$.Z)().mark((function e(){var a,r;return(0,$.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.$loading.show(),r=c(),e.next=4,H().post("user/authenticate",{username:t.username,password:t.password}).then((function(e){a.hide(),r.auth=!0,r.username=t.username,localStorage.setItem("x-access-token",e.data["x-access-token"]),localStorage.setItem("username",t.username),t.$router.push("/")})).catch((function(e){a.hide(),console.log(e),t.$toasted.show("Credential incorrect!",{type:"error"})}));case 4:case"end":return e.stop()}}),e)})))()}}},ft=gt,bt=(0,v.Z)(ft,pt,ht,!1,null,null,null),yt=bt.exports;r.Z.use(S.Z);var kt=[{path:"/",name:"HomePage",component:et},{path:"/signup",name:"SignUp",component:it},{path:"/login",name:"LogIn",component:yt},{path:"/addtravel",name:"AddTravel",component:mt}],wt=new S.Z({mode:"history",routes:kt}),Ct=wt,xt=a(3233),_t=a.n(xt),St=a(9168),Mt=a.n(St);r.Z.use(Mt(),{duration:3e3,type:"success"}),r.Z.use(_t()),delete I.Icon.Default.prototype._getIconUrl,I.Icon.Default.mergeOptions({iconRetinaUrl:a(6431),iconUrl:a(7093),shadowUrl:a(8858)}),r.Z.use(l.og);var Tt=(0,l.WB)(),Zt=(0,l.WB)();H().defaults.baseURL="https://localhost:8443/api/",new r.Z({router:Ct,store:Zt,pinia:Tt,render:function(t){return t(_)}}).$mount("#app")},1521:function(t,e,a){t.exports=a.p+"img/location-pin.e4074496.png"},6253:function(t,e,a){t.exports=a.p+"img/world.1b158d50.png"}},e={};function a(r){var s=e[r];if(void 0!==s)return s.exports;var n=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=t,function(){var t=[];a.O=function(e,r,s,n){if(!r){var o=1/0;for(u=0;u<t.length;u++){r=t[u][0],s=t[u][1],n=t[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&n||o>=n)&&Object.keys(a.O).every((function(t){return a.O[t](r[l])}))?r.splice(l--,1):(i=!1,n<o&&(o=n));if(i){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[r,s,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var s,n,o=r[0],i=r[1],l=r[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(s in i)a.o(i,s)&&(a.m[s]=i[s]);if(l)var u=l(a)}for(e&&e(r);c<o.length;c++)n=o[c],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(u)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(6928)}));r=a.O(r)})();
//# sourceMappingURL=app-legacy.1421d964.js.map