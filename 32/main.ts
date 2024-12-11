// Array of Current Users
let current_users = ["Zohaib", "Zoya", "qamar", "Aamir", "Zain"]

// Array of New Users
let New_users = ["Kiran", "Ayesha", "Zohaib", "Qamar", "Kabeer"]

// Loop through New_Usrs to check for usernames avability
New_users.forEach(new_one_user => {

    // Making a condition for username already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    // Print Different messages using If_Else statements
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This username ${new_one_user} is available`)
    }
   
    })