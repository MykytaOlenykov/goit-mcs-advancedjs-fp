import{g as A,a as F}from"./assets/sidebar-info-CsoSyFEP.js";import{P as D}from"./assets/vendor-DHJPRCEW.js";const l=document.querySelector(".exercises__cards"),p=document.querySelector(".exercises__cards-empty");function H(){l.innerHTML="",l.classList.remove("exercises__cards-wrkt")}function z(e){p.classList.add("hidden");const c=e.map(t=>`<li class="exercises__cards-item">
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
        `).join("");l.innerHTML=c}function N(){l.innerHTML="",l.classList.remove("exercises__cards-wrkt")}function U(e){p.classList.add("hidden");const c=e.map(t=>`<li class="exercises__name">
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
        `).join("");if(e.length===0){l.innerHTML="",p.classList.remove("hidden"),p.innerHTML="No exercises found";return}l.classList.add("exercises__cards-wrkt"),l.innerHTML=c}document.addEventListener("DOMContentLoaded",()=>{var b,v,L,f,y;const e={buttonsAll:document.querySelector(".exercises__buttons"),exerciseCards:document.querySelector(".exercises__cards"),searchBtnClear:document.querySelector("#search-btn-clear"),searchForm:document.querySelector("#search-form"),searchInput:document.querySelector("#search-input"),breadcrumbsTitle:document.querySelector("#exercises-breadcrumbs h2"),breadcrumbsTitleDivider:document.querySelector("#exercises-breadcrumbs span"),breadcrumbsSubtitle:document.querySelector("#exercises-breadcrumbs p"),paginationContainer:document.querySelector("#tui-pagination-container"),loader:document.querySelector("#loader")},c=12,t=window.innerWidth<=768?8:10,w=10;let r=1,n="Muscles",i="",_;const d={Muscles:"muscles",Equipment:"equipment","Body parts":"bodypart"},h=()=>{e.paginationContainer.classList.add("hidden"),e.paginationContainer.innerHTML=""},T=s=>s.charAt(0).toUpperCase()+s.slice(1),S=(s,a)=>{let o;return function(...$){const I=this;clearTimeout(o),o=setTimeout(()=>s.apply(I,$),a)}},g=()=>{window.scrollTo({top:0,behavior:"smooth"})},x=(s,a)=>{s>1?(e.paginationContainer.classList.remove("hidden"),_=new D(e.paginationContainer,{totalItems:s*a,itemsPerPage:a,visiblePages:w,page:r}),_.on("afterMove",o=>{r=o.page,i?m({[d[n]]:i,page:r,limit:t}):u(n),g()})):h()},u=async(s="Muscles")=>{H(),h(),e.loader.classList.remove("hidden");try{const{results:a,totalPages:o}=await A({params:{filter:s,page:r,limit:c}});e.searchForm.classList.add("hidden"),e.breadcrumbsTitleDivider.classList.add("hidden"),e.breadcrumbsSubtitle.classList.add("hidden"),z(a),x(o,c)}catch(a){console.error("Error fetching filters:",a)}finally{e.loader.classList.add("hidden")}},m=async s=>{N(),h(),e.loader.classList.remove("hidden");try{const{results:a,totalPages:o}=await F({params:s});U(a),x(o,t)}catch(a){console.error("Error fetching exercises:",a)}finally{e.loader.classList.add("hidden")}},k=async s=>{s.target.nodeName==="BUTTON"&&(n=s.target.textContent.trim(),r=1,i="",await u(n))},q=async s=>{s.preventDefault();const a=s.target.closest(".exercises__cards-link");a&&(i=a.getAttribute("data-name"),e.breadcrumbsSubtitle.textContent=T(i),e.breadcrumbsSubtitle.classList.remove("hidden"),e.searchForm.classList.remove("hidden"),e.breadcrumbsTitleDivider.classList.remove("hidden"),r=1,g(),await m({[d[n]]:i,page:r,limit:t}))},B=()=>{e.searchInput.value.trim()!==""?e.searchBtnClear.classList.remove("hidden"):e.searchBtnClear.classList.add("hidden")},P=S(async()=>{const s=e.searchInput.value;s.trim()!==""?e.searchBtnClear.classList.remove("hidden"):e.searchBtnClear.classList.add("hidden"),r=1,await m({[d[n]]:i,keyword:s,page:r,limit:t})},300),E=()=>{e.searchInput.value="",e.searchInput.focus(),e.searchBtnClear.classList.add("hidden"),r=1,m({[d[n]]:i,keyword:"",page:r,limit:t})},M=async()=>{i&&(r=1,i="",await u(n))};(b=e.buttonsAll)==null||b.addEventListener("click",k),(v=e.exerciseCards)==null||v.addEventListener("click",q),(L=e.searchInput)==null||L.addEventListener("input",()=>{B(),P()}),(f=e.searchBtnClear)==null||f.addEventListener("click",E),(y=e.breadcrumbsTitle)==null||y.addEventListener("click",M),u(n)});const C=document.querySelector(".exercises__buttons"),O=e=>{if(e.target.tagName==="BUTTON"){const c=document.querySelector(".exercises__btn-smpl.active");c&&c.classList.remove("active"),e.target.classList.add("active")}};C&&C.addEventListener("click",O);
//# sourceMappingURL=index.js.map
