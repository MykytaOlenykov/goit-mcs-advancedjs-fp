var C=e=>{throw TypeError(e)};var w=(e,t,r)=>t.has(e)||C("Cannot "+r);var l=(e,t,r)=>(w(e,t,"read from private field"),r?r.call(e):t.get(e)),_=(e,t,r)=>t.has(e)?C("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),$=(e,t,r,i)=>(w(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r),x=(e,t,r)=>(w(e,t,"access private method"),r);import{d as ie,c as ne,a as A,e as oe,i as M,b as ce}from"./vendor-DbvQrPBk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const F=document.querySelector(".js-header-nav"),{pathname:le}=window.location;var R,j;le.includes("favorites")?(R=F.querySelector('[data-path="favorites"]'))==null||R.classList.add("link--active"):(j=F.querySelector('[data-path="home"]'))==null||j.classList.add("link--active");const H=document.querySelector("[data-burger]"),S=document.querySelector("[data-burger-open]"),de=document.querySelector("[data-burger-close]"),N=()=>{const e=S.getAttribute("aria-expanded")==="true"||!1;S.setAttribute("aria-expanded",!e),H.classList.toggle("menu-is-hidden")};S.addEventListener("click",N);de.addEventListener("click",N);window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(H.classList.add("menu-is-hidden"),S.setAttribute("aria-expanded",!1))});const y=ie.create({baseURL:"https://your-energy.b.goit.study/api/"});async function Ie(e){const{params:t,signal:r}=e??{},{page:i=1,limit:s=10,...a}=t??{},{data:n}=await y.get("exercises",{params:{...a,page:i,limit:s},signal:r});return n}async function ue({exerciseId:e,signal:t}){const{data:r}=await y.get(`exercises/${e}`,{signal:t});return r}async function me({exerciseId:e,body:t}){const{data:r}=await y.patch(`exercises/${e}/rating`,t);return r}async function Ce(e){const{params:t,signal:r}=e??{},{page:i=1,limit:s=12,...a}=t??{},{data:n}=await y.get("filters",{params:{...a,page:i,limit:s},signal:r});return n}async function B(e){const{signal:t}={},{data:r}=await y.get("quote",{signal:t});return r}async function Ae({body:e}){const{data:t}=await y.post("subscription",e);return t}let fe=ne({email:A().email("Please enter a valid email").required("Email is required"),rate:oe().required("Rating is required").min(1,"Rating must be between 1 and 5").max(5,"Rating must be between 1 and 5"),review:A().trim().required("Comment is required.")});const b={closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};let D=null;function pe({exerciseId:e}){D=e,b.modal.classList.remove("is-hidden")}function ve(){b.modal.classList.add("is-hidden"),P()}const o=document.querySelector(".modal-form");b.closeModalBtn.addEventListener("click",ve);document.querySelectorAll(".modal-star").forEach(e=>{e.addEventListener("click",t=>{const r=t.currentTarget.dataset.value;document.querySelectorAll(".modal-star").forEach(s=>{s.dataset.value<=r?s.querySelector("svg").style.fill="#eea10c":s.querySelector("svg").style.fill="rgba(244, 244, 244, 0.20)"});const i=document.querySelector(".modal-rating");i.textContent=`${r}.0`})});async function ye(e){e.preventDefault();const t=e.target.elements,r=t.email.value,i=t.comment.value,s=parseInt(o.querySelector(".modal-rating").textContent);o.querySelector("#email-error").style.display="none",o.querySelector("#stars-error").style.display="none";try{const a=await fe.validate({email:r,review:i,rate:s},{abortEarly:!1});await me({exerciseId:D,body:a}),b.modal.classList.add("is-hidden"),M.success({message:"Thanks for your feedback",position:"topRight"}),P()}catch(a){if(ce(a))M.error({message:"Something went wrong, please try again later.",position:"topRight"});else{const n={};a.inner.forEach(g=>{n[g.path]||(n[g.path]=g.message)}),n.email&&(o.querySelector("#email-error").textContent=n.email,o.querySelector("#email-error").style.display="block"),n.review&&(o.querySelector("#comment-error").textContent=n.review,o.querySelector("#comment-error").style.display="block"),n.rate&&(o.querySelector("#stars-error").textContent=n.rate,o.querySelector("#stars-error").style.display="block")}}}o.addEventListener("submit",ye);function P(){o.reset(),document.querySelectorAll(".modal-star").forEach(t=>{t.querySelector("svg").style.fill="rgba(244, 244, 244, 0.20)"});const e=document.querySelector(".modal-rating");e.textContent="0.0",o.querySelector("#email-error").textContent="",o.querySelector("#email-error").style.display="none",o.querySelector("#comment-error").textContent="",o.querySelector("#comment-error").style.display="none",o.querySelector("#stars-error").textContent="",o.querySelector("#stars-error").style.display="none"}var v,c,p,J,I;class ge{constructor(){_(this,p);_(this,v,"favorites_exercises_ls_key");_(this,c,[]);$(this,c,x(this,p,J).call(this))}get favoritesExercises(){return l(this,c)}isFavoriteExercise(t){return l(this,c).some(({_id:r})=>r===t)}addFavoriteExercise(t){this.isFavoriteExercise(t._id)||(l(this,c).push(t),x(this,p,I).call(this))}removeFavoriteExercise(t){$(this,c,l(this,c).filter(({_id:r})=>r!==t)),x(this,p,I).call(this)}}v=new WeakMap,c=new WeakMap,p=new WeakSet,J=function(){try{const t=localStorage.getItem(l(this,v));if(t){const r=JSON.parse(t);return Array.isArray(r)?r:[]}return[]}catch{return localStorage.removeItem(l(this,v)),[]}},I=function(){localStorage.setItem(l(this,v),JSON.stringify(l(this,c)))};const E=new ge,m="/goit-mcs-advancedjs-fp/assets/icons-sprite-IovVlU0g.svg",d=document.querySelector(".exercises__cards"),h=document.querySelector(".exercises__cards-empty");function Fe(){d.innerHTML="",d.classList.remove("exercises__cards-wrkt")}function Be(e){h.classList.add("visually-hidden");const t=e.map(r=>`<li class="exercises__cards-item">
            <a class="exercises__cards-link" href="#" data-name="${r.name}">
            <p class="exercises__cards-descr">
                <span class="exercises__cards-metadata-name">${r.name}</span>
                <span class="exercises__cards-metadata-filter">${r.filter}</span>
            </p>
            <img
                class="exercises__cards-image"
                src="${r.imgURL}"
                alt="${r.name}"
                loading="lazy"
                />
            </a>
        </li>
        `).join("");d.innerHTML=t}function Oe(){d.innerHTML="",d.classList.remove("exercises__cards-wrkt")}function _e(e,t=!1){h.classList.add("visually-hidden");const r=a=>t?`<button class="exercises__remove-btn" type="button" data-remove-id="${a._id}">
          <svg width="18" height="18" style="stroke: black">
            <use href="${m}#trash"></use>
          </svg>
      </button>`:`<span class="exercises__name-rating">
          ${a.rating}
           <svg>
            <use href="${m}#star"></use>
            </svg>
      </span>`,i=e.map(a=>`<li class="exercises__name">
       <div class="exercises__name-wraper-1">
        <span class="exercises__name-tag">Workout</span>
        ${r(a)}
        <button class="exercises__name-btn" type="button" data-modal-open="${a._id}">Start
          <svg class="exercises__name-icon" width="16" height="16">
            <use href="${m}#arrow"></use>
          </svg>
        </button>
        </div>

        <div class="exercises__name-h3-wraper">
        <h3 class="exercises__name-h3">${a.name}</h3>
        <div class="exersize__h3-icon-wraper">
          <svg class="exersize__h3-icon" width="18" height="18">
            <use href="${m}#runner"></use>
          </svg>
        </div>
        </div>

        <ul class="exercises__name-props" >
            <li class="exercises__name-item" >BurnedCalories:<span class="exercises__name-clr">${a.burnedCalories}</span></li>
            <li class="exercises__name-item">Body part:<span class="exercises__name-clr">${a.bodyPart}</span></li>
            <li class="exercises__name-item">Target:<span class="exercises__name-clr">${a.target}</span></li>
        </ul>
        </li>
        `).join(""),s=t?`It appears that you haven't added any exercises to your favorites yet.
      To get started, you can add exercises that you like to your favorites
      for easier access in the future.`:"No exercises found";if(e.length===0){d.innerHTML="",h.classList.remove("visually-hidden"),h.innerHTML=s;return}d.classList.add("exercises__cards-wrkt"),d.innerHTML=i}const z=()=>{if(!window.location.pathname.includes("favorites"))return;const e=E.favoritesExercises;_e(e,!0)};function xe(){let e=localStorage.getItem("quote");const t=new Date().getDate();if(!e)B().then(r=>{r.date=t,localStorage.setItem("quote",JSON.stringify(r)),k(r)});else{const r=JSON.parse(e);r.date!==t?B().then(i=>{i.date=t,localStorage.setItem("quote",JSON.stringify(i)),k(i)}):k(r)}}function k(e){const t=document.querySelector(".p_quote_text");t.innerHTML=e.quote;const r=document.querySelector(".p_quote_author");r.innerHTML=e.author}xe();const he=document.querySelector(".js-exercises-cards"),f=document.querySelector(".exercise-modal-backdrop"),q=f.querySelector(".exercise-modal__content"),K=f.querySelector(".exercise-modal__close-btn"),Q="exercise-modal-backdrop--is-hidden";let u=null;he.addEventListener("click",e=>{var s;const{target:t}=e;let r=t.dataset.modalOpen;if(r){O({exerciseId:r});return}const i=t.closest("button[data-modal-open]");if(r=(s=i==null?void 0:i.dataset)==null?void 0:s.modalOpen,r){O({exerciseId:r});return}});async function O({exerciseId:e}){try{const t=await ue({exerciseId:e});u=t,q.innerHTML=Ee(t),Se()}catch{M.error({message:"Something went wrong, please try again later.",position:"topRight"})}}function Se(){X(),K.addEventListener("click",L),f.addEventListener("click",V),document.addEventListener("keydown",U),f.classList.remove(Q)}function be(){Y(),K.removeEventListener("click",L),f.removeEventListener("click",V),document.removeEventListener("keydown",U)}function L(){f.classList.add(Q),setTimeout(()=>{be(),u=null,q.innerHTML=""},500)}function U(e){e.code==="Escape"&&L()}function V(e){e.target===f&&L()}function Ee({_id:e,bodyPart:t,equipment:r,gifUrl:i,name:s,target:a,description:n,rating:g,burnedCalories:se,popularity:ae}){return`
      <div class="exercise-modal__thumb">
        <img class="exercise-modal__img" src="${i}" alt="${s}" />
      </div>

      <div>
        <h3 class="exercise-modal__title">${s}</h3>

        ${qe({rating:g})}

        ${$e({bodyPart:t,equipment:r,target:a,burnedCalories:se,popularity:ae})}

        <p class="exercise-modal__desc">${n}</p>

        <div class="js-action-bar-wrapper">
            ${G({exerciseId:e})}
        </div>
      </div>
  `}function qe({rating:e}){return`
        <div class="exercise-modal__rating">
          <p class="exercise-modal__rating-value">${e}</p>

          ${[1,2,3,4,5].map(t=>Le({isActive:t<=Math.round(e)})).join("")}
        </div>
    `}function Le({isActive:e}){return`
        <svg class="exercise-modal__rating-star ${e?"exercise-modal__rating-star--accent":""}">
            <use href="${m}#star"></use>
        </svg>
    `}const we=[["target","Target"],["bodyPart","Body Part"],["equipment","Equipment"],["popularity","Popular"],["burnedCalories","Burned Calories"]];function $e(e){return`
        <ul class="exercise-modal__info">
          ${we.map(([t,r])=>{const i=e[t];return i?`
                <li>
                    <h4 class="exercise-modal__info-title">${r}</h4>
                    <p class="exercise-modal__info-desc">${i}</p>
                </li>
            `:""}).join("")}
        </ul>
    `}function G({exerciseId:e}){const t=E.isFavoriteExercise(e);return`
        <div class="exercise-modal__action-bar ${t?"exercise-modal__action-bar--wrap":""}">
          ${T({type:"primary",className:t?"js-favorite-remove-btn":"js-favorite-add-btn",children:t?`
                Remove from favorites
                <svg>
                  <use href="${m}#trash"></use>
                </svg>
              `:`
                Add to favorites
                <svg>
                  <use href="${m}#heart"></use>
                </svg>
              `})}
          ${T({type:"secondary",className:`js-rating-btn ${t?"exercise-modal__btn--large":""}`,children:`
             Give a rating
           `})}
        </div>
    `}function W(){const e=q.querySelector(".js-action-bar-wrapper");Y(),e.innerHTML=G({exerciseId:u._id}),X()}function X(){const{favoriteAddButtonRef:e,favoriteRemoveButtonRef:t,ratingButtonRef:r}=Z();e==null||e.addEventListener("click",ee),t==null||t.addEventListener("click",te),r==null||r.addEventListener("click",re)}function Y(){const{favoriteAddButtonRef:e,favoriteRemoveButtonRef:t,ratingButtonRef:r}=Z();e==null||e.removeEventListener("click",ee),t==null||t.removeEventListener("click",te),r==null||r.removeEventListener("click",re)}function T({type:e="",className:t="",children:r=""}){return`
        <button
            class="exercise-modal__btn exercise-modal__btn--${e} ${t}"
            type="button"
          >
            ${r}
        </button>
    `}function Z(){const e=q.querySelector(".exercise-modal__action-bar");return{favoriteAddButtonRef:e.querySelector(".js-favorite-add-btn"),favoriteRemoveButtonRef:e.querySelector(".js-favorite-remove-btn"),ratingButtonRef:e.querySelector(".js-rating-btn")}}function ee(){E.addFavoriteExercise(u),W(),z()}function te(){E.removeFavoriteExercise(u==null?void 0:u._id),W(),z()}function re(){pe({exerciseId:u._id})}export{Oe as a,Ie as b,_e as c,Be as d,Ae as e,z as f,Ce as g,E as h,Fe as r,m as s};
//# sourceMappingURL=exercise-modal-BCbmcDGw.js.map
