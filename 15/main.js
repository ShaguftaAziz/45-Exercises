var guestlist = ["Kamran Teaaori", "Daniyal Nagori", "Syed Hamzah", "Ameen Aalam"];
var dontCome = guestlist[0];
console.log(dontCome, "nahe aah sakta");
guestlist.splice(0, 1, "usman");
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
