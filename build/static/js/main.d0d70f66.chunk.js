(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports={form:"QuoteForm_form__3Ndw9",loading:"QuoteForm_loading__iDpS0",control:"QuoteForm_control__2lCiE",actions:"QuoteForm_actions__354La"}},function(e,t,n){e.exports={header:"MainNavigation_header__pcWBd",logo:"MainNavigation_logo__3mTft",nav:"MainNavigation_nav__2KJfX",active:"MainNavigation_active__oN3Ka"}},,function(e,t,n){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},,,,,function(e,t,n){e.exports={list:"QuoteList_list__3pzcl",sorting:"QuoteList_sorting__rL6H1"}},,function(e,t,n){e.exports={item:"QuoteItem_item__2dOvb"}},,function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__2Kyqv"}},function(e,t,n){e.exports={noquotes:"NoQuotesFound_noquotes__3DIYb"}},function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={comments:"Comments_comments__iZX-v"}},function(e,t,n){e.exports={item:"CommentItem_item__24mbD"}},function(e,t,n){e.exports={comments:"CommentsList_comments__valp0"}},function(e,t,n){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},function(e,t,n){e.exports={main:"Layout_main__auk_r"}},,,,,function(e,t,n){},,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(22),s=n.n(c),r=n(4),o=(n(37),n(2)),a=n(1),i=n(23),u=n.n(i),j=n(0),d=function(e){return Object(j.jsxs)("li",{className:u.a.item,children:[Object(j.jsxs)("figure",{children:[Object(j.jsx)("blockquote",{children:Object(j.jsx)("p",{children:e.text})}),Object(j.jsx)("figcaption",{children:e.author})]}),Object(j.jsx)(r.b,{to:"/questions/".concat(e.id),className:"btn",children:"Details"})]})},l=n(21),m=n.n(l),b=function(e){var t,n,c=Object(o.h)(),s=Object(o.i)(),r="asc"===new URLSearchParams(s.search).get("sort"),i=(t=e.quotes,n=r,t.sort((function(e,t){return n?e.text>t.text?1:-1:e.text<t.text?1:-1})));return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)("div",{className:m.a.sorting,children:Object(j.jsxs)("button",{onClick:function(){c.push("/questions?sort="+(r?"desc":"asc"))},children:["Sort ",r?"Descending":"Ascending"]})}),Object(j.jsx)("ul",{className:m.a.list,children:i.map((function(e){return Object(j.jsx)(d,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},x=n(12),h=n(5),f=n.n(h),O=n(9),p=n(11);function v(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}var _=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(a.useReducer)(v,{status:t?"pending":null,data:null,error:null}),c=Object(p.a)(n,2),s=c[0],r=c[1],o=Object(a.useCallback)(function(){var t=Object(O.a)(f.a.mark((function t(n){var c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:c=t.sent,r({type:"SUCCESS",responseData:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(x.a)({sendRequest:o},s)},g="https://quotez-94a47-default-rtdb.europe-west1.firebasedatabase.app";function N(){return q.apply(this,arguments)}function q(){return(q=Object(O.a)(f.a.mark((function e(){var t,n,c,s,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(s in c=[],n)r=Object(x.a)({id:s},n[s]),c.push(r);return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return C.apply(this,arguments)}function C(){return(C=Object(O.a)(f.a.mark((function e(t){var n,c,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not fetch quote.");case 8:return s=Object(x.a)({id:t},c),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return k.apply(this,arguments)}function k(){return(k=Object(O.a)(f.a.mark((function e(t){var n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return E.apply(this,arguments)}function E(){return(E=Object(O.a)(f.a.mark((function e(t){var n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:c.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return I.apply(this,arguments)}function I(){return(I=Object(O.a)(f.a.mark((function e(t){var n,c,s,r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not get comments.");case 8:for(r in s=[],c)o=Object(x.a)({id:r},c[r]),s.push(o);return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=n(25),Q=n.n(R),A=function(){return Object(j.jsx)("div",{className:Q.a.spinner})},D=n(26),L=n.n(D),T=function(){return Object(j.jsxs)("div",{className:L.a.noquotes,children:[Object(j.jsx)("p",{children:"No quotes found!"}),Object(j.jsx)(r.b,{to:"/new-question",className:"btn",children:"Add a Question"})]})},M=function(){var e=_(N,!0),t=e.sendRequest,n=e.status,c=e.data,s=e.error;return Object(a.useEffect)((function(){t()}),[t]),"pending"===n?Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(A,{})}):s?Object(j.jsx)("p",{className:"centered focused",children:s}):"completed"!==n||c&&0!==c.length?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(b,{quotes:c})}):Object(j.jsx)(T,{})},P=n(27),J=n.n(P),U=function(e){return Object(j.jsx)("div",{className:J.a.card,children:e.children})},B=n(13),K=n.n(B),z=function(e){var t=Object(a.useState)(!1),n=Object(p.a)(t,2),c=n[0],s=n[1],r=Object(a.useRef)(),i=Object(a.useRef)();return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)(o.a,{when:c,message:function(e){return"Are you sure you want to leave? All your data will be lost"}}),Object(j.jsx)(U,{children:Object(j.jsxs)("form",{onFocus:function(){console.log(c),s(!0)},className:K.a.form,onSubmit:function(t){t.preventDefault();var n=r.current.value,c=i.current.value;""!==c.trim()&&""!==n.trim&&e.onAddQuote({author:n,text:c})},children:[e.isLoading&&Object(j.jsx)("div",{className:K.a.loading,children:Object(j.jsx)(A,{})}),Object(j.jsxs)("div",{className:K.a.control,children:[Object(j.jsx)("label",{htmlFor:"author",children:"Author"}),Object(j.jsx)("input",{type:"text",id:"author",ref:r})]}),Object(j.jsxs)("div",{className:K.a.control,children:[Object(j.jsx)("label",{htmlFor:"text",children:"Text"}),Object(j.jsx)("textarea",{id:"text",rows:"5",ref:i})]}),Object(j.jsx)("div",{className:K.a.actions,children:Object(j.jsx)("button",{onClick:function(){s(!1)},className:"btn",children:"Add Question"})})]})})]})},H=function(){var e=Object(o.h)(),t=_(y),n=t.sendRequest,c=t.status;Object(a.useEffect)((function(){"completed"===c&&e.push("/questions")}),[c,e]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(z,{isLoading:"pending"===c,onAddQuote:function(e){n(e)}})})},W=n(28),X=n.n(W),Y=n(16),Z=n.n(Y),V=function(e){var t=Object(a.useRef)(),n=_(S),c=n.sendRequest,s=n.status,r=n.error,o=e.onAddedComment;Object(a.useEffect)((function(){"completed"!==s||r||o()}),[s,r,o]);var i=function(n){n.preventDefault();var s=t.current.value;""!==s.trim()&&c({commentData:{text:s},quoteId:e.quoteId})};return Object(j.jsxs)("form",{className:Z.a.form,onSubmit:i,children:["pending"===s&&Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(A,{})}),Object(j.jsxs)("div",{className:Z.a.control,onSubmit:i,children:[Object(j.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(j.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(j.jsx)("div",{className:Z.a.actions,children:Object(j.jsx)("button",{className:"btn",children:"Add Comment"})})]})},G=n(29),$=n.n(G),ee=function(e){return Object(j.jsx)("li",{className:$.a.item,children:Object(j.jsx)("p",{children:e.text})})},te=n(30),ne=n.n(te),ce=function(e){return Object(j.jsx)("ul",{className:ne.a.comments,children:e.comments.map((function(e){return Object(j.jsx)(ee,{text:e.text},e.id)}))})},se=function(e){var t=Object(a.useState)(!1),n=Object(p.a)(t,2),c=n[0],s=n[1],r=e.quoteId,o=_(F),i=o.sendRequest,u=o.status,d=o.data;o.error;Object(a.useEffect)((function(){i(r)}),[r,i]);var l,m=Object(a.useCallback)((function(){i(r)}),[r,i]);return"pending"===u&&(l=Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(A,{})})),"completed"===u&&d&&d.length>0&&(console.log("object"),l=Object(j.jsx)(ce,{comments:d})),"completed"!==u||d&&0!==d.length||(l=Object(j.jsx)("p",{className:"centered",children:"No comments yet. Be the first one to add!"})),Object(j.jsxs)("section",{className:X.a.comments,children:[Object(j.jsx)("h2",{children:"User Comments"}),!c&&Object(j.jsx)("button",{className:"btn",onClick:function(){s(!0)},children:"Add a Comment"}),c&&Object(j.jsx)(V,{quoteId:e.quoteId,onAddedComment:m}),l]})},re=n(31),oe=n.n(re),ae=function(e){return Object(j.jsxs)("figure",{className:oe.a.quote,children:[Object(j.jsx)("p",{children:e.text}),Object(j.jsx)("figcaption",{children:e.author})]})},ie=function(){var e=Object(o.j)(),t=e.quoteId,n=_(w,!0),c=n.sendRequest,s=n.status,i=n.data,u=n.error;return Object(a.useEffect)((function(){console.log(t),c(t)}),[c,t]),"pending"===s?Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(A,{})}):u?Object(j.jsx)("p",{className:"centered focused",children:u}):i.text?Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)(ae,{text:i.text,author:i.author}),Object(j.jsx)(o.c,{path:"/questions/".concat(e.quoteId,"/"),exact:!0,children:Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(r.b,{className:"btn--flat",to:"/questions/".concat(e.quoteId,"/comments"),children:"Show comments"})})}),Object(j.jsx)(o.c,{path:"/questions/".concat(e.quoteId,"/comments"),children:Object(j.jsx)(se,{quoteId:t})})]}):Object(j.jsx)("p",{children:"No question foudn"})},ue=n(14),je=n.n(ue),de=function(){return Object(j.jsxs)("header",{className:je.a.header,children:[Object(j.jsx)("div",{className:je.a.logo,children:"QuestionZ"}),Object(j.jsx)("nav",{className:je.a.nav,children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(r.c,{to:"/questions",activeClassName:je.a.active,children:"All Questions"})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.c,{to:"/new-question",activeClassName:je.a.active,children:"Add Question"})})]})})]})},le=n(32),me=n.n(le),be=function(e){return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)(de,{}),Object(j.jsx)("main",{className:me.a.main,children:e.children})]})},xe=function(){return Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)("p",{children:"Page not found!"})})};var he=function(){return Object(j.jsx)(be,{children:Object(j.jsxs)(o.e,{children:[Object(j.jsx)(o.c,{path:"/",exact:!0,children:Object(j.jsx)(o.b,{to:"/questions"})}),Object(j.jsx)(o.c,{path:"/questions",exact:!0,children:Object(j.jsx)(M,{})}),Object(j.jsx)(o.c,{path:"/questions/:quoteId",children:Object(j.jsx)(ie,{})}),Object(j.jsx)(o.c,{path:"/new-question",children:Object(j.jsx)(H,{})}),Object(j.jsx)(o.c,{path:"*",children:Object(j.jsx)(xe,{})})]})})};s.a.render(Object(j.jsx)(r.a,{children:Object(j.jsx)(he,{})}),document.getElementById("root"))}],[[48,1,2]]]);
//# sourceMappingURL=main.d0d70f66.chunk.js.map