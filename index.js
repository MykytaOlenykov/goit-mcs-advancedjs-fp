import{g as D,a as H}from"./assets/sidebar-info-CsoSyFEP.js";import{P as z}from"./assets/vendor-DHJPRCEW.js";const l=document.querySelector(".exercises__cards"),h=document.querySelector(".exercises__cards-empty");function N(){l.innerHTML="",l.classList.remove("exercises__cards-wrkt")}function U(e){h.classList.add("hidden");const c=e.map(t=>`<li class="exercises__cards-item">
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
        `).join("");l.innerHTML=c}function O(){l.innerHTML="",l.classList.remove("exercises__cards-wrkt")}function j(e){h.classList.add("hidden");const c=e.map(t=>`<li class="exercises__name">
       <div class="exercises__name-wraper-1">
        <span class="exercises__name-tag">Workout</span>
        <span class="exercises__name-rating">${t.rating}</span>
        <button class="exercises__name-btn" type="button" data-modal-open="">Start</button>

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
        `).join("");if(e.length===0){l.innerHTML="",h.classList.remove("hidden"),h.innerHTML="No exercises found";return}l.classList.add("exercises__cards-wrkt"),l.innerHTML=c}document.addEventListener("DOMContentLoaded",()=>{var L,f,y,w,C;const e={buttonsAll:document.querySelector(".exercises__buttons"),exerciseCards:document.querySelector(".exercises__cards"),searchBtnClear:document.querySelector("#search-btn-clear"),searchForm:document.querySelector("#search-form"),searchInput:document.querySelector("#search-input"),breadcrumbsTitle:document.querySelector("#exercises-breadcrumbs h2"),breadcrumbsTitleDivider:document.querySelector("#exercises-breadcrumbs span"),breadcrumbsSubtitle:document.querySelector("#exercises-breadcrumbs p"),paginationContainer:document.querySelector("#tui-pagination-container"),loader:document.querySelector("#loader")},c=12,t=window.innerWidth<=768?8:10,S=10;let a=1,o="Muscles",n="",g;const u={Muscles:"muscles",Equipment:"equipment","Body parts":"bodypart"},k={first:"double-arrow-prev",prev:"arrow-prev",next:"arrow-next",last:"double-arrow-next"},_=()=>{e.paginationContainer.classList.add("hidden"),e.paginationContainer.innerHTML=""},B=s=>s.charAt(0).toUpperCase()+s.slice(1),P=(s,r)=>{let i;return function(...d){const F=this;clearTimeout(i),i=setTimeout(()=>s.apply(F,d),r)}},v=()=>{window.scrollTo({top:0,behavior:"smooth"})},b=(s,r=!1)=>`<a href="#" class="tui-page-btn tui-${s} ${r?"tui-is-disabled":""}">
        <svg width="20" height="20">
          <use href="./assets/icons/icons-sprite.svg#${k[s]}"></use>
        </svg>
      </a>`,x=(s,r)=>{s>1?(e.paginationContainer.classList.remove("hidden"),g=new z(e.paginationContainer,{totalItems:s*r,itemsPerPage:r,visiblePages:S,page:a,template:{moveButton:i=>{const{type:d}=i;return b(d)},disabledMoveButton:i=>{const{type:d}=i;return b(d,!0)}}}),g.on("afterMove",i=>{a=i.page,n?p({[u[o]]:n,page:a,limit:t}):m(o),v()})):_()},m=async(s="Muscles")=>{N(),_(),e.loader.classList.remove("hidden");try{const{results:r,totalPages:i}=await D({params:{filter:s,page:a,limit:c}});e.searchForm.classList.add("hidden"),e.breadcrumbsTitleDivider.classList.add("hidden"),e.breadcrumbsSubtitle.classList.add("hidden"),U(r),x(i,c)}catch(r){console.error("Error fetching filters:",r)}finally{e.loader.classList.add("hidden")}},p=async s=>{O(),_(),e.loader.classList.remove("hidden");try{const{results:r,totalPages:i}=await H({params:s});j(r),x(i,t)}catch(r){console.error("Error fetching exercises:",r)}finally{e.loader.classList.add("hidden")}},q=async s=>{s.target.nodeName==="BUTTON"&&(o=s.target.textContent.trim(),a=1,n="",await m(o))},M=async s=>{s.preventDefault();const r=s.target.closest(".exercises__cards-link");r&&(n=r.getAttribute("data-name"),e.breadcrumbsSubtitle.textContent=B(n),e.breadcrumbsSubtitle.classList.remove("hidden"),e.searchForm.classList.remove("hidden"),e.breadcrumbsTitleDivider.classList.remove("hidden"),a=1,v(),await p({[u[o]]:n,page:a,limit:t}))},E=()=>{e.searchInput.value.trim()!==""?e.searchBtnClear.classList.remove("hidden"):e.searchBtnClear.classList.add("hidden")},$=P(async()=>{const s=e.searchInput.value;s.trim()!==""?e.searchBtnClear.classList.remove("hidden"):e.searchBtnClear.classList.add("hidden"),a=1,await p({[u[o]]:n,keyword:s,page:a,limit:t})},300),I=()=>{e.searchInput.value="",e.searchInput.focus(),e.searchBtnClear.classList.add("hidden"),a=1,p({[u[o]]:n,keyword:"",page:a,limit:t})},A=async()=>{n&&(a=1,n="",await m(o))};(L=e.buttonsAll)==null||L.addEventListener("click",q),(f=e.exerciseCards)==null||f.addEventListener("click",M),(y=e.searchInput)==null||y.addEventListener("input",()=>{E(),$()}),(w=e.searchBtnClear)==null||w.addEventListener("click",I),(C=e.breadcrumbsTitle)==null||C.addEventListener("click",A),m(o)});const T=document.querySelector(".exercises__buttons"),W=e=>{if(e.target.tagName==="BUTTON"){const c=document.querySelector(".exercises__btn-smpl.active");c&&c.classList.remove("active"),e.target.classList.add("active")}};T&&T.addEventListener("click",W);
//# sourceMappingURL=index.js.map
