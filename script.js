// Write your JavaScript code here!

// const { validateInput, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

  let form = document.querySelector('form');
  let button = document.getElementById('formSubmit')
 
  let inputPilot = document.querySelector("input[name=pilotName]");
  let inputCopilot = document.querySelector("input[name=copilotName]");
  let inputFuelLevel = document.querySelector("input[name=fuelLevel]");
  let inputCargoMass = document.querySelector("input[name=cargoMass]");
 

  form.addEventListener("submit", function(event) {
    // let document = document;
    let list = document.getElementById('faultyItems')
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");

    if (
      pilot.value === "" ||
      copilot.value === "" ||
      fuelLevel.value === "" ||
      cargoMass.value === ""
    ) {
      alert("All fields are required!");
      event.preventDefault();
    }

   if (formSubmission(
      document,
      list,
      pilot,
      copilot,
      fuelLevel,
      cargoMass
    ) === 'Shuttle is Ready');
    event.preventDefault();

    
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