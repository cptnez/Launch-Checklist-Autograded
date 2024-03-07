// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {
  //INPUTS
  // let inputPilotName = document.getElementById('pilotName');
  // let inputCopilotName = document.getElementById('copilotName');
  // let inputFuelLevel = document.getElementById('fuelLevel');
  // let inputCargoMass = document.getElementById('cargoMass');
  // let inputAll = [inputPilotName, inputCopilotName, inputFuelLevel, inputCargoMass]
  const container = document.getElementById('faultyItems')
  
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {


    
    // let inputPilotName = document.querySelector("input[name=pilotName]");
    // let inputCopilotName = document.querySelector("input[name=copilotName");
    // let inputFuelLevel = document.querySelector("input[name=fuelLevel");
    // let inputCargoMass = document.querySelector("input[name=cargoMass");

    // if (
    //   inputPilotName.value === "" ||
    //   inputCopilotName.value === "" ||
    //   inputFuelLevel.value === "" ||
    //   inputCargoMass.value === ""
    // ) {
    //   alert("All fields are required!");
    //   event.preventDefault();
    // } else {
    //   formSubmission(document, list, inputPilotName, inputCopilotName, inputFuelLevel, inputCargoMass);
    // }
  });

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse;
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });
});