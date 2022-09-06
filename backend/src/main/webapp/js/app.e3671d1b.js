(function(){"use strict";var t={7267:function(t,e,a){var s=a(8935),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.userStore.auth?a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row flex-nowrap"},[a("div",{staticClass:"col-auto col-md-2 px-sm-2 px-0 bg-dark"},[a("SideNav")],1),a("div",{staticClass:"col p-0"},[a("router-view")],1)])]):a("div",[a("NavBar"),a("router-view")],1)])},o=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-dark bg-dark navbar-expand-lg px-3 sticky-top"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v(" TravelApp")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav ms-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("LogIn")])],1),a("li",{staticClass:"nav-item mr-auto"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/signup"}},[t._v("SignUp")])],1)])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=a(6790);const c=(0,l.Q_)("main",{state:()=>({auth:!1,username:""}),getters:{},actions:{}});var d={name:"NavBar",setup(){const t=c();return{userStore:t}},methods:{logOut(){this.userStore.$reset(),localStorage.removeItem("username"),localStorage.removeItem("x-access-token")}}},u=d,m=a(1001),h=(0,m.Z)(u,n,i,!1,null,null,null),v=h.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex sticky-top flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"},[a("router-link",{staticClass:"d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none",attrs:{to:"/"}},[a("span",{staticClass:"fs-5 d-none d-sm-inline pt-3"},[t._v("TravelApp")])]),a("ul",{staticClass:"nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start",attrs:{id:"menu"}},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link align-middle px-0 text-white",attrs:{to:"/"}},[a("svg",{staticClass:"bi bi-house fs-4",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"}})]),a("span",{staticClass:"ms-1 d-none d-sm-inline"},[t._v("My Story")])])],1),a("li",[a("router-link",{staticClass:"nav-link px-0 align-middle text-white",attrs:{to:"/addtravel"}},[a("svg",{staticClass:"bi bi-geo-alt",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"}}),a("path",{attrs:{d:"M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}})]),a("span",{staticClass:"ms-1 d-none d-sm-inline"},[t._v("Add Travel")])])],1)]),a("hr"),a("div",{staticClass:"dropdown pb-4"},[a("a",{staticClass:"d-flex align-items-center text-white text-decoration-none dropdown-toggle",attrs:{href:"#",id:"dropdownUser1","data-bs-toggle":"dropdown","aria-expanded":"false"}},[a("svg",{staticClass:"bi bi-person-circle me-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"}})]),a("span",{staticClass:"d-none d-sm-inline mx-1"},[t._v(t._s(this.userStore.username))])]),a("ul",{staticClass:"dropdown-menu dropdown-menu-dark text-small shadow"},[a("li",[a("a",{staticClass:"dropdown-item",attrs:{href:"/"},on:{click:t.logOut}},[t._v("Sign out")])])])])],1)},g=[],f={name:"SideNav",setup(){const t=c();return{userStore:t}},methods:{logOut(){const t=this.$loading.show();this.userStore.$reset(),localStorage.removeItem("username"),localStorage.removeItem("x-access-token"),t.hide()}}},b=f,y=(0,m.Z)(b,p,g,!1,null,null,null),k=y.exports,C={name:"App",components:{NavBar:v,SideNav:k},setup(){const t=c();return{userStore:t}},mounted(){const t=c();localStorage.getItem("username")?(t.auth=!0,t.username=localStorage.getItem("username")):t.auth=!1}},w=C,x=(0,m.Z)(w,r,o,!1,null,null,null),_=x.exports,S=a(2809),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.userStore.auth?a("div",[a("HomeLogged")],1):a("div",[a("HomeNotLogged")],1)])},T=[],z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-logged"},[a("div",{staticClass:"opac"},[t._m(0),a("div",{staticClass:"container-fluid px-5 py-4 mb-2"},[a("div",{staticClass:"row p-0 m-0 gap-2"},[a("div",{staticClass:"col p-0 m-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})]),a("div",{staticClass:"col-3 d-grid p-0 text-end"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:""===t.date},on:{click:function(e){return t.handleSubmit()}}},[t._v(" Search ")])])])]),a("div",{staticClass:"px-5 mt-3"},[t._m(1),a("hr"),a("div",{staticClass:"tab-content",attrs:{id:"nav-tabContent"}},[a("div",{staticClass:"tab-pane fade show active rounded",attrs:{id:"nav-map",role:"tabpanel","aria-labelledby":"nav-map-tab"}},[a("div",{staticClass:"map border rounded shadow border-2 border-success mb-3"},[a("l-map",{ref:"map",staticStyle:{height:"400px"},attrs:{zoom:t.zoom,center:t.center}},[a("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._l(t.travels,(function(e,s){return a("div",{key:"a"+s},[t._l(e.stages.latlng,(function(e,s){return a("l-marker",{key:"b"+s,attrs:{icon:t.icon,"lat-lng":e}})})),a("l-icon",{attrs:{"icon-size":t.dynamicSize,"icon-anchor":t.dynamicAnchor,"icon-url":"static/location-pin.png"}})],2)})),t._l(t.travels,(function(e,s){return a("div",{key:s},[a("l-polyline",{attrs:{"lat-lngs":e.route.latlng,color:e.route.color}}),a("l-marker",{attrs:{"lat-lng":e.route.latlng[0]}},[a("l-popup",[a("h5",[t._v("Route "+t._s(s+1))])])],1)],1)}))],2)],1)]),a("div",{staticClass:"tab-pane fade",attrs:{id:"nav-info",role:"tabpanel","aria-labelledby":"nav-info-tab"}},[0===this.travels.length?a("div",[t._v("No travels")]):a("div",{staticClass:"table-responsive mb-5"},[a("table",{staticClass:"table text-center"},[t._m(2),a("tbody",{staticClass:"align-middle"},t._l(t.travels,(function(e,s){return a("tr",{key:s},[a("td",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),a("td",[t._v(t._s(e.vehicle))]),a("td",[t._v(t._s(e.stages.latlng.length))]),a("td",{staticClass:"m-0"},[a("button",{staticClass:"btn btn-sm btn-success mx-1 border-0 shadow-none",attrs:{type:"button"},on:{click:function(a){return t.modifyTravel(e,s+1)}}},[a("svg",{staticClass:"bi bi-pencil-square",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}}),a("path",{attrs:{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"}})])]),a("button",{staticClass:"btn btn-sm btn-danger border-0 shadow-none",attrs:{type:"button"},on:{click:function(a){return t.deleteTravel(e)}}},[a("svg",{staticClass:"bi bi-trash3",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[a("path",{attrs:{d:"M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"}})])])])])})),0)])])])])])]),""!==this.travelToModify?a("div",{staticClass:"modify-route bg-light border shadow rounded px-3 py-2 translate-middle",attrs:{id:"modify-route"}},[a("div",{staticClass:"container p-0"},[a("div",{staticClass:"row p-0"},[a("div",{staticClass:"col text-end pe-2 text-dark"},[a("svg",{staticClass:"bi bi-x-lg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},on:{click:function(e){return t.notModify()}}},[a("path",{attrs:{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h4",{staticClass:"mr-auto"},[t._v("Route "+t._s(this.travelToModify.index))])])])])]),a("div",{staticClass:"add-form container-fluid rounded px-0 pb-3"},[a("div",{staticClass:"row rounded gap-3 p-0 m-0"},[a("div",{staticClass:"col-md p-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.dateToModify,expression:"dateToModify"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.dateToModify},on:{input:function(e){e.target.composing||(t.dateToModify=e.target.value)}}})]),a("div",{staticClass:"col-md p-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.vehicleToModify,expression:"vehicleToModify"}],staticClass:"form-control",attrs:{placeholder:"Vehicle"},domProps:{value:t.vehicleToModify},on:{input:function(e){e.target.composing||(t.vehicleToModify=e.target.value)}}})]),a("div",{staticClass:"d-grid col-md-2 text-end p-0"},[a("button",{staticClass:"btn btn-primary btn-sm btn-block",attrs:{type:"button"},on:{click:function(e){return t.submitModific()}}},[t._v(" Modify ")])])])]),a("nav",[a("div",{staticClass:"nav nav-pills",attrs:{id:"nav-tab",role:"tablist"}},[a("button",{staticClass:"btn btn-success btn-sm active me-1",attrs:{"data-bs-toggle":"tab",type:"button",role:"tab"},on:{click:function(e){return t.setTrackRoute()}}},[t._v(" Track Route ")]),a("button",{staticClass:"btn btn-danger btn-sm active",attrs:{"data-bs-toggle":"tab",type:"button",role:"tab"},on:{click:function(e){return t.setTrackStages()}}},[t._v(" Track Stages ")])])]),a("hr"),a("div",{staticClass:"rounded border border-3 border-success",class:{"border-danger":t.trackStages}},[a("l-map",{ref:"map",staticStyle:{height:"270px"},attrs:{zoom:t.zoom,center:t.center},on:{click:t.addMarker}},[a("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._l(this.travelToModify.route.latlng,(function(e,s){return a("l-marker",{key:s,attrs:{"lat-lng":e},on:{click:t.removeMarker}})})),a("div",[t._l(this.travelToModify.stages.latlng,(function(e,s){return a("l-marker",{key:s,attrs:{icon:t.icon,"lat-lng":e},on:{click:t.removeMarker}})})),a("l-icon",{attrs:{"icon-size":t.dynamicSize,"icon-anchor":t.dynamicAnchor,"icon-url":"static/location-pin.png"}})],2),a("l-polyline",{attrs:{"lat-lngs":this.travelToModify.route.latlng,color:this.travelToModify.route.color}})],2)],1)]):t._e()])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid py-4 px-5 header"},[a("h2",[t._v("My Story")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("div",{staticClass:"nav nav-pills",attrs:{id:"nav-tab",role:"tablist"}},[a("button",{staticClass:"btn btn-outline-success active me-2",attrs:{id:"nav-map-tab","data-bs-toggle":"tab","data-bs-target":"#nav-map",type:"button",role:"tab","aria-controls":"nav-map","aria-selected":"true"}},[t._v(" Map ")]),a("button",{staticClass:"btn btn-outline-success",attrs:{id:"nav-info-tab","data-bs-toggle":"tab","data-bs-target":"#nav-info",type:"button",role:"tab","aria-controls":"nav-info","aria-selected":"false"}},[t._v(" Travels ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead rounded"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Route")]),a("th",{attrs:{scope:"col"}},[t._v("Vehicle")]),a("th",{attrs:{scope:"col"}},[t._v("Stages")]),a("th",{attrs:{scope:"col"}})])])}],L=a(9014),Z=a.n(L),I=a(5148),A=a(6512),O=a(9118),N=a(9774),R=a(4306),E=a(4774),P=a(6166),U=a.n(P),B={name:"HomeLogged",components:{LMap:I.Z,LTileLayer:A.Z,LMarker:O.Z,LPolyline:N.Z,LIcon:R.Z,LPopup:E.Z},data(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',center:[45.646585834078216,13.775711602314791],zoom:10,date:"",dateToModify:"",vehicleToModify:"",travels:[],trackRoute:!0,trackStages:!1,travelToModify:"",polyline:{latlngs:[],color:"green"},icon:Z().icon({iconUrl:a(1521),iconSize:[32,37],iconAnchor:[16,37]}),iconSize:64,help:!1}},setup(){const t=c();return{userStore:t}},computed:{dynamicSize(){return[this.iconSize,1.15*this.iconSize]},dynamicAnchor(){return[this.iconSize/2,1.15*this.iconSize]}},methods:{setTrackRoute(){this.trackRoute=!0,this.trackStages=!1},setTrackStages(){this.trackRoute=!1,this.trackStages=!0},addMarker(t){const e=[t.latlng.lat,t.latlng.lng];this.trackRoute?this.travelToModify.route.latlng.push(e):this.trackStages&&this.travelToModify.stages.latlng.push(e),this.center=e},removeMarker(t){if(this.trackRoute)for(let e=0;e<this.travelToModify.route.latlng.length;e++)t.latlng.lat===this.travelToModify.route.latlng[e][0]&&t.latlng.lng===this.travelToModify.route.latlng[e][1]&&this.travelToModify.route.latlng.splice(e,1);else if(this.trackStages)for(let e=0;e<this.travelToModify.stages.latlng.length;e++)t.latlng.lat===this.travelToModify.stages.latlng[e][0]&&t.latlng.lng===this.travelToModify.stages.latlng[e][1]&&this.travelToModify.stages.latlng.splice(e,1)},modifyTravel(t,e){let a=document.getElementsByClassName("opac");this.travelToModify=t,this.dateToModify=this.travelToModify.date,this.vehicleToModify=this.travelToModify.vehicle,this.travelToModify.index=e,a[0].style.opacity="0.3",location.href="#",location.href="#modify-route",this.center=this.travelToModify.route.latlng[0]},notModify(){let t=document.getElementsByClassName("opac");this.travelToModify="",t[0].style.opacity="1"},async handleSubmit(){const t=this.$loading.show(),e=new Date(this.date).getTime(),a="travel/get/"+e;this.travels=[],await U().get(a,{headers:{"x-access-token":localStorage.getItem("x-access-token")}}).then((e=>{const a=e.data.message,s=JSON.parse(a);for(let t=0;t<s.length;t++){let e={id:s[t].id,vehicle:s[t].vehicle,date:this.date,route:{latlng:[],color:"green"},stages:{latlng:[]}};for(let a=0;a<s[t].pointsOfStages.length;a++){let r=JSON.parse(s[t].pointsOfStages[a]);e.stages.latlng.push(r)}for(let a=0;a<s[t].pointsOfRoute.length;a++){let r=JSON.parse(s[t].pointsOfRoute[a]);e.route.latlng.push(r)}this.travels.push(e)}0!==this.travels.length?this.center=this.travels[0].route.latlng[0]:this.center=[45.646585834078216,13.775711602314791],t.hide()})).catch((e=>{t.hide(),console.log(e),localStorage.removeItem("x-access-token"),localStorage.removeItem("username"),this.userStore.$reset(),this.$router.push("/")}))},changeState(){this.trackRoute=!this.trackRoute,this.trackStages=!this.trackStages},async submitModific(){const t=this.$loading.show();await U().put("travel/modify",{id:this.travelToModify.id,date:this.dateToModify,vehicle:this.vehicleToModify,pointsOfRoute:this.travelToModify.route.latlng,pointsOfStages:this.travelToModify.stages.latlng},{headers:{"x-access-token":localStorage.getItem("x-access-token")}}).then((()=>{t.hide(),this.$toasted.show("Travel modified correctly!"),this.notModify(),document.getElementById("nav-map-tab").click(),this.handleSubmit()})).catch((e=>{t.hide(),console.log(e),localStorage.removeItem("x-access-token"),localStorage.removeItem("username"),this.userStore.$reset(),this.$router.push("/")}))},async deleteTravel(t){const e=this.$loading.show();await U()["delete"]("travel/delete/"+t.id,{headers:{"x-access-token":localStorage.getItem("x-access-token")}}).then((()=>{e.hide(),this.$toasted.show("Travel was deleted correctly!"),document.getElementById("nav-map-tab").click(),this.handleSubmit()})).catch((t=>{e.hide(),console.log(t),localStorage.removeItem("x-access-token"),localStorage.removeItem("username"),this.userStore.$reset(),this.$router.push("/")}))}}},H=B,j=(0,m.Z)(H,z,$,!1,null,null,null),D=j.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container-fluid p-5 w-100 hey"},[a("div",{staticClass:"row align-items-center my-5"},[a("div",{staticClass:"col col-7-sm"},[t._m(0),a("h3",{staticClass:"my-3"},[t._v("Save, visualize, modify your daily travel")]),a("router-link",{attrs:{to:{name:"SignUp"}}},[a("button",{staticClass:"btn btn-primary"},[t._v(" SignUp for free ")])])],1),t._m(1)])]),t._m(2),a("div",{staticClass:"container-fluid p-5 mt-5 bg-light"},[a("h1",{staticClass:"mb-5 text-center"},[t._v("Interactive map")]),a("div",{staticClass:"row"},[t._m(3),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"map border rounded shadow border-3 border-dark mb-5"},[a("l-map",{ref:"map",staticStyle:{height:"400px"},attrs:{zoom:t.zoom,center:t.center}},[a("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}})],1)],1)])])]),t._m(4)])},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[a("strong",[t._v("Store your travel, "),a("br"),t._v(" your memories.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-sm mt-5 mt-sm-0 text-center"},[s("img",{staticClass:"img-fluid",attrs:{src:a(6253),height:"290",width:"290",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid px-5 my-5"},[a("h1",{staticClass:"my-5 text-center"},[t._v("Functionalities")]),a("div",{staticClass:"row text-center gap-5 mb-5"},[a("div",{staticClass:"col border rounded shadow p-4"},[a("h2",[t._v("Add Travel")]),a("p",[t._v("Track on the map your travel and the main stages")])]),a("div",{staticClass:"col border rounded shadow p-4"},[a("h2",[t._v("Modify Travel")]),a("p",[t._v("In every moment you can modify or remove your travels")])]),a("div",{staticClass:"col border rounded shadow p-4"},[a("h2",[t._v("Your story")]),a("p",[t._v("Visualize your story on the map")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col"},[a("h2",[t._v("Simply track your route and stages")]),a("p",[t._v("Just click on the map and track your memory.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid px-4"},[a("footer",{staticClass:"d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"},[a("p",{staticClass:"col-md-4 mb-0 text-muted"},[t._v("© 2022 TravelApp, Inc")]),a("p",{staticClass:"nav col-md-4 justify-content-end text-muted"},[t._v(" Course project - Web programming ")])])])}],W={name:"HomeNotLogged",components:{LMap:I.Z,LTileLayer:A.Z},data(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',center:[45.646585834078216,13.775711602314791],zoom:10}}},F=W,q=(0,m.Z)(F,V,J,!1,null,"3b865a34",null),Q=q.exports,Y={name:"HomePage",components:{HomeLogged:D,HomeNotLogged:Q},setup(){const t=c();return{userStore:t}}},G=Y,K=(0,m.Z)(G,M,T,!1,null,null,null),X=K.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center"},[a("div",{staticClass:"signup-card shadow border rounded p-3 mx-3 bg-light"},[a("h3",{staticClass:"mb-3"},[t._v("Sign Up")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("div",{staticClass:"form-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control shadow-none",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"form-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control shadow-none",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),a("div",{staticClass:"form-group mb-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control shadow-none",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("div",{staticClass:"clearfix mb-3"},[a("button",{staticClass:"btn btn-primary float-end",attrs:{disabled:!(this.email&&this.username&&this.password)}},[t._v(" Submit ")])]),a("footer",[a("div",{staticClass:"d-flex justify-content-center"},[a("span",[t._v("Do yuo have an account? "),a("router-link",{staticClass:"text-decoration-none",attrs:{to:"/login"}},[t._v("Login")])],1)])])])])])},et=[],at={name:"SignUp",data(){return{email:"",username:"",password:""}},methods:{async handleSubmit(){const t=this.$loading.show();await U().post("user/create",{email:this.email,username:this.username,password:this.password}).then((()=>{t.hide(),this.$router.push("/login"),this.$toasted.show("User created!")})).catch((e=>{t.hide(),console.log(e),this.$toasted.show("Choose another username!",{type:"error"})}))}}},st=at,rt=(0,m.Z)(st,tt,et,!1,null,null,null),ot=rt.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add-travel"},[t._m(0),a("div",{staticClass:"add-form container-fluid rounded px-5 py-4 mb-3"},[a("div",{staticClass:"row rounded gap-3 p-0 m-0"},[a("div",{staticClass:"col-md p-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"form-control",attrs:{type:"date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})]),a("div",{staticClass:"col-md p-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.vehicle,expression:"vehicle"}],staticClass:"form-control",attrs:{placeholder:"Vehicle"},domProps:{value:t.vehicle},on:{input:function(e){e.target.composing||(t.vehicle=e.target.value)}}})]),a("div",{staticClass:"d-grid col-md-2 text-end p-0"},[a("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"button",disabled:""===t.date||""===t.vehicle||0===t.routeMarkers.length||0===t.stageMarkers.length},on:{click:function(e){return t.sendData()}}},[t._v(" Add travel ")])])])]),a("div",{staticClass:"px-5 mt-3"},[a("nav",[a("div",{staticClass:"nav nav-pills",attrs:{id:"nav-tab",role:"tablist"}},[a("button",{staticClass:"btn btn-track-route btn-outline-success active me-2",attrs:{"data-bs-toggle":"tab",type:"button",role:"tab"},on:{click:function(e){return t.setTrackRoute()}}},[t._v(" Route ")]),a("button",{staticClass:"btn btn-track-stages btn-outline-danger",attrs:{"data-bs-toggle":"tab",type:"button",role:"tab"},on:{click:function(e){return t.setTrackStages()}}},[t._v(" Stages ")])])]),a("hr"),a("div",{staticClass:"map border rounded border-2 border-success mb-5",class:{"border-danger":t.trackStages}},[a("l-map",{ref:"map",staticStyle:{height:"400px"},attrs:{zoom:t.zoom,center:t.center},on:{click:t.addMarker}},[a("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._l(t.routeMarkers,(function(e,s){return a("l-marker",{key:s,attrs:{"lat-lng":e},on:{click:t.removeMarker}})})),a("div",[t._l(t.stageMarkers,(function(e,s){return a("l-marker",{key:s,attrs:{icon:t.icon,"lat-lng":e},on:{click:t.removeMarker}})})),a("l-icon",{attrs:{"icon-size":t.dynamicSize,"icon-anchor":t.dynamicAnchor,"icon-url":"static/location-pin.png"}})],2),a("l-polyline",{attrs:{"lat-lngs":t.polyline.latlngs,color:t.polyline.color}})],2)],1)])])},it=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid rounded px-5 py-4 header"},[a("h2",[t._v("Add Travel")])])}],lt={name:"AddTravel",components:{LMap:I.Z,LTileLayer:A.Z,LMarker:O.Z,LPolyline:N.Z,LIcon:R.Z},setup(){const t=c();return{userStore:t}},data(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',center:[45.646585834078216,13.775711602314791],zoom:10,polyline:{latlngs:[],color:"green"},icon:Z().icon({iconUrl:a(1521),iconSize:[32,37],iconAnchor:[16,37]}),staticAnchor:[16,37],iconSize:64,trackRoute:!0,trackStages:!1,routeMarkers:[],stageMarkers:[],date:"",vehicle:""}},computed:{dynamicSize(){return[this.iconSize,1.15*this.iconSize]},dynamicAnchor(){return[this.iconSize/2,1.15*this.iconSize]}},methods:{removeMarker(t){if(this.trackRoute)for(let e=0;e<this.routeMarkers.length;e++)t.latlng.lat===this.routeMarkers[e][0]&&t.latlng.lng===this.routeMarkers[e][1]&&(this.routeMarkers.splice(e,1),this.polyline.latlngs.splice(e,1));else if(this.trackStages)for(let e=0;e<this.stageMarkers.length;e++)t.latlng.lat===this.stageMarkers[e][0]&&t.latlng.lng===this.stageMarkers[e][1]&&this.stageMarkers.splice(e,1)},addMarker(t){const e=[t.latlng.lat,t.latlng.lng];this.trackRoute?(this.polyline.latlngs.push(e),this.routeMarkers.push(e)):this.trackStages&&this.stageMarkers.push(e),this.center=e},setTrackRoute(){this.trackRoute=!0,this.trackStages=!1},setTrackStages(){this.trackRoute=!1,this.trackStages=!0},async sendData(){const t=this.$loading.show();await U().put("travel/add",{date:this.date,vehicle:this.vehicle,pointsOfRoute:this.routeMarkers,pointsOfStages:this.stageMarkers},{headers:{"x-access-token":localStorage.getItem("x-access-token")}}).then((()=>{t.hide(),this.date="",this.vehicle="",this.routeMarkers=[],this.stageMarkers=[],this.polyline.latlngs=[],this.$toasted.show("Travel saved correctly!")})).catch((e=>{t.hide(),console.log(e),localStorage.removeItem("x-access-token"),localStorage.removeItem("username"),this.userStore.$reset(),this.$toasted.show("Travel saved correctly!"),this.$router.push("/")}))}}},ct=lt,dt=(0,m.Z)(ct,nt,it,!1,null,"483bcebe",null),ut=dt.exports,mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center"},[a("div",{staticClass:"login-card bg-light border shadow rounded p-3 mx-3"},[a("h3",{staticClass:"mb-3"},[t._v("Login")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("div",{staticClass:"form-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control shadow-none",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),a("div",{staticClass:"form-group mb-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control shadow-none",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("div",{staticClass:"clearfix mb-3"},[a("button",{staticClass:"btn btn-primary float-end",attrs:{disabled:!(this.username&&this.password)}},[t._v(" Submit ")])]),a("footer",[a("div",{staticClass:"d-flex justify-content-center links"},[a("span",[t._v("Don't yuo have an account? "),a("router-link",{staticClass:"text-decoration-none",attrs:{to:"/signup"}},[t._v("Sign Up")])],1)])])])])])},ht=[],vt={name:"LogIn",data(){return{username:"",password:""}},methods:{async handleSubmit(){const t=this.$loading.show(),e=c();await U().post("user/authenticate",{username:this.username,password:this.password}).then((a=>{t.hide(),e.auth=!0,e.username=this.username,localStorage.setItem("x-access-token",a.data["x-access-token"]),localStorage.setItem("username",this.username),this.$router.push("/")})).catch((e=>{t.hide(),console.log(e),this.$toasted.show("Credential incorrect!",{type:"error"})}))}}},pt=vt,gt=(0,m.Z)(pt,mt,ht,!1,null,null,null),ft=gt.exports;s.Z.use(S.Z);const bt=[{path:"/",name:"HomePage",component:X},{path:"/signup",name:"SignUp",component:ot},{path:"/login",name:"LogIn",component:ft},{path:"/addtravel",name:"AddTravel",component:ut}],yt=new S.Z({mode:"history",routes:bt});var kt=yt,Ct=a(3233),wt=a.n(Ct),xt=a(9168),_t=a.n(xt);s.Z.use(_t(),{duration:3e3,type:"success"}),s.Z.use(wt()),delete L.Icon.Default.prototype._getIconUrl,L.Icon.Default.mergeOptions({iconRetinaUrl:a(6431),iconUrl:a(7093),shadowUrl:a(8858)}),s.Z.use(l.og);const St=(0,l.WB)(),Mt=(0,l.WB)();U().defaults.baseURL="https://localhost:8443/travelApp/api/",new s.Z({router:kt,store:Mt,pinia:St,render:t=>t(_)}).$mount("#app")},1521:function(t,e,a){t.exports=a.p+"img/location-pin.e4074496.png"},6253:function(t,e,a){t.exports=a.p+"img/world.1b158d50.png"}},e={};function a(s){var r=e[s];if(void 0!==r)return r.exports;var o=e[s]={exports:{}};return t[s].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,s,r,o){if(!s){var n=1/0;for(d=0;d<t.length;d++){s=t[d][0],r=t[d][1],o=t[d][2];for(var i=!0,l=0;l<s.length;l++)(!1&o||n>=o)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(i=!1,o<n&&(n=o));if(i){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[s,r,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/travelApp/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,o,n=s[0],i=s[1],l=s[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(l)var d=l(a)}for(e&&e(s);c<n.length;c++)o=n[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},s=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(7267)}));s=a.O(s)})();
//# sourceMappingURL=app.e3671d1b.js.map