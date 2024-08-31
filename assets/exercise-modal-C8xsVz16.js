var I=e=>{throw TypeError(e)};var $=(e,t,r)=>t.has(e)||I("Cannot "+r);var l=(e,t,r)=>($(e,t,"read from private field"),r?r.call(e):t.get(e)),g=(e,t,r)=>t.has(e)?I("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),w=(e,t,r,n)=>($(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),x=(e,t,r)=>($(e,t,"access private method"),r);import{d as ae,c as ne,a as C,e as ie}from"./vendor-ClsCxivM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const F=document.querySelector(".js-header-nav"),{pathname:oe}=window.location;var T,j;oe.includes("favorites")?(T=F.querySelector('[data-path="favorites"]'))==null||T.classList.add("link--active"):(j=F.querySelector('[data-path="home"]'))==null||j.classList.add("link--active");const R=document.querySelector("[data-burger]"),S=document.querySelector("[data-burger-open]"),ce=document.querySelector("[data-burger-close]"),H=()=>{const e=S.getAttribute("aria-expanded")==="true"||!1;S.setAttribute("aria-expanded",!e),R.classList.toggle("menu-is-hidden")};S.addEventListener("click",H);ce.addEventListener("click",H);window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(R.classList.add("menu-is-hidden"),S.setAttribute("aria-expanded",!1))});const y=ae.create({baseURL:"https://your-energy.b.goit.study/api/"});async function ke(e){const{params:t,signal:r}=e??{},{page:n=1,limit:s=10,...a}=t??{},{data:i}=await y.get("exercises",{params:{...a,page:n,limit:s},signal:r});return i}async function le({exerciseId:e,signal:t}){const{data:r}=await y.get(`exercises/${e}`,{signal:t});return r}async function de({exerciseId:e,body:t}){const{data:r}=await y.patch(`exercises/${e}/rating`,t);return r}async function Me(e){const{params:t,signal:r}=e??{},{page:n=1,limit:s=12,...a}=t??{},{data:i}=await y.get("filters",{params:{...a,page:n,limit:s},signal:r});return i}async function A(e){const{signal:t}={},{data:r}=await y.get("quote",{signal:t});return r}async function Ie({body:e}){const{data:t}=await y.post("subscription",e);return t}let ue=ne({email:C().email("Please enter a valid email").required("Email is required"),rate:ie().required("Rating is required").min(1,"Rating must be between 1 and 5").max(5,"Rating must be between 1 and 5"),review:C().trim().required("Comment is required.")});const b={closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};let N=null;function me({exerciseId:e}){N=e,b.modal.classList.remove("is-hidden")}function fe(){b.modal.classList.add("is-hidden"),D()}const o=document.querySelector(".modal-form");b.closeModalBtn.addEventListener("click",fe);document.querySelectorAll(".modal-star").forEach(e=>{e.addEventListener("click",t=>{const r=t.currentTarget.dataset.value;document.querySelectorAll(".modal-star").forEach(s=>{s.dataset.value<=r?s.querySelector("svg").style.fill="#eea10c":s.querySelector("svg").style.fill="rgba(244, 244, 244, 0.20)"});const n=document.querySelector(".modal-rating");n.textContent=`${r}.0`})});async function ve(e){e.preventDefault();const t=e.target.elements,r=t.email.value,n=t.comment.value,s=parseInt(o.querySelector(".modal-rating").textContent);o.querySelector("#email-error").style.display="none",o.querySelector("#stars-error").style.display="none";try{const a=await ue.validate({email:r,review:n,rate:s},{abortEarly:!1});b.modal.classList.add("is-hidden"),de({exerciseId:N,body:a}),D()}catch(a){const i={};a.inner.forEach(_=>{i[_.path]||(i[_.path]=_.message)}),i.email&&(o.querySelector("#email-error").textContent=i.email,o.querySelector("#email-error").style.display="block"),i.review&&(o.querySelector("#comment-error").textContent=i.review,o.querySelector("#comment-error").style.display="block"),i.rate&&(o.querySelector("#stars-error").textContent=i.rate,o.querySelector("#stars-error").style.display="block")}}o.addEventListener("submit",ve);function D(){o.reset(),document.querySelectorAll(".modal-star").forEach(t=>{t.querySelector("svg").style.fill="rgba(244, 244, 244, 0.20)"});const e=document.querySelector(".modal-rating");e.textContent="0.0",o.querySelector("#email-error").textContent="",o.querySelector("#email-error").style.display="none",o.querySelector("#comment-error").textContent="",o.querySelector("#comment-error").style.display="none",o.querySelector("#stars-error").textContent="",o.querySelector("#stars-error").style.display="none"}var p,c,v,P,M;class pe{constructor(){g(this,v);g(this,p,"favorites_exercises_ls_key");g(this,c,[]);w(this,c,x(this,v,P).call(this))}get favoritesExercises(){return l(this,c)}isFavoriteExercise(t){return l(this,c).some(({_id:r})=>r===t)}addFavoriteExercise(t){this.isFavoriteExercise(t._id)||(l(this,c).push(t),x(this,v,M).call(this))}removeFavoriteExercise(t){w(this,c,l(this,c).filter(({_id:r})=>r!==t)),x(this,v,M).call(this)}}p=new WeakMap,c=new WeakMap,v=new WeakSet,P=function(){try{const t=localStorage.getItem(l(this,p));if(t){const r=JSON.parse(t);return Array.isArray(r)?r:[]}return[]}catch{return localStorage.removeItem(l(this,p)),[]}},M=function(){localStorage.setItem(l(this,p),JSON.stringify(l(this,c)))};const E=new pe,m="/goit-mcs-advancedjs-fp/assets/icons-sprite-IovVlU0g.svg",d=document.querySelector(".exercises__cards"),h=document.querySelector(".exercises__cards-empty");function Ce(){d.innerHTML="",d.classList.remove("exercises__cards-wrkt")}function Fe(e){h.classList.add("visually-hidden");const t=e.map(r=>`<li class="exercises__cards-item">
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
        `).join("");d.innerHTML=t}function Ae(){d.innerHTML="",d.classList.remove("exercises__cards-wrkt")}function ye(e,t=!1){h.classList.add("visually-hidden");const r=a=>t?`<button class="exercises__remove-btn" type="button" data-remove-id="${a._id}">
          <svg width="18" height="18" style="stroke: black">
            <use href="${m}#trash"></use>
          </svg>
      </button>`:`<span class="exercises__name-rating">
          ${a.rating}
           <svg>
            <use href="${m}#star"></use>
            </svg>
      </span>`,n=e.map(a=>`<li class="exercises__name">
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
      for easier access in the future.`:"No exercises found";if(e.length===0){d.innerHTML="",h.classList.remove("visually-hidden"),h.innerHTML=s;return}d.classList.add("exercises__cards-wrkt"),d.innerHTML=n}const J=()=>{if(!window.location.pathname.includes("favorites"))return;const e=E.favoritesExercises;ye(e,!0)};function _e(){let e=localStorage.getItem("quote");const t=new Date().getDate();if(!e)A().then(r=>{r.date=t,localStorage.setItem("quote",JSON.stringify(r)),k(r)});else{const r=JSON.parse(e);r.date!==t?A().then(n=>{n.date=t,localStorage.setItem("quote",JSON.stringify(n)),k(n)}):k(r)}}function k(e){const t=document.querySelector(".p_quote_text");t.innerHTML=e.quote;const r=document.querySelector(".p_quote_author");r.innerHTML=e.author}_e();const ge=document.querySelector(".js-exercises-cards"),f=document.querySelector(".exercise-modal-backdrop"),q=f.querySelector(".exercise-modal__content"),z=f.querySelector(".exercise-modal__close-btn"),K="exercise-modal-backdrop--is-hidden";let u=null;ge.addEventListener("click",e=>{var s;const{target:t}=e;let r=t.dataset.modalOpen;if(r){B({exerciseId:r});return}const n=t.closest("button[data-modal-open]");if(r=(s=n==null?void 0:n.dataset)==null?void 0:s.modalOpen,r){B({exerciseId:r});return}});async function B({exerciseId:e}){const t=await le({exerciseId:e});u=t,q.innerHTML=Se(t),xe()}function xe(){W(),z.addEventListener("click",L),f.addEventListener("click",U),document.addEventListener("keydown",Q),f.classList.remove(K)}function he(){X(),z.removeEventListener("click",L),f.removeEventListener("click",U),document.removeEventListener("keydown",Q)}function L(){f.classList.add(K),setTimeout(()=>{he(),u=null,q.innerHTML=""},500)}function Q(e){e.code==="Escape"&&L()}function U(e){e.target===f&&L()}function Se({_id:e,bodyPart:t,equipment:r,gifUrl:n,name:s,target:a,description:i,rating:_,burnedCalories:re,popularity:se}){return`
      <div class="exercise-modal__thumb">
        <img class="exercise-modal__img" src="${n}" alt="${s}" />
      </div>

      <div>
        <h3 class="exercise-modal__title">${s}</h3>

        ${be({rating:_})}

        ${Le({bodyPart:t,equipment:r,target:a,burnedCalories:re,popularity:se})}

        <p class="exercise-modal__desc">${i}</p>

        <div class="js-action-bar-wrapper">
            ${V({exerciseId:e})}
        </div>
      </div>
  `}function be({rating:e}){return`
        <div class="exercise-modal__rating">
          <p class="exercise-modal__rating-value">${e}</p>

          ${[1,2,3,4,5].map(t=>Ee({isActive:t<=Math.round(e)})).join("")}
        </div>
    `}function Ee({isActive:e}){return`
        <svg class="exercise-modal__rating-star ${e?"exercise-modal__rating-star--accent":""}">
            <use href="${m}#star"></use>
        </svg>
    `}const qe=[["target","Target"],["bodyPart","Body Part"],["equipment","Equipment"],["popularity","Popular"],["burnedCalories","Burned Calories"]];function Le(e){return`
        <ul class="exercise-modal__info">
          ${qe.map(([t,r])=>{const n=e[t];return n?`
                <li>
                    <h4 class="exercise-modal__info-title">${r}</h4>
                    <p class="exercise-modal__info-desc">${n}</p>
                </li>
            `:""}).join("")}
        </ul>
    `}function V({exerciseId:e}){const t=E.isFavoriteExercise(e);return`
        <div class="exercise-modal__action-bar ${t?"exercise-modal__action-bar--wrap":""}">
          ${O({type:"primary",className:t?"js-favorite-remove-btn":"js-favorite-add-btn",children:t?`
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
          ${O({type:"secondary",className:`js-rating-btn ${t?"exercise-modal__btn--large":""}`,children:`
             Give a rating
           `})}
        </div>
    `}function G(){const e=q.querySelector(".js-action-bar-wrapper");X(),e.innerHTML=V({exerciseId:u._id}),W()}function W(){const{favoriteAddButtonRef:e,favoriteRemoveButtonRef:t,ratingButtonRef:r}=Y();e==null||e.addEventListener("click",Z),t==null||t.addEventListener("click",ee),r==null||r.addEventListener("click",te)}function X(){const{favoriteAddButtonRef:e,favoriteRemoveButtonRef:t,ratingButtonRef:r}=Y();e==null||e.removeEventListener("click",Z),t==null||t.removeEventListener("click",ee),r==null||r.removeEventListener("click",te)}function O({type:e="",className:t="",children:r=""}){return`
        <button
            class="exercise-modal__btn exercise-modal__btn--${e} ${t}"
            type="button"
          >
            ${r}
        </button>
    `}function Y(){const e=q.querySelector(".exercise-modal__action-bar");return{favoriteAddButtonRef:e.querySelector(".js-favorite-add-btn"),favoriteRemoveButtonRef:e.querySelector(".js-favorite-remove-btn"),ratingButtonRef:e.querySelector(".js-rating-btn")}}function Z(){E.addFavoriteExercise(u),G(),J()}function ee(){E.removeFavoriteExercise(u==null?void 0:u._id),G(),J()}function te(){me({exerciseId:u._id})}export{Ae as a,ke as b,ye as c,Fe as d,Ie as e,J as f,Me as g,E as h,Ce as r,m as s};
//# sourceMappingURL=exercise-modal-C8xsVz16.js.map
