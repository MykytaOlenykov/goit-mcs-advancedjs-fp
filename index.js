import{g as G,a as K,b as V}from"./assets/sidebar-info-BXbJt8hF.js";import{P as W}from"./assets/vendor-DHJPRCEW.js";const d=document.querySelector(".exercises__cards"),h=document.querySelector(".exercises__cards-empty");function Q(){d.innerHTML="",d.classList.remove("exercises__cards-wrkt")}function X(e){h.classList.add("hidden");const r=e.map(s=>`<li class="exercises__cards-item">
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
        `).join("");d.innerHTML=r}function J(){d.innerHTML="",d.classList.remove("exercises__cards-wrkt")}function Y(e){h.classList.add("hidden");const r=e.map(s=>`<li class="exercises__name">
       <div class="exercises__name-wraper-1">
        <span class="exercises__name-tag">Workout</span>
        <span class="exercises__name-rating">${s.rating}</span>
        <button class="exercises__name-btn" type="button" data-modal-open="${s._id}">Start</button>

          <svg class="exercises__name-icon" width="16" height="16" style="stroke: black;">
            <use href="./assets/icons/icons-sprite.svg#arrow"></use>
          </svg>


        </div>

        <div class="exercises__name-h3-wraper">
        <h3 class="exercises__name-h3">${s.name}</h3>
        <div class="exersize__h3-icon-wraper">
          <svg class="exersize__h3-icon" width="18" height="18">
            <use href="../assets/icons/icons-sprite.svg#runner"></use>
          </svg>
        </div>
        </div>

        <ul class="exercises__name-props" >
            <li class="exercises__name-item" >BurnedCalories:<span class="exercises__name-clr">${s.burnedCalories}</span></li>
            <li class="exercises__name-item">Body part:<span class="exercises__name-clr">${s.bodyPart}</span></li>
            <li class="exercises__name-item">Target:<span class="exercises__name-clr">${s.target}</span></li>
        </ul>
        </li>
        `).join("");if(e.length===0){d.innerHTML="",h.classList.remove("hidden"),h.innerHTML="No exercises found";return}d.classList.add("exercises__cards-wrkt"),d.innerHTML=r}document.addEventListener("DOMContentLoaded",()=>{var E,w,S,k,T;const e={buttonsAll:document.querySelector(".exercises__buttons"),exerciseCards:document.querySelector(".exercises__cards"),searchBtnClear:document.querySelector("#search-btn-clear"),searchForm:document.querySelector("#search-form"),searchInput:document.querySelector("#search-input"),breadcrumbsTitle:document.querySelector("#exercises-breadcrumbs h2"),breadcrumbsTitleDivider:document.querySelector("#exercises-breadcrumbs span"),breadcrumbsSubtitle:document.querySelector("#exercises-breadcrumbs p"),paginationContainer:document.querySelector("#tui-pagination-container"),loader:document.querySelector("#loader")},r=12,s=window.innerWidth<=768?8:10,l=10;let a=1,o="Muscles",n="",_;const m={Muscles:"muscles",Equipment:"equipment","Body parts":"bodypart"},b={first:"double-arrow-prev",prev:"arrow-prev",next:"arrow-next",last:"double-arrow-next"},f=()=>{e.paginationContainer.classList.add("hidden"),e.paginationContainer.innerHTML=""},D=t=>t.charAt(0).toUpperCase()+t.slice(1),H=(t,i)=>{let c;return function(...p){const U=this;clearTimeout(c),c=setTimeout(()=>t.apply(U,p),i)}},L=()=>{window.scrollTo({top:0,behavior:"smooth"})},y=(t,i=!1)=>`<a href="#" class="tui-page-btn tui-${t} ${i?"tui-is-disabled":""}">
        <svg width="20" height="20">
          <use href="./assets/icons/icons-sprite.svg#${b[t]}"></use>
        </svg>
      </a>`,C=(t,i)=>{t>1?(e.paginationContainer.classList.remove("hidden"),_=new W(e.paginationContainer,{totalItems:t*i,itemsPerPage:i,visiblePages:l,page:a,template:{moveButton:c=>{const{type:p}=c;return y(p)},disabledMoveButton:c=>{const{type:p}=c;return y(p,!0)}}}),_.on("afterMove",c=>{a=c.page,n?g({[m[o]]:n,page:a,limit:s}):x(o),L()})):f()},x=async(t="Muscles")=>{Q(),f(),e.loader.classList.remove("hidden");try{const{results:i,totalPages:c}=await G({params:{filter:t,page:a,limit:r}});e.searchForm.classList.add("hidden"),e.breadcrumbsTitleDivider.classList.add("hidden"),e.breadcrumbsSubtitle.classList.add("hidden"),X(i),C(c,r)}catch(i){console.error("Error fetching filters:",i)}finally{e.loader.classList.add("hidden")}},g=async t=>{J(),f(),e.loader.classList.remove("hidden");try{const{results:i,totalPages:c}=await K({params:t});Y(i),C(c,s)}catch(i){console.error("Error fetching exercises:",i)}finally{e.loader.classList.add("hidden")}},O=async t=>{t.target.nodeName==="BUTTON"&&(o=t.target.textContent.trim(),a=1,n="",await x(o))},F=async t=>{t.preventDefault();const i=t.target.closest(".exercises__cards-link");i&&(n=i.getAttribute("data-name"),e.breadcrumbsSubtitle.textContent=D(n),e.breadcrumbsSubtitle.classList.remove("hidden"),e.searchForm.classList.remove("hidden"),e.breadcrumbsTitleDivider.classList.remove("hidden"),a=1,L(),await g({[m[o]]:n,page:a,limit:s}))},R=()=>{e.searchInput.value.trim()!==""?e.searchBtnClear.classList.remove("hidden"):e.searchBtnClear.classList.add("hidden")},j=H(async()=>{const t=e.searchInput.value;t.trim()!==""?e.searchBtnClear.classList.remove("hidden"):e.searchBtnClear.classList.add("hidden"),a=1,await g({[m[o]]:n,keyword:t,page:a,limit:s})},300),N=()=>{e.searchInput.value="",e.searchInput.focus(),e.searchBtnClear.classList.add("hidden"),a=1,g({[m[o]]:n,keyword:"",page:a,limit:s})},z=async()=>{n&&(a=1,n="",await x(o))};(E=e.buttonsAll)==null||E.addEventListener("click",O),(w=e.exerciseCards)==null||w.addEventListener("click",F),(S=e.searchInput)==null||S.addEventListener("input",()=>{R(),j()}),(k=e.searchBtnClear)==null||k.addEventListener("click",N),(T=e.breadcrumbsTitle)==null||T.addEventListener("click",z),x(o)});const $=document.querySelector(".exercises__buttons"),Z=e=>{if(e.target.tagName==="BUTTON"){const r=document.querySelector(".exercises__btn-smpl.active");r&&r.classList.remove("active"),e.target.classList.add("active")}};$&&$.addEventListener("click",Z);const ee="/goit-mcs-advancedjs-fp/assets/icons-sprite-CpMKLgGQ.svg",se=document.querySelector(".js-exercises-cards"),u=document.querySelector(".exercise-modal-backdrop"),M=u.querySelector(".exercise-modal__content"),q=u.querySelector(".exercise-modal__close-btn"),P="exercise-modal-backdrop--is-hidden";se.addEventListener("click",e=>{var a;const{target:r}=e;let s=r.dataset.modalOpen;if(s){B({exerciseId:s});return}const l=r.closest("button[data-modal-open]");if(s=(a=l==null?void 0:l.dataset)==null?void 0:a.modalOpen,s){B({exerciseId:s});return}});async function B({exerciseId:e}){try{const r=await V({exerciseId:e});M.innerHTML=ae(r),te()}catch{}}function te(){q.addEventListener("click",v),u.addEventListener("click",A),document.addEventListener("keydown",I),u.classList.remove(P)}function re(){q.removeEventListener("click",v),u.removeEventListener("click",A),document.removeEventListener("keydown",I)}function v(){u.classList.add(P),setTimeout(()=>{M.innerHTML="",re()},500)}function I(e){e.code==="Escape"&&v()}function A(e){e.target===u&&v()}function ae({_id:e,bodyPart:r,equipment:s,gifUrl:l,name:a,target:o,description:n,rating:_,burnedCalories:m,popularity:b}){return`
      <div class="exercise-modal__thumb">
        <img class="exercise-modal__img" src="${l}" alt="${a}" />
      </div>

      <div>
        <h3 class="exercise-modal__title">${a}</h3>

        ${ie({rating:_})}
  
        ${oe({bodyPart:r,equipment:s,target:o,burnedCalories:m,popularity:b})}

        <p class="exercise-modal__desc">${n}</p>

        ${le({exerciseId:e})}
      </div>
  `}function ie({rating:e}){return`
        <div class="exercise-modal__rating">
          <p class="exercise-modal__rating-value">${e}</p>
         
          ${[1,2,3,4,5].map(r=>ne({isActive:r<=Math.round(e)})).join("")}
        </div>
    `}function ne({isActive:e}){return`
        <svg class="exercise-modal__rating-star ${e?"exercise-modal__rating-star--accent":""}">
            <use href="${ee}#star"></use>
        </svg>
    `}const ce=[["target","Target"],["bodyPart","Body Part"],["equipment","Equipment"],["popularity","Popular"],["burnedCalories","Burned Calories"]];function oe(e){return`
        <ul class="exercise-modal__info">
          ${ce.map(([r,s])=>{const l=e[r];return l?`
                <li>
                    <h4 class="exercise-modal__info-title">${s}</h4>
                    <p class="exercise-modal__info-desc">${l}</p>
                </li>
            `:""}).join("")}
        </ul>
    `}function le({exerciseId:e}){return`
        <div class="exercise-modal__action-bar">
          <button
            class="exercise-modal__btn exercise-modal__btn--primary"
            type="button"
          >
            Add to favorites
            <svg>
              <use href="./assets/icons/icons-sprite.svg#heart"></use>
            </svg>
          </button>
          <button
            class="exercise-modal__btn exercise-modal__btn--secondary"
            type="button"
          >
            Give a rating
          </button>
        </div>
    `}
//# sourceMappingURL=index.js.map
