import{g as V,a as W,b as G}from"./assets/sidebar-info-BXbJt8hF.js";import{P as K}from"./assets/vendor-DHJPRCEW.js";const d=document.querySelector(".exercises__cards"),g=document.querySelector(".exercises__cards-empty");function X(){d.innerHTML="",d.classList.remove("exercises__cards-wrkt")}function J(e){g.classList.add("hidden");const r=e.map(s=>`<li class="exercises__cards-item">
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
        `).join("");d.innerHTML=r}function Q(){d.innerHTML="",d.classList.remove("exercises__cards-wrkt")}function Y(e){g.classList.add("hidden");const r=e.map(s=>`<li class="exercises__name">
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
        `).join("");if(e.length===0){d.innerHTML="",g.classList.remove("hidden"),g.innerHTML="No exercises found";return}d.classList.add("exercises__cards-wrkt"),d.innerHTML=r}document.addEventListener("DOMContentLoaded",()=>{var E,w,S,k,T;const e={buttonsAll:document.querySelector(".exercises__buttons"),exerciseCards:document.querySelector(".exercises__cards"),searchBtnClear:document.querySelector("#search-btn-clear"),searchForm:document.querySelector("#search-form"),searchInput:document.querySelector("#search-input"),breadcrumbsTitle:document.querySelector("#exercises-breadcrumbs h2"),breadcrumbsTitleDivider:document.querySelector("#exercises-breadcrumbs span"),breadcrumbsSubtitle:document.querySelector("#exercises-breadcrumbs p"),paginationContainer:document.querySelector("#tui-pagination-container"),loader:document.querySelector("#loader")},r=12,s=window.innerWidth<=768?8:10,l=10;let a=1,o="Muscles",n="",p;const m={Muscles:"muscles",Equipment:"equipment","Body parts":"bodypart"},b={first:"double-arrow-prev",prev:"arrow-prev",next:"arrow-next",last:"double-arrow-next"},f=()=>{e.paginationContainer.classList.add("hidden"),e.paginationContainer.innerHTML=""},D=t=>t.charAt(0).toUpperCase()+t.slice(1),H=(t,i)=>{let c;return function(..._){const U=this;clearTimeout(c),c=setTimeout(()=>t.apply(U,_),i)}},L=()=>{window.scrollTo({top:0,behavior:"smooth"})},y=(t,i=!1)=>`<a href="#" class="tui-page-btn tui-${t} ${i?"tui-is-disabled":""}">
        <svg width="20" height="20">
          <use href="./assets/icons/icons-sprite.svg#${b[t]}"></use>
        </svg>
      </a>`,C=(t,i)=>{t>1?(e.paginationContainer.classList.remove("hidden"),p=new K(e.paginationContainer,{totalItems:t*i,itemsPerPage:i,visiblePages:l,page:a,template:{moveButton:c=>{const{type:_}=c;return y(_)},disabledMoveButton:c=>{const{type:_}=c;return y(_,!0)}}}),p.on("afterMove",c=>{a=c.page,n?h({[m[o]]:n,page:a,limit:s}):x(o),L()})):f()},x=async(t="Muscles")=>{X(),f(),e.loader.classList.remove("hidden");try{const{results:i,totalPages:c}=await V({params:{filter:t,page:a,limit:r}});e.searchForm.classList.add("hidden"),e.breadcrumbsTitleDivider.classList.add("hidden"),e.breadcrumbsSubtitle.classList.add("hidden"),J(i),C(c,r)}catch(i){console.error("Error fetching filters:",i)}finally{e.loader.classList.add("hidden")}},h=async t=>{Q(),f(),e.loader.classList.remove("hidden");try{const{results:i,totalPages:c}=await W({params:t});Y(i),C(c,s)}catch(i){console.error("Error fetching exercises:",i)}finally{e.loader.classList.add("hidden")}},O=async t=>{t.target.nodeName==="BUTTON"&&(o=t.target.textContent.trim(),a=1,n="",await x(o))},F=async t=>{t.preventDefault();const i=t.target.closest(".exercises__cards-link");i&&(n=i.getAttribute("data-name"),e.breadcrumbsSubtitle.textContent=D(n),e.breadcrumbsSubtitle.classList.remove("hidden"),e.searchForm.classList.remove("hidden"),e.breadcrumbsTitleDivider.classList.remove("hidden"),a=1,L(),await h({[m[o]]:n,page:a,limit:s}))},R=()=>{e.searchInput.value.trim()!==""?e.searchBtnClear.classList.remove("hidden"):e.searchBtnClear.classList.add("hidden")},N=H(async()=>{const t=e.searchInput.value;t.trim()!==""?e.searchBtnClear.classList.remove("hidden"):e.searchBtnClear.classList.add("hidden"),a=1,await h({[m[o]]:n,keyword:t,page:a,limit:s})},300),j=()=>{e.searchInput.value="",e.searchInput.focus(),e.searchBtnClear.classList.add("hidden"),a=1,h({[m[o]]:n,keyword:"",page:a,limit:s})},z=async()=>{n&&(a=1,n="",await x(o))};(E=e.buttonsAll)==null||E.addEventListener("click",O),(w=e.exerciseCards)==null||w.addEventListener("click",F),(S=e.searchInput)==null||S.addEventListener("input",()=>{R(),N()}),(k=e.searchBtnClear)==null||k.addEventListener("click",j),(T=e.breadcrumbsTitle)==null||T.addEventListener("click",z),x(o)});const B=document.querySelector(".exercises__buttons"),Z=e=>{if(e.target.tagName==="BUTTON"){const r=document.querySelector(".exercises__btn-smpl.active");r&&r.classList.remove("active"),e.target.classList.add("active")}};B&&B.addEventListener("click",Z);const ee=document.querySelector(".js-exercises-cards"),u=document.querySelector(".exercise-modal-backdrop"),M=u.querySelector(".exercise-modal__content"),q=u.querySelector(".exercise-modal__close-btn"),P="exercise-modal-backdrop--is-hidden";ee.addEventListener("click",e=>{var a;const{target:r}=e;let s=r.dataset.modalOpen;if(s){$({exerciseId:s});return}const l=r.closest("button[data-modal-open]");if(s=(a=l==null?void 0:l.dataset)==null?void 0:a.modalOpen,s){$({exerciseId:s});return}});async function $({exerciseId:e}){try{const r=await G({exerciseId:e});M.innerHTML=re(r),se()}catch{}}function se(){q.addEventListener("click",v),u.addEventListener("click",A),document.addEventListener("keydown",I),u.classList.remove(P)}function te(){q.removeEventListener("click",v),u.removeEventListener("click",A),document.removeEventListener("keydown",I)}function v(){u.classList.add(P),setTimeout(()=>{M.innerHTML="",te()},500)}function I(e){e.code==="Escape"&&v()}function A(e){e.target===u&&v()}function re({_id:e,bodyPart:r,equipment:s,gifUrl:l,name:a,target:o,description:n,rating:p,burnedCalories:m,popularity:b}){return`
      <div class="exercise-modal__thumb">
        <img class="exercise-modal__img" src="${l}" alt="${a}" />
      </div>

      <div>
        <h3 class="exercise-modal__title">${a}</h3>

        ${ae({rating:p})}
  
        ${ce({bodyPart:r,equipment:s,target:o,burnedCalories:m,popularity:b})}

        <p class="exercise-modal__desc">${n}</p>

        ${oe({exerciseId:e})}
      </div>
  `}function ae({rating:e}){return`
        <div class="exercise-modal__rating">
          <p class="exercise-modal__rating-value">${e}</p>
         
          ${[1,2,3,4,5].map(r=>ie({isActive:r<=Math.round(e)})).join("")}
        </div>
    `}function ie({isActive:e}){return`
        <svg class="exercise-modal__rating-star ${e?"exercise-modal__rating-star--accent":""}">
            <use href="./assets/icons/icons-sprite.svg#star"></use>
        </svg>
    `}const ne=[["target","Target"],["bodyPart","Body Part"],["equipment","Equipment"],["popularity","Popular"],["burnedCalories","Burned Calories"]];function ce(e){return`
        <ul class="exercise-modal__info">
          ${ne.map(([r,s])=>{const l=e[r];return l?`
                <li>
                    <h4 class="exercise-modal__info-title">${s}</h4>
                    <p class="exercise-modal__info-desc">${l}</p>
                </li>
            `:""}).join("")}
        </ul>
    `}function oe({exerciseId:e}){return`
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
