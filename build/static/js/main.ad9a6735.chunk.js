(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{14:function(t,e,n){t.exports={container:"Cards_container__-0Cr2",card:"Cards_card__1pEsh",positive:"Cards_positive__3NXVj",neutral:"Cards_neutral__30ROQ",negative:"Cards_negative__1aLmy"}},208:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n(0),c=n.n(r),o=n(69),s=n.n(o),i=n(6),u=n.n(i),d=n(11),l=n(70),j=n(71),p=n(81),h=n(80),b=n(226),f=n(230),v=n(227),x=n(228),O=n(31),m=n.n(O),y=n(32),g=n.n(y),w=n(14),C=n.n(w),_=function(t){var e=t.data,n=e.confirmed,r=e.recovered,c=e.deaths,o=e.lastUpdate;return n?Object(a.jsx)("div",{className:C.a.container,children:Object(a.jsxs)(b.a,{container:!0,spacing:3,justify:"center",children:[Object(a.jsx)(b.a,{item:!0,component:f.a,xs:12,md:3,className:g()(C.a.card,C.a.positive),children:Object(a.jsxs)(v.a,{children:[Object(a.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"Pozytywne"}),Object(a.jsx)(x.a,{variant:"h5",children:Object(a.jsx)(m.a,{start:0,end:n.value,duration:2.5,separator:","})}),Object(a.jsx)(x.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(a.jsx)(x.a,{variant:"body2",children:"Liczba pozytywnych tweet\xf3w"})]})}),Object(a.jsx)(b.a,{item:!0,component:f.a,xs:12,md:3,className:g()(C.a.card,C.a.neutral),children:Object(a.jsxs)(v.a,{children:[Object(a.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"Neutralne"}),Object(a.jsx)(x.a,{variant:"h5",children:Object(a.jsx)(m.a,{start:0,end:r.value,duration:2.5,separator:","})}),Object(a.jsx)(x.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(a.jsx)(x.a,{variant:"body2",children:"Liczba neutralnych tweet\xf3w"})]})}),Object(a.jsx)(b.a,{item:!0,component:f.a,xs:12,md:3,className:g()(C.a.card,C.a.negative),children:Object(a.jsxs)(v.a,{children:[Object(a.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"Negatywne"}),Object(a.jsx)(x.a,{variant:"h5",children:Object(a.jsx)(m.a,{start:0,end:c.value,duration:2.5,separator:","})}),Object(a.jsx)(x.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(a.jsx)(x.a,{variant:"body2",children:"Liczba negatywnych tweet\xf3w"})]})})]})}):"Loading..."},k=n(30),S=n(33),N=n.n(S),D="https://covid19.mathdro.id/api",z=function(){var t=Object(d.a)(u.a.mark((function t(e){var n,a,r,c,o,s,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=D,e&&(n="".concat(D,"/countries/").concat(e)),t.prev=2,t.next=5,N.a.get(n);case 5:return a=t.sent,r=a.data,c=r.confirmed,o=r.recovered,s=r.deaths,i=r.lastUpdate,t.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:i});case 14:t.prev=14,t.t0=t.catch(2),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(e){return t.apply(this,arguments)}}(),E=function(){var t=Object(d.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.a.get("https://api.covidtracking.com/v1/us/daily.json");case 3:return e=t.sent,n=e.data,t.abrupt("return",n.map((function(t){return{confirmed:t.positive,recovered:t.recovered,deaths:t.death,date:t.dateChecked}})));case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),L=function(){var t=Object(d.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.a.get("".concat(D,"/countries"));case 3:return e=t.sent,n=e.data.countries,t.abrupt("return",n.map((function(t){return t.name})));case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),B=n(76),J=n(77),U=n.n(J),A=function(){var t=Object(r.useState)([]),e=Object(k.a)(t,2),n=e[0],c=e[1];Object(r.useEffect)((function(){(function(){var t=Object(d.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=c,t.next=3,E();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}));var o=n[0]?Object(a.jsx)(B.Line,{data:{labels:n.map((function(t){return t.date})),datasets:[{data:n.map((function(t){return t.confirmed})),label:"Pozytywne",borderColor:"rgb(0, 255, 0)",backgroundColor:"rgba(0, 255, 0, 0.25)",fill:!0},{data:n.map((function(t){return t.deaths})),label:"Negatywne",borderColor:"red",backgroundColor:"rgba( 255, 0, 0, 0.25)",fill:!0}]}}):null;return Object(a.jsx)("div",{className:U.a.container,children:o})},P=n(231),R=n(229),V=n(78),F=n.n(V),G=function(t){var e=t.handleCountryChange,n=Object(r.useState)([]),c=Object(k.a)(n,2),o=c[0],s=c[1];return Object(r.useEffect)((function(){(function(){var t=Object(d.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=s,t.next=3,L();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[s]),Object(a.jsx)(P.a,{className:F.a.FormControl,children:Object(a.jsxs)(R.a,{defaultValue:"",onChange:function(t){return e(t.target.value)},children:[Object(a.jsx)("option",{value:"global",children:"Global"}),o.map((function(t,e){return Object(a.jsx)("option",{value:t,children:t},e)}))]})})},I=function(){return Object(a.jsx)("h1",{children:"RandomTweets"})},K=n(79),M=n.n(K),Q=function(t){Object(p.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={data:{},country:""},t.handleCountryChange=function(){var e=Object(d.a)(u.a.mark((function e(n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(n);case 2:a=e.sent,t.setState({data:a,country:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var t=Object(d.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z();case 2:e=t.sent,this.setState({data:e});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.data;return Object(a.jsxs)("div",{className:M.a.container,children:[Object(a.jsx)(_,{data:t}),Object(a.jsx)(G,{handleCountryChange:this.handleCountryChange}),Object(a.jsx)(A,{}),Object(a.jsx)(I,{})]})}}]),n}(c.a.Component);s.a.render(Object(a.jsx)(Q,{}),document.getElementById("root"))},77:function(t,e,n){t.exports={container:"Chart_container__2tKmE"}},78:function(t,e,n){},79:function(t,e,n){t.exports={container:"App_container__3EOJx"}}},[[208,1,2]]]);
//# sourceMappingURL=main.ad9a6735.chunk.js.map