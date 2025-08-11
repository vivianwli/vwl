import{W as m}from"./index-cf78bce8.js";function $(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function l(t){const o=t-1;return o*o*o+1}function g(t,{delay:o=0,duration:c=400,easing:r=$,amount:e=5,opacity:a=0}={}){const n=getComputedStyle(t),s=+n.opacity,i=n.filter==="none"?"":n.filter,p=s*(1-a);return{delay:o,duration:c,easing:r,css:(u,f)=>`opacity: ${s-p*f}; filter: ${i} blur(${f*e}px);`}}function b(t,{delay:o=0,duration:c=400,easing:r=m}={}){const e=+getComputedStyle(t).opacity;return{delay:o,duration:c,easing:r,css:a=>`opacity: ${a*e}`}}function _(t,{delay:o=0,duration:c=400,easing:r=l,x:e=0,y:a=0,opacity:n=0}={}){const s=getComputedStyle(t),i=+s.opacity,p=s.transform==="none"?"":s.transform,u=i*(1-n);return{delay:o,duration:c,easing:r,css:(f,y)=>`
			transform: ${p} translate(${(1-f)*e}px, ${(1-f)*a}px);
			opacity: ${i-u*y}`}}function x(t,{delay:o=0,duration:c=400,easing:r=l,start:e=0,opacity:a=0}={}){const n=getComputedStyle(t),s=+n.opacity,i=n.transform==="none"?"":n.transform,p=1-e,u=s*(1-a);return{delay:o,duration:c,easing:r,css:(f,y)=>`
			transform: ${i} scale(${1-p*y});
			opacity: ${s-u*y}
		`}}export{b as a,g as b,l as c,_ as f,x as s};
