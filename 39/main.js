//  Calling a function with parameters which return a values in string
function city_country(city, country) {
    return "".concat(city, " , ").concat(country);
}
// Calling a function and print the returned value
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
city_country("Berlin", "Germany");
console.log(city_country("Berlin", "Germany"));