(function(t){function n(n){for(var r,s,u=n[0],a=n[1],c=n[2],f=0,p=[];f<u.length;f++)s=u[f],e[s]&&p.push(e[s][0]),e[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);l&&l(n);while(p.length)p.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,n=0;n<i.length;n++){for(var o=i[n],r=!0,u=1;u<o.length;u++){var a=o[u];0!==e[a]&&(r=!1)}r&&(i.splice(n--,1),t=s(s.s=o[0]))}return t}var r={},e={app:0},i=[];function s(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=r,s.d=function(t,n,o){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)s.d(o,r,function(n){return t[n]}.bind(null,r));return o},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=n,u=u.slice();for(var c=0;c<u.length;c++)n(u[c]);var l=a;i.push([0,"chunk-vendors"]),o()})({0:function(t,n,o){t.exports=o("56d7")},"034f":function(t,n,o){"use strict";var r=o("64a9"),e=o.n(r);e.a},"538b":function(t,n,o){t.exports=o.p+"img/plane.b9adead9.png"},"56d7":function(t,n,o){"use strict";o.r(n);o("cadf"),o("551c"),o("f751"),o("097d");var r=o("2b0e"),e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"form"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.mode,expression:"mode"}],on:{change:function(n){var o=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){var n="_value"in t?t._value:t.value;return n});t.mode=n.target.multiple?o:o[0]}}},[r("option",{domProps:{value:"random"}},[t._v("Random")]),r("option",{domProps:{value:"groups"}},[t._v("Groups")]),r("option",{domProps:{value:"wmi"}},[t._v("Window, Middle, Ile")]),r("option",{domProps:{value:"inorder"}},[t._v("Front to Back")]),r("option",{domProps:{value:"perfect"}},[t._v("Perfect")]),r("option",{domProps:{value:"custom"}},[t._v("Custom (open Dev Console)")])]),r("button",{on:{click:t.restartGame}},[t._v("Run")])]),r("div",{staticClass:"container"},[r("img",{attrs:{src:o("538b")}}),t._l(t.persons,function(n,o){return r("div",{key:"sit"+n.id,staticClass:"person",class:{sitting:n.sitting},style:t.position(n)})}),r("div",{staticClass:"time"},[t._v(t._s(t.time))])],2)])},i=[],s=o("f499"),u=o.n(s),a=(o("ac6a"),o("7514"),o("2ef0")),c=417;function l(t){var n=t.length;while(n>0){var o=Math.floor(Math.random()*n);n--;var r=t[n];t[n]=t[o],t[o]=r}return t}var f={name:"app",data:function(){return{time:0,persons:[],sortFunction:function(){return 0},mode:"Random"}},created:function(){this.createPersons(),this.startGameLoop(),console.log("set window.sortFunction = function(person) { return person.row } "),console.log("person hat Properties .row, .column. Your Function should return a Number. Persons with smaller Numbers come first")},computed:{walkingPersons:function(){return this.persons.filter(function(t){return!t.sitting})},sittingPersons:function(){return this.persons.filter(function(t){return t.sitting})}},methods:{position:function(t){return"top: ".concat(this.topDistForColumn(t.y),"px; left: ").concat(this.leftDistForRow(t.x),"px")},leftDistForRow:function(t){return 220+100*t},topDistForColumn:function(t){return null===t?c:c+210-70*(t+(t>=3?1:0))},createPersons:function(){for(var t=[],n=0,o=0;o<16;o++)for(var r=0;r<6;r++)t.push({id:++n,row:o,column:r,x:-n,y:null,sitting:!1,unloading:!1,trySit:function(){if(this.x==this.row){if(!this.unloading)return void(this.unloading=!0);this.sitting=!0,this.y=this.column}},tryMove:function(t){var n=this;if(!this.sitting&&!this.unloading){var o=t.filter(function(t){return!t.sitting}).find(function(t){return t.x==n.x+1});o||this.x++}}});t=l(t),t=Object(a["sortBy"])(t,this.sortFunction),t.forEach(function(t,n){return t.x=-n}),this.persons=t},startGameLoop:function(){var t=this,n=function(){var n=Object(a["reverse"])(Object(a["sortBy"])(t.persons.filter(function(t){return!t.sitting}),"x"));n.forEach(function(n,o){n.trySit(),n.tryMove(t.persons)}),t.time++};function o(){0!=t.walkingPersons.length&&(n(),setTimeout(o,1e3))}o()},restartGame:function(){var t={inorder:function(t){return t.id},groups:function(t){return t.row>15?0:t.row>10?1:2},random:function(t){return 0},wmi:function(t){return 0==t.column||5==t.column?0:1==t.column||4==t.column?1:2},custom:function(t){return window.sortFunction(t)},perfect:function(t){var n=t%2;return n?t.row:3e3*t.row}};this.sortFunction=t[this.mode],this.createPersons(),console.log("sorted:"),console.table(JSON.parse(u()(this.persons)))}}},p=f,d=(o("034f"),o("2877")),m=Object(d["a"])(p,e,i,!1,null,null,null),v=m.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(v)}}).$mount("#app")},"64a9":function(t,n,o){}});
//# sourceMappingURL=app.f8ebe2a6.js.map