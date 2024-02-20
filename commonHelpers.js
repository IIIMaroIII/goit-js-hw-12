var b=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var g=(s,e,t)=>(b(s,e,"read from private field"),t?t.call(s):e.get(s)),f=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)};import{i as S,S as M,A as q}from"./assets/vendor-00ccef64.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const w="/goit-js-hw-12/assets/caution-fce7ed33.svg";function d({title:s="Hello",message:e="Type in your message, please",backgroundColor:t="white",icon:n=w}){return S.show({titleSize:"16px",title:`${s}`,message:`${e}`,messageSize:"16px",closeOnEscape:!0,position:"topRight",backgroundColor:`${t}`,iconUrl:`${n}`})}function v(s){return s.map(({webformatURL:t,largeImageURL:n,tags:o,likes:a,views:c,comments:L,downloads:_})=>`<li class="gallery__item">
  <a class="gallery__link" href="${n}">
    <img
      class="gallery__image"
      src="${t}"
      data-source="${n}"
      alt="${o}"
      title="${o}"
    />
   
  </a>
   <ul class="info">
      <li class="info__item">
        <h3 class="info__title">Likes</h3>
        <p class="info__text">${a}</p>
      </li>
      <li class="info__item">
        <h3 class="info__title">Views</h3>
        <p class="info__text">${c}</p>
      </li>
      <li class="info__item">
        <h3 class="info__title">Comments</h3>
        <p class="info__text">${L}</p>
      </li>
      <li class="info__item">
        <h3 class="info__title">Downloads</h3>
        <p class="info__text">${_}</p>
      </li>
    </ul>
</li>`).join("").trim()}async function p(s){let e=new M(".gallery a",{captionDelay:250,captionsData:"alt"});const t=v(s);document.querySelector(".gallery").insertAdjacentHTML("beforeend",t),e.refresh()}const y="/goit-js-hw-12/assets/error-bd282b8e.svg",E={title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",icon:y};var u;const m=class m{constructor(){this.BASE_URL="https://pixabay.com/api/",this.q=null,this.page=1,this.per_page=15,this.totalResult=0}async getImages(){return(await q.create({baseURL:this.BASE_URL,params:{key:g(m,u),q:this.q,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:this.per_page,page:this.page}}).get("")).data}isResponseEmpty(e){const t=document.querySelector(".js-loadMore");return e.length!==0?(t.classList.remove("hidden"),e):(t.classList.add("hidden"),d(E))}};u=new WeakMap,f(m,u,"42204653-dde2ea6d5277704e408fb2018");let h=m;const r={form:document.querySelector(".form"),btn:document.querySelector(".js-submitBtn"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".js-loadMore")},l={title:"Error",message:"We are sorry, but you have reached the end of search results.",backgroundColor:"#ef4040",icon:y},i=new h;r.loader.classList.add("hidden");r.btnLoadMore.classList.add("hidden");r.form.addEventListener("submit",R);r.btnLoadMore.addEventListener("click",$);async function R(s){s.preventDefault(),r.loader.classList.remove("hidden");const e=s.target.elements.formInput.value.trim().toLowerCase();if(i.q=e,i.page=1,r.gallery.innerHTML="",!i.q)return r.loader.classList.add("hidden"),r.btnLoadMore.classList.add("hidden"),r.gallery.innerHTML="",l.message="Please do your searching request, fill out the input",d(l);try{const{hits:t,...n}=await i.getImages();i.totalResult=n.total,r.loader.classList.add("hidden"),i.isResponseEmpty(t),p(t),s.target.reset()}catch(t){r.loader.classList.add("hidden"),l.message=t,d(l)}}async function $(s){try{i.page+=1;const{hits:e,...t}=await i.getImages();r.btnLoadMore.classList.add("hidden"),r.loader.classList.remove("hidden"),p(e),x(),I()}catch{r.loader.classList.add("hidden"),d("Error")}r.btnLoadMore.classList.remove("hidden"),r.loader.classList.add("hidden")}function x(){Math.ceil(i.totalResult/i.per_page)===i.page&&(l.message="We are sorry, but you have reached the end of search results.",d(l),r.btnLoadMore.classList.add("hidden"))}function I(){const e=document.querySelector(".gallery__item").getBoundingClientRect(),t=e.height*2+e.height+32;window.scrollBy({top:t,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
