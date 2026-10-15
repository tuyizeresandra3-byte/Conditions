
// if ... else if/else if
let age = 16;
if (age >= 18) {
    console.log("You are an adult");
}

let isLoggedIn = false;

if (isLoggedIn === true) {
    console.log("Welcome to the Website");
}

let password = "123456";

if (password === "123456") {
    console.log("password is incorect");
}

// if ... else
if (isLoggedIn === true) {
    console.log("Welcome to the website");
}
else {
    console.log("Please login");
}

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// if...else if...else condition
let marks = 65;
if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else if (marks >= 50) {
    console.log("Grade D");
} else {
    console.log("You have failed");
}

//  combining the conditions
let Authentication = true;
let isAdmin = true;

if (Authentication === true && isAdmin === true) {
    console.log("Welcome Admin");
} else if (Authentication === true && isAdmin === false) {
    console.log("Welcome User");
} else {
    console.log("Please Login");
}

let ages = 19;
let hasTicket = false;
let isVip = true;

if (ages >= 18 && hasTicket) console.log("Welcome to the club");
if (ages >= 18 || isVip) console.log("You are not allowed to be here");

const user = null;
let userName = null;
if (user && user.name) {
    console.log(user.name);
}
console.log(user?.name);

// Truthy and Falsy values
let input = "";

if (!input) {
    console.log("Please provide a valid input");
}

const quantity = 0;
if (quantity) {
    console.log("You have no items in your cart")
}
if (quantity !== undefined) {
    console.log("You have items now in your cart");
}

// Ternary operator
const score = 65;
const result = score >= 50 ? "Pass" : "Fail";

console.log(result);

let userNames = "Aline";
let hours = "12hrs";

const message = hours === "12hrs" ? `Hello ${userNames} what are we going to do this Afternoon` : `Hello ${userNames} what are we going to do this Morning`;

console.log(message);

// Switch condition
// we study 3 days a week

let studyDays = "Thursday";

switch (studyDays) {
    case "Tuesday":
        console.log("We study on Tuesday");
        break;
    case "Wednesday":
        console.log("We do revision on Wednesday");
        break;
    case "Thursday":
        console.log("We have to study on Thursday");
        break;
    case "Friday":
        console.log("We do revision on Friday");
        break;
    case "Sartuday":
        console.log("We have to study on Sartuday");
        break;
    default:
        console.log("We don't have to study on this day");
}



