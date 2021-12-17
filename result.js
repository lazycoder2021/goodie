const resultsWrapper = document.querySelector('.resultsWrapper');
const params = window.location.search;
const q = new URLSearchParams(params).get('q');
console.log(q)

window.addEventListener('DOMContentLoaded', async function () {
    const response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=ee023605&app_key=8e0a5aba93283a896a4b2b728d506c9f&ingr=${q}&nutrition-type=cooking&category=generic-foods`);
    const data = await response.json();
    console.log(data)
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

})


