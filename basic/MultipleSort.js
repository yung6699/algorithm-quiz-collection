const array = [
    [4, "Trapezium", "Dallas"],
    [5, "Pentagon", "Bevery"],
    [3, "Triangle", "NewYork"],
    [4, "Rectangle", "Seoul"],
    [4, "Square", "LA"],
    [3, "Triangle", "Tokyo"]
];

array.sort((a, b) => {
    const [aNumber, aText, aCity] = a;
    const [bNumber, bText, bCity] = b;
    if (aNumber !== bNumber) return aNumber - bNumber;
    if (aText !== bText) return aText.localeCompare(bText);
    return aCity.localeCompare(bCity);
});

console.log('array', array);
