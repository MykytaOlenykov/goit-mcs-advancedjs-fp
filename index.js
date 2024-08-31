var U=e=>{throw TypeError(e)};var B=(e,t,s)=>t.has(e)||U("Cannot "+s);var v=(e,t,s)=>(B(e,t,"read from private field"),s?s.call(e):t.get(e)),L=(e,t,s)=>t.has(e)?U("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),M=(e,t,s,a)=>(B(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s),E=(e,t,s)=>(B(e,t,"access private method"),s);import{a as be,g as ye,b as Le,c as Ee,d as Se}from"./assets/sidebar-info-lXhGjFPQ.js";import{c as X,a as T,b as qe,P as we,i as V,d as ke}from"./assets/vendor-BLGQS8uP.js";let Ce=X({email:T().email("Please enter a valid email").required("Email is required"),rate:qe().required("Rating is required").min(1,"Rating must be between 1 and 5").max(5,"Rating must be between 1 and 5"),review:T().trim().required("Comment is required.")});const q={closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};let Y=null;function $e({exerciseId:e}){Y=e,q.modal.classList.remove("is-hidden")}function Be(){q.modal.classList.add("is-hidden")}q.closeModalBtn.addEventListener("click",Be);document.querySelectorAll(".modal-star").forEach(e=>{e.addEventListener("click",t=>{const s=t.currentTarget.dataset.value;document.querySelectorAll(".modal-star").forEach(r=>{r.dataset.value<=s?r.querySelector("svg").style.fill="gold":r.querySelector("svg").style.fill="rgba(244, 244, 244, 0.20)"});const a=document.querySelector(".modal-rating");a.textContent=`${s}.0`})});async function Me(e){e.preventDefault();const t=document.querySelector(".modal-form"),s=e.target.elements,a=s.email.value,r=s.comment.value,o=parseInt(t.querySelector(".modal-rating").textContent);t.querySelector("#email-error").style.display="none",t.querySelector("#stars-error").style.display="none";try{const c=await Ce.validate({email:a,review:r,rate:o},{abortEarly:!1});q.modal.classList.add("is-hidden"),be({exerciseId:Y,body:c})}catch(c){const l={};c.inner.forEach(u=>{l[u.path]||(l[u.path]=u.message)}),l.email&&(t.querySelector("#email-error").textContent=l.email,t.querySelector("#email-error").style.display="block"),l.review&&(t.querySelector("#comment-error").textContent=l.review,t.querySelector("#comment-error").style.display="block"),l.rate&&(t.querySelector("#stars-error").textContent=l.rate,t.querySelector("#stars-error").style.display="block")}}document.querySelector(".modal-form").addEventListener("submit",Me);const p=document.querySelector(".exercises__cards"),S=document.querySelector(".exercises__cards-empty");function Te(){p.innerHTML="",p.classList.remove("exercises__cards-wrkt")}function Ie(e){S.classList.add("hidden");const t=e.map(s=>`<li class="exercises__cards-item">
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
        `).join("");p.innerHTML=t}function Fe(){p.innerHTML="",p.classList.remove("exercises__cards-wrkt")}function Ae(e){S.classList.add("hidden");const t=e.map(s=>`<li class="exercises__name">
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
        `).join("");if(e.length===0){p.innerHTML="",S.classList.remove("hidden"),S.innerHTML="No exercises found";return}p.classList.add("exercises__cards-wrkt"),p.innerHTML=t}document.addEventListener("DOMContentLoaded",()=>{var j,H,O,N,z;const e={buttonsAll:document.querySelector(".exercises__buttons"),exerciseCards:document.querySelector(".exercises__cards"),searchBtnClear:document.querySelector("#search-btn-clear"),searchForm:document.querySelector("#search-form"),searchInput:document.querySelector("#search-input"),breadcrumbsTitle:document.querySelector("#exercises-breadcrumbs h2"),breadcrumbsTitleDivider:document.querySelector("#exercises-breadcrumbs span"),breadcrumbsSubtitle:document.querySelector("#exercises-breadcrumbs p"),paginationContainer:document.querySelector("#tui-pagination-container"),loader:document.querySelector("#loader")},t=12,s=window.innerWidth<=768?8:10,a=10;let r=1,o="Muscles",c="",l;const u={Muscles:"muscles",Equipment:"equipment","Body parts":"bodypart"},C={first:"double-arrow-prev",prev:"arrow-prev",next:"arrow-next",last:"double-arrow-next"},$=()=>{e.paginationContainer.classList.add("hidden"),e.paginationContainer.innerHTML=""},ue=i=>i.charAt(0).toUpperCase()+i.slice(1),me=(i,n)=>{let d;return function(...x){const xe=this;clearTimeout(d),d=setTimeout(()=>i.apply(xe,x),n)}},P=()=>{window.scrollTo({top:0,behavior:"smooth"})},D=(i,n=!1)=>`<a href="#" class="tui-page-btn tui-${i} ${n?"tui-is-disabled":""}">
        <svg width="20" height="20">
          <use href="./assets/icons/icons-sprite.svg#${C[i]}"></use>
        </svg>
      </a>`,R=(i,n)=>{i>1?(e.paginationContainer.classList.remove("hidden"),l=new we(e.paginationContainer,{totalItems:i*n,itemsPerPage:n,visiblePages:a,page:r,template:{moveButton:d=>{const{type:x}=d;return D(x)},disabledMoveButton:d=>{const{type:x}=d;return D(x,!0)}}}),l.on("afterMove",d=>{r=d.page,c?y({[u[o]]:c,page:r,limit:s}):b(o),P()})):$()},b=async(i="Muscles")=>{Te(),$(),e.loader.classList.remove("hidden");try{const{results:n,totalPages:d}=await ye({params:{filter:i,page:r,limit:t}});e.searchForm.classList.add("hidden"),e.breadcrumbsTitleDivider.classList.add("hidden"),e.breadcrumbsSubtitle.classList.add("hidden"),Ie(n),R(d,t)}catch(n){console.error("Error fetching filters:",n)}finally{e.loader.classList.add("hidden")}},y=async i=>{Fe(),$(),e.loader.classList.remove("hidden");try{const{results:n,totalPages:d}=await Le({params:i});Ae(n),R(d,s)}catch(n){console.error("Error fetching exercises:",n)}finally{e.loader.classList.add("hidden")}},ve=async i=>{i.target.nodeName==="BUTTON"&&(o=i.target.textContent.trim(),r=1,c="",await b(o))},pe=async i=>{i.preventDefault();const n=i.target.closest(".exercises__cards-link");n&&(c=n.getAttribute("data-name"),e.breadcrumbsSubtitle.textContent=ue(c),e.breadcrumbsSubtitle.classList.remove("hidden"),e.searchForm.classList.remove("hidden"),e.breadcrumbsTitleDivider.classList.remove("hidden"),r=1,P(),await y({[u[o]]:c,page:r,limit:s}))},he=()=>{e.searchInput.value.trim()!==""?e.searchBtnClear.classList.remove("hidden"):e.searchBtnClear.classList.add("hidden")},_e=me(async()=>{const i=e.searchInput.value;i.trim()!==""?e.searchBtnClear.classList.remove("hidden"):e.searchBtnClear.classList.add("hidden"),r=1,await y({[u[o]]:c,keyword:i,page:r,limit:s})},300),fe=()=>{e.searchInput.value="",e.searchInput.focus(),e.searchBtnClear.classList.add("hidden"),r=1,y({[u[o]]:c,keyword:"",page:r,limit:s})},ge=async()=>{c&&(r=1,c="",await b(o))};(j=e.buttonsAll)==null||j.addEventListener("click",ve),(H=e.exerciseCards)==null||H.addEventListener("click",pe),(O=e.searchInput)==null||O.addEventListener("input",()=>{he(),_e()}),(N=e.searchBtnClear)==null||N.addEventListener("click",fe),(z=e.breadcrumbsTitle)==null||z.addEventListener("click",ge),b(o)});const J=document.querySelector(".exercises__buttons"),Pe=e=>{if(e.target.tagName==="BUTTON"){const t=document.querySelector(".exercises__btn-smpl.active");t&&t.classList.remove("active"),e.target.classList.add("active")}};J&&J.addEventListener("click",Pe);const De=X({email:T().email("Invalid email!").required("Email is required.")}),K=document.querySelector(".subscription-form");K.addEventListener("submit",async e=>{var t;try{e.preventDefault();const{email:s}=e.target.elements,a=await De.validate({email:s.value});K.reset();const{message:r}=await Ee({body:a});V.success({message:r,position:"topRight"})}catch(s){let a="";ke(s)?a=s.response.data.message??"":a=((t=s.errors)==null?void 0:t[0])??"",V.error({message:a,position:"topRight"})}});var g,m,f,Q,I;class Re{constructor(){L(this,f);L(this,g,"favorites_exercises_ls_key");L(this,m,[]);M(this,m,E(this,f,Q).call(this))}get favoritesExercises(){return v(this,m)}isFavoriteExercise(t){return v(this,m).some(({_id:s})=>s===t)}addFavoriteExercise(t){this.isFavoriteExercise(t._id)||(v(this,m).push(t),E(this,f,I).call(this))}removeFavoriteExercise(t){M(this,m,v(this,m).filter(({_id:s})=>s!==t)),E(this,f,I).call(this)}}g=new WeakMap,m=new WeakMap,f=new WeakSet,Q=function(){try{const t=localStorage.getItem(v(this,g));if(t){const s=JSON.parse(t);return Array.isArray(s)?s:[]}return[]}catch{return localStorage.removeItem(v(this,g)),[]}},I=function(){localStorage.setItem(v(this,g),JSON.stringify(v(this,m)))};const A=new Re,F="/goit-mcs-advancedjs-fp/assets/icons-sprite-IovVlU0g.svg",je=document.querySelector(".js-exercises-cards"),_=document.querySelector(".exercise-modal-backdrop"),w=_.querySelector(".exercise-modal__content"),Z=_.querySelector(".exercise-modal__close-btn"),ee="exercise-modal-backdrop--is-hidden";let h=null;je.addEventListener("click",e=>{var r;const{target:t}=e;let s=t.dataset.modalOpen;if(s){W({exerciseId:s});return}const a=t.closest("button[data-modal-open]");if(s=(r=a==null?void 0:a.dataset)==null?void 0:r.modalOpen,s){W({exerciseId:s});return}});async function W({exerciseId:e}){const t=await Se({exerciseId:e});h=t,w.innerHTML=Ne(t),He()}function He(){ie(),Z.addEventListener("click",k),_.addEventListener("click",se),document.addEventListener("keydown",te),_.classList.remove(ee)}function Oe(){ne(),Z.removeEventListener("click",k),_.removeEventListener("click",se),document.removeEventListener("keydown",te)}function k(){_.classList.add(ee),setTimeout(()=>{Oe(),h=null,w.innerHTML=""},500)}function te(e){e.code==="Escape"&&k()}function se(e){e.target===_&&k()}function Ne({_id:e,bodyPart:t,equipment:s,gifUrl:a,name:r,target:o,description:c,rating:l,burnedCalories:u,popularity:C}){return`
      <div class="exercise-modal__thumb">
        <img class="exercise-modal__img" src="${a}" alt="${r}" />
      </div>

      <div>
        <h3 class="exercise-modal__title">${r}</h3>

        ${ze({rating:l})}
  
        ${Je({bodyPart:t,equipment:s,target:o,burnedCalories:u,popularity:C})}

        <p class="exercise-modal__desc">${c}</p>

        <div class="js-action-bar-wrapper">
            ${re({exerciseId:e})}
        </div>
      </div>
  `}function ze({rating:e}){return`
        <div class="exercise-modal__rating">
          <p class="exercise-modal__rating-value">${e}</p>
         
          ${[1,2,3,4,5].map(t=>Ue({isActive:t<=Math.round(e)})).join("")}
        </div>
    `}function Ue({isActive:e}){return`
        <svg class="exercise-modal__rating-star ${e?"exercise-modal__rating-star--accent":""}">
            <use href="${F}#star"></use>
        </svg>
    `}const Ve=[["target","Target"],["bodyPart","Body Part"],["equipment","Equipment"],["popularity","Popular"],["burnedCalories","Burned Calories"]];function Je(e){return`
        <ul class="exercise-modal__info">
          ${Ve.map(([t,s])=>{const a=e[t];return a?`
                <li>
                    <h4 class="exercise-modal__info-title">${s}</h4>
                    <p class="exercise-modal__info-desc">${a}</p>
                </li>
            `:""}).join("")}
        </ul>
    `}function re({exerciseId:e}){const t=A.isFavoriteExercise(e);return`
        <div class="exercise-modal__action-bar ${t?"exercise-modal__action-bar--wrap":""}">
          ${G({type:"primary",className:t?"js-favorite-remove-btn":"js-favorite-add-btn",children:t?`
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
          ${G({type:"secondary",className:`js-rating-btn ${t?"exercise-modal__btn--large":""}`,children:`
             Give a rating
           `})}
        </div>
    `}function ae(){const e=w.querySelector(".js-action-bar-wrapper");ne(),e.innerHTML=re({exerciseId:h._id}),ie()}function ie(){const{favoriteAddButtonRef:e,favoriteRemoveButtonRef:t,ratingButtonRef:s}=ce();e==null||e.addEventListener("click",oe),t==null||t.addEventListener("click",le),s==null||s.addEventListener("click",de)}function ne(){const{favoriteAddButtonRef:e,favoriteRemoveButtonRef:t,ratingButtonRef:s}=ce();e==null||e.removeEventListener("click",oe),t==null||t.removeEventListener("click",le),s==null||s.removeEventListener("click",de)}function G({type:e="",className:t="",children:s=""}){return`
        <button
            class="exercise-modal__btn exercise-modal__btn--${e} ${t}"
            type="button"
          >
            ${s}
        </button>
    `}function ce(){const e=w.querySelector(".exercise-modal__action-bar");return{favoriteAddButtonRef:e.querySelector(".js-favorite-add-btn"),favoriteRemoveButtonRef:e.querySelector(".js-favorite-remove-btn"),ratingButtonRef:e.querySelector(".js-rating-btn")}}function oe(){A.addFavoriteExercise(h),ae()}function le(){A.removeFavoriteExercise(h==null?void 0:h._id),ae()}function de(){$e({exerciseId:h._id})}
//# sourceMappingURL=index.js.map
