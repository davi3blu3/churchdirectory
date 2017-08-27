
var submit = document.getElementById("submit");
submit.addEventListener("click", function(){

    // collect family address data
    var family = {
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        zipcode: document.getElementById("zipcode").value,
        adults: [],
        children: []
    };

    // family may have multiple members (collect data in arrays)
    var name = document.querySelectorAll("#name");
    var birthdate = document.querySelectorAll("#birthdate");
    var cellphone = document.querySelectorAll("#cellphone");

    // iterate through each family member
    for (var i = 0; i < name.length; i++) {

        // determine adult or child by birthday, assign appropriately
        if (isAdult( Date.parse(birthdate[i].value) )){
            family.adults.push(
                {
                    name: name[i].value,
                    birthDate: birthdate[i].value,
                    cellPhone: cellphone[i].value
                });
        } else {
            family.children.push(
                {
                    name: name[i].value,
                    birthDate: birthdate[i].value,
                    cellPhone: cellphone[i].value
                });
        }

    }

    console.log(family);
})

// compare birthdate to todays date - 18 years, return true if over 18
var isAdult = function(dob) {
    var todaysDate = Date.now();
    var adultBirth = todaysDate - 568024668000;
    if (dob > adultBirth) return false;
    return true;
} 

// duplicate family member fields on 'addMember'button press
var addMember = document.getElementById("addMember");
addMember.addEventListener("click", function(){
    var item = document.getElementById("family").firstChild.nextSibling;
    var copy = item.cloneNode(true);
    document.getElementById("family").appendChild(copy);
});