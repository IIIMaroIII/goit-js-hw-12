var S=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var y=(s,e,t)=>(S(s,e,"read from private field"),t?t.call(s):e.get(s)),p=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)};import{i as q,S as v,A as E}from"./assets/vendor-00ccef64.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const M="/vanilla-app-template/assets/caution-fce7ed33.svg";function d({title:s="Hello",message:e="Type in your message, please",backgroundColor:t="white",icon:i=M}){return q.show({titleSize:"16px",title:`${s}`,message:`${e}`,messageSize:"16px",closeOnEscape:!0,position:"topRight",backgroundColor:`${t}`,iconUrl:`${i}`})}function R(s){return s.map(({webformatURL:t,largeImageURL:i,tags:r,likes:o,views:c,comments:L,downloads:b})=>`<li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <img
            class="gallery-image"
            src="${t}"
            data-source="${i}"
            alt="${r}"
            title="${r}"
          />
        </a>
        <ul class="gallery-info">
        <li class="gallery-infoItem">
        <h3 class="gallery-infoTitle">Likes</h3>
        <p class="gallery-infoText">${o}</p>
        </li>
        <li class="gallery-infoItem">
        <h3 class="gallery-infoTitle">Views</h3>
        <p class="gallery-infoText">${c}</p>
        </li>
        <li class="gallery-infoItem">
        <h3 class="gallery-infoTitle">Comments</h3>
        <p class="gallery-infoText">${L}</p>
        </li>
        <li class="gallery-infoItem">
        <h3 class="gallery-infoTitle">Downloads</h3>
        <p class="gallery-infoText">${b}</p>
        </li>
        </ul></li>`).join("").trim()}async function f(s){let e=new v(".gallery a",{captionDelay:250,captionsData:"alt"});const t=R(s);document.querySelector(".gallery").insertAdjacentHTML("beforeend",t),e.refresh()}const h="/vanilla-app-template/assets/error-bd282b8e.svg",w={title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",icon:h};var u;const g=class g{constructor(){this.BASE_URL="https://pixabay.com/api/",this.q=null,this.page=1,this.per_page=15,this.totalResult=0}async getImages(){return(await E.create({baseURL:this.BASE_URL,params:{key:y(g,u),q:this.q,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:this.per_page,page:this.page}}).get("")).data}isResponseEmpty(e){const t=document.querySelector(".js-loadMore");return e.length!==0?(t.classList.remove("hidden"),e):(t.classList.add("hidden"),d(w))}};u=new WeakMap,p(g,u,"42204653-dde2ea6d5277704e408fb2018");let m=g;const a={form:document.querySelector(".form"),btn:document.querySelector(".form--btn"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".js-loadMore")},n={title:"Error",message:"We are sorry, but you have reached the end of search results.",backgroundColor:"#ef4040",icon:h},l=new m;a.loader.classList.add("hidden");a.btnLoadMore.classList.add("hidden");a.form.addEventListener("submit",I);a.btnLoadMore.addEventListener("click",T);async function I(s){s.preventDefault(),a.loader.classList.remove("hidden");const e=s.target.elements.formInput.value.trim().toLowerCase();if(l.q=e,l.page=1,a.gallery.innerHTML="",!l.q)return a.loader.classList.add("hidden"),a.btnLoadMore.classList.add("hidden"),a.gallery.innerHTML="",n.message="Please do your searching request, fill out the input",d(n);try{const{hits:t,...i}=await l.getImages();l.totalResult=i.total,a.loader.classList.add("hidden"),l.isResponseEmpty(t),f(t),s.target.reset()}catch(t){a.loader.classList.add("hidden"),n.message=t,d(n)}}async function T(s){try{l.page+=1;const{hits:e,...t}=await l.getImages();a.loader.classList.add("hidden"),f(e),$(),x()}catch{a.loader.classList.add("hidden"),d("Error")}}function $(){Math.ceil(l.totalResult/l.per_page)===l.page&&(n.message="We are sorry, but you have reached the end of search results.",d(n),a.btnLoadMore.classList.add("hidden"))}function x(){const e=document.querySelector(".gallery-item").getBoundingClientRect(),t=e.height*2+e.height/2+24;window.scrollBy({top:t,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
