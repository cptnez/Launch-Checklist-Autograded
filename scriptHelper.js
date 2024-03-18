
// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  image
) {
  // Here is the HTML formatting for our mission target div.
  let missionTarget = document.getElementById("missionTarget");

missionTarget.innerHTML =
   `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${image}">`;
}

function validateInput(testInput) {
  let result;

  if (testInput === "") {
    result = "Empty";
  } else if (isNaN(testInput) == true) {
    result = "Not a Number";
  } else if (isNaN(testInput) == false) {
    result = "Is a Number";
  }

  return result;
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let listFaultyItems = document.getElementById("faultyItems");
  let h2LaunchStatus = document.getElementById("launchStatus");
  let fuelLevelStatus = document.getElementById("fuelStatus");
  let cargoMassStatus = document.getElementById("cargoStatus");
  let namesArray = [pilot, copilot];
  let numbersArray = [fuelLevel, cargoMass];
  let statusCounter = 0;
  let inputCounter = 0;

  // VALIDATION OF STRINGS
  if (pilot === "" || copilot === "" || fuelLevel === "" || cargoMass === "") {
    alert("All fields are required!");
  } else {
    inputCounter = true;
  }

  if (validateInput(pilot) !== "Not a Number" && inputCounter === true) {
    alert("Please enter correct input type for pilot");
  } else if (validateInput(pilot) === "Not a Number" && inputCounter === true) {
    statusCounter += 1;
  }

  if (validateInput(copilot) !== "Not a Number" && inputCounter === true) {
    alert("Please enter correct input type for Co-pilot");
  } else if (
    validateInput(copilot) === "Not a Number" &&
    inputCounter === true
  ) {
    statusCounter += 1;
  }

  if (validateInput(fuelLevel) !== "Is a Number" && inputCounter === true) {
    alert("Please enter correct input type for fuel level");
  } else if (
    validateInput(fuelLevel) === "Is a Number" &&
    inputCounter === true
  ) {
    statusCounter += 1;
  }

  if (validateInput(cargoMass) !== "Is a Number" && inputCounter === true) {
    alert("Please enter correct input type for cargo mass");
  } else if (
    validateInput(cargoMass) === "Is a Number" &&
    inputCounter === true
  ) {
    statusCounter += 1;
  }

  // LAUNCH CHECKLIST WHEN CARGO IS TOO HEAVY AND FUEL TOO LOW FOR LAUNCH-PASSES TEST
  if (fuelLevel < 10000 && cargoMass > 10000 && statusCounter === 4) {
    listFaultyItems.style.visibility = "visible";
    h2LaunchStatus.style.color = "red";
    h2LaunchStatus.innerHTML = "Shuttle Not Ready for Launch";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelLevelStatus.innerHTML = "Fuel level too low for launch";
    cargoMassStatus.innerHTML = "Cargo mass too heavy for launch";
  }

  //LAUNCH CHECKLIST WHEN FUEL IS TOO LOW FOR LAUNCH-PASSES TEST
  else if (fuelLevel < 10000 && statusCounter === 4) {
    listFaultyItems.style.visibility = "visible";
    h2LaunchStatus.style.color = "red";
    h2LaunchStatus.innerHTML = "Shuttle Not Ready for Launch";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelLevelStatus.innerHTML = "Fuel level too low for launch";
    cargoMassStatus.innerHTML = "Cargo mass low enough for launch";
  }

  //  LAUNCH CHECKLIST WHEN CARGO TOO HEAVY FOR LAUNCH-PASSES TEST
  else if (cargoMass > 10000 && statusCounter === 4) {
    listFaultyItems.style.visibility = "visible";
    h2LaunchStatus.style.color = "red";
    h2LaunchStatus.innerHTML = "Shuttle Not Ready for Launch";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelLevelStatus.innerHTML = "Fuel level high enough for launch";
    cargoMassStatus.innerHTML = "Cargo mass too heavy for launch";
  }

  // LAUNCH CHECKLIST WHEN EVERYTHING IS GOOD TO GO
  else if (statusCounter === 4) {
    listFaultyItems.style.visibility = "visible";
    h2LaunchStatus.style.color = "green";
    h2LaunchStatus.innerHTML = "Shuttle is Ready for Launch";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelLevelStatus.innerHTML = "Fuel level high enough for launch";
    cargoMassStatus.innerHTML = "Cargo mass low enough for launch";
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    'https://handlers.education.launchcode.org/static/planets.json'
  ).then(function (response) {
   return response.json()

  });
  return planetsReturned;
}



function pickPlanet(planets) {
  let planetsSelection = Math.floor(Math.random() * planets.length);

  return planets[planetsSelection];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
