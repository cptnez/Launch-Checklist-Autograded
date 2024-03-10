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
  let pilotStatus = document.getElementById('pilotStatus')
  let copilotStatus = document.getElementById("copilotStatus");
  const containerFaultyItems = document.getElementById('faultyItems');
  let containerLaunchStatus = document.getElementById('launchStatus');
  let fuelLevelStatus = document.getElementById("fuelStatus");
  let cargoMassStatus = document.getElementById("cargoStatus");

  //PILOT AND COPILOT STATEMENTs
  if (validateInput(pilot.value) !== 'Not a Number') {
    // alert('Please enter a valid input for Pilot Name')
    // console.log("PILOT WRONG");
  } else {
    pilotStatus.innerHTML = `Pilot ${pilot.value} is ready`;
    statusCounter += 1;
  }

  if (validateInput(copilot.value) !== 'Not a Number') {
    // alert('Please enter a valid input for Co-Pilot Name')
    // console.log("COPILOT WRONG");
  } else {
    copilotStatus.innerHTML = `Co-Pilot ${copilot.value} is ready`;
    statusCounter += 1;
  }

  //FUEL LEVEL STATEMENT
  if (validateInput(fuelLevel.value) !== 'Is a Number') {
    // alert('Please enter a valid input for Fuel Level');\
    // console.log("FUEL LEVEL WRONG");
  } else if (fuelLevel.value < 10000) {
    containerFaultyItems.style.visibility = 'visible';
    fuelLevelStatus.innerHTML = "Fuel level too low for launch";
    containerLaunchStatus.innerHTML = "Shuttle Not Ready for Launch";
    containerLaunchStatus.style.color = 'red';
  } else {
    containerFaultyItems.style.visibility = 'visible';
    fuelLevelStatus.innerHTML = "Fuel level high enough for launch";
    statusCounter += 1;
  }

  //CARGO MASS STATEMENT
  if (validateInput(cargoMass.value) !== 'Is a Number') {
    // alert('Please enter a valid input for Cargo Mass')
    // console.log("CARGO STATUS WRONG");
  } else if (cargoMass.value > 10000) {
    containerFaultyItems.style.visibility = 'visible';
    cargoMassStatus.innerHTML = "Cargo mass too heavy for launch"
    containerLaunchStatus.innerHTML = "Shuttle Not Ready for Launch";
    containerLaunchStatus.style.color = 'red';
  } else {
    containerFaultyItems.style.visibility = 'visible';
    cargoMassStatus.innerHTML = "Cargo mass low enough for launch";
    statusCounter += 1;
  }



  if (statusCounter == 4) {
    response = 'Shuttle is Ready';
    containerLaunchStatus.innerHTML = 'Shuttle is Ready for Launch'
    containerLaunchStatus.style.color = 'green';
  } else {
    response = "Shuttle Not Ready";
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