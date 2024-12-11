// Array of Current Users
var current_users = ["Zohaib", "Zoya", "qamar", "Aamir", "Zain"];
// Array of New Users
var New_users = ["Kiran", "Ayesha", "Zohaib", "Qamar", "Kabeer"];
// Loop through New_Usrs to check for usernames avability
New_users.forEach(function (new_one_user) {
    // Making a condition for username already exist and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Different messages using If_Else statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
