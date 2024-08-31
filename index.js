var z=e=>{throw TypeError(e)};var B=(e,t,s)=>t.has(e)||z("Cannot "+s);var v=(e,t,s)=>(B(e,t,"read from private field"),s?s.call(e):t.get(e)),L=(e,t,s)=>t.has(e)?z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),M=(e,t,s,i)=>(B(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s),E=(e,t,s)=>(B(e,t,"access private method"),s);import{a as xe,g as fe,b as ge,c as be}from"./assets/sidebar-info-C6YAqXDe.js";import{c as ye,a as U,b as Le,P as Ee}from"./assets/vendor-fPVsmh8r.js";let Se=ye({email:U().email("Please enter a valid email").required("Email is required"),rate:Le().required("Rating is required").min(1,"Rating must be between 1 and 5").max(5,"Rating must be between 1 and 5"),review:U().trim().required("Comment is required.")});const q={closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};let W=null;function qe({exerciseId:e}){W=e,q.modal.classList.remove("is-hidden")}function ke(){q.modal.classList.add("is-hidden")}q.closeModalBtn.addEventListener("click",ke);document.querySelectorAll(".modal-star").forEach(e=>{e.addEventListener("click",t=>{const s=t.currentTarget.dataset.value;document.querySelectorAll(".modal-star").forEach(r=>{r.dataset.value<=s?r.querySelector("svg").style.fill="gold":r.querySelector("svg").style.fill="rgba(244, 244, 244, 0.20)"});const i=document.querySelector(".modal-rating");i.textContent=`${s}.0`})});async function Ce(e){e.preventDefault();const t=document.querySelector(".modal-form"),s=e.target.elements,i=s.email.value,r=s.comment.value,o=parseInt(t.querySelector(".modal-rating").textContent);t.querySelector("#email-error").style.display="none",t.querySelector("#stars-error").style.display="none";try{const c=await Se.validate({email:i,review:r,rate:o},{abortEarly:!1});q.modal.classList.add("is-hidden"),xe({exerciseId:W,body:c})}catch(c){const l={};c.inner.forEach(u=>{l[u.path]||(l[u.path]=u.message)}),l.email&&(t.querySelector("#email-error").textContent=l.email,t.querySelector("#email-error").style.display="block"),l.review&&(t.querySelector("#comment-error").textContent=l.review,t.querySelector("#comment-error").style.display="block"),l.rate&&(t.querySelector("#stars-error").textContent=l.rate,t.querySelector("#stars-error").style.display="block")}}document.querySelector(".modal-form").addEventListener("submit",Ce);const p=document.querySelector(".exercises__cards"),S=document.querySelector(".exercises__cards-empty");function we(){p.innerHTML="",p.classList.remove("exercises__cards-wrkt")}function $e(e){S.classList.add("hidden");const t=e.map(s=>`<li class="exercises__cards-item">
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
        `).join("");p.innerHTML=t}function Be(){p.innerHTML="",p.classList.remove("exercises__cards-wrkt")}function Me(e){S.classList.add("hidden");const t=e.map(s=>`<li class="exercises__name">
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
        `).join("");if(e.length===0){p.innerHTML="",S.classList.remove("hidden"),S.innerHTML="No exercises found";return}p.classList.add("exercises__cards-wrkt"),p.innerHTML=t}document.addEventListener("DOMContentLoaded",()=>{var j,R,H,O,N;const e={buttonsAll:document.querySelector(".exercises__buttons"),exerciseCards:document.querySelector(".exercises__cards"),searchBtnClear:document.querySelector("#search-btn-clear"),searchForm:document.querySelector("#search-form"),searchInput:document.querySelector("#search-input"),breadcrumbsTitle:document.querySelector("#exercises-breadcrumbs h2"),breadcrumbsTitleDivider:document.querySelector("#exercises-breadcrumbs span"),breadcrumbsSubtitle:document.querySelector("#exercises-breadcrumbs p"),paginationContainer:document.querySelector("#tui-pagination-container"),loader:document.querySelector("#loader")},t=12,s=window.innerWidth<=768?8:10,i=10;let r=1,o="Muscles",c="",l;const u={Muscles:"muscles",Equipment:"equipment","Body parts":"bodypart"},w={first:"double-arrow-prev",prev:"arrow-prev",next:"arrow-next",last:"double-arrow-next"},$=()=>{e.paginationContainer.classList.add("hidden"),e.paginationContainer.innerHTML=""},oe=a=>a.charAt(0).toUpperCase()+a.slice(1),le=(a,n)=>{let d;return function(...g){const he=this;clearTimeout(d),d=setTimeout(()=>a.apply(he,g),n)}},A=()=>{window.scrollTo({top:0,behavior:"smooth"})},P=(a,n=!1)=>`<a href="#" class="tui-page-btn tui-${a} ${n?"tui-is-disabled":""}">
        <svg width="20" height="20">
          <use href="./assets/icons/icons-sprite.svg#${w[a]}"></use>
        </svg>
      </a>`,D=(a,n)=>{a>1?(e.paginationContainer.classList.remove("hidden"),l=new Ee(e.paginationContainer,{totalItems:a*n,itemsPerPage:n,visiblePages:i,page:r,template:{moveButton:d=>{const{type:g}=d;return P(g)},disabledMoveButton:d=>{const{type:g}=d;return P(g,!0)}}}),l.on("afterMove",d=>{r=d.page,c?y({[u[o]]:c,page:r,limit:s}):b(o),A()})):$()},b=async(a="Muscles")=>{we(),$(),e.loader.classList.remove("hidden");try{const{results:n,totalPages:d}=await fe({params:{filter:a,page:r,limit:t}});e.searchForm.classList.add("hidden"),e.breadcrumbsTitleDivider.classList.add("hidden"),e.breadcrumbsSubtitle.classList.add("hidden"),$e(n),D(d,t)}catch(n){console.error("Error fetching filters:",n)}finally{e.loader.classList.add("hidden")}},y=async a=>{Be(),$(),e.loader.classList.remove("hidden");try{const{results:n,totalPages:d}=await ge({params:a});Me(n),D(d,s)}catch(n){console.error("Error fetching exercises:",n)}finally{e.loader.classList.add("hidden")}},de=async a=>{a.target.nodeName==="BUTTON"&&(o=a.target.textContent.trim(),r=1,c="",await b(o))},ue=async a=>{a.preventDefault();const n=a.target.closest(".exercises__cards-link");n&&(c=n.getAttribute("data-name"),e.breadcrumbsSubtitle.textContent=oe(c),e.breadcrumbsSubtitle.classList.remove("hidden"),e.searchForm.classList.remove("hidden"),e.breadcrumbsTitleDivider.classList.remove("hidden"),r=1,A(),await y({[u[o]]:c,page:r,limit:s}))},me=()=>{e.searchInput.value.trim()!==""?e.searchBtnClear.classList.remove("hidden"):e.searchBtnClear.classList.add("hidden")},ve=le(async()=>{const a=e.searchInput.value;a.trim()!==""?e.searchBtnClear.classList.remove("hidden"):e.searchBtnClear.classList.add("hidden"),r=1,await y({[u[o]]:c,keyword:a,page:r,limit:s})},300),pe=()=>{e.searchInput.value="",e.searchInput.focus(),e.searchBtnClear.classList.add("hidden"),r=1,y({[u[o]]:c,keyword:"",page:r,limit:s})},_e=async()=>{c&&(r=1,c="",await b(o))};(j=e.buttonsAll)==null||j.addEventListener("click",de),(R=e.exerciseCards)==null||R.addEventListener("click",ue),(H=e.searchInput)==null||H.addEventListener("input",()=>{me(),ve()}),(O=e.searchBtnClear)==null||O.addEventListener("click",pe),(N=e.breadcrumbsTitle)==null||N.addEventListener("click",_e),b(o)});const V=document.querySelector(".exercises__buttons"),Te=e=>{if(e.target.tagName==="BUTTON"){const t=document.querySelector(".exercises__btn-smpl.active");t&&t.classList.remove("active"),e.target.classList.add("active")}};V&&V.addEventListener("click",Te);var f,m,x,G,T;class Fe{constructor(){L(this,x);L(this,f,"favorites_exercises_ls_key");L(this,m,[]);M(this,m,E(this,x,G).call(this))}get favoritesExercises(){return v(this,m)}isFavoriteExercise(t){return v(this,m).some(({_id:s})=>s===t)}addFavoriteExercise(t){this.isFavoriteExercise(t._id)||(v(this,m).push(t),E(this,x,T).call(this))}removeFavoriteExercise(t){M(this,m,v(this,m).filter(({_id:s})=>s!==t)),E(this,x,T).call(this)}}f=new WeakMap,m=new WeakMap,x=new WeakSet,G=function(){try{const t=localStorage.getItem(v(this,f));if(t){const s=JSON.parse(t);return Array.isArray(s)?s:[]}return[]}catch{return localStorage.removeItem(v(this,f)),[]}},T=function(){localStorage.setItem(v(this,f),JSON.stringify(v(this,m)))};const I=new Fe,F="/goit-mcs-advancedjs-fp/assets/icons-sprite-DRmL2RHp.svg",Ie=document.querySelector(".js-exercises-cards"),h=document.querySelector(".exercise-modal-backdrop"),k=h.querySelector(".exercise-modal__content"),X=h.querySelector(".exercise-modal__close-btn"),Y="exercise-modal-backdrop--is-hidden";let _=null;Ie.addEventListener("click",e=>{var r;const{target:t}=e;let s=t.dataset.modalOpen;if(s){J({exerciseId:s});return}const i=t.closest("button[data-modal-open]");if(s=(r=i==null?void 0:i.dataset)==null?void 0:r.modalOpen,s){J({exerciseId:s});return}});async function J({exerciseId:e}){const t=await be({exerciseId:e});_=t,k.innerHTML=De(t),Ae()}function Ae(){se(),X.addEventListener("click",C),h.addEventListener("click",Z),document.addEventListener("keydown",Q),h.classList.remove(Y)}function Pe(){re(),X.removeEventListener("click",C),h.removeEventListener("click",Z),document.removeEventListener("keydown",Q)}function C(){h.classList.add(Y),setTimeout(()=>{Pe(),_=null,k.innerHTML=""},500)}function Q(e){e.code==="Escape"&&C()}function Z(e){e.target===h&&C()}function De({_id:e,bodyPart:t,equipment:s,gifUrl:i,name:r,target:o,description:c,rating:l,burnedCalories:u,popularity:w}){return`
      <div class="exercise-modal__thumb">
        <img class="exercise-modal__img" src="${i}" alt="${r}" />
      </div>

      <div>
        <h3 class="exercise-modal__title">${r}</h3>

        ${je({rating:l})}
  
        ${Oe({bodyPart:t,equipment:s,target:o,burnedCalories:u,popularity:w})}

        <p class="exercise-modal__desc">${c}</p>

        <div class="js-action-bar-wrapper">
            ${ee({exerciseId:e})}
        </div>
      </div>
  `}function je({rating:e}){return`
        <div class="exercise-modal__rating">
          <p class="exercise-modal__rating-value">${e}</p>
         
          ${[1,2,3,4,5].map(t=>Re({isActive:t<=Math.round(e)})).join("")}
        </div>
    `}function Re({isActive:e}){return`
        <svg class="exercise-modal__rating-star ${e?"exercise-modal__rating-star--accent":""}">
            <use href="${F}#star"></use>
        </svg>
    `}const He=[["target","Target"],["bodyPart","Body Part"],["equipment","Equipment"],["popularity","Popular"],["burnedCalories","Burned Calories"]];function Oe(e){return`
        <ul class="exercise-modal__info">
          ${He.map(([t,s])=>{const i=e[t];return i?`
                <li>
                    <h4 class="exercise-modal__info-title">${s}</h4>
                    <p class="exercise-modal__info-desc">${i}</p>
                </li>
            `:""}).join("")}
        </ul>
    `}function ee({exerciseId:e}){const t=I.isFavoriteExercise(e);return`
        <div class="exercise-modal__action-bar ${t?"exercise-modal__action-bar--wrap":""}">
          ${K({type:"primary",className:t?"js-favorite-remove-btn":"js-favorite-add-btn",children:t?`
                Remove from favorites
                <svg>
                  <use href="${F}#trash"></use>
                </svg>
              `:`
                Add to favorites
                <svg>
                  <use href="${F}#heart"></use>
                </svg>
              `})}
          ${K({type:"secondary",className:`js-rating-btn ${t?"exercise-modal__btn--large":""}`,children:`
             Give a rating
           `})}
        </div>
    `}function te(){const e=k.querySelector(".js-action-bar-wrapper");re(),e.innerHTML=ee({exerciseId:_._id}),se()}function se(){const{favoriteAddButtonRef:e,favoriteRemoveButtonRef:t,ratingButtonRef:s}=ae();e==null||e.addEventListener("click",ie),t==null||t.addEventListener("click",ne),s==null||s.addEventListener("click",ce)}function re(){const{favoriteAddButtonRef:e,favoriteRemoveButtonRef:t,ratingButtonRef:s}=ae();e==null||e.removeEventListener("click",ie),t==null||t.removeEventListener("click",ne),s==null||s.removeEventListener("click",ce)}function K({type:e="",className:t="",children:s=""}){return`
        <button
            class="exercise-modal__btn exercise-modal__btn--${e} ${t}"
            type="button"
          >
            ${s}
        </button>
    `}function ae(){const e=k.querySelector(".exercise-modal__action-bar");return{favoriteAddButtonRef:e.querySelector(".js-favorite-add-btn"),favoriteRemoveButtonRef:e.querySelector(".js-favorite-remove-btn"),ratingButtonRef:e.querySelector(".js-rating-btn")}}function ie(){I.addFavoriteExercise(_),te()}function ne(){I.removeFavoriteExercise(_==null?void 0:_._id),te()}function ce(){qe({exerciseId:_._id})}
//# sourceMappingURL=index.js.map
