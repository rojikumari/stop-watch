const search = document.getElementById("search");
const submit = document.getElementById("fetch-btn");
const random = document.getElementById("random");
const meal = document.getElementById("meal");
const output = document.getElementsByClassName("result");
const one_meal = document.getElementById("choose");

function searchMeal(){
    
    one_meal.innerHTML="";
    const term = search.value;

       fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then((res) => res.json())
        .then((data)=>{
        
            if(data.meals==null){
                document.getElementById('searchResults').innerHTML=`${term} is temporarily unavailable.`;
                document.getElementById('searchResults').style.visibility = "visible"
            }
            else{
               document.getElementById('meal').innerHTML = data.meals.map((item)=>{
                   return `<div class="imageTag">
                           <img class="display-Image" src="${item.strMealThumb}" alt="image">
                           <p>${item.strMeal}</p>
                           </div>`
               })
               document.getElementById('searchResults').style.visibility = `hidden`
            }
            document.getElementById("Display").style.visibility = `hidden`;
        } )
        // console.log(y);
}
submit.addEventListener('click',searchMeal);
 