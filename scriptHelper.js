// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
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


function formSubmission(
  document,
  list,
  pilot,
  copilot,
  fuelLevel,
  cargoMass
) {
let response;
let statusCounter = 0;

const textPilotStatus = document.getElementById("pilotStatus");
const textCopilotStatus = document.getElementById('copilotStatus');
const containerFaultyItems = document.getElementById("faultyItems");
const containterLaunchStatus = document.getElementById('launchStatus');
const containerFuelLevel = document.getElementById('fuelStatus')
const containerCargoMass = document.getElementById('cargoStatus');

if (validateInput(pilot.value) !== 'Not a Number') {
    window.alert('Please enter a valid input for Pilot Name');
  } else {
    statusCounter += 1;
  }

if (validateInput(copilot.value) !== 'Not a Number') {
    window.alert('Please enter a valid input for Co-pilot Name');
  } else {
    statusCounter += 1;
  }

  if (fuelLevel.value < 10000 && cargoMass.value > 10000) {
    containerFaultyItems.style.visibility = "visible";
    containterLaunchStatus.innerHTML = 'Shuttle not ready for launch';
    containterLaunchStatus.style.color = 'red';
    containerFuelLevel.innerHTML = 'Fuel level is too low for launch';
    containerCargoMass.innerHTML = 'There is too much mass for the shuttle to take off!';
  }

  if(validateInput(fuelLevel.value) !== 'Is a Number' ) {
    window.alert('Please enter a valid input for Fuel Level');
  } else if (fuelLevel.value < 10000) {
    containerFaultyItems.style.visibility = "visible";
    containerFuelLevel.innerHTML = 'Fuel level is too low for launch';
    containterLaunchStatus.innerHTML = 'Shuttle not ready for launch';
    containterLaunchStatus.style.color = 'red';
  } else {
    statusCounter += 1;
  }

  if(validateInput(cargoMass.value) !== 'Is a Number') {
    window.alert('Please enter a valid input for Cargo Mass')
  } else if (cargoMass.value > 10000) {
    containerFaultyItems.style.visibility = "visible";
    containterLaunchStatus.innerHTML = 'Shuttle not ready for launch';
    containterLaunchStatus.style.color = 'red';
    containerCargoMass.innerHTML = 'There is too much mass for the shuttle to take off!'
   } else {
    statusCounter += 1;
   }


   if (statusCounter === 4) {
    response = 'Shuttle Ready';
    containerFaultyItems.style.visibility = "visible";
    containterLaunchStatus.innerHTML = 'Shuttle is ready for launch';
    containterLaunchStatus.style.color = 'green';
    textPilotStatus.innerHTML = `Pilot ${pilot.value} Ready`;
    textCopilotStatus.innerHTML = `Pilot ${copilot.value} Ready`
    containerCargoMass.innerHTML = 'Cargo mass low enough for launch'
   } else {
    response = 'Shuttle not Ready';
   }

   return response

}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
