import{g as d,a as m}from"./assets/sidebar-info-CrLCD08b.js";import"./assets/vendor-CR7N1gwd.js";const r=document.querySelector(".exercises__cards");function u(s){const t=s.map(e=>`<li class="exercises__cards-item">
            <a class="exercises__cards-link" href="#" data-name="${e.name}">
            <p class="exercises__cards-descr">
                <span class="exercises__cards-metadata-name">${e.name}</span>
                <span class="exercises__cards-metadata-filter">${e.filter}</span>
            </p>
            <img
                class="exercises__cards-image"
                src="${e.imgURL}"
                alt="${e.name}"
                loading="lazy"
                />
            </a>
        </li>
        `).join("");r.innerHTML=t}function x(s){const t=s.map(e=>`<li class="exercises__name">
       <div class="exercises__name-wraper-1">
        <span class="exercises__name-tag">Workout</span>
        <span class="exercises__name-rating">${e.rating}</span>
        <button class="exercises__name-btn" type="button" data-modal-open="">Start</button>
        
          <svg class="exercises__name-icon" width="16" height="16" style="stroke: black;">
            <use href="./assets/icons/icons-sprite.svg#arrow"></use>
          </svg>
        
        
        </div>

        <div class="exercises__name-h3-wraper">
        <h3 class="exercises__name-h3">${e.name}</h3>
        <div class="exersize__h3-icon-wraper">
          <svg class="exersize__h3-icon" width="18" height="18">
            <use href="../assets/icons/icons-sprite.svg#runner"></use>
          </svg>
        </div>
        </div>

        <ul class="exercises__name-props" >
            <li class="exercises__name-item" >BurnedCalories:<span class="exercises__name-clr">${e.burnedCalories}</span></li>
            <li class="exercises__name-item">Body part:<span class="exercises__name-clr">${e.bodyPart}</span></li>
            <li class="exercises__name-item">Target:<span class="exercises__name-clr">${e.target}</span></li>
        </ul>
        </li>
        `).join("");r.classList.add("exercises__cards-wrkt"),r.innerHTML=t}const n=document.querySelector(".exercises__buttons"),c=document.querySelector(".exercises__cards");let i=1;const o=async s=>{const t=s&&s.target.nodeName==="BUTTON"?s.target.textContent.trim():"Muscles";i=1,c.classList.remove("exercises__cards-wrkt");try{const e=await d({params:{filter:t,page:i,limit:12}});u(e.results)}catch(e){console.log("Error fetching data:",e)}};n&&n.addEventListener("click",o);o();const p=async s=>{s.preventDefault();const t=s.target.closest(".exercises__cards-link");if(!t)return;const e=t.getAttribute("data-name"),_=window.innerWidth<=768?8:10;try{const a=await m({params:{filter:e,page:i,limit:_}});x(a.results)}catch(a){console.log("Error fetching exercises:",a)}};c&&c.addEventListener("click",p);const l=document.querySelector(".exercises__buttons"),g=s=>{if(s.target.tagName==="BUTTON"){const t=document.querySelector(".exercises__btn-smpl.active");t&&t.classList.remove("active"),s.target.classList.add("active")}};l&&l.addEventListener("click",g);
//# sourceMappingURL=index.js.map
