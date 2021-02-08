const foodInput = document.getElementById('food-input'); // Input filed
const errorMsg = document.getElementById('error-msg'); // Error msg div
const foodDetailsDiv = document.getElementById('food-details-div'); // Details Div

//Search Button
document.getElementById('search').addEventListener('click', function () {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php';
    fetch(`${url}?s=${foodInput.value}`)
        .then(res => res.json())
        .then(data => showMeal(data.meals))

        const welcomeDiv = document.getElementById('welcome');
        welcomeDiv.className = "d-none";
    // Search food function || Main function 
    const showMeal = meals => {
        if (meals) { // Error message || extra features

            const allFood = document.getElementById('all-food');
            allFood.innerHTML = "";
            foodInput.value = "";
            foodDetailsDiv.className = "d-none";

            // Looping
            meals.forEach(food => {
                const foodDiv = document.createElement('div');
                foodDiv.className = "col-2 p-2 m-2 food-box rounded-3 shadow-sm";
                foodDiv.addEventListener("click", function () {
                    showDetails(food)
                });
                const foodImg = food.strMealThumb;
                const foodName = food.strMeal;
                foodDiv.innerHTML = `
            <img width="213px" class="img-fluid rounded-3" src="${foodImg}" alt="">
            <h4 class="text-center pt-2">${foodName}</h4>
            `;
                allFood.appendChild(foodDiv);
                errorMsg.className = "d-none";
            });
        } else {
            foodInput.value = "";
            errorMsg.className = "d-block";
        }
    }

    // Showing detail's function  (onclick)
    const showDetails = foodDetails => {

        foodDetailsDiv.className = "d-flex";
        const foodImg = foodDetails.strMealThumb;
        const foodDetailImg = document.getElementById('food-detail-img')
        foodDetailImg.src = foodImg;

        const foodDetailName = document.getElementById('food-detail-name');
        foodDetailName.innerText = foodDetails.strMeal;

        const ul = document.getElementById('ingredients');

        const li = `
        <li class="list-group-item border-0"><i class="fas fa-check-square"></i> ${foodDetails.strIngredient1}</li>
        <li class="list-group-item border-0"><i class="fas fa-check-square"></i> ${foodDetails.strIngredient2}</li>
        <li class="list-group-item border-0"><i class="fas fa-check-square"></i> ${foodDetails.strIngredient3}</li>
        <li class="list-group-item border-0"><i class="fas fa-check-square"></i> ${foodDetails.strIngredient4}</li>
        <li class="list-group-item border-0"><i class="fas fa-check-square"></i> ${foodDetails.strIngredient5}</li>
        `;
        ul.innerHTML = li;
    }
})
