const foodInput = document.getElementById('food-input');
document.getElementById('search').addEventListener('click', function () {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php';
    fetch(`${url}?s=${foodInput.value}`)
        .then(res => res.json())
        .then(data => showMeal(data.meals))

//     const showMeal = meals => {
//         // const allFood = document.getElementById('all-food');
//         // const foodName = meals.strCategory;
//         // console.log(foodName);
//         meals.forEach(food => {
//             // const foodDiv = 
//             const foodName = food.strMeal;
//             console.log(foodName);
//         });
//     }

// })