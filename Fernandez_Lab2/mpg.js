"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;

const focusAndSelect = selector => { //focus when clicked on box 
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => { //calculates entries 
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    if (isNaN(miles) || miles <= 0) {
        alert(getErrorMsg("Miles driven"));
        focusAndSelect("#miles");
    } else if (isNaN(gallons) || gallons <= 0) {
        alert(getErrorMsg("Gallons of gas used"));
        focusAndSelect("#gallons");
    } else {
        $("#mpg").value = (miles / gallons).toFixed(2);
    }
};

var clearEntries = () => { //clears entries when double click mpg text box
    $("#miles").value = "";
    $("#gallons").value = "";
    $("#mpg").value = "";
};

const clearOnFocus = (selector) => { //clears entry when out of focus from gallons box
    $(selector).value = "";
};



//enhancements 
document.addEventListener("DOMContentLoaded", () => {
    
    $("#calculate").addEventListener("click", processEntries); //calculates when clicked button
    
    $("#mpg").addEventListener("dblclick", clearEntries); //clear entries when double click mpg text box
    
    $("#miles").addEventListener("focus", () => clearOnFocus("#miles")); //clears entry when focused on text box 
    $("#gallons").addEventListener("focus", () => clearOnFocus("#gallons")); 

    $("#gallons").addEventListener("blur", processEntries); //calculates entries when not focused on gallons of gas box 
    
    $("#miles").focus(); //focus is on miled driven text box 
});

