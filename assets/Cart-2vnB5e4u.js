import{c as N,a as C,r as c,f as E,g as T,j as e,F as y,e as S,k as O,l as R,m as L,n as _,u as z,s as $,L as D,v as B,w as G,x as Q}from"./index-DdsIW3CV.js";function U({item:o,incrementItemCount:x,decrementItemCount:m}){const n=N(),{addToast:t}=C(),[a,g]=c.useState(!1),[u,i]=c.useState(!1),f=S(),{_id:r,count:h,image:v,name:w,originalPrice:p,discountPercentage:s}=o,d=p-p*(s/100),l=f(r);c.useEffect(()=>{h<=0&&b()},[h,o]);const I=async()=>{if(!a){if(g(!0),l)try{await O(r),n(R(r)),t("Removed from wishlist.",!0)}catch{t("Failed to remove.",!1)}else try{await L(r),n(_(r)),t("Added to wishlist.",!0)}catch{t("Failed to add.",!1)}g(!1)}},b=async()=>{if(!u){i(!0);try{await E(r),n(T(r)),t("Removed from cart.",!0)}catch{t("Failed to remove.",!1)}i(!1)}},P=[{text:"Remove From Cart",onClick:b,classes:`bg-slate-900 text-white hover:bg-white hover:text-slate-900 ${u?"opacity-50":"opacity-100"}`,disabled:u},{text:l?"Remove from Wishlist":"Add to Wishlist",onClick:I,classes:`bg-white text-slate-900 hover:bg-slate-900 hover:text-white min-w-none md:min-w-[253px] ${a?"opacity-50":"opacity-100"}`,disabled:a}];return e.jsxs("div",{className:"shadow-product-card-shadow overflow-hidden max-w-[90vw] m-auto rounded-2xl flex flex-row items-center justify-center gap-4 py-4 px-3 flex-grow",children:[e.jsx("img",{src:v,alt:w,className:"w-24 md:w-32 max-h-full"}),e.jsxs("div",{className:"text-sm md:text-xl",children:[e.jsx("p",{className:"font-semibold",children:w}),e.jsxs("div",{className:"flex flex-col gap-1 my-2 md:my-5",children:[e.jsxs("p",{className:"font-semibold",children:[e.jsxs("span",{children:["₹",d]}),e.jsxs("span",{className:"font-normal text-slate-500 line-through ml-3",children:["₹",p]})]}),e.jsxs("p",{className:"font-semibold text-green-600",children:[s,"% OFF"]})]}),e.jsxs("div",{className:"flex flex-row gap-2",children:[e.jsx("span",{children:"Quantity:"}),e.jsxs("div",{className:"flex flex-row items-center justify-center gap-0",children:[e.jsx("button",{className:"hover:opacity-75",onClick:()=>m(r),children:e.jsx(y,{icon:"fa-solid fa-minus",className:"text-white bg-black rounded-full h-4 w-4 p-[1.5px]"})}),e.jsx("span",{className:"mx-2",children:h}),e.jsx("button",{className:"hover:opacity-75",onClick:()=>x(r),children:e.jsx(y,{icon:"fa-solid fa-plus",className:"text-white bg-black rounded-full h-4 w-4 p-[1.5px]"})})]})]}),e.jsx("div",{className:"flex flex-row flex-wrap w-full items-center justify-center gap-4 mt-5 pb-2",children:P.map(({text:j,onClick:F,classes:k,disabled:W},A)=>e.jsx("button",{className:`flex-grow py-3 px-2 border-2 border-slate-900 uppercase duration-300 ${k}`,onClick:F,disabled:W,children:j},A))})]})]})}function Y({cartItems:o,setOrderPlaced:x}){const[m,n]=c.useState(0);return c.useEffect(()=>{let t=0;o.forEach(a=>{t+=(a.originalPrice-a.originalPrice*(a.discountPercentage/100))*a.count}),n(t)},[o]),e.jsxs("div",{className:"shadow-product-card-shadow bg-white overflow-hidden max-w-[90vw] w-full m-auto my-10 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-lg md:text-2xl font-semibold border-b border-slate-900 mb-3",children:"Price Details"}),o.map(t=>e.jsxs("div",{className:"flex flex-row items-center justify-between gap-1 md:text-xl my-1",children:[e.jsxs("span",{children:[t.name," (",t.count,")"]}),e.jsxs("span",{children:["₹ ",(t.originalPrice-t.originalPrice*(t.discountPercentage/100))*t.count]})]},t.name)),e.jsxs("p",{className:"flex flex-row items-center justify-between gap-1 md:text-xl mt-4",children:[e.jsx("span",{className:"font-semibold",children:"Total Amount"}),e.jsxs("span",{children:["₹ ",m]})]}),e.jsx("button",{className:"font-semibold text-lg md:text-xl w-full mt-6 bg-yellow-600 text-white p-3 rounded-lg",onClick:()=>x(!0),children:"Place Order"})]})}function q(){const{user:o,isLoggedIn:x}=z(),m=N(),{addToast:n}=C(),[t,a]=c.useState(!0),[g,u]=c.useState(!1),[i,f]=c.useState([]),[r,h]=c.useState(!1),v=async()=>{a(!0);try{let s=await B();s=s.map(d=>({...d,count:1})),f(s)}catch{u(!0)}finally{a(!1)}};c.useEffect(()=>{x&&v()},[o]),c.useEffect(()=>{(async()=>{if(a(!0),r)try{await G(),m(Q()),n("Order placed.",!0)}catch{n("Failed to place order.",!1)}a(!1)})()},[r]);const w=s=>{const d=i.map(l=>l._id===s?{...l,count:l.count+1}:l);f(d)},p=s=>{const d=i.map(l=>l._id===s?{...l,count:l.count-1}:l);f(d)};return e.jsxs("div",{children:[t?e.jsx($,{}):g?e.jsx("p",{className:"text-xl md:text-3xl font-semibold tracking-wider text-center my-10",children:"Something went wrong. Please try again later."}):i.length<=0?e.jsx("p",{className:"text-xl md:text-3xl font-semibold tracking-wider text-center my-10",children:"You haven't added anything in the cart yet."}):e.jsxs("div",{className:"xl:flex-row flex-col flex xl:items-start items-center justify-center gap-8 px-5",children:[e.jsx("div",{className:"flex flex-col gap-4 my-8",children:i.map(s=>e.jsx(U,{item:s,incrementItemCount:w,decrementItemCount:p},s._id))}),e.jsx("div",{className:"sticky w-full -bottom-14 xl:top-20 z-10 flex-grow lg:max-w-[30vw]",children:e.jsx(Y,{cartItems:i,setOrderPlaced:h})})]}),r&&!t&&e.jsxs("div",{className:"bg-black/50 fixed h-screen w-screen top-0 left-0 z-10 flex items-center justify-center",children:[e.jsx(D,{to:"/E-Commerce/products",className:"absolute top-20 right-4 text-5xl text-white z-[10]",children:"x"}),e.jsxs("div",{className:"bg-white p-8 rounded-xl text-2xl flex items-center gap-4",children:["Thanks for your order ",e.jsx(y,{icon:"fa-solid fa-heart",className:"h-8 text-red-600"})]})]})]})}function J(){return e.jsx(q,{})}export{J as default};