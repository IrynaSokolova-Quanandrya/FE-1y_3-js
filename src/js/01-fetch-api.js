import '../css/common.css';
import pokemonCardTpl from '../templates/pokemon-card'

const cardContainer = document.querySelector('.js-card-container')
const form = document.querySelector('.js-search-form')

form.addEventListener('submit', onPokemonSearch);

function onPokemonSearch(e){    
        e.preventDefault(); 

        const value = e.currentTarget.elements.query.value; 
        getPokemonById(value).then(createPokemon)   
}

function getPokemonById(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response=>response.json())
}

function createPokemon(pokemon) {
    const markup = pokemonCardTpl(pokemon);    
        cardContainer.innerHTML = markup;
}







/*
 * - HTTP-запити в браузері
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методи
 *  - статус відповіді коди 
 *  - postman
 *  - Заголовки
 *  - MIME-типи
 *  - Параметри запиту
 * - Документація REST API
 * - Обрабобка 404 з fetch
 * - Аутентифікація
 * - Заголовки
 * - https://pokeapi.co/
 * - [https://pixabay.com/api/docs/]
 * - [https://openweathermap.org/api]
 * - [https://newsapi.org/]
 */

// const url = 'https://newsapi.org/v2/everything?q=flowers'
// const options = {
//     headers:{
//         'X-Api-Key': '3ce63eea477043d7a470d2b21dc5ab4b'
//     }
// }

// fetch(url, options)
// .then(response=>response.json())
// .then(articles=>{
//     console.log(articles);
//     return articles.articles})
// .then(articles=>console.log(articles))


fetch('https://restcountries.com/v3.1/name/uk')
.then(r=>r.json())
.then(r=>{
    r.map((cantry)=>{
        console.log(cantry.name.common);
    })
})







// // =========================================

// const url = 'https://newsapi.org/v2/everything?q=cars';
// const options = {
//   headers: {
//     Authorization: '4330ebfabc654a6992c2aa792f3173a3',
//   },
// };

