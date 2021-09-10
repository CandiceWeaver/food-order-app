(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__3j7c8",control:"Checkout_control__3oB_L",actions:"Checkout_actions__wHdjv",submit:"Checkout_submit__7E3Gd",invalid:"Checkout_invalid__5dy5R"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3Zs9F",total:"Cart_total__emBAe",actions:"Cart_actions__1WwV5","button--alt":"Cart_button--alt__8fVQB",button:"Cart_button__12E9J"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__mXeoh",summary:"CartItem_summary__2yBBS",price:"CartItem_price__1NgLT",amount:"CartItem_amount__1qodv",actions:"CartItem_actions__1mTFG"}},,,function(e,t,n){e.exports={button:"HeaderCardButton_button__xyCZa",icon:"HeaderCardButton_icon__3mNKw",badge:"HeaderCardButton_badge__2k6kj",bump:"HeaderCardButton_bump__1RqCI"}},,,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__gkMbY",modal:"Modal_modal__-Mc_d","slide-down":"Modal_slide-down__38Rct"}},function(e,t,n){e.exports={meal:"MealItem_meal__dypbp",description:"MealItem_description__3DxBf",price:"MealItem_price__28EMb"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2YpxB","meals-appear":"AvailableMeals_meals-appear__2tyai",MealsLoading:"AvailableMeals_MealsLoading__2yh48",MealsError:"AvailableMeals_MealsError__1r_NG"}},,function(e,t,n){e.exports={header:"Header_header__3zkt4","main-image":"Header_main-image__27VyV"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__7zrrr"}},function(e,t,n){e.exports={card:"Card_card__3l7Qi"}},function(e,t,n){e.exports={input:"Input_input__3Fawe"}},function(e,t,n){e.exports={form:"MealItemForm_form__YQdbP"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(8),a=n.n(c),r=(n(28),n(2)),s=n(1),i=n.n(s),o=n(6),l=n.n(o),u=n(13),d=n(4),j=n(14),m=n.n(j),b=n(0),O=function(e){return Object(b.jsx)("div",{className:m.a.backdrop,onClick:e.onClose})},x=function(e){return Object(b.jsx)("div",{className:m.a.modal,children:Object(b.jsx)("div",{className:m.a.content,children:e.children})})},h=document.getElementById("overlays"),f=function(e){return Object(b.jsxs)(s.Fragment,{children:[a.a.createPortal(Object(b.jsx)(O,{onClose:e.onClose}),h),a.a.createPortal(Object(b.jsx)(x,{children:e.children}),h)]})},p=i.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),_=n(5),v=n.n(_),C=n(7),y=n.n(C),N=function(e){var t="$".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:y.a["cart-item"],children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:e.name}),Object(b.jsxs)("div",{className:y.a.summary,children:[Object(b.jsx)("span",{className:y.a.price,children:t}),Object(b.jsxs)("span",{className:y.a.amount,children:["x ",e.amount]})]})]}),Object(b.jsxs)("div",{className:y.a.actions,children:[Object(b.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(b.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},g=n(3),k=n.n(g),A=function(e){return""===e.trim()},M=function(e){var t=Object(s.useState)({name:!0,street:!0,city:!0,postcode:!0}),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useRef)(),o=Object(s.useRef)(),l=Object(s.useRef)(),u=Object(s.useRef)(),d="".concat(k.a.control," ").concat(c.name?"":k.a.invalid),j="".concat(k.a.control," ").concat(c.street?"":k.a.invalid),m="".concat(k.a.control," ").concat(c.city?"":k.a.invalid),O="".concat(k.a.control," ").concat(c.postcode?"":k.a.invalid);return Object(b.jsxs)("form",{className:k.a.form,onSubmit:function(t){t.preventDefault();var n,c=i.current.value,r=o.current.value,s=l.current.value,d=u.current.value,j=!A(c),m=!A(r),b=!A(s),O=7===(n=d).trim().length||8===n.trim().length||9===n.trim().length;a({name:j,street:m,city:b,postcode:O}),j&&m&&b&&O&&e.onConfirm({name:c,street:r,city:s,postcode:d})},children:[Object(b.jsxs)("div",{className:d,children:[Object(b.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(b.jsx)("input",{type:"text",id:"name",ref:i}),!c.name&&Object(b.jsx)("p",{children:"Please enter a valid name!"})]}),Object(b.jsxs)("div",{className:j,children:[Object(b.jsx)("label",{htmlFor:"street",children:"Street"}),Object(b.jsx)("input",{type:"text",id:"street",ref:o}),!c.street&&Object(b.jsx)("p",{children:"Please enter a valid street!"})]}),Object(b.jsxs)("div",{className:m,children:[Object(b.jsx)("label",{htmlFor:"city",children:"City"}),Object(b.jsx)("input",{type:"text",id:"city",ref:l}),!c.city&&Object(b.jsx)("p",{children:"Please enter a valid city!"})]}),Object(b.jsxs)("div",{className:O,children:[Object(b.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(b.jsx)("input",{type:"text",id:"postal",ref:u}),!c.postcode&&Object(b.jsx)("p",{children:"Please enter a valid postcode!"})]}),Object(b.jsxs)("div",{className:k.a.actions,children:[Object(b.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(b.jsx)("button",{className:k.a.submit,children:"Confirm"})]})]})},w=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useState)(!1),o=Object(r.a)(i,2),j=o[0],m=o[1],O=Object(s.useState)(!1),x=Object(r.a)(O,2),h=x[0],_=x[1],C=Object(s.useContext)(p),y="\xa3".concat(C.totalAmount.toFixed(2)),g=C.items.length>0,k=function(e){C.removeItem(e)},A=function(e){C.addItem(Object(d.a)(Object(d.a)({},e),{},{amount:1}))},w=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://react-http-lesson-8ffb5-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:C.items})});case 3:m(!1),_(!0),C.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=Object(b.jsx)("ul",{className:v.a["cart-items"],children:C.items.map((function(e){return Object(b.jsx)(N,{name:e.name,amount:e.amount,price:e.price,onRemove:k.bind(null,e.id),onAdd:A.bind(null,e)},e.id)}))}),S=Object(b.jsxs)("div",{className:v.a.actions,children:[Object(b.jsx)("button",{className:v.a["button--alt"],onClick:e.onClose,children:"Close"}),g&&Object(b.jsx)("button",{className:v.a.button,onClick:function(){a(!0)},children:"Order"})]}),F=Object(b.jsxs)(s.Fragment,{children:[" ",I,Object(b.jsxs)("div",{className:v.a.total,children:[Object(b.jsx)("span",{children:"Total Amount"}),Object(b.jsx)("span",{children:y})]}),c&&Object(b.jsx)(M,{onConfirm:w,onCancel:e.onClose}),!c&&S]}),E=Object(b.jsx)("p",{children:"Sending order data..."}),R=Object(b.jsxs)(s.Fragment,{children:[Object(b.jsx)("p",{children:"Order sent successfully!"}),Object(b.jsx)("div",{className:v.a.actions,children:Object(b.jsx)("button",{className:v.a.button,onClick:e.onClose,children:"Close"})})]});return Object(b.jsxs)(f,{onClose:e.onClose,children:[!j&&!h&&F,j&&E,!j&&h&&R]})},I=function(){return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(b.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},S=n(10),F=n.n(S),E=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useContext)(p).items,o=i.reduce((function(e,t){return e+t.amount}),0),l="".concat(F.a.button," ").concat(c?F.a.bump:"");return Object(s.useEffect)((function(){if(0!==i.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[i]),Object(b.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(b.jsx)("span",{className:F.a.icon,children:Object(b.jsx)(I,{})}),Object(b.jsx)("span",{children:"Your Cart"}),Object(b.jsx)("span",{className:F.a.badge,children:o})]})},R=n.p+"static/media/meals.2971f633.jpg",B=n(18),H=n.n(B),P=function(e){return Object(b.jsxs)(s.Fragment,{children:[Object(b.jsxs)("header",{className:H.a.header,children:[Object(b.jsx)("h1",{children:"ReactMeals"}),Object(b.jsx)(E,{onClick:e.onShowCart})]}),Object(b.jsx)("div",{className:H.a["main-image"],children:Object(b.jsx)("img",{src:R,alt:"A table full of delicious food!"})})]})},D=n(20),T=n.n(D),L=function(){return Object(b.jsxs)("section",{className:T.a.summary,children:[Object(b.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(b.jsx)("p",{children:"Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(b.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},V=n(11),Y=n(21),z=n.n(Y),J=function(e){return Object(b.jsx)("div",{className:z.a.card,children:e.children})},q=n(22),G=n.n(q),Q=i.a.forwardRef((function(e,t){return Object(b.jsxs)("div",{className:G.a.input,children:[Object(b.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(b.jsx)("input",Object(d.a)({ref:t},e.input))]})})),Z=n(23),K=n.n(Z),W=function(e){var t=Object(s.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(s.useRef)();return Object(b.jsxs)("form",{className:K.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,c=+n;0===n.trim().length||c<1||c>5?a(!1):e.onAddToCart(c)},children:[Object(b.jsx)(Q,{ref:i,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(b.jsx)("button",{children:"+ Add"}),!c&&Object(b.jsx)("p",{children:"Please enter a validamount (1-5)."})]})},X=n(15),$=n.n(X),U=function(e){var t=Object(s.useContext)(p),n="\xa3".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:$.a.meal,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)("div",{className:$.a.description,children:e.description}),Object(b.jsx)("div",{className:$.a.price,children:n})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)(W,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})," "]})]})},ee=n(16),te=n.n(ee),ne=function(){var e=Object(V.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(V.useState)(!0),s=Object(r.a)(a,2),i=s[0],o=s[1],d=Object(V.useState)(),j=Object(r.a)(d,2),m=j[0],O=j[1];if(Object(V.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-lesson-8ffb5-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),o(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch((function(e){o(!1),O(e.message)}))}),[]),i)return Object(b.jsx)("section",{className:te.a.MealsLoading,children:Object(b.jsx)("p",{children:"Loading..."})});if(m)return Object(b.jsx)("section",{className:te.a.MealsError,children:Object(b.jsx)("p",{children:m})});var x=n.map((function(e){return Object(b.jsx)(U,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(b.jsx)("section",{className:te.a.meals,children:Object(b.jsx)(J,{children:Object(b.jsx)("ul",{children:x})})})},ce=function(){return Object(b.jsxs)(s.Fragment,{children:[Object(b.jsx)(L,{}),Object(b.jsx)(ne,{})]})},ae=n(19),re={items:[],totalAmount:0},se=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[a];if(r){var s=Object(d.a)(Object(d.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ae.a)(e.items))[a]=s}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var i,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var j=Object(d.a)(Object(d.a)({},l),{},{amount:l.amount-1});(i=Object(ae.a)(e.items))[o]=j}return{items:i,totalAmount:u}}return t.type,re},ie=function(e){var t=Object(s.useReducer)(se,re),n=Object(r.a)(t,2),c=n[0],a=n[1],i={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})},clearCart:function(){a({type:"CLEAR"})}};return Object(b.jsx)(p.Provider,{value:i,children:e.children})};var oe=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)(ie,{children:[n&&Object(b.jsx)(w,{onClose:function(){c(!1)}}),Object(b.jsx)(P,{onShowCart:function(){c(!0)}}),Object(b.jsx)("main",{children:Object(b.jsx)(ce,{})})]})};a.a.render(Object(b.jsx)(oe,{}),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.7fed8273.chunk.js.map