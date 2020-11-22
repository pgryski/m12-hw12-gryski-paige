 const cheese = [
    "Brie", 
    "Cheddar", 
    "Feta", 
    "Gouda", 
    "Havarti", 
    "Mozzarella", 
    "Parmesan", 
    "Ricotta",
    "American",
    "Pepperjack"
];

document.getElementById("button").addEventListener("click", randomCheese);


function randomCheese() {
  var i, j, k;
    for (i = cheese.length -1; i > 0; i--) {
      j = Math.floor(Math.random() * i)
      k = cheese[i]
      cheese[i] = cheese[j]
      cheese[j] = k
    }
    document.getElementById("cheesetext").innerHTML = cheese[0];
};