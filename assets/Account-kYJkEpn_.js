import{j as e,N as a,P as i,r as l,d as o,O as n}from"./index-G0_JWy9p.js";function s({linkTo:t}){return e.jsx(a,{to:t,className:({isActive:r})=>`
        flex-grow py-3 px-2 md:text-xl text-center capitalize
        ${r?"bg-slate-900 text-white":"bg-white text-slate-900"}
      `,children:t})}s.propTypes={linkTo:i.string.isRequired};function c(){return e.jsxs("div",{className:"w-[90vw] max-w-[600px] m-auto my-6 shadow-product-card-shadow rounded-b-2xl overflow-hidden",children:[e.jsxs("div",{className:"w-full flex flex-row items-center justify-center",children:[e.jsx(s,{linkTo:"profile"}),e.jsx(s,{linkTo:"address"})]}),e.jsx(l.Suspense,{fallback:e.jsx(o,{}),children:e.jsx(n,{})})]})}export{c as default};
