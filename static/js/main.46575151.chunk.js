(this["webpackJsonpreact-meetup-app"]=this["webpackJsonpreact-meetup-app"]||[]).push([[0],{10:function(e,t,c){e.exports={header:"MainNavigation_header__1hVym",logo:"MainNavigation_logo__3Milk",active:"MainNavigation_active__BV_HJ",badge:"MainNavigation_badge__uiMAe"}},16:function(e,t,c){e.exports={card:"Card_card__3f135"}},17:function(e,t,c){e.exports={list:"MeetupList_list__1tHLK"}},20:function(e,t,c){e.exports={main:"Layout_main__2AJvP"}},26:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c(15),r=c.n(n),s=c(5),a=(c(26),c(2)),o=c(21),d=c(8),j=c(16),l=c.n(j),u=c(0);var b=function(e){return Object(u.jsx)("div",{className:l.a.card,children:e.children})},h=c(9),O=c.n(h),x=Object(i.createContext)({favorites:[],totalFavorites:0,addFavorite:function(e){},removeFavorite:function(e){},itemIsFavorite:function(e){}});function m(e){var t=Object(i.useState)([]),c=Object(d.a)(t,2),n=c[0],r=c[1];var s={favorites:n,totalFavorites:n.length,addFavorite:function(e){r((function(t){return t.concat(e)}))},removeFavorite:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))},itemIsFavorite:function(e){return n.some((function(t){return t.id===e}))}};return Object(u.jsx)(x.Provider,{value:s,children:e.children})}var v=x;var p=function(e){var t=Object(i.useContext)(v),c=t.itemIsFavorite(e.id);return Object(u.jsx)("li",{className:O.a.item,children:Object(u.jsxs)(b,{children:[Object(u.jsx)("div",{className:O.a.image,children:Object(u.jsx)("img",{src:e.image,alt:e.title})}),Object(u.jsxs)("div",{className:O.a.content,children:[Object(u.jsx)("h3",{children:e.title}),Object(u.jsx)("address",{children:e.address}),Object(u.jsx)("p",{children:e.description})]}),Object(u.jsx)("div",{className:O.a.actions,children:Object(u.jsx)("button",{onClick:function(){c?t.removeFavorite(e.id):t.addFavorite({id:e.id,title:e.title,description:e.description,image:e.image,address:e.address})},children:c?"Remove from Favorites":"To Favorites"})})]})})},f=c(17),_=c.n(f);var g=function(e){return Object(u.jsx)("ul",{className:_.a.list,children:e.meetups.map((function(e){return Object(u.jsx)(p,{id:e.id,image:e.image,title:e.title,address:e.address,description:e.description},e.id)}))})};var M=function(){var e=Object(i.useState)(!0),t=Object(d.a)(e,2),c=t[0],n=t[1],r=Object(i.useState)([]),s=Object(d.a)(r,2),a=s[0],j=s[1];return Object(i.useEffect)((function(){n(!0),fetch("https://react-getting-started-86221-default-rtdb.firebaseio.com/meetups.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var c in e){var i=Object(o.a)({id:c},e[c]);t.push(i)}n(!1),j(t)}))}),[]),c?Object(u.jsx)("section",{children:Object(u.jsx)("p",{children:"Loading..."})}):Object(u.jsxs)("section",{children:[Object(u.jsx)("h1",{children:"All Meetups"}),Object(u.jsx)(g,{meetups:a})]})},N=c(6),F=c.n(N);var y=function(e){var t=Object(i.useRef)(),c=Object(i.useRef)(),n=Object(i.useRef)(),r=Object(i.useRef)();return Object(u.jsx)(b,{children:Object(u.jsxs)("form",{className:F.a.form,onSubmit:function(i){i.preventDefault();var s={title:t.current.value,image:c.current.value,address:n.current.value,description:r.current.value};e.onAddMeetup(s)},children:[Object(u.jsxs)("div",{className:F.a.control,children:[Object(u.jsx)("label",{htmlFor:"title",children:"Meetup Title"}),Object(u.jsx)("input",{type:"text",required:!0,id:"title",ref:t})]}),Object(u.jsxs)("div",{className:F.a.control,children:[Object(u.jsx)("label",{htmlFor:"image",children:"Meetup Image"}),Object(u.jsx)("input",{type:"url",required:!0,id:"image",ref:c})]}),Object(u.jsxs)("div",{className:F.a.control,children:[Object(u.jsx)("label",{htmlFor:"address",children:"Address"}),Object(u.jsx)("input",{type:"text",required:!0,id:"address",ref:n})]}),Object(u.jsxs)("div",{className:F.a.control,children:[Object(u.jsx)("label",{htmlFor:"description",children:"Description"}),Object(u.jsx)("textarea",{id:"description",required:!0,rows:"5",ref:r})]}),Object(u.jsx)("div",{className:F.a.actions,children:Object(u.jsx)("button",{children:"Add Meetup"})})]})})};var I=function(){var e=Object(a.f)();return Object(u.jsxs)("section",{children:[Object(u.jsx)("h1",{children:"Add New Meetup"}),Object(u.jsx)(y,{onAddMeetup:function(t){fetch("https://react-getting-started-86221-default-rtdb.firebaseio.com/meetups.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){e.replace("/")}))}})]})};var w=function(){var e,t=Object(i.useContext)(v);return e=0===t.totalFavorites?Object(u.jsx)("p",{children:"You got no favorites yet. Start adding some?"}):Object(u.jsx)(g,{meetups:t.favorites}),Object(u.jsxs)("section",{children:[Object(u.jsx)("h1",{children:"My Favorites"}),e]})},A=c(10),C=c.n(A);var S=function(){var e=Object(i.useContext)(v);return Object(u.jsxs)("header",{className:C.a.header,children:[Object(u.jsx)("div",{className:C.a.logo,children:"React Meetups"}),Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/",children:"All Meetups"})}),Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/new-meetup",children:"Add New Meetup"})}),Object(u.jsx)("li",{children:Object(u.jsxs)(s.b,{to:"/favorites",children:["My Favorites",Object(u.jsx)("span",{className:C.a.badge,children:e.totalFavorites})]})})]})})]})},J=c(20),R=c.n(J);var D=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)(S,{}),Object(u.jsx)("main",{className:R.a.main,children:e.children})]})};var T=function(){return Object(u.jsx)(D,{children:Object(u.jsxs)(a.c,{children:[Object(u.jsx)(a.a,{path:"/",exact:!0,children:Object(u.jsx)(M,{})}),Object(u.jsx)(a.a,{path:"/new-meetup",children:Object(u.jsx)(I,{})}),Object(u.jsx)(a.a,{path:"/favorites",children:Object(u.jsx)(w,{})})]})})};r.a.render(Object(u.jsx)(m,{children:Object(u.jsx)(s.a,{children:Object(u.jsx)(T,{})})}),document.getElementById("root"))},6:function(e,t,c){e.exports={form:"NewMeetupForm_form__1xgCU",control:"NewMeetupForm_control__1XT9s",actions:"NewMeetupForm_actions__mDyIx"}},9:function(e,t,c){e.exports={item:"MeetupItem_item__2EYDc",image:"MeetupItem_image__2YW-F",content:"MeetupItem_content__IP3D2",actions:"MeetupItem_actions__35JhQ"}}},[[36,1,2]]]);
//# sourceMappingURL=main.46575151.chunk.js.map