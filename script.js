// Write your JavaScript code here!

// const { myFetch } = require("./scriptHelper");

// const { addDestinationInfo } = require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");

// const { myFetch } = require("./scriptHelper");

// const { validateInput, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  let button = document.getElementById("formSubmit");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // let document = document;
    let list = document.getElementById("faultyItems").value;
    let pilot = document.querySelector("input[name=pilotName]").value;
    let copilot = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoMass = document.querySelector("input[name=cargoMass]").value;

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
  });

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();


  console.log(listedPlanetsResponse);

  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to
      //pick a planet fom the list of planets and add that information to your destination.
      // planet = pickPlanet(listedPlanets);
      let planet = pickPlanet(listedPlanets);
      console.log(planet);
      addDestinationInfo(
        document,
        planet.name,
        planet.diameter,
        planet.star,
        planet.distance,
        planet.moons,
        planet.image
      );
    });
});
