var cheese = [
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

for (i = points.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = points[i]
    points[i] = points[j]
    points[j] = k
  }