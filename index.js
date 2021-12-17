const btn = document.querySelector('#btn');
const searchTerm = document.querySelector('#search');
const searchResults = document.querySelector('.search-results');
const resultsWrapper = document.querySelector('.resultsWrapper');

btn.addEventListener('click', async function () {

    //console.log(searchTerm.value);
    searchTerm.value = '';


})


searchTerm.addEventListener('change', async function (e) {
    console.log(e.target.value)
    const response = await fetch(`https://api.edamam.com/auto-complete?app_id=ee023605&app_key=8e0a5aba93283a896a4b2b728d506c9f&q=${e.target.value}&limit=10`);
    const foodData = await response.json();
    console.log(foodData)

    if (e.target.value) {
        searchResults.classList.remove('hide')
        foodData.map((fd) => {
            console.log(fd)
            searchResults.innerHTML += `<div class="item"><a href='result.html?q=${fd}'>${fd}</a></div>`;
        })

        item.addEventListener('click', function () {
            console.log('works')
        })

    } else {
        searchResults.classList.add('hide')
    }

    /*document.querySelector('results').addEventListener('click', function () {
        console.log('works')
    })*/

})

window.addEventListener('DOMContentLoaded', async function () {
    const response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=ee023605&app_key=8e0a5aba93283a896a4b2b728d506c9f&ingr=chicken&nutrition-type=cooking&category=generic-foods`);
    const data = await response.json();
    console.log(data.hints)
    data.hints.map((h) => {

        resultsWrapper.innerHTML += `<div class="result">
                                                <div class="food-img">
                                                    <img src='${h.food.image}'/>
                                                </div>
                                                <div class="food-details">
                                                     <p>${h.food.category}</p>
                                                     <p>${h.food.label}</p>
                                                </div>
                                                 <div class="nutrients">
                                                     <p>Calories Per 100g:${h.food.nutrients.ENERC_KCAL}</p>
                                                     <p>Protein Per 100g:${h.food.nutrients.PROCNT}</p>
                                                     <p>Fat Per 100g:${h.food.nutrients.FAT}</p>
                                                </div>
                                              </div>`
        console.log(h.food.category)
        console.log(h.food.label)
        console.log(h.food.nutrients.ENERC_KCAL)
        console.log(h.food.nutrients.FAT)
        console.log(h.food.nutrients.PROCNT)
    })
    /*console.log(data.hints[0].food.category)
    console.log(data.hints[0].food.label)
    console.log(data.hints[0].food.nutrients.ENERC_KCAL)
    console.log(data.hints[0].food.nutrients.FAT)
    console.log(data.hints[0].food.nutrients.PROCNT)
    console.log(data.hints[0].food.image)*/

})


