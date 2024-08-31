var I=t=>{throw TypeError(t)};var $=(t,e,s)=>e.has(t)||I("Cannot "+s);var l=(t,e,s)=>($(t,e,"read from private field"),s?s.call(t):e.get(t)),g=(t,e,s)=>e.has(t)?I("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),w=(t,e,s,i)=>($(t,e,"write to private field"),i?i.call(t,s):e.set(t,s),s),x=(t,e,s)=>($(t,e,"access private method"),s);import{d as se,c as re,a as F,e as ae}from"./vendor-ClsCxivM.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const C=document.querySelector(".js-header-nav"),{pathname:ie}=window.location;var T,j;ie.includes("favorites")?(T=C.querySelector('[data-path="favorites"]'))==null||T.classList.add("link--active"):(j=C.querySelector('[data-path="home"]'))==null||j.classList.add("link--active");const R=document.querySelector("[data-burger]"),b=document.querySelector("[data-burger-open]"),ne=document.querySelector("[data-burger-close]"),H=()=>{const t=b.getAttribute("aria-expanded")==="true"||!1;b.setAttribute("aria-expanded",!t),R.classList.toggle("menu-is-hidden")};b.addEventListener("click",H);ne.addEventListener("click",H);window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(R.classList.add("menu-is-hidden"),b.setAttribute("aria-expanded",!1))});const _=se.create({baseURL:"https://your-energy.b.goit.study/api/"});async function $e(t){const{params:e,signal:s}=t??{},{page:i=1,limit:r=10,...a}=e??{},{data:n}=await _.get("exercises",{params:{...a,page:i,limit:r},signal:s});return n}async function oe({exerciseId:t,signal:e}){const{data:s}=await _.get(`exercises/${t}`,{signal:e});return s}async function ce({exerciseId:t,body:e}){const{data:s}=await _.patch(`exercises/${t}/rating`,e);return s}async function we(t){const{params:e,signal:s}=t??{},{page:i=1,limit:r=12,...a}=e??{},{data:n}=await _.get("filters",{params:{...a,page:i,limit:r},signal:s});return n}async function A(t){const{signal:e}={},{data:s}=await _.get("quote",{signal:e});return s}async function ke({body:t}){const{data:e}=await _.post("subscription",t);return e}let le=re({email:F().email("Please enter a valid email").required("Email is required"),rate:ae().required("Rating is required").min(1,"Rating must be between 1 and 5").max(5,"Rating must be between 1 and 5"),review:F().trim().required("Comment is required.")});const E={closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};let N=null;function de({exerciseId:t}){N=t,E.modal.classList.remove("is-hidden")}function ue(){E.modal.classList.add("is-hidden")}E.closeModalBtn.addEventListener("click",ue);document.querySelectorAll(".modal-star").forEach(t=>{t.addEventListener("click",e=>{const s=e.currentTarget.dataset.value;document.querySelectorAll(".modal-star").forEach(r=>{r.dataset.value<=s?r.querySelector("svg").style.fill="gold":r.querySelector("svg").style.fill="rgba(244, 244, 244, 0.20)"});const i=document.querySelector(".modal-rating");i.textContent=`${s}.0`})});async function me(t){t.preventDefault();const e=document.querySelector(".modal-form"),s=t.target.elements,i=s.email.value,r=s.comment.value,a=parseInt(e.querySelector(".modal-rating").textContent);e.querySelector("#email-error").style.display="none",e.querySelector("#stars-error").style.display="none";try{const n=await le.validate({email:i,review:r,rate:a},{abortEarly:!1});E.modal.classList.add("is-hidden"),ce({exerciseId:N,body:n})}catch(n){const o={};n.inner.forEach(y=>{o[y.path]||(o[y.path]=y.message)}),o.email&&(e.querySelector("#email-error").textContent=o.email,e.querySelector("#email-error").style.display="block"),o.review&&(e.querySelector("#comment-error").textContent=o.review,e.querySelector("#comment-error").style.display="block"),o.rate&&(e.querySelector("#stars-error").textContent=o.rate,e.querySelector("#stars-error").style.display="block")}}document.querySelector(".modal-form").addEventListener("submit",me);var p,c,f,P,M;class fe{constructor(){g(this,f);g(this,p,"favorites_exercises_ls_key");g(this,c,[]);w(this,c,x(this,f,P).call(this))}get favoritesExercises(){return l(this,c)}isFavoriteExercise(e){return l(this,c).some(({_id:s})=>s===e)}addFavoriteExercise(e){this.isFavoriteExercise(e._id)||(l(this,c).push(e),x(this,f,M).call(this))}removeFavoriteExercise(e){w(this,c,l(this,c).filter(({_id:s})=>s!==e)),x(this,f,M).call(this)}}p=new WeakMap,c=new WeakMap,f=new WeakSet,P=function(){try{const e=localStorage.getItem(l(this,p));if(e){const s=JSON.parse(e);return Array.isArray(s)?s:[]}return[]}catch{return localStorage.removeItem(l(this,p)),[]}},M=function(){localStorage.setItem(l(this,p),JSON.stringify(l(this,c)))};const S=new fe,v="/goit-mcs-advancedjs-fp/assets/icons-sprite-IovVlU0g.svg",d=document.querySelector(".exercises__cards"),h=document.querySelector(".exercises__cards-empty");function Me(){d.innerHTML="",d.classList.remove("exercises__cards-wrkt")}function Ie(t){h.classList.add("visually-hidden");const e=t.map(s=>`<li class="exercises__cards-item">
            <a class="exercises__cards-link" href="#" data-name="${s.name}">
            <p class="exercises__cards-descr">
                <span class="exercises__cards-metadata-name">${s.name}</span>
                <span class="exercises__cards-metadata-filter">${s.filter}</span>
            </p>
            <img
                class="exercises__cards-image"
                src="${s.imgURL}"
                alt="${s.name}"
                loading="lazy"
                />
            </a>
        </li>
        `).join("");d.innerHTML=e}function Fe(){d.innerHTML="",d.classList.remove("exercises__cards-wrkt")}function ve(t,e=!1){h.classList.add("visually-hidden");const s=a=>e?`<button class="exercises__remove-btn" type="button" data-remove-id="${a._id}">
          <svg width="18" height="18" style="stroke: black">
            <use href="${v}#trash"></use>
          </svg>
      </button>`:`<span class="exercises__name-rating">${a.rating}</span>`,i=t.map(a=>`<li class="exercises__name">
       <div class="exercises__name-wraper-1">
        <span class="exercises__name-tag">Workout</span>
        ${s(a)}
        <button class="exercises__name-btn" type="button" data-modal-open="${a._id}">Start</button>

          <svg class="exercises__name-icon" width="16" height="16" style="stroke: black;">
            <use href="${v}#arrow"></use>
          </svg>


        </div>

        <div class="exercises__name-h3-wraper">
        <h3 class="exercises__name-h3">${a.name}</h3>
        <div class="exersize__h3-icon-wraper">
          <svg class="exersize__h3-icon" width="18" height="18">
            <use href="${v}#runner"></use>
          </svg>
        </div>
        </div>

        <ul class="exercises__name-props" >
            <li class="exercises__name-item" >BurnedCalories:<span class="exercises__name-clr">${a.burnedCalories}</span></li>
            <li class="exercises__name-item">Body part:<span class="exercises__name-clr">${a.bodyPart}</span></li>
            <li class="exercises__name-item">Target:<span class="exercises__name-clr">${a.target}</span></li>
        </ul>
        </li>
        `).join(""),r=e?`It appears that you haven't added any exercises to your favorites yet.
      To get started, you can add exercises that you like to your favorites
      for easier access in the future.`:"No exercises found";if(t.length===0){d.innerHTML="",h.classList.remove("visually-hidden"),h.innerHTML=r;return}d.classList.add("exercises__cards-wrkt"),d.innerHTML=i}const D=()=>{if(!window.location.pathname.includes("favorites"))return;const t=S.favoritesExercises;ve(t,!0)};function pe(){let t=localStorage.getItem("quote");const e=new Date().getDate();if(!t)A().then(s=>{s.date=e,localStorage.setItem("quote",JSON.stringify(s)),k(s)});else{const s=JSON.parse(t);s.date!==e?A().then(i=>{i.date=e,localStorage.setItem("quote",JSON.stringify(i)),k(i)}):k(s)}}function k(t){const e=document.querySelector(".p_quote_text");e.innerHTML=t.quote;const s=document.querySelector(".p_quote_author");s.innerHTML=t.author}pe();const _e=document.querySelector(".js-exercises-cards"),m=document.querySelector(".exercise-modal-backdrop"),L=m.querySelector(".exercise-modal__content"),J=m.querySelector(".exercise-modal__close-btn"),z="exercise-modal-backdrop--is-hidden";let u=null;_e.addEventListener("click",t=>{var r;const{target:e}=t;let s=e.dataset.modalOpen;if(s){B({exerciseId:s});return}const i=e.closest("button[data-modal-open]");if(s=(r=i==null?void 0:i.dataset)==null?void 0:r.modalOpen,s){B({exerciseId:s});return}});async function B({exerciseId:t}){const e=await oe({exerciseId:t});u=e,L.innerHTML=xe(e),ye()}function ye(){G(),J.addEventListener("click",q),m.addEventListener("click",Q),document.addEventListener("keydown",K),m.classList.remove(z)}function ge(){W(),J.removeEventListener("click",q),m.removeEventListener("click",Q),document.removeEventListener("keydown",K)}function q(){m.classList.add(z),setTimeout(()=>{ge(),u=null,L.innerHTML=""},500)}function K(t){t.code==="Escape"&&q()}function Q(t){t.target===m&&q()}function xe({_id:t,bodyPart:e,equipment:s,gifUrl:i,name:r,target:a,description:n,rating:o,burnedCalories:y,popularity:te}){return`
      <div class="exercise-modal__thumb">
        <img class="exercise-modal__img" src="${i}" alt="${r}" />
      </div>

      <div>
        <h3 class="exercise-modal__title">${r}</h3>

        ${he({rating:o})}

        ${Se({bodyPart:e,equipment:s,target:a,burnedCalories:y,popularity:te})}

        <p class="exercise-modal__desc">${n}</p>

        <div class="js-action-bar-wrapper">
            ${U({exerciseId:t})}
        </div>
      </div>
  `}function he({rating:t}){return`
        <div class="exercise-modal__rating">
          <p class="exercise-modal__rating-value">${t}</p>

          ${[1,2,3,4,5].map(e=>be({isActive:e<=Math.round(t)})).join("")}
        </div>
    `}function be({isActive:t}){return`
        <svg class="exercise-modal__rating-star ${t?"exercise-modal__rating-star--accent":""}">
            <use href="${v}#star"></use>
        </svg>
    `}const Ee=[["target","Target"],["bodyPart","Body Part"],["equipment","Equipment"],["popularity","Popular"],["burnedCalories","Burned Calories"]];function Se(t){return`
        <ul class="exercise-modal__info">
          ${Ee.map(([e,s])=>{const i=t[e];return i?`
                <li>
                    <h4 class="exercise-modal__info-title">${s}</h4>
                    <p class="exercise-modal__info-desc">${i}</p>
                </li>
            `:""}).join("")}
        </ul>
    `}function U({exerciseId:t}){const e=S.isFavoriteExercise(t);return`
        <div class="exercise-modal__action-bar ${e?"exercise-modal__action-bar--wrap":""}">
          ${O({type:"primary",className:e?"js-favorite-remove-btn":"js-favorite-add-btn",children:e?`
                Remove from favorites
                <svg>
                  <use href="${v}#trash"></use>
                </svg>
              `:`
                Add to favorites
                <svg>
                  <use href="${v}#heart"></use>
                </svg>
              `})}
          ${O({type:"secondary",className:`js-rating-btn ${e?"exercise-modal__btn--large":""}`,children:`
             Give a rating
           `})}
        </div>
    `}function V(){const t=L.querySelector(".js-action-bar-wrapper");W(),t.innerHTML=U({exerciseId:u._id}),G()}function G(){const{favoriteAddButtonRef:t,favoriteRemoveButtonRef:e,ratingButtonRef:s}=X();t==null||t.addEventListener("click",Y),e==null||e.addEventListener("click",Z),s==null||s.addEventListener("click",ee)}function W(){const{favoriteAddButtonRef:t,favoriteRemoveButtonRef:e,ratingButtonRef:s}=X();t==null||t.removeEventListener("click",Y),e==null||e.removeEventListener("click",Z),s==null||s.removeEventListener("click",ee)}function O({type:t="",className:e="",children:s=""}){return`
        <button
            class="exercise-modal__btn exercise-modal__btn--${t} ${e}"
            type="button"
          >
            ${s}
        </button>
    `}function X(){const t=L.querySelector(".exercise-modal__action-bar");return{favoriteAddButtonRef:t.querySelector(".js-favorite-add-btn"),favoriteRemoveButtonRef:t.querySelector(".js-favorite-remove-btn"),ratingButtonRef:t.querySelector(".js-rating-btn")}}function Y(){S.addFavoriteExercise(u),V(),D()}function Z(){S.removeFavoriteExercise(u==null?void 0:u._id),V(),D()}function ee(){de({exerciseId:u._id})}export{Fe as a,$e as b,ve as c,Ie as d,ke as e,D as f,we as g,S as h,Me as r,v as s};
//# sourceMappingURL=exercise-modal-ChQPMjRP.js.map
