"use strict";

// Shorthand for document.querySelector
const $ = selector => document.querySelector(selector);

/*********************
*  Helper Functions  *
**********************/
const calculateCelsius = temp => (temp - 32) * 5 / 9;
const calculateFahrenheit = temp => temp * 9 / 5 + 32;

const toggleDisplay = (label1Text, label2Text) => {
    // labels for the text boxes
    $("#degree_label_1").textContent = label1Text;
    $("#degree_label_2").textContent = label2Text;
    
    // Clear the computed value
    $("#degrees_computed").value = "";

    // Clear error message
    $("#message").textContent = "";
    
    // focus back to the input field and select the text
    $("#degrees_entered").focus();
    $("#degrees_entered").select();
};

/****************************
*  Event Handler Functions  *
*****************************/
const convertTemp = () => {   
    const degreesEntered = parseFloat($("#degrees_entered").value);
    
    // Validate input
    if (isNaN(degreesEntered)) {
        $("#message").textContent = "You must enter a valid number for degrees."
        $("#degrees_computed").value = "";
        $("#degrees_entered").focus();
        $("#degrees_entered").select();
        return;
    }
    
    // conversion
    let result;
    if ($("#to_celsius").checked) {
        result = calculateCelsius(degreesEntered);
        $("#degrees_computed").value = Math.round(result) + " °C";
    } else {
        result = calculateFahrenheit(degreesEntered);
        $("#degrees_computed").value = Math.round(result) + " °F";
    }

    // Clear previous error message 
    $("#message").textContent = "";
};

const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

/****************************
*  DOMContentLoaded Handler *
*****************************/
document.addEventListener("DOMContentLoaded", () => {
    // Add event handlers
    $("#convert").addEventListener("click", convertTemp);
    $("#to_celsius").addEventListener("click", toCelsius);
    $("#to_fahrenheit").addEventListener("click", toFahrenheit);
    
    // Move focus to the first text box and select the text
    $("#degrees_entered").focus();
    $("#degrees_entered").select();
});

/****************************
*  Image Overlay Functions  *
*****************************/
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById('imageOverlay');

    
    document.querySelector('.image-overlay-container').addEventListener('mouseover', () => {
        overlay.style.opacity = '1';
    });

    document.querySelector('.image-overlay-container').addEventListener('mouseout', () => {
        overlay.style.opacity = '0';
    });
});
