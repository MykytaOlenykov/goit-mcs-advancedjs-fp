var A=e=>{throw TypeError(e)};var $=(e,t,s)=>t.has(e)||A("Cannot "+s);var l=(e,t,s)=>($(e,t,"read from private field"),s?s.call(e):t.get(e)),h=(e,t,s)=>t.has(e)?A("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),k=(e,t,s,i)=>($(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s),_=(e,t,s)=>($(e,t,"access private method"),s);import{d as ce,c as le,a as B,e as de,i as I,b as ue,P as me}from"./vendor-DbvQrPBk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const F=document.querySelector(".js-header-nav"),{pathname:fe}=window.location;var H,N;fe.includes("favorites")?(H=F.querySelector('[data-path="favorites"]'))==null||H.classList.add("link--active"):(N=F.querySelector('[data-path="home"]'))==null||N.classList.add("link--active");const D=document.querySelector("[data-burger]"),b=document.querySelector("[data-burger-open]"),pe=document.querySelector("[data-burger-close]"),z=()=>{const e=b.getAttribute("aria-expanded")==="true"||!1;b.setAttribute("aria-expanded",!e),D.classList.toggle("menu-is-hidden")};b.addEventListener("click",z);pe.addEventListener("click",z);window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(D.classList.add("menu-is-hidden"),b.setAttribute("aria-expanded",!1))});const g=ce.create({baseURL:"https://your-energy.b.goit.study/api/"});async function Pe(e){const{params:t,signal:s}=e??{},{page:i=1,limit:r=10,...a}=t??{},{data:n}=await g.get("exercises",{params:{...a,page:i,limit:r},signal:s});return n}async function ve({exerciseId:e,signal:t}){const{data:s}=await g.get(`exercises/${e}`,{signal:t});return s}async function ge({exerciseId:e,body:t}){const{data:s}=await g.patch(`exercises/${e}/rating`,t);return s}async function Re(e){const{params:t,signal:s}=e??{},{page:i=1,limit:r=12,...a}=t??{},{data:n}=await g.get("filters",{params:{...a,page:i,limit:r},signal:s});return n}async function T(e){const{signal:t}={},{data:s}=await g.get("quote",{signal:t});return s}async function je({body:e}){const{data:t}=await g.post("subscription",e);return t}let ye=le({email:B().email("Please enter a valid email").required("Email is required"),rate:de().required("Rating is required").min(1,"Rating must be between 1 and 5").max(5,"Rating must be between 1 and 5"),review:B().trim().required("Comment is required.")});const E={closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};let J=null;function he({exerciseId:e}){J=e,E.modal.classList.remove("is-hidden")}function _e(){E.modal.classList.add("is-hidden"),U()}const o=document.querySelector(".modal-form");E.closeModalBtn.addEventListener("click",_e);document.querySelectorAll(".modal-star").forEach(e=>{e.addEventListener("click",t=>{const s=t.currentTarget.dataset.value;document.querySelectorAll(".modal-star").forEach(r=>{r.dataset.value<=s?r.querySelector("svg").style.fill="#eea10c":r.querySelector("svg").style.fill="rgba(244, 244, 244, 0.20)"});const i=document.querySelector(".modal-rating");i.textContent=`${s}.0`})});async function xe(e){e.preventDefault();const t=e.target.elements,s=t.email.value,i=t.comment.value,r=parseInt(o.querySelector(".modal-rating").textContent);o.querySelector("#email-error").style.display="none",o.querySelector("#stars-error").style.display="none";try{const a=await ye.validate({email:s,review:i,rate:r},{abortEarly:!1});await ge({exerciseId:J,body:a}),E.modal.classList.add("is-hidden"),I.success({message:"Thanks for your feedback",position:"topRight"}),U()}catch(a){if(ue(a))I.error({message:"Something went wrong, please try again later.",position:"topRight"});else{const n={};a.inner.forEach(y=>{n[y.path]||(n[y.path]=y.message)}),n.email&&(o.querySelector("#email-error").textContent=n.email,o.querySelector("#email-error").style.display="block"),n.review&&(o.querySelector("#comment-error").textContent=n.review,o.querySelector("#comment-error").style.display="block"),n.rate&&(o.querySelector("#stars-error").textContent=n.rate,o.querySelector("#stars-error").style.display="block")}}}o.addEventListener("submit",xe);function U(){o.reset(),document.querySelectorAll(".modal-star").forEach(t=>{t.querySelector("svg").style.fill="rgba(244, 244, 244, 0.20)"});const e=document.querySelector(".modal-rating");e.textContent="0.0",o.querySelector("#email-error").textContent="",o.querySelector("#email-error").style.display="none",o.querySelector("#comment-error").textContent="",o.querySelector("#comment-error").style.display="none",o.querySelector("#stars-error").textContent="",o.querySelector("#stars-error").style.display="none"}var v,c,p,K,C;class be{constructor(){h(this,p);h(this,v,"favorites_exercises_ls_key");h(this,c,[]);k(this,c,_(this,p,K).call(this))}get favoritesExercises(){return l(this,c)}isFavoriteExercise(t){return l(this,c).some(({_id:s})=>s===t)}addFavoriteExercise(t){this.isFavoriteExercise(t._id)||(l(this,c).push(t),_(this,p,C).call(this))}removeFavoriteExercise(t){k(this,c,l(this,c).filter(({_id:s})=>s!==t)),_(this,p,C).call(this)}}v=new WeakMap,c=new WeakMap,p=new WeakSet,K=function(){try{const t=localStorage.getItem(l(this,v));if(t){const s=JSON.parse(t);return Array.isArray(s)?s:[]}return[]}catch{return localStorage.removeItem(l(this,v)),[]}},C=function(){localStorage.setItem(l(this,v),JSON.stringify(l(this,c)))};const L=new be,d="/goit-mcs-advancedjs-fp/assets/icons-sprite-IovVlU0g.svg",u=document.querySelector(".exercises__cards"),x=document.querySelector(".exercises__cards-empty");function He(){u.innerHTML="",u.classList.remove("exercises__cards-wrkt")}function Ne(e){x.classList.add("visually-hidden");const t=e.map(s=>`<li class="exercises__cards-item">
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
        `).join("");u.innerHTML=t}function De(){u.innerHTML="",u.classList.remove("exercises__cards-wrkt")}function Se(e,t=!1){x.classList.add("visually-hidden");const s=a=>t?`<button class="exercises__remove-btn" type="button" data-remove-id="${a._id}">
          <svg width="18" height="18" style="stroke: black">
            <use href="${d}#trash"></use>
          </svg>
      </button>`:`<span class="exercises__name-rating">
          ${a.rating}
           <svg>
            <use href="${d}#star"></use>
            </svg>
      </span>`,i=e.map(a=>`<li class="exercises__name">
       <div class="exercises__name-wraper-1">
        <span class="exercises__name-tag">Workout</span>
        ${s(a)}
        <button class="exercises__name-btn" type="button" data-modal-open="${a._id}">Start
          <svg class="exercises__name-icon" width="16" height="16">
            <use href="${d}#arrow"></use>
          </svg>
        </button>
        </div>

        <div class="exercises__name-h3-wraper">
        <h3 class="exercises__name-h3">${a.name}</h3>
        <div class="exersize__h3-icon-wraper">
          <svg class="exersize__h3-icon" width="18" height="18">
            <use href="${d}#runner"></use>
          </svg>
        </div>
        </div>

        <ul class="exercises__name-props" >
            <li class="exercises__name-item" >BurnedCalories:<span class="exercises__name-clr">${a.burnedCalories}</span></li>
            <li class="exercises__name-item">Body part:<span class="exercises__name-clr">${a.bodyPart}</span></li>
            <li class="exercises__name-item">Target:<span class="exercises__name-clr">${a.target}</span></li>
        </ul>
        </li>
        `).join(""),r=t?`It appears that you haven't added any exercises to your favorites yet.
      To get started, you can add exercises that you like to your favorites
      for easier access in the future.`:"No exercises found";if(e.length===0){u.innerHTML="",x.classList.remove("visually-hidden"),x.innerHTML=r;return}u.classList.add("exercises__cards-wrkt"),u.innerHTML=i}const Q=()=>{if(!window.location.pathname.includes("favorites"))return;const e=L.favoritesExercises;Se(e,!0)},S=document.querySelector("#tui-pagination-container");let O;const Ee=5,Le={first:"double-arrow-prev",prev:"arrow-prev",next:"arrow-next",last:"double-arrow-next"},qe=()=>{S.classList.add("visually-hidden"),S.innerHTML=""},P=(e,t=!1)=>`<a href="#" class="tui-page-btn tui-${e} ${t?"tui-is-disabled":""}" aria-label="page-${e}">
      <svg width="20" height="20">
        <use href="${d}#${Le[e]}"></use>
      </svg>
    </a>`,ze=(e,t,s,i)=>{e>1?(S.classList.remove("visually-hidden"),O=new me(S,{totalItems:e*t,itemsPerPage:t,visiblePages:Ee,page:s,template:{moveButton:r=>{const{type:a}=r;return P(a)},disabledMoveButton:r=>{const{type:a}=r;return P(a,!0)}}}),O.on("afterMove",i)):qe()},Je=e=>e.charAt(0).toUpperCase()+e.slice(1),Ue=(e,t)=>{let s;return function(...i){const r=this;clearTimeout(s),s=setTimeout(()=>e.apply(r,i),t)}};function we(){let e=localStorage.getItem("quote");const t=new Date().getDate();if(!e)T().then(s=>{s.date=t,localStorage.setItem("quote",JSON.stringify(s)),M(s)});else{const s=JSON.parse(e);s.date!==t?T().then(i=>{i.date=t,localStorage.setItem("quote",JSON.stringify(i)),M(i)}):M(s)}}function M(e){const t=document.querySelector(".p_quote_text");t.innerHTML=e.quote;const s=document.querySelector(".p_quote_author");s.innerHTML=e.author}we();const $e=document.querySelector(".js-exercises-cards"),f=document.querySelector(".exercise-modal-backdrop"),q=f.querySelector(".exercise-modal__content"),V=f.querySelector(".exercise-modal__close-btn"),G="exercise-modal-backdrop--is-hidden";let m=null;$e.addEventListener("click",e=>{var r;const{target:t}=e;let s=t.dataset.modalOpen;if(s){R({exerciseId:s});return}const i=t.closest("button[data-modal-open]");if(s=(r=i==null?void 0:i.dataset)==null?void 0:r.modalOpen,s){R({exerciseId:s});return}});async function R({exerciseId:e}){try{const t=await ve({exerciseId:e});m=t,q.innerHTML=Ie(t),ke()}catch{I.error({message:"Something went wrong, please try again later.",position:"topRight"})}}function ke(){ee(),V.addEventListener("click",w),f.addEventListener("click",X),document.addEventListener("keydown",W),f.classList.remove(G)}function Me(){te(),V.removeEventListener("click",w),f.removeEventListener("click",X),document.removeEventListener("keydown",W)}function w(){f.classList.add(G),setTimeout(()=>{Me(),m=null,q.innerHTML=""},500)}function W(e){e.code==="Escape"&&w()}function X(e){e.target===f&&w()}function Ie({_id:e,bodyPart:t,equipment:s,gifUrl:i,name:r,target:a,description:n,rating:y,burnedCalories:ne,popularity:oe}){return`
      <div class="exercise-modal__thumb">
        <img class="exercise-modal__img" src="${i}" alt="${r}" />
      </div>

      <div>
        <h3 class="exercise-modal__title">${r}</h3>

        ${Ce({rating:y})}

        ${Fe({bodyPart:t,equipment:s,target:a,burnedCalories:ne,popularity:oe})}

        <p class="exercise-modal__desc">${n}</p>

        <div class="js-action-bar-wrapper">
            ${Y({exerciseId:e})}
        </div>
      </div>
  `}function Ce({rating:e}){return`
        <div class="exercise-modal__rating">
          <p class="exercise-modal__rating-value">${e}</p>

          ${[1,2,3,4,5].map(t=>Ae({isActive:t<=Math.round(e)})).join("")}
        </div>
    `}function Ae({isActive:e}){return`
        <svg class="exercise-modal__rating-star ${e?"exercise-modal__rating-star--accent":""}">
            <use href="${d}#star"></use>
        </svg>
    `}const Be=[["target","Target"],["bodyPart","Body Part"],["equipment","Equipment"],["popularity","Popular"],["burnedCalories","Burned Calories"]];function Fe(e){return`
        <ul class="exercise-modal__info">
          ${Be.map(([t,s])=>{const i=e[t];return i?`
                <li>
                    <h4 class="exercise-modal__info-title">${s}</h4>
                    <p class="exercise-modal__info-desc">${i}</p>
                </li>
            `:""}).join("")}
        </ul>
    `}function Y({exerciseId:e}){const t=L.isFavoriteExercise(e);return`
        <div class="exercise-modal__action-bar ${t?"exercise-modal__action-bar--wrap":""}">
          ${j({type:"primary",className:t?"js-favorite-remove-btn":"js-favorite-add-btn",children:t?`
                Remove from favorites
                <svg>
                  <use href="${d}#trash"></use>
                </svg>
              `:`
                Add to favorites
                <svg>
                  <use href="${d}#heart"></use>
                </svg>
              `})}
          ${j({type:"secondary",className:`js-rating-btn ${t?"exercise-modal__btn--large":""}`,children:`
             Give a rating
           `})}
        </div>
    `}function Z(){const e=q.querySelector(".js-action-bar-wrapper");te(),e.innerHTML=Y({exerciseId:m._id}),ee()}function ee(){const{favoriteAddButtonRef:e,favoriteRemoveButtonRef:t,ratingButtonRef:s}=se();e==null||e.addEventListener("click",re),t==null||t.addEventListener("click",ae),s==null||s.addEventListener("click",ie)}function te(){const{favoriteAddButtonRef:e,favoriteRemoveButtonRef:t,ratingButtonRef:s}=se();e==null||e.removeEventListener("click",re),t==null||t.removeEventListener("click",ae),s==null||s.removeEventListener("click",ie)}function j({type:e="",className:t="",children:s=""}){return`
        <button
            class="exercise-modal__btn exercise-modal__btn--${e} ${t}"
            type="button"
          >
            ${s}
        </button>
    `}function se(){const e=q.querySelector(".exercise-modal__action-bar");return{favoriteAddButtonRef:e.querySelector(".js-favorite-add-btn"),favoriteRemoveButtonRef:e.querySelector(".js-favorite-remove-btn"),ratingButtonRef:e.querySelector(".js-rating-btn")}}function re(){L.addFavoriteExercise(m),Z(),Q()}function ae(){L.removeFavoriteExercise(m==null?void 0:m._id),Z(),Q()}function ie(){he({exerciseId:m._id})}export{qe as a,Ue as b,Je as c,Ne as d,De as e,Pe as f,Re as g,Se as h,ze as i,je as j,L as k,He as r};
//# sourceMappingURL=exercise-modal-Cxf5koiL.js.map
