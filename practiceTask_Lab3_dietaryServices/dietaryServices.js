//If the person is an Employee, they are authorized to have access to "Dietary Services".
let isEmployee = true;
let hasAccess;
// this can be full, partial, no access
//If the person is an Enrolled Member, they are authorized to have access to "Dietary Services" and one-on-one interaction with a dietician.
let isEnrolledMember = false;
let hasDietitian;
//If the person is a Subscriber, they are authorized to have partial access to facilitate "Dietary Services" only.
let isSubscriber = true;
//If the person is a Non-Subscriber, they need to enroll or at least subscribe first to avail this facility.

if(isEmployee){
    hasAccess = "Has full access"
    if(isEnrolledMember){
        hasDietitian = true;
    }else{
        hasDietitian = false;
    }
} else if(isSubscriber){
    hasAccess = "Has partial access";
    hasDietitian = false;
} else{
    hasAccess = "You are not an employee or a subsciber, you have no access to the service. need to enroll or at least subscribe first to avail this facility.";
    hasDietitian = false;
}

console.log("Is the user employee?: ", isEmployee);
console.log("Is the user subscriber?: ", isSubscriber)
console.log("User access: ", hasAccess);
console.log("Has Dietitian access?: ", hasDietitian);