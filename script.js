// Write your JavaScript code here!

// const { formSubmission, validateInput } = require("./scriptHelper");

// const { validateInput } = require("./scriptHelper");

// const { validateInput } = require("./scriptHelper");

// const { validateInput, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

  let form = document.querySelector('form');
 
  let inputPilot = document.querySelector("input[name=pilotName]")
  let inputFuelLevel = document.querySelector("input[name=fuelLevel]")

  let validatePilot = validateInput(inputPilot)
  let valueOfFuelLevel = inputFuelLevel.value; 

  form.addEventListener("submit", function(event) {

  console.log(validateInput(inputFuelLevel.value));
  });








  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse;
  listedPlanetsResponse.then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
  }).then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
  })
  
});