import{g as d,a as m}from"./assets/sidebar-info-CrLCD08b.js";import"./assets/vendor-CR7N1gwd.js";const o=document.querySelector(".exercises__cards");function u(t){const s=t.map(e=>`<li class="exercises__cards-item">
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
        `).join("");o.innerHTML=s}function _(t){const s=t.map(e=>`<li class="exercises__name">
          <span>Workout</span>
          ${e.rating}

          <button class="exercises__name-btn" type="button" data-modal-open="">Start</button>
          <h3>${e.name}</h3>
          <ul>
          <li>BurnedCalories${e.burnedCalories}</li>
          <li>Body part${e.bodyPart}</li>
          <li>Target${e.target}</li>
          
          
          </ul>
            
        </li>
        `).join("");o.innerHTML=s}const r=document.querySelector(".exercises__buttons"),i=document.querySelector(".exercises__cards");let a=1;const l=async t=>{const s=t&&t.target.nodeName==="BUTTON"?t.target.textContent.trim():"Muscles";a=1;try{const e=await d({params:{filter:s,page:a,limit:12}});u(e.results)}catch(e){console.log("Error fetching data:",e)}};r&&r.addEventListener("click",l);l();const g=async t=>{t.preventDefault();const e=t.target.closest(".exercises__cards-link").getAttribute("data-name");console.log(e);const c=await m({params:{filter:e,page:a,limit:10}});console.log(c.results),_(c.results)};i&&i.addEventListener("click",g);const n=document.querySelector(".exercises__buttons"),p=t=>{if(t.target.tagName==="BUTTON"){const s=document.querySelector(".exercises__btn-smpl.active");s&&s.classList.remove("active"),t.target.classList.add("active")}};n&&n.addEventListener("click",p);
//# sourceMappingURL=index.js.map
