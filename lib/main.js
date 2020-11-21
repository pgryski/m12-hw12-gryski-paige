"use strict";

var cheese = ["Brie", "Cheddar", "Feta", "Gouda", "Havarti", "Mozzarella", "Parmesan", "Ricotta", "American", "Pepperjack"];

for (i = cheese.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * i);
    k = cheese[i];
    cheese[i] = cheese[j];
    cheese[j] = k;
}

document.getElementById("cheesetext"),