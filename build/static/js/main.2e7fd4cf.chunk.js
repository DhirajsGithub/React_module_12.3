(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,function(e,t,n){"use strict";var c=n(20),r=n.n(c),a=n(1);t.a=function(){return Object(a.jsx)("div",{className:r.a.spinner})}},,function(e,t,n){e.exports={header:"MainNavigation_header__pcWBd",logo:"MainNavigation_logo__3mTft",nav:"MainNavigation_nav__2KJfX",active:"MainNavigation_active__oN3Ka"}},function(e,t,n){"use strict";var c=n(9),r=n(4),a=n(6),s=n(5),o=n(0);function u(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(o.useReducer)(u,{status:t?"pending":null,data:null,error:null}),i=Object(s.a)(n,2),j=i[0],l=i[1],m=Object(o.useCallback)(function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){var c;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:c=t.sent,l({type:"SUCCESS",responseData:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),l({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(c.a)({sendRequest:m},j)}},function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return p}));var c=n(4),r=n(9),a=n(6),s="https://react-router-803aa-default-rtdb.firebaseio.com/";function o(){return u.apply(this,arguments)}function u(){return(u=Object(a.a)(Object(c.a)().mark((function e(){var t,n,a,o,u;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(o in a=[],n)u=Object(r.a)({id:o},n[o]),a.push(u);return e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(e){return j.apply(this,arguments)}function j(){return(j=Object(a.a)(Object(c.a)().mark((function e(t){var n,a,o;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(a=e.sent,n.ok){e.next=8;break}throw new Error(a.message||"Could not fetch quote.");case 8:return o=Object(r.a)({id:t},a),e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return m.apply(this,arguments)}function m(){return(m=Object(a.a)(Object(c.a)().mark((function e(t){var n,r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return b.apply(this,arguments)}function b(){return(b=Object(a.a)(Object(c.a)().mark((function e(t){var n,r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:r.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=Object(a.a)(Object(c.a)().mark((function e(t){var n,a,o,u,i;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(a=e.sent,n.ok){e.next=8;break}throw new Error(a.message||"Could not get comments.");case 8:for(u in o=[],a)i=Object(r.a)({id:u},a[u]),o.push(i);return e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},,function(e,t,n){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},,function(e,t,n){"use strict";var c=n(5),r=n(0),a=n(2),s=n(19),o=n.n(s),u=n(14),i=n.n(u),j=n(11),l=n(12),m=n(8),d=n(1),b=function(e){var t=Object(r.useRef)(),n=Object(j.a)(l.a),c=n.sendRequest,a=n.status,s=n.error,o=e.onAddedComment;Object(r.useEffect)((function(){"pending"!==a||s||o()}),[a,o,s]);var u=function(n){n.preventDefault();var r=t.current.value;c({commentData:{text:r},quoteId:e.quoteId})};return Object(d.jsxs)("form",{className:i.a.form,onSubmit:u,children:["pending"===a&&Object(d.jsxs)("div",{className:"centered",children:[" ",Object(d.jsx)(m.a,{})," "]}),Object(d.jsxs)("div",{className:i.a.control,onSubmit:u,children:[Object(d.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(d.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(d.jsx)("div",{className:i.a.actions,children:Object(d.jsx)("button",{className:"btn",children:"Add Comment"})})]})},p=n(21),f=n.n(p),h=function(e){return Object(d.jsx)("li",{className:f.a.item,children:Object(d.jsx)("p",{children:e.text})})},O=n(22),x=n.n(O),v=function(e){return Object(d.jsx)("ul",{className:x.a.comments,children:e.comments.map((function(e){return Object(d.jsx)(h,{text:e.text},e.id)}))})};t.a=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),n=t[0],s=t[1],u=Object(a.i)(),i=u.quoteId,p=Object(j.a)(l.c),f=p.sendRequest,h=p.status,O=p.data;Object(r.useEffect)((function(){f(i)}),[i,f]);var x,_=Object(r.useCallback)((function(){f(i)}),[f,i]);return"pending"===h&&(x=Object(d.jsxs)("div",{className:"centered",children:[" ",Object(d.jsx)(m.a,{})," "]})),"completed"===h&&O&&O.length>0&&(x=Object(d.jsx)(v,{comments:O})),"completed"!==h||O||0!==O.length||(x=Object(d.jsx)("p",{className:"centered",children:"No comments added yet"})),Object(d.jsxs)("section",{className:o.a.comments,children:[Object(d.jsx)("h2",{children:"User Comments"}),!n&&Object(d.jsx)("button",{className:"btn",onClick:function(){s(!0)},children:"Add a Comment"}),n&&Object(d.jsx)(b,{quoteId:u.quoteId,onAddedComment:_}),Object(d.jsx)("p",{children:x})]})}},,function(e,t,n){e.exports={main:"Layout_main__auk_r"}},function(e,t,n){e.exports={comments:"Comments_comments__iZX-v"}},function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__2Kyqv"}},function(e,t,n){e.exports={item:"CommentItem_item__24mbD"}},function(e,t,n){e.exports={comments:"CommentsList_comments__valp0"}},,,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(17),r=n.n(c),a=n(7),s=(n(31),n(2)),o=n(0),u=n.n(o),i=n(10),j=n.n(i),l=n(1),m=function(){return Object(l.jsxs)("header",{className:j.a.header,children:[Object(l.jsx)("div",{className:j.a.logo,children:"Great Quotes"}),Object(l.jsx)("nav",{className:j.a.nav,children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(a.c,{to:"/quotes",className:function(e){return e.isActive?j.a.active:""},children:"All Quotes"})}),Object(l.jsx)("li",{children:Object(l.jsx)(a.c,{to:"/new-quote",className:function(e){return e.isActive?j.a.active:""},children:"Add a Quote"})})]})})]})},d=n(18),b=n.n(d),p=function(e){return Object(l.jsxs)(o.Fragment,{children:[Object(l.jsx)(m,{}),Object(l.jsx)("main",{className:b.a.main,children:e.children})]})},f=n(16),h=n(8),O=u.a.lazy((function(){return n.e(4).then(n.bind(null,41))})),x=u.a.lazy((function(){return n.e(5).then(n.bind(null,42))})),v=u.a.lazy((function(){return n.e(3).then(n.bind(null,40))}));var _=function(){return Object(l.jsx)(p,{children:Object(l.jsx)(o.Suspense,{fallback:Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(h.a,{})}),children:Object(l.jsxs)(s.e,{children:[Object(l.jsx)(s.c,{path:"/",render:function(){return Object(l.jsx)(s.a,{to:"/quotes"})}}),Object(l.jsx)(s.c,{path:"/quotes",element:Object(l.jsx)(v,{})}),Object(l.jsx)(s.c,{path:"/quotes/:quoteId/*",element:Object(l.jsx)(x,{}),children:Object(l.jsx)(s.c,{path:"comments",element:Object(l.jsx)(f.a,{})})}),Object(l.jsx)(s.c,{path:"/new-quote",element:Object(l.jsx)(O,{})})]})})})};r.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(a.a,{children:Object(l.jsx)(_,{})}))}],[[33,1,2]]]);
//# sourceMappingURL=main.2e7fd4cf.chunk.js.map