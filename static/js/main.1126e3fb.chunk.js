(this["webpackJsonpinvolvio-assignment"]=this["webpackJsonpinvolvio-assignment"]||[]).push([[0],{23:function(e,t,a){},30:function(e,t,a){e.exports=a(45)},35:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),i=(a(35),a(9)),s=a(1),l=(a(36),a(17)),u=a.n(l),m=a(24),d=a(28),v=a(8),f=(a(23),a(42),function(e){var t=e.handleClick,a=e.arg,n=e.name;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(e){return t(a)}},n))}),E=(a(43),function(e){var t=e.show,a=e.action,n=e.buttonName;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:t.image.medium,alt:"Avatar",style:{width:"100%"}}),r.a.createElement("div",{className:"container"},r.a.createElement("h5",null,t.name)),r.a.createElement(f,{handleClick:a,arg:t,name:n}))}),h=Object(v.b)(null,{addFavourites:function(e){return function(t){t({type:"ADD_FAVOURITE",payload:e})}}})((function(e){var t=e.addFavourites,a=Object(n.useState)(),c=Object(d.a)(a,2),o=c[0],s=c[1],l=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://api.tvmaze.com/shows");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,s(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[]),r.a.createElement("div",null,r.a.createElement("h1",null,"TV Shows",r.a.createElement(i.b,{to:"/favourites"},r.a.createElement("button",{className:"fav-button"},"Favourites"))),r.a.createElement("div",{className:"grid-container"},o&&o.map((function(e){return r.a.createElement("div",{className:"grid-item"},r.a.createElement(E,{show:e,action:t,key:e.id,buttonName:"Add to Favourites"}))}))))})),p=Object(v.b)((function(e){return{shows:e.Favourites.shows}}),{removeFavourite:function(e){return function(t){t({type:"REMOVE_FAVOURITE",payload:e.id})}}})((function(e){var t=e.shows,a=e.removeFavourite;return r.a.createElement("div",null,r.a.createElement("h1",null,"Favourites"),r.a.createElement(i.b,{to:"/"},"Back to all"),r.a.createElement("div",{className:"grid-container"},t&&t.map((function(e){return r.a.createElement("div",{className:"grid-item"},r.a.createElement(E,{show:e,action:a,key:e.id,buttonName:"Remove from Favourites"}))}))))}));var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(s.c,null,r.a.createElement("header",{className:"App-header"},r.a.createElement(s.a,{exact:!0,path:"/",component:h}),r.a.createElement(s.a,{exact:!0,path:"/favourites",component:p})))))},w=a(6),O=a(26),g=a(27),j=a(12),F=a(29),y={shows:[],loading:!0},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,a=t.payload,n=t.type;switch(n){case"ADD_FAVOURITE":return e.shows=[a].concat(Object(F.a)(e.shows)),localStorage.setItem("favourites",e.shows),Object(j.a)(Object(j.a)({},e),{},{loading:!1});case"REMOVE_FAVOURITE":return Object(j.a)(Object(j.a)({},e),{},{shows:e.shows.filter((function(e){return e.id!==a})),loading:!1});default:return e}},A=Object(w.combineReducers)({Favourites:N}),k=[g.a],R=Object(w.createStore)(A,{},Object(O.composeWithDevTools)(w.applyMiddleware.apply(void 0,k)));o.a.render(r.a.createElement(v.a,{store:R},r.a.createElement(b,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.1126e3fb.chunk.js.map