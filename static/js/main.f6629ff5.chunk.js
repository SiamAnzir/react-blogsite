(this["webpackJsonpreact-blogsite"]=this["webpackJsonpreact-blogsite"]||[]).push([[0],{49:function(e,t,a){},61:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(16),s=a.n(n),o=(a(61),a(49),a(15)),i=a(12),l=a(17),j=a(8),b=a(91),h=a(81),d=a(90),u=a(88),x=a(82),O=a.p+"static/media/logo.6ce24c58.svg",m=a(7),g=a(11),f=a(1),p=function(e){return Object(f.jsxs)(b.a,{bg:"dark",variant:"dark",expand:"lg",children:[Object(f.jsxs)(h.a,{children:[Object(f.jsx)(d.a,{className:"navbar-brand",children:Object(f.jsxs)(l.b,{to:"/",className:"text-white text-decoration-none",children:[Object(f.jsx)("img",{alt:"logo",src:O,width:"30",height:"30",className:"d-inline-block align-top"})," React BlogSite"]})}),Object(f.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(f.jsx)(b.a.Collapse,{id:"basic-navbar-nav",children:Object(f.jsxs)(d.a,{className:"ml-auto",children:[Object(f.jsxs)(d.a,{className:"nav-link",children:[Object(f.jsx)(l.b,{to:"/",className:"text-white text-decoration-none",children:" Home "})," "]}),Object(f.jsxs)(d.a,{className:"nav-link",children:[Object(f.jsx)(l.b,{to:"/allBlogs",className:"text-white text-decoration-none",children:"All Blogs"})," "]}),Object(f.jsxs)(d.a,{className:"nav-link",children:[Object(f.jsx)(l.b,{to:"/createBlogs",className:"text-white text-decoration-none",children:" Create Blogs "})," "]}),Object(f.jsxs)(d.a,{className:"nav-link",children:[Object(f.jsx)(l.b,{to:"/contact",className:"text-white text-decoration-none",children:" Contact"})," "]})]})})]}),e.themeState===e.theme.dark?Object(f.jsx)(u.a,{placement:"bottom",overlay:Object(f.jsx)(x.a,{id:"tooltip-bottom",children:" Turn Dark Mode Off "}),children:Object(f.jsx)("span",{onClick:function(){e.setThemeState(e.theme.light)},style:{cursor:"pointer"},children:Object(f.jsx)(m.a,{icon:g.e,color:"white"})})},"bottom"):Object(f.jsx)(u.a,{placement:"bottom",overlay:Object(f.jsx)(x.a,{id:"tooltip-bottom",children:" Turn Dark Mode On "}),children:Object(f.jsx)("span",{role:"img","aria-label":"sun",onClick:function(){e.setThemeState(e.theme.dark)},style:{cursor:"pointer"},children:"\ud83c\udf1e"})},"bottom")]})},v=a(54),y=a(92),C=a(83),S=a(84),k=a(85),w=a.p+"static/media/blog-listing.45945145.jpg",N=a.p+"static/media/background.b9fecf7e.jpg",B=function(e){var t=Object(c.useState)({id:null,readMoreState:!1}),a=Object(i.a)(t,2),r=a[0],n=a[1],s=e.blogs.map((function(t){return!0===t.favourite_blog?Object(f.jsxs)(v.a,{children:[Object(f.jsxs)(y.a,{border:"info",style:{width:"25rem",backgroundColor:e.themeState.background,color:e.themeState.foreground},children:[Object(f.jsx)(y.a.Img,{variant:"top",alt:"Card image",width:300,height:300,src:N}),Object(f.jsxs)(y.a.Body,{children:[Object(f.jsx)(y.a.Title,{children:t.title}),r.id===t.id&&r.readMoreState?Object(f.jsxs)(y.a.Text,{children:[t.description,Object(f.jsx)("span",{className:"read-more-link",onClick:function(){var e;e=t.id,n({id:e,readMoreState:!1})},children:Object(f.jsx)("p",{children:"Read Less "})})]}):Object(f.jsxs)(y.a.Text,{children:[t.description.slice(0,40),Object(f.jsx)("span",{className:"read-more-link",onClick:function(){var e;e=t.id,n({id:e,readMoreState:!0})},children:Object(f.jsx)("p",{children:"Read More"})})]})]}),Object(f.jsx)(y.a.Footer,{className:"border-0",children:Object(f.jsxs)(C.a,{children:[Object(f.jsxs)(v.a,{className:"text-left",children:["Author Name: ",t.author]}),Object(f.jsxs)(v.a,{className:"text-right",children:[Object(f.jsxs)(S.a,{variant:"danger",onClick:function(){return a=t.id,(c=t).favourite_blog=!1,void e.setBlogs(e.blogs.map((function(e){return e.id===a?c:e})));var a,c},children:[Object(f.jsx)(m.a,{icon:g.a})," Remove"]})," "]})]})})]},t.id),Object(f.jsx)("br",{})]}):Object(f.jsx)("div",{})})),o=[];return e.blogs.map((function(e){return!0===e.favourite_blog?o.push(e):o})),Object(f.jsxs)("section",{className:"mainContent",style:{backgroundColor:e.themeState.background},children:[Object(f.jsx)(k.a,{style:{backgroundImage:"url(".concat(w,")"),backgroundSize:"cover",height:"400px"},fluid:!0,children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)("h1",{children:"React BlogSite"}),Object(f.jsx)("p",{className:"lead",children:"Create Your Own blog, Update it whenever it needs, Delete it if you don't like it and also Read other's Blog.!!"}),Object(f.jsx)("p",{children:"Currently This Blog Site using your Browser Local Storage for saving your blogs. Also it has some initialized blogs which was given as examples."})]})}),Object(f.jsxs)(h.a,{className:"col-lg-8 col-md-10 mx-auto",style:{color:e.themeState.foreground},children:[Object(f.jsx)("h1",{children:"Favourite Blogs: "}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{children:o.length>0?Object(f.jsx)(C.a,{children:s}):Object(f.jsx)(y.a,{className:"text-center",border:"info",style:{backgroundColor:e.themeState.background,color:e.themeState.foreground},children:Object(f.jsxs)(y.a.Body,{children:[Object(f.jsxs)("p",{children:[Object(f.jsx)(m.a,{icon:g.b})," Favourite Blog List is Empty "]}),Object(f.jsx)("p",{children:Object(f.jsxs)("a",{href:"/allBlogs",children:[" ",Object(f.jsx)(m.a,{icon:g.g}),"  Add Blogs to Favourites "]})})]})})})]})]})},L=a(29),T=a(56),z=a(93),_=a(89),A=function(e){var t=e.history,a=e.themeState,r=e.blogs,n=e.setBlogs,s=Object(c.useState)(!1),l=Object(i.a)(s,2),j=l[0],b=l[1],d={id:null,title:"",description:"",author:"",created_at:(new Date).toDateString(),favourite_blog:!1},O=Object(c.useState)(d),p=Object(i.a)(O,2),y=p[0],k=p[1],w=function(e){var t=e.target,a=t.name,c=t.value;k(Object(o.a)(Object(o.a)({},y),{},Object(L.a)({},a,c)))};return Object(f.jsx)("section",{className:"mainContent",style:{backgroundColor:a.background,color:a.foreground},children:Object(f.jsxs)(h.a,{className:"text-center",children:[Object(f.jsx)(z.a,{variant:"success",onClose:function(){return b(!1)},show:j,dismissible:!0,children:Object(f.jsxs)(C.a,{children:[Object(f.jsx)(v.a,{children:Object(f.jsx)("h5",{children:"Blog Created Successfully"})}),Object(f.jsx)(u.a,{placement:"bottom",overlay:Object(f.jsx)(x.a,{id:"tooltip-bottom",children:" See All Blogs "}),children:Object(f.jsxs)("span",{onClick:function(){return t.push("/allBlogs")},className:"text-right",style:{cursor:"pointer"},children:[" ",Object(f.jsx)(m.a,{icon:g.b})," "]})},"bottom")]})}),Object(f.jsx)("br",{}),Object(f.jsx)("h2",{children:"Create Your Blog"}),Object(f.jsxs)(_.a,{onSubmit:function(e){var t;e.preventDefault(),(t=y).id=r.length+1,n([].concat(Object(T.a)(r),[t])),e.target.reset(),b(!0)},children:[Object(f.jsxs)(_.a.Group,{children:[Object(f.jsx)(_.a.Label,{children:" Author Name: "}),Object(f.jsx)(_.a.Control,{name:"author",autoComplete:"off",required:!0,type:"text",placeholder:"write your name",onChange:w})]}),Object(f.jsxs)(_.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(f.jsx)(_.a.Label,{children:" Blog Title "}),Object(f.jsx)(_.a.Control,{name:"title",autoComplete:"off",required:!0,type:"text",placeholder:"Give a proper title for your Blog",onChange:w})]}),Object(f.jsxs)(_.a.Group,{children:[Object(f.jsx)(_.a.Label,{children:"Blog Description "}),Object(f.jsx)(_.a.Control,{as:"textarea",rows:7,name:"description",autoComplete:"off",required:!0,type:"text",placeholder:"Describe Your Blog here",onChange:w})]}),Object(f.jsx)(S.a,{variant:"success",type:"submit",children:"Create New Blog"})]}),Object(f.jsx)("br",{})]})})},F=[{id:1,title:"Man must explore, and this is exploration at its greatest",description:"Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center \u2014 an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.",author:"Anzir",created_at:"Sun May 02 2021",favourite_blog:!1},{id:2,title:"Problems look mighty small",description:"Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center \u2014 an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.",author:"Siam",created_at:"Sun May 02 2021",favourite_blog:!0},{id:3,title:"The Final Frontier",description:"There can be no thought of finishing for \u2018aiming for the stars.\u2019 Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.",author:"Boss",created_at:"Fri May 21 2021",favourite_blog:!0}],D=a(86),M=a(55),q=a.n(M),G=function(e){var t=Object(j.f)(),a=e.blogs.sort((function(e,t){return t.id-e.id})),r=Object(c.useState)(1),n=Object(i.a)(r,2),s=n[0],o=n[1],l=2*s,b=l-2,d=a.slice(b,l),u=e.blogs.length>0?d.map((function(a){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(y.a,{border:"info",style:{backgroundColor:e.themeState.background,color:e.themeState.foreground},children:[Object(f.jsxs)(y.a.Header,{className:"text-right border-0",children:[!1===a.favourite_blog?Object(f.jsxs)(S.a,{variant:"primary",style:{marginLeft:".5rem"},onClick:function(){return t=a.id,(c=a).favourite_blog=!0,void e.setBlogs(e.blogs.map((function(e){return e.id===t?c:e})));var t,c},children:[Object(f.jsx)(m.a,{icon:g.g})," To Favourites "]}):Object(f.jsxs)(S.a,{variant:"warning",style:{marginLeft:".5rem"},onClick:function(){return t=a.id,(c=a).favourite_blog=!1,void e.setBlogs(e.blogs.map((function(e){return e.id===t?c:e})));var t,c},children:[Object(f.jsx)(m.a,{icon:g.a})," from Favourites "]}),Object(f.jsxs)(S.a,{variant:"success",style:{marginLeft:".5rem"},onClick:function(){return t.push("/editBlog/".concat(a.id))},children:[Object(f.jsx)(m.a,{icon:g.f})," Update"]}),Object(f.jsxs)(S.a,{variant:"danger",style:{marginLeft:".5rem"},onClick:function(){return t=a.id,void e.setBlogs(e.blogs.filter((function(e){return e.id!==t})));var t},children:[" ",Object(f.jsx)(m.a,{icon:g.h})," Delete"]})]}),Object(f.jsx)(y.a.Body,{children:Object(f.jsxs)(D.a,{children:[Object(f.jsx)("img",{width:90,height:90,className:"mr-3",src:N,alt:"Generic placeholder"}),Object(f.jsxs)(D.a.Body,{children:[Object(f.jsx)(y.a.Title,{children:a.title}),Object(f.jsx)(y.a.Text,{children:a.description})]})]})}),Object(f.jsx)(y.a.Footer,{className:"border-0",children:Object(f.jsx)(h.a,{children:Object(f.jsxs)(C.a,{children:[Object(f.jsxs)(v.a,{className:"text-left",children:["Created At: ",a.created_at]}),Object(f.jsxs)(v.a,{className:"text-right",children:[" Author Name: ",a.author]})]})})})]},a.id),Object(f.jsx)("br",{})]})})):Object(f.jsx)("div",{children:Object(f.jsx)("h2",{children:"There is nothing to show"})});return Object(f.jsxs)("section",{className:"mainContent",style:{backgroundColor:e.themeState.background,color:e.themeState.foreground},children:[Object(f.jsxs)(h.a,{children:[Object(f.jsx)("div",{children:Object(f.jsx)("h1",{className:"text-center",children:" All Blogs: "})}),Object(f.jsx)("br",{}),u]}),Object(f.jsx)(h.a,{className:"pt-2 mt-3",children:Object(f.jsx)(C.a,{className:"text-center",children:Object(f.jsx)(q.a,{previousLabel:"prev",nextLabel:"next",activePage:s,itemsCountPerPage:2,totalItemsCount:e.blogs.length,pageRangeDisplayed:5,onChange:function(e){o(e)},containerClassName:"pagination",subContainerClassName:"pages pagination"})})})]})},I=function(e,t){var a=Object(c.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(c){return t}})),r=Object(i.a)(a,2),n=r[0],s=r[1];return Object(c.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(n))}),[e,n]),[n,s]},R=function(e){var t=e.history,a=e.themeState,r=e.blogs,n=e.setBlogs,s=Object(c.useState)(!1),l=Object(i.a)(s,2),b=l[0],d=l[1],u=Object(j.g)().id,x=r[u-1],O=Object(c.useState)(x),m=Object(i.a)(O,2),g=m[0],p=m[1],y=function(e){var t=e.target,a=t.name,c=t.value;p(Object(o.a)(Object(o.a)({},g),{},Object(L.a)({},a,c)))};return Object(f.jsx)("section",{className:"mainContent",style:{backgroundColor:a.background,color:a.foreground},children:Object(f.jsxs)(h.a,{className:"text-center",children:[Object(f.jsx)(z.a,{variant:"success",onClose:function(){return d(!1)},show:b,children:Object(f.jsxs)(C.a,{children:[Object(f.jsx)(v.a,{children:Object(f.jsx)("h5",{children:"Blog Updated Successfully"})}),Object(f.jsx)(S.a,{onClick:function(){return t.push("/allBlogs")},className:"text-right",children:"Go Back"})]})}),Object(f.jsx)("br",{}),Object(f.jsx)("h2",{children:"Update Your Blog"}),Object(f.jsxs)(_.a,{onSubmit:function(e){e.preventDefault(),function(e,t){n(r.map((function(a){return a.id===e?t:a})))}(g.id,g),d(!0)},children:[Object(f.jsxs)(_.a.Group,{children:[Object(f.jsx)(_.a.Label,{children:" Author Name: "}),Object(f.jsx)(_.a.Control,{name:"author",autoComplete:"off",required:!0,type:"text",value:g.author,onChange:y})]}),Object(f.jsxs)(_.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(f.jsx)(_.a.Label,{children:" Blog Title "}),Object(f.jsx)(_.a.Control,{name:"title",autoComplete:"off",required:!0,type:"text",value:g.title,onChange:y})]}),Object(f.jsxs)(_.a.Group,{children:[Object(f.jsx)(_.a.Label,{children:"Blog Description "}),Object(f.jsx)(_.a.Control,{as:"textarea",rows:7,name:"description",autoComplete:"off",required:!0,type:"text",value:g.description,onChange:y})]}),Object(f.jsx)(S.a,{variant:"success",type:"submit",children:"Update Blog"}),"   ",Object(f.jsx)(S.a,{variant:"danger",onClick:function(){return t.push("/allBlogs")},children:" Cancel "})]}),Object(f.jsx)("br",{})]})})},P=a(87),U=a.p+"static/media/profilePic.5fa38171.jpg",J=a(18),Y=function(e){return Object(f.jsx)("section",{className:"mainContent",style:{backgroundColor:e.themeState.background,color:e.themeState.foreground},children:Object(f.jsxs)(h.a,{className:"text-center",children:[Object(f.jsx)("h2",{children:" Contact: "}),Object(f.jsx)(C.a,{className:"justify-content-lg-center",children:Object(f.jsx)(v.a,{children:Object(f.jsx)(P.a,{src:U,width:300,height:300,alt:"profilePic",roundedCircle:!0})})}),Object(f.jsx)("br",{}),Object(f.jsx)(C.a,{children:Object(f.jsxs)(v.a,{children:[Object(f.jsx)("h4",{children:" Mohammed Siam Anzir "}),Object(f.jsxs)("h5",{children:[" ",Object(f.jsx)(m.a,{icon:g.d})," Bangladesh "]}),Object(f.jsxs)("h6",{children:[" ",Object(f.jsx)(m.a,{icon:g.c})," siamanzir18@gmail.com "]}),Object(f.jsx)("br",{}),Object(f.jsx)("p",{className:"text-muted",children:"Connect with me through ~ "}),Object(f.jsxs)("p",{children:[Object(f.jsx)("a",{style:{marginLeft:".5rem"},href:"https://www.facebook.com/md.siamanzir/",children:Object(f.jsx)(m.a,{icon:J.b,size:"3x"})}),Object(f.jsx)("a",{style:{marginLeft:".5rem"},href:"https://www.instagram.com/md_siam_anzir/?hl=en",children:Object(f.jsx)(m.a,{icon:J.e,size:"3x"})}),Object(f.jsx)("a",{style:{marginLeft:".5rem"},href:"https://www.linkedin.com/in/mohammed-siam-anzir-087005203/",children:Object(f.jsx)(m.a,{icon:J.f,size:"3x"})}),Object(f.jsx)("a",{style:{marginLeft:".5rem"},href:"https://www.twitter.com/",children:Object(f.jsx)(m.a,{icon:J.g,size:"3x"})})]}),Object(f.jsx)("p",{className:"text-muted",children:"Show my other projects on ~ "}),Object(f.jsxs)("p",{children:[Object(f.jsx)("a",{style:{marginLeft:".5rem"},href:"https://github.com/SiamAnzir",children:Object(f.jsx)(m.a,{icon:J.c,size:"3x"})}),Object(f.jsx)("a",{style:{marginLeft:".5rem"},href:"https://codepen.io/Siam28",children:Object(f.jsx)(m.a,{icon:J.a,size:"3x"})}),Object(f.jsx)("a",{style:{marginLeft:".5rem"},href:"https://gitlab.com/SiamAnzir",children:Object(f.jsx)(m.a,{icon:J.d,size:"3x"})})]})]})})]})})},E=function(e){return Object(f.jsxs)("div",{className:"footer",style:{backgroundColor:e.themeState.background,color:e.themeState.foreground},children:[Object(f.jsx)("hr",{}),Object(f.jsxs)(h.a,{className:"text-center",children:[Object(f.jsx)("br",{}),Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{className:"text-muted",children:"Copyright \xa9 React Website 2021"}),Object(f.jsx)("p",{children:Object(f.jsxs)("a",{href:"https://github.com/SiamAnzir/react-blogsite",children:[Object(f.jsx)(m.a,{icon:J.c})," Source Code "]})})]})]})]})},H={light:{foreground:"#000",background:"#fff"},dark:{foreground:"#fff",background:"#000"}},W=r.a.createContext(H),K=function(){var e=I("blogs",F),t=Object(i.a)(e,2),a=t[0],r=t[1],n=Object(c.useContext)(W),s=Object(c.useState)(n.light),b=Object(i.a)(s,2),h=b[0],d=b[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(l.a,{basename:"/",children:[Object(f.jsx)(p,{theme:n,themeState:h,setThemeState:d}),Object(f.jsxs)(j.c,{children:[Object(f.jsx)(j.a,{render:function(){return Object(f.jsx)(B,{themeState:h,blogs:a,setBlogs:r})},exact:!0,path:"/"}),Object(f.jsx)(j.a,{render:function(){return Object(f.jsx)(G,{themeState:h,blogs:a,setBlogs:r})},exact:!0,path:"/allBlogs"}),Object(f.jsx)(j.a,{render:function(e){return Object(f.jsx)(A,Object(o.a)(Object(o.a)({},e),{},{themeState:h,blogs:a,setBlogs:r}))},exact:!0,path:"/createBlogs"}),Object(f.jsx)(j.a,{render:function(e){return Object(f.jsx)(R,Object(o.a)(Object(o.a)({},e),{},{themeState:h,blogs:a,setBlogs:r}))},exact:!0,path:"/editBlog/:id"}),Object(f.jsx)(j.a,{render:function(){return Object(f.jsx)(Y,{themeState:h})},exact:!0,path:"/contact"}),Object(f.jsx)(j.a,{path:"*",component:function(){return"404 NOT FOUND"}})]})]}),Object(f.jsx)(E,{themeState:h})]})},Q=function(){return Object(f.jsx)(W.Provider,{value:H,children:Object(f.jsx)(K,{})})};a(75);s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(Q,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.f6629ff5.chunk.js.map