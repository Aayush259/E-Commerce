import{j as e,N as r,P as i,r as l,a as o,O as n}from"./index-BnsFymND.js";function s({linkTo:t}){return e.jsx(r,{to:t,className:({isActive:a})=>`
        flex-grow py-3 px-2 md:text-xl text-center capitalize
        ${a?"bg-slate-900 text-white":"bg-white text-slate-900"}
      `,children:t})}s.propTypes={linkTo:i.string.isRequired};function c(){return e.jsxs("div",{className:"w-[90vw] max-w-[600px] m-auto my-6 shadow-product-card-shadow rounded-b-2xl overflow-hidden",children:[e.jsxs("div",{className:"w-full flex flex-row items-center justify-center",children:[e.jsx(s,{linkTo:"profile"}),e.jsx(s,{linkTo:"address"})]}),e.jsx(l.Suspense,{fallback:e.jsx(o,{}),children:e.jsx(n,{})})]})}export{c as default};
