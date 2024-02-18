var S=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var y=(s,e,t)=>(S(s,e,"read from private field"),t?t.call(s):e.get(s)),h=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)};import{i as q,S as w,A as E}from"./assets/vendor-00ccef64.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const M="/goit-js-hw-12/assets/caution-fce7ed33.svg";function d({title:s="Hello",message:e="Type in your message, please",backgroundColor:t="white",icon:i=M}){return q.show({titleSize:"16px",title:`${s}`,message:`${e}`,messageSize:"16px",closeOnEscape:!0,position:"topRight",backgroundColor:`${t}`,iconUrl:`${i}`})}function R(s){return s.map(({webformatURL:t,largeImageURL:i,tags:r,likes:a,views:c,comments:L,downloads:b})=>`<li class="gallery-item">
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
        <p class="gallery-infoText">${a}</p>
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
        </ul></li>`).join("").trim()}async function f(s){let e=new w(".gallery a",{captionDelay:250,captionsData:"alt"});const t=R(s);document.querySelector(".gallery").insertAdjacentHTML("beforeend",t),e.refresh()}const p="/goit-js-hw-12/assets/error-bd282b8e.svg",v={title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",icon:p};var u;const g=class g{constructor(){this.BASE_URL="https://pixabay.com/api/",this.q=null,this.page=1,this.per_page=15,this.totalResult=0}async getImages(){return(await E.create({baseURL:this.BASE_URL,params:{key:y(g,u),q:this.q,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:this.per_page,page:this.page}}).get("")).data}isResponseEmpty(e){const t=document.querySelector(".js-loadMore");return e.length!==0?(t.classList.remove("hidden"),e):(t.classList.add("hidden"),d(v))}};u=new WeakMap,h(g,u,"42204653-dde2ea6d5277704e408fb2018");let m=g;const o={form:document.querySelector(".form"),btn:document.querySelector(".js-submitBtn"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".js-loadMore")},n={title:"Error",message:"We are sorry, but you have reached the end of search results.",backgroundColor:"#ef4040",icon:p},l=new m;o.loader.classList.add("hidden");o.btnLoadMore.classList.add("hidden");o.form.addEventListener("submit",I);o.btnLoadMore.addEventListener("click",T);async function I(s){s.preventDefault(),o.loader.classList.remove("hidden");const e=s.target.elements.formInput.value.trim().toLowerCase();if(l.q=e,l.page=1,o.gallery.innerHTML="",!l.q)return o.loader.classList.add("hidden"),o.btnLoadMore.classList.add("hidden"),o.gallery.innerHTML="",n.message="Please do your searching request, fill out the input",d(n);try{const{hits:t,...i}=await l.getImages();l.totalResult=i.total,o.loader.classList.add("hidden"),l.isResponseEmpty(t),f(t),s.target.reset()}catch(t){o.loader.classList.add("hidden"),n.message=t,d(n)}}async function T(s){try{l.page+=1;const{hits:e,...t}=await l.getImages();o.loader.classList.add("hidden"),f(e),$(),x()}catch{o.loader.classList.add("hidden"),d("Error")}}function $(){Math.ceil(l.totalResult/l.per_page)===l.page&&(n.message="We are sorry, but you have reached the end of search results.",d(n),o.btnLoadMore.classList.add("hidden"))}function x(){const e=document.querySelector(".gallery-item").getBoundingClientRect(),t=e.height*2+e.height/2+24;window.scrollBy({top:t,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
