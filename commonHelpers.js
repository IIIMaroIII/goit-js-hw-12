var g=(t,e,l)=>{if(!e.has(t))throw TypeError("Cannot "+l)};var p=(t,e,l)=>(g(t,e,"read from private field"),l?l.call(t):e.get(t)),y=(t,e,l)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,l)};/* empty css                      */import{i as h,A as b,S as w}from"./assets/vendor-00ccef64.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function l(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=l(r);fetch(r.href,s)}})();const c="/vanilla-app-template/assets/error-bd282b8e.svg",L="/vanilla-app-template/assets/caution-fce7ed33.svg";function u(t="Hello",e="Type in your message, please",l="white",a=L){return h.show({titleSize:"16px",title:`${t}`,message:`${e}`,messageSize:"16px",closeOnEscape:!0,position:"topRight",backgroundColor:`${l}`,iconUrl:`${a}`})}var n;class S{constructor(){y(this,n,"42204653-dde2ea6d5277704e408fb2018");this.BASE_URL="https://pixabay.com/api/"}async getImages(e){return(await b.create({baseURL:this.BASE_URL,params:{key:p(this,n),q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}}).get("")).data}isResponseEmpty(e){if(e.length!==0)return e;u("Error","Sorry, there are no images matching your search query. Please try again!","red",c)}}n=new WeakMap;function $(t){return t.map(({webformatURL:l,largeImageURL:a,tags:r,likes:s,views:i,comments:m,downloads:d})=>`<li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img
            class="gallery-image"
            src="${l}"
            data-source="${a}"
            alt="${r}"
            title="${r}"
          />
        </a>
        <ul class="gallery-info">
        <li class="gallery-infoItem">
        <h3 class="gallery-infoTitle">Likes</h3>
        <p class="gallery-infoText">${s}</p>
        </li>
        <li class="gallery-infoItem">
        <h3 class="gallery-infoTitle">Views</h3>
        <p class="gallery-infoText">${i}</p>
        </li>
        <li class="gallery-infoItem">
        <h3 class="gallery-infoTitle">Comments</h3>
        <p class="gallery-infoText">${m}</p>
        </li>
        <li class="gallery-infoItem">
        <h3 class="gallery-infoTitle">Downloads</h3>
        <p class="gallery-infoText">${d}</p>
        </li>
        </ul></li>`).join("").trim()}const o={form:document.querySelector(".form"),btn:document.querySelector(".form--btn"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},f=new S;o.loader.style.display="none";o.form.addEventListener("submit",E);async function E(t){t.preventDefault(),o.loader.style.display="block";const e=t.target.elements.formInput.value.trim().toLowerCase();if(!e)return o.loader.style.display="none",o.gallery.innerHTML="",u("Error","Please do your searching request, fill out the input","red",c);const{hits:l,...a}=await f.getImages(e);try{o.loader.style.display="none",f.isResponseEmpty(l),T(l),t.target.reset()}catch(r){o.loader.style.display="none",u("Error",r,"red",c)}}async function T(t){let e=await new w(".gallery a",{captionDelay:250,captionsData:"alt"});const l=await $(t);o.gallery.innerHTML=l,e.refresh()}
//# sourceMappingURL=commonHelpers.js.map
