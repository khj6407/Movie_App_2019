(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{20:function(e,a,t){e.exports=t(45)},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(12),c=t.n(r),i=t(2),m=t.n(i),o=t(13),l=t(14),u=t(15),p=t(18),v=t(16),d=t(19),E=t(17),g=t.n(E);var y=function(e){var a=e.year,t=e.title,n=e.summary,r=e.poster,c=e.genres;return s.a.createElement("div",{className:"movie"},s.a.createElement("img",{src:r,alt:t,title:t}),s.a.createElement("div",{className:"movie__data"},s.a.createElement("h3",{className:"movie__title"},t),s.a.createElement("h3",{className:"movie__year"},a),s.a.createElement("ul",{className:"movie__genres"},c.map((function(e,a){return s.a.createElement("li",{key:a,className:"genres__genre"},e)}))),s.a.createElement("p",{className:"movie__summary"},n.slice(0,180),"...")))},_=(t(43),t(44),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(p.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(s)))).state={isLoading:!0,movies:[]},t.getMovies=Object(o.a)(m.a.mark((function e(){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=e.sent,n=a.data.data.movies,t.setState({movies:n,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),t}return Object(d.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return s.a.createElement("section",{className:"container"},a?s.a.createElement("div",{className:"loader"},s.a.createElement("p",{class:"double"},s.a.createElement("span",{class:"ouro ouro3"},s.a.createElement("span",{class:"left"},s.a.createElement("span",{class:"anim"})),s.a.createElement("span",{class:"right"},s.a.createElement("span",{class:"anim"})))),s.a.createElement("span",{className:"loader_text"},"Lodaing...")):s.a.createElement("div",{className:"movies"},t.map((function(e){return s.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(s.a.Component));c.a.render(s.a.createElement(_,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.2e51a00f.chunk.js.map