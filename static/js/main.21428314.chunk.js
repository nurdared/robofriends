(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=(a(13),a(1)),s=a(2),i=a(4),m=a(3),u=a(5),h=(a(14),function(e){var t=e.id,a=e.name,c=e.email;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__avatar"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"avatar"})),r.a.createElement("div",{className:"card__name"},r.a.createElement("h1",null,a)),r.a.createElement("div",{className:"card__email"},r.a.createElement("p",null,c))))}),d=function(e){var t=e.robots;return r.a.createElement(n.Fragment,null,r.a.createElement("section",{className:"container"},t.map((function(e){return r.a.createElement(h,{key:e.id,id:e.id,name:e.name,email:e.email})}))))},E=function(e){var t=e.searchChange;return r.a.createElement("section",{className:"center"},r.a.createElement("div",{className:"search-container"},r.a.createElement("input",{type:"search",onChange:t,placeholder:"Search Robots"}),r.a.createElement("div",{className:"search"})))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"800px"}},e.children)},v=(a(15),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={hasError:!1},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"OOOps something went wrong"):this.props.children}}]),t}(n.Component)),p=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return t.length?r.a.createElement(n.Fragment,null,r.a.createElement("header",null,r.a.createElement("h1",{className:"title center"},"robofriends")),r.a.createElement("main",null,r.a.createElement(E,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(v,null,r.a.createElement(d,{robots:c}))))):r.a.createElement("h1",null,"Loading")}},{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.21428314.chunk.js.map