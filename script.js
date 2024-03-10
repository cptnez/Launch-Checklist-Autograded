// Write your JavaScript code here!

// const { validateInput, formSubmission } = require("./scriptHelper");


window.addEventListener("load", function() {

  let form = document.querySelector('form');
  let button = document.getElementById('formSubmit')


 

  form.addEventListener("submit", function(event) {

    const list = document.getElementById('faultyItems')
    const pilot = document.querySelector("input[name=pilotName]");
    const copilot = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoMass = document.querySelector("input[name=cargoMass]");

    if (formSubmission(
      document,
      list,
      pilot,
      copilot,
      fuelLevel,
      cargoMass
    ) == 'Shuttle is Ready') {
      event.preventDefault();
    } else {
      event.preventDefault();
    }


    
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