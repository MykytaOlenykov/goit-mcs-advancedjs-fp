// import { getQuote } from '..\services\api.js'

// function sidebarInfo() {
//     let storedQuote = localStorage.getItem('quote');
//     const today = new Date();
//     if (!storedQuote || storedQuote === 'undefined' || storedQuote === 'null') {
//         getQuote().then((data) => {
            
//             data["date"] = today.getDate();
//             localStorage.setItem('quote', JSON.stringify(data));
//         });
//     }
//     storedQuote = localStorage.getItem('quote');
//     const dataQuote = JSON.parse(storedQuote);
    
//     const sidebarInfo = document.querySelector('.p_quote_text');
//     sidebarInfo.innerHTML = dataQuote["quote"];

//     const sidebarInfoAuthor = document.querySelector('.p_quote_author');
//     sidebarInfoAuthor.innerHTML = dataQuote["author"];
// }


