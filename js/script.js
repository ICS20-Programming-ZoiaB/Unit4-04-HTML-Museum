// Copyright (c) 2023 ZoiaB. All rights reserved.
//
// Created by: ZoiaB
// Created on: Apr 2023
// This file contains the JS functions for index.html

"use strict";

// This function allows for a specific output when the user input text field is left empty
function isEmpty(str) {
  return !str || 0 === str.length;
}

function infoSent() {

 //initializing variables
 let cost = "Please select.";

 //declaring & defining variables
 let userAge = parseInt(document.getElementById("user-age").value);
 let day = document.getElementById("day").value;

 //setting constants for age thresholds
 const CHILD_FREE = 5;
 const ELDERLY_FREE = 95;
 const STUDENT_MINIMUM = 12;
 const STUDENT_MAXIMUM = 21;

    //if: if user enters a negative integer for their age
if (userAge < 0) {
   cost = "Please enter a valid age.";
 }

    //else if: if user does not enter age tell them to please enter age
 else if (isEmpty(userAge)) {
   cost = "Please enter age.";
 }

     //else if: if user does not enter a day of the week
 else if (day == "Day of week") {
   cost = "Please enter a day of the week.";
 }
  
 //using compound if statements to determine cost
 else if ((userAge < CHILD_FREE) || (userAge > ELDERLY_FREE)) {
   cost = "You can visit the museum for free!";
 }

 //elseif: if age is between 12 and 21 OR the day is Tuesday or Thursday.
 else if (((userAge >= STUDENT_MINIMUM) && (userAge <= STUDENT_MAXIMUM)) || ((day == "Thursday") || (day == "Tuesday"))) {
   cost = "You get a student discount.";
 }

 else {
   cost = "You are not eligible for a discount and must pay the full price.";
 }

 //displaying the appropriate cost to the screen
 document.getElementById("results").innerHTML = cost;
}
