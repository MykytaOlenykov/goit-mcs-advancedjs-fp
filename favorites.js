import{f as t,h as c}from"./assets/exercise-modal-BCbmcDGw.js";import"./assets/vendor-DbvQrPBk.js";document.addEventListener("DOMContentLoaded",()=>{const s={exerciseCards:document.querySelector(".exercises__cards")};t(),s.exerciseCards.addEventListener("click",e=>{e.preventDefault();const r=e.target.closest(".exercises__remove-btn");if(!r)return;const o=r.dataset.removeId;c.removeFavoriteExercise(o),t()})});
//# sourceMappingURL=favorites.js.map