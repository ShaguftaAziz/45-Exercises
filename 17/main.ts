// Creating a guest List Array
let guestlist = ["Kamran Tessori", "Daniyal Nagori", "Syed Hamzah", "Ameen Aalam"];

// Making variable for those guest who cant come
let dontCome = guestlist[0];

// Print the name of guest who cant come
console.log(dontCome, "Nahi Aah Saktae Haen");

// Add or Remove Values from Guest List Array
guestlist.splice(0, 1, "Usman");

// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");

// Adding a new value at starting index of Array
guestlist.unshift("Qasim");

// Adding a new value at ending index of Array
guestlist.push("Faisal");

// Adding a new guest at middle index of Array
let middleIndex: number = Math.floor(guestlist.length / 2);

// Adding a new guest to middle index of Array
guestlist.splice(middleIndex, 0, "Zohaib");

// Print Message of Updated List
console.log("Updated List of our Guests");

// Sending a invitation message to our guests one by one with thier names
guestlist.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me?`));


// inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite only two guests to dinner with me");


// using while-loop to remove guests from the array until only two names remain
 while(guestlist.length > 2) {
    let removedGuest = guestlist.pop();
    console.log(`Sorry, ${removedGuest} I cant invite you to dinner`);
}
// Sending a invitation to the last two guest on the list
 console.log("Invitations to the last 2 Guests");
guestlist.forEach(Lasttwo => console.log(`Luckly ${Lasttwo}, you are still invited to dinner`));

// Removing Last two Guest from the List
guestlist.pop();
guestlist.pop();
console.log("Empty list:", guestlist);

        