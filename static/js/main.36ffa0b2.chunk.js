(window.webpackJsonpblog=window.webpackJsonpblog||[]).push([[0],{22:function(e,t,a){e.exports=a(33)},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),c=a.n(o),s=a(5),m=a(7),l=a(8),i=a(10),u=a(9),p=a(11),d=a(6);var h=function(e){var t=e.postId,a=e.postTitle,n=e.postBody;return r.a.createElement("article",{className:"post"},r.a.createElement("h2",{className:"title"},r.a.createElement(s.b,{to:"/post/".concat(t)},a)),r.a.createElement("p",{className:"post-body"},n))},f=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={pages:[0,1,2,3,4,5,6,7,8,9]},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.posts,t=this.state.pages;return r.a.createElement("div",{className:"home"},r.a.createElement("h1",{className:"title title-blog"},"Blog"),e.map(function(e,t){return r.a.createElement(h,{key:t,postId:e.id,postTitle:e.title,postBody:e.body})}),r.a.createElement("ol",{className:"page-list"},t.map(function(e,t){return r.a.createElement("li",{key:t,className:"page-number"},r.a.createElement(s.b,{to:"/".concat(e)},e+1))})))}}]),t}(n.Component);var v=function(){return r.a.createElement("aside",{className:"about center"},r.a.createElement("h2",{className:"title"},"About Me"),r.a.createElement("img",{className:"image",src:"http://www.frontieranimalsociety.com/images/News__Events/11ec71f4b5adce762099c3c0e7d5489b.png",alt:"profile"}),r.a.createElement("p",{className:"about-body"},"Something about me..."))};var b=function(e){var t=e.comments,a=e.onDeleteComment;return r.a.createElement("ol",{className:"comment-list"},t.map(function(e,t){return r.a.createElement("li",{key:t,className:"comment-list-item"},r.a.createElement("div",{className:"comment-details"},r.a.createElement("p",null,e)),r.a.createElement("button",{onClick:function(){return a(e)},className:"comment-remove"},"Remove"))}))};var E=function(e){var t=e.query,a=e.updateQuery,n=e.handleSubmit;return r.a.createElement("form",{onSubmit:n,className:"create-comment-form"},r.a.createElement("div",{className:"create-comment-details"},r.a.createElement("input",{type:"text",placeholder:"Comment",value:t,onChange:function(e){return a(e.target.value)}}),r.a.createElement("button",null,"Add Comment")))},y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",comments:["Comment0","Comment1","Comment2"]},a.removeComment=function(e){a.setState(function(t){return{comments:t.comments.filter(function(t){return t!==e})}})},a.updateQuery=function(e){a.setState({query:e.trim()})},a.handleSubmit=function(e){if(e.preventDefault(),a.state.query.length){var t=[].concat(a.state.comments);t.push(a.state.query),a.setState({comments:t}),a.setState({query:""})}},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.comments,a=e.query;return r.a.createElement("section",null,r.a.createElement("h2",{className:"title title-comments"},"Comments"),r.a.createElement(b,{comments:t,onDeleteComment:this.removeComment}),r.a.createElement(E,{query:a,updateQuery:this.updateQuery,handleSubmit:this.handleSubmit}))}}]),t}(n.Component);var g=function(e){return r.a.createElement("div",null,r.a.createElement(s.b,{className:"close-post",to:"/"},"Close"),r.a.createElement("div",{className:"flex-container"},r.a.createElement(h,{postId:e.post.id,postTitle:e.post.title,postBody:e.post.body}),r.a.createElement(v,null)),r.a.createElement(y,null))},N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[]},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts").then(function(e){return e.json()}).then(function(t){return e.setState({posts:t})})}},{key:"render",value:function(){var e=this.state.posts;return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,{path:"/post/:id",render:function(t){var a=t.match.params.id-1;return r.a.createElement(g,{post:e[a]})}}),r.a.createElement(d.a,{exact:!0,path:"/:page?",render:function(t){var a,n=t.match;if(void 0===n.params.page){a=[].concat(e).slice(0,10)}else{var o=10*n.params.page;a=[].concat(e).slice(0+o,10+o)}return r.a.createElement(f,{posts:a})}}))}}]),t}(n.Component);a(32),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(s.a,{basename:"/Blog"},r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.36ffa0b2.chunk.js.map