 let guestlist = ["Kamran Teaaori", "Daniyal Nagori", "Syed Hamzah","Ameen Aalam"];
let dontCome = guestlist[0];
console.log(dontCome, "nahe aah sakta");
guestlist.splice(0, 1, "usman");
guestlist.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));

