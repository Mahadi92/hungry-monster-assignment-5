const foodInput = document.getElementById('food-input');
document.getElementById('search').addEventListener('click', function () {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php';
    fetch(`${url}?s=${foodInput.value}`)
        .then(res => res.json())
        .then(data => showMeal(data.meals))

    const showMeal = meals => {
        const allFood = document.getElementById('all-food');
        allFood.innerHTML = "";
        meals.forEach(food => {
            const foodDiv = document.createElement('div');
            foodDiv.className = "col-2 p-2 m-2 food-box rounded-3 shadow-sm";
            foodDiv.addEventListener("click", function () {
                showDetails();
            });
            const foodImg = food.strMealThumb;
            const foodName = food.strMeal;
            foodDiv.innerHTML = `
            <img width="213px" class="img-fluid rounded-3" src="${foodImg}" alt="">

            <h4 class="text-center pt-2">${foodName}</h4>
            `;
            allFood.appendChild(foodDiv);


        });
    }
    const showDetails = () => {
        const foodDetails = document.getElementById('food-details');
        foodDetails.className = "d-flex";
        // const foodDetailImg = food-detail-img
        const 
    }

})