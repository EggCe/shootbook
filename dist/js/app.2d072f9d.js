(function(e){function t(t){for(var r,i,s=t[0],l=t[1],c=t[2],v=0,d=[];v<s.length;v++)i=s[v],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},o=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=(a("d3b7"),a("bc3a")),o=a.n(n),i={},s=o.a.create(i);s.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e){e.axios=s,window.axios=s,Object.defineProperties(e.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},r["a"].use(Plugin);Plugin;var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{dark:"",app:"",clipped:""}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{to:"/"}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-view-dashboard")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Dashboard")])],1)],1),a("v-list-item",{attrs:{to:"/kladde"}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-settings")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Schießkladde")])],1)],1),a("v-list-item",{attrs:{to:"/historie"}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-settings")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Liste")])],1)],1)],1)],1),a("v-app-bar",{attrs:{app:"",dark:"","clipped-left":""}},[a("v-toolbar-title",[e._v("Schießkladde")])],1),a("v-content",{attrs:{"background-color":"light-blue"}},[a("v-container",[a("router-view")],1)],1),a("v-footer",{attrs:{dark:"",app:""}},[a("span",[e._v("© 2019")])])],1)},c=[],u={data:function(){return{drawer:null}},created:function(){this.$vuetify.theme.dark=!0}},v=u,d=a("2877"),h=a("6544"),p=a.n(h),f=a("7496"),m=a("40dc"),b=a("a523"),k=a("a75b"),g=a("553a"),x=a("132d"),V=a("8860"),w=a("da13"),_=a("1800"),y=a("5d23"),C=a("f774"),j=a("2a7f"),P=Object(d["a"])(v,l,c,!1,null,null,null),O=P.exports;p()(P,{VApp:f["a"],VAppBar:m["a"],VContainer:b["a"],VContent:k["a"],VFooter:g["a"],VIcon:x["a"],VList:V["a"],VListItem:w["a"],VListItemAction:_["a"],VListItemContent:y["a"],VListItemTitle:y["b"],VNavigationDrawer:C["a"],VToolbarTitle:j["a"]});var S=a("8c4f"),$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",[r("v-container",[r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"12"}},[r("h1",[e._v("Schießkladde")])]),r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("img",{attrs:{width:"300px",alt:"Gilde logo",src:a("6744")}})])],1)],1)],1)},T=[],D={name:"home"},L=D,F=a("62ad"),q=a("a722"),E=a("0fd9"),I=Object(d["a"])(L,$,T,!1,null,null,null),M=I.exports;p()(I,{VCol:F["a"],VContainer:b["a"],VLayout:q["a"],VRow:E["a"]});var A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("h3",[e._v("Schießkladde am "+e._s(e.date.getDate())+"."+e._s(e.date.getMonth()+1)+"."+e._s(e.date.getFullYear()))])])],1),a("v-form",[a("v-row",[a("v-col",{attrs:{cols:"5"}},[a("v-text-field",{attrs:{label:"Vorname",required:""},model:{value:e.shooter.name,callback:function(t){e.$set(e.shooter,"name",t)},expression:"shooter.name"}})],1),a("v-col",{attrs:{cols:"5"}},[a("v-text-field",{attrs:{label:"Nachname",required:""},model:{value:e.shooter.surname,callback:function(t){e.$set(e.shooter,"surname",t)},expression:"shooter.surname"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"3"}},[a("v-checkbox",{attrs:{label:"Großkaliber",required:""},model:{value:e.shooter.gk,callback:function(t){e.$set(e.shooter,"gk",t)},expression:"shooter.gk"}})],1),a("v-col",{attrs:{cols:"3"}},[a("v-checkbox",{attrs:{label:"Kleinkaliber",required:""},model:{value:e.shooter.kk,callback:function(t){e.$set(e.shooter,"kk",t)},expression:"shooter.kk"}})],1),a("v-col",{attrs:{cols:"3"}},[a("v-checkbox",{attrs:{label:"Pauschale",required:""},model:{value:e.shooter.pauschale,callback:function(t){e.$set(e.shooter,"pauschale",t)},expression:"shooter.pauschale"}})],1)],1),a("v-btn",{staticClass:"success",on:{click:function(t){return e.saveShooter()}}},[e._v("Speichern")])],1)],1)],1)},B=[],G={name:"home",components:{},data:function(){return{date:new Date,shooter:{name:"",surname:"",gk:!1,kk:!1,pauschale:!1}}},methods:{saveShooter:function(){var e=this;o.a.post("http://localhost:3000/neweintrag",{shooter:this.shooter}).then((function(t){console.log(t),e.shooter={name:"",surname:"",gk:!1,kk:!1,pauschale:!1}}))}}},N=G,J=a("8336"),K=a("ac7c"),R=a("4bd4"),z=a("8654"),Y=Object(d["a"])(N,A,B,!1,null,null,null),H=Y.exports;p()(Y,{VBtn:J["a"],VCheckbox:K["a"],VCol:F["a"],VContainer:b["a"],VForm:R["a"],VLayout:q["a"],VRow:E["a"],VTextField:z["a"]});var Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",[a("v-card-title",[e._v(" Schießkladde "),a("v-spacer"),a("v-text-field",{attrs:{label:"Suche","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.shooters,"items-per-page":5,search:e.search,dark:""},scopedSlots:e._u([{key:"item.gk",fn:function(t){var r=t.item;return[a("v-chip",{attrs:{color:e.getColor(r.gk),dark:""}})]}},{key:"item.kk",fn:function(t){var r=t.item;return[a("v-chip",{attrs:{color:e.getColor(r.kk),dark:""}})]}},{key:"item.pauschale",fn:function(t){var r=t.item;return[a("v-chip",{attrs:{color:e.getColor(r.pauschale),dark:""}})]}}])})],1),a("v-btn",{on:{click:function(t){return e.createPDF()}}})],1)},U=[],W=(a("b0c0"),a("e511")),X=a.n(W),Z={name:"home",data:function(){return{date:new Date,search:"",shooters:[],headers:[{text:"Vorname",value:"name"},{text:"Nachname",value:"last_name"},{text:"Großkaliber",value:"gk"},{text:"Kleinkaliber",value:"kk"},{text:"Pauschale",value:"pauschale"}]}},mounted:function(){this.getEintraege()},methods:{getEintraege:function(){var e=this;o.a.get("http://localhost:3000/eintraege").then((function(t){e.shooters=t.data.ergebnis}))},createPDF:function(){var e="test",t=new X.a;for(var a in t.text("schießkladde",10,10),this.shooters){var r=a.name;t.text(r,20,10)}t.save(e+".pdf")},getColor:function(e){return 0===e?"black":1===e?"green":void 0}}},ee=Z,te=a("b0af"),ae=a("99d9"),re=a("cc20"),ne=a("8fea"),oe=a("2fa4"),ie=Object(d["a"])(ee,Q,U,!1,null,null,null),se=ie.exports;p()(ie,{VBtn:J["a"],VCard:te["a"],VCardTitle:ae["a"],VChip:re["a"],VContainer:b["a"],VDataTable:ne["a"],VSpacer:oe["a"],VTextField:z["a"]}),r["a"].use(S["a"]);var le=[{path:"/",name:"home",component:M},{path:"/kladde",name:"kladde",component:H},{path:"/historie",name:"historie",component:se}],ce=new S["a"]({routes:le}),ue=ce,ve=a("f309");r["a"].use(ve["a"]);var de=new ve["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:ue,vuetify:de,render:function(e){return e(O)}}).$mount("#app")},6744:function(e,t,a){e.exports=a.p+"img/schuetztengildestraubing_wappen.3d697061.jpg"}});
//# sourceMappingURL=app.2d072f9d.js.map