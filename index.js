var N=e=>{throw TypeError(e)};var k=(e,s,t)=>s.has(e)||N("Cannot "+t);var u=(e,s,t)=>(k(e,s,"read from private field"),t?t.call(e):s.get(e)),E=(e,s,t)=>s.has(e)?N("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,t),T=(e,s,t,n)=>(k(e,s,"write to private field"),n?n.call(e,t):s.set(e,t),t),y=(e,s,t)=>(k(e,s,"access private method"),t);import{g as ve,a as _e,b as pe}from"./assets/sidebar-info-BXbJt8hF.js";import{P as xe}from"./assets/vendor-DHJPRCEW.js";const m=document.querySelector(".exercises__cards"),S=document.querySelector(".exercises__cards-empty");function he(){m.innerHTML="",m.classList.remove("exercises__cards-wrkt")}function ge(e){S.classList.add("hidden");const s=e.map(t=>`<li class="exercises__cards-item">
            <a class="exercises__cards-link" href="#" data-name="${t.name}">
            <p class="exercises__cards-descr">
                <span class="exercises__cards-metadata-name">${t.name}</span>
                <span class="exercises__cards-metadata-filter">${t.filter}</span>
            </p>
            <img
                class="exercises__cards-image"
                src="${t.imgURL}"
                alt="${t.name}"
                loading="lazy"
                />
            </a>
        </li>
        `).join("");m.innerHTML=s}function fe(){m.innerHTML="",m.classList.remove("exercises__cards-wrkt")}function be(e){S.classList.add("hidden");const s=e.map(t=>`<li class="exercises__name">
       <div class="exercises__name-wraper-1">
        <span class="exercises__name-tag">Workout</span>
        <span class="exercises__name-rating">${t.rating}</span>
        <button class="exercises__name-btn" type="button" data-modal-open="${t._id}">Start</button>

          <svg class="exercises__name-icon" width="16" height="16" style="stroke: black;">
            <use href="./assets/icons/icons-sprite.svg#arrow"></use>
          </svg>


        </div>

        <div class="exercises__name-h3-wraper">
        <h3 class="exercises__name-h3">${t.name}</h3>
        <div class="exersize__h3-icon-wraper">
          <svg class="exersize__h3-icon" width="18" height="18">
            <use href="../assets/icons/icons-sprite.svg#runner"></use>
          </svg>
        </div>
        </div>

        <ul class="exercises__name-props" >
            <li class="exercises__name-item" >BurnedCalories:<span class="exercises__name-clr">${t.burnedCalories}</span></li>
            <li class="exercises__name-item">Body part:<span class="exercises__name-clr">${t.bodyPart}</span></li>
            <li class="exercises__name-item">Target:<span class="exercises__name-clr">${t.target}</span></li>
        </ul>
        </li>
        `).join("");if(e.length===0){m.innerHTML="",S.classList.remove("hidden"),S.innerHTML="No exercises found";return}m.classList.add("exercises__cards-wrkt"),m.innerHTML=s}document.addEventListener("DOMContentLoaded",()=>{var j,D,R,H,O;const e={buttonsAll:document.querySelector(".exercises__buttons"),exerciseCards:document.querySelector(".exercises__cards"),searchBtnClear:document.querySelector("#search-btn-clear"),searchForm:document.querySelector("#search-form"),searchInput:document.querySelector("#search-input"),breadcrumbsTitle:document.querySelector("#exercises-breadcrumbs h2"),breadcrumbsTitleDivider:document.querySelector("#exercises-breadcrumbs span"),breadcrumbsSubtitle:document.querySelector("#exercises-breadcrumbs p"),paginationContainer:document.querySelector("#tui-pagination-container"),loader:document.querySelector("#loader")},s=12,t=window.innerWidth<=768?8:10,n=10;let i=1,l="Muscles",c="",f;const x={Muscles:"muscles",Equipment:"equipment","Body parts":"bodypart"},$={first:"double-arrow-prev",prev:"arrow-prev",next:"arrow-next",last:"double-arrow-next"},B=()=>{e.paginationContainer.classList.add("hidden"),e.paginationContainer.innerHTML=""},ie=r=>r.charAt(0).toUpperCase()+r.slice(1),ae=(r,a)=>{let o;return function(...g){const me=this;clearTimeout(o),o=setTimeout(()=>r.apply(me,g),a)}},I=()=>{window.scrollTo({top:0,behavior:"smooth"})},P=(r,a=!1)=>`<a href="#" class="tui-page-btn tui-${r} ${a?"tui-is-disabled":""}">
        <svg width="20" height="20">
          <use href="./assets/icons/icons-sprite.svg#${$[r]}"></use>
        </svg>
      </a>`,A=(r,a)=>{r>1?(e.paginationContainer.classList.remove("hidden"),f=new xe(e.paginationContainer,{totalItems:r*a,itemsPerPage:a,visiblePages:n,page:i,template:{moveButton:o=>{const{type:g}=o;return P(g)},disabledMoveButton:o=>{const{type:g}=o;return P(g,!0)}}}),f.on("afterMove",o=>{i=o.page,c?L({[x[l]]:c,page:i,limit:t}):b(l),I()})):B()},b=async(r="Muscles")=>{he(),B(),e.loader.classList.remove("hidden");try{const{results:a,totalPages:o}=await ve({params:{filter:r,page:i,limit:s}});e.searchForm.classList.add("hidden"),e.breadcrumbsTitleDivider.classList.add("hidden"),e.breadcrumbsSubtitle.classList.add("hidden"),ge(a),A(o,s)}catch(a){console.error("Error fetching filters:",a)}finally{e.loader.classList.add("hidden")}},L=async r=>{fe(),B(),e.loader.classList.remove("hidden");try{const{results:a,totalPages:o}=await _e({params:r});be(a),A(o,t)}catch(a){console.error("Error fetching exercises:",a)}finally{e.loader.classList.add("hidden")}},ne=async r=>{r.target.nodeName==="BUTTON"&&(l=r.target.textContent.trim(),i=1,c="",await b(l))},ce=async r=>{r.preventDefault();const a=r.target.closest(".exercises__cards-link");a&&(c=a.getAttribute("data-name"),e.breadcrumbsSubtitle.textContent=ie(c),e.breadcrumbsSubtitle.classList.remove("hidden"),e.searchForm.classList.remove("hidden"),e.breadcrumbsTitleDivider.classList.remove("hidden"),i=1,I(),await L({[x[l]]:c,page:i,limit:t}))},oe=()=>{e.searchInput.value.trim()!==""?e.searchBtnClear.classList.remove("hidden"):e.searchBtnClear.classList.add("hidden")},le=ae(async()=>{const r=e.searchInput.value;r.trim()!==""?e.searchBtnClear.classList.remove("hidden"):e.searchBtnClear.classList.add("hidden"),i=1,await L({[x[l]]:c,keyword:r,page:i,limit:t})},300),de=()=>{e.searchInput.value="",e.searchInput.focus(),e.searchBtnClear.classList.add("hidden"),i=1,L({[x[l]]:c,keyword:"",page:i,limit:t})},ue=async()=>{c&&(i=1,c="",await b(l))};(j=e.buttonsAll)==null||j.addEventListener("click",ne),(D=e.exerciseCards)==null||D.addEventListener("click",ce),(R=e.searchInput)==null||R.addEventListener("input",()=>{oe(),le()}),(H=e.searchBtnClear)==null||H.addEventListener("click",de),(O=e.breadcrumbsTitle)==null||O.addEventListener("click",ue),b(l)});const z=document.querySelector(".exercises__buttons"),Le=e=>{if(e.target.tagName==="BUTTON"){const s=document.querySelector(".exercises__btn-smpl.active");s&&s.classList.remove("active"),e.target.classList.add("active")}};z&&z.addEventListener("click",Le);var h,d,p,G,M;class Ee{constructor(){E(this,p);E(this,h,"favorites_exercises_ls_key");E(this,d,[]);T(this,d,y(this,p,G).call(this))}get favoritesExercises(){return u(this,d)}isFavoriteExercise(s){return u(this,d).some(({_id:t})=>t===s)}addFavoriteExercise(s){this.isFavoriteExercise(s._id)||(u(this,d).push(s),y(this,p,M).call(this))}removeFavoriteExercise(s){T(this,d,u(this,d).filter(({_id:t})=>t!==s)),y(this,p,M).call(this)}}h=new WeakMap,d=new WeakMap,p=new WeakSet,G=function(){try{const s=localStorage.getItem(u(this,h));if(s){const t=JSON.parse(s);return Array.isArray(t)?t:[]}return[]}catch{return localStorage.removeItem(u(this,h)),[]}},M=function(){localStorage.setItem(u(this,h),JSON.stringify(u(this,d)))};const F=new Ee,q="/goit-mcs-advancedjs-fp/assets/icons-sprite-CpMKLgGQ.svg",ye=document.querySelector(".js-exercises-cards"),_=document.querySelector(".exercise-modal-backdrop"),C=_.querySelector(".exercise-modal__content"),J=_.querySelector(".exercise-modal__close-btn"),V="exercise-modal-backdrop--is-hidden";let v=null;ye.addEventListener("click",e=>{var i;const{target:s}=e;let t=s.dataset.modalOpen;if(t){U({exerciseId:t});return}const n=s.closest("button[data-modal-open]");if(t=(i=n==null?void 0:n.dataset)==null?void 0:i.modalOpen,t){U({exerciseId:t});return}});async function U({exerciseId:e}){const s=await pe({exerciseId:e});v=s,C.innerHTML=we(s),Se()}function Se(){Z(),J.addEventListener("click",w),_.addEventListener("click",Q),document.addEventListener("keydown",W),_.classList.remove(V)}function Ce(){ee(),J.removeEventListener("click",w),_.removeEventListener("click",Q),document.removeEventListener("keydown",W)}function w(){_.classList.add(V),setTimeout(()=>{Ce(),v=null,C.innerHTML=""},500)}function W(e){e.code==="Escape"&&w()}function Q(e){e.target===_&&w()}function we({_id:e,bodyPart:s,equipment:t,gifUrl:n,name:i,target:l,description:c,rating:f,burnedCalories:x,popularity:$}){return`
      <div class="exercise-modal__thumb">
        <img class="exercise-modal__img" src="${n}" alt="${i}" />
      </div>

      <div>
        <h3 class="exercise-modal__title">${i}</h3>

        ${$e({rating:f})}
  
        ${Te({bodyPart:s,equipment:t,target:l,burnedCalories:x,popularity:$})}

        <p class="exercise-modal__desc">${c}</p>

        <div class="js-action-bar-wrapper">
            ${X({exerciseId:e})}
        </div>
      </div>
  `}function $e({rating:e}){return`
        <div class="exercise-modal__rating">
          <p class="exercise-modal__rating-value">${e}</p>
         
          ${[1,2,3,4,5].map(s=>Be({isActive:s<=Math.round(e)})).join("")}
        </div>
    `}function Be({isActive:e}){return`
        <svg class="exercise-modal__rating-star ${e?"exercise-modal__rating-star--accent":""}">
            <use href="${q}#star"></use>
        </svg>
    `}const ke=[["target","Target"],["bodyPart","Body Part"],["equipment","Equipment"],["popularity","Popular"],["burnedCalories","Burned Calories"]];function Te(e){return`
        <ul class="exercise-modal__info">
          ${ke.map(([s,t])=>{const n=e[s];return n?`
                <li>
                    <h4 class="exercise-modal__info-title">${t}</h4>
                    <p class="exercise-modal__info-desc">${n}</p>
                </li>
            `:""}).join("")}
        </ul>
    `}function X({exerciseId:e}){const s=F.isFavoriteExercise(e);return`
        <div class="exercise-modal__action-bar ${s?"exercise-modal__action-bar--wrap":""}">
          ${K({type:"primary",className:s?"js-favorite-remove-btn":"js-favorite-add-btn",children:s?`
                Remove from favorites
                <svg>
                  <use href="${q}#trash"></use>
                </svg>
              `:`
                Add to favorites
                <svg>
                  <use href="${q}#heart"></use>
                </svg>
              `})}
          ${K({type:"secondary",className:`js-rating-btn ${s?"exercise-modal__btn--large":""}`,children:`
             Give a rating
           `})}
        </div>
    `}function Y(){const e=C.querySelector(".js-action-bar-wrapper");ee(),e.innerHTML=X({exerciseId:v._id}),Z()}function Z(){const{favoriteAddButtonRef:e,favoriteRemoveButtonRef:s,ratingButtonRef:t}=se();e==null||e.addEventListener("click",te),s==null||s.addEventListener("click",re)}function ee(){const{favoriteAddButtonRef:e,favoriteRemoveButtonRef:s,ratingButtonRef:t}=se();e==null||e.removeEventListener("click",te),s==null||s.removeEventListener("click",re)}function K({type:e="",className:s="",children:t=""}){return`
        <button
            class="exercise-modal__btn exercise-modal__btn--${e} ${s}"
            type="button"
          >
            ${t}
        </button>
    `}function se(){const e=C.querySelector(".exercise-modal__action-bar");return{favoriteAddButtonRef:e.querySelector(".js-favorite-add-btn"),favoriteRemoveButtonRef:e.querySelector(".js-favorite-remove-btn"),ratingButtonRef:e.querySelector(".js-rating-btn")}}function te(){F.addFavoriteExercise(v),Y()}function re(){F.removeFavoriteExercise(v==null?void 0:v._id),Y()}
//# sourceMappingURL=index.js.map
