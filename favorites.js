import{i as p,h as v,k as c,b as w}from"./assets/exercise-modal-Cxf5koiL.js";import"./assets/vendor-DbvQrPBk.js";document.addEventListener("DOMContentLoaded",()=>{const d={exerciseCards:document.querySelector(".exercises__cards"),paginationContainer:document.querySelector("#tui-pagination-container")},a={small:8,large:10};let r=1,n=window.innerWidth<=768?"small":"large";const l=(e,t)=>{const i=c.favoritesExercises,E=i.length,o=(e-1)*t,m=o+t;return{paginatedExercises:i.slice(o,m),totalExercises:E}},s=()=>{const{totalExercises:e,paginatedExercises:t}=l(r,a[n]);p(Math.ceil(e/a[n]),a[n],r,x),v(t,!0)},x=e=>{r=e.page,s()},g=e=>{e.preventDefault();const t=e.target.closest(".exercises__remove-btn");if(!t)return;const i=t.dataset.removeId;c.removeFavoriteExercise(i),s()},u=w(()=>{const e=window.innerWidth<=768?"small":"large";e!==n&&(n=e,r=1,s())},500);d.exerciseCards.addEventListener("click",g),window.addEventListener("resize",u),s()});
//# sourceMappingURL=favorites.js.map
