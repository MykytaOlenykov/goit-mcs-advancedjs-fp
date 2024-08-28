// import { getQuote } from '../services/api.js';
import axios from 'axios';

async function getQuote() {
    try {
        const response = await axios.get('https://your-energy.b.goit.study/api/quote');
        return response.data; 
    } catch (error) {
        console.error('Error fetching quote', error);
        throw error; 
    }
}

function sidebarInfo() {
    let storedQuote = localStorage.getItem('quote');
    const today = new Date().getDate();

    if (!storedQuote) {
        getQuote().then((data) => {
            console.log(data);
            data.date = today; // Добавляем дату в объект цитаты
            localStorage.setItem('quote', JSON.stringify(data));
            updateQuote(data);
        });
    } else {
        const dataQuote = JSON.parse(storedQuote);
        
        // Проверка, что цитата не устарела
        if (dataQuote.date !== today) {
            getQuote().then((data) => {
                data.date = today;
                localStorage.setItem('quote', JSON.stringify(data));
                updateQuote(data);
            });
        } else {
            updateQuote(dataQuote);
        }
    }
}

function updateQuote(dataQuote) {
    const sidebarInfo = document.querySelector('.p_quote_text');
    sidebarInfo.innerHTML = dataQuote.quote;

    const sidebarInfoAuthor = document.querySelector('.p_quote_author');
    sidebarInfoAuthor.innerHTML = dataQuote.author;
}

sidebarInfo();
