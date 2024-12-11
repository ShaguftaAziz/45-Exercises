var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array of countries and Print its original order
var countriestovisit = ["China", "Denmark", "Brazil", "Turkey"];
console.log("original order:", countriestovisit);
// Print the Array in Alphabetical order without modifying the Actual Array list
console.log("Alphabetical order:", __spreadArray([], countriestovisit, true).sort());
// Show that the order is still in original order
console.log("Still in original order:", countriestovisit);
// Print the Array in Reversed order without modifying the Actual Array list
console.log("Reverse order:", __spreadArray([], countriestovisit, true).reverse());
// Show that the order is still in original order
console.log("Still in original order:", countriestovisit);
// We have Changed the Original Array Order Now
console.log("Original Array Reversed:", countriestovisit.reverse());
// print the Array to show that it's back to its original order
console.log("Back to Original Order:", countriestovisit.reverse());
// Print the Array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical order:", countriestovisit.sort());
// We have Changed again the Original Array Order Now in reverse order again
console.log("Original Array Reversed Again:", countriestovisit.reverse());
