// const cheese = [
//     "Brie", 
//     "Cheddar", 
//     "Feta", 
//     "Gouda", 
//     "Havarti", 
//     "Mozzarella", 
//     "Parmesan", 
//     "Ricotta",
//     "American",
//     "Pepperjack"
// ]
// document.getElementById("cheesetext").addEventListener = randomCheese;  

// function randomCheese() {
// for (let i = cheese.length -1; i > 0; i--) {
//     j = Math.floor(Math.random() * i)
//     k = cheese[i]
//     cheese[i] = cheese[j]
//     cheese[j] = k
//   }

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
]
document.getElementById("cheesetext").addEventListener = randomCheese;  

function randomCheese() {
for (let i = cheese.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
  };