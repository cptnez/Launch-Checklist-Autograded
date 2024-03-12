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
  let missionTarget = document.getElementById('missionTarget');
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
                 <img src="${imageUrl}">`

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
let pilotStatus = document.getElementById("pilotStatus");
let copilotStatus = document.getElementById('copilotStatus');
let listFaultyItems = document.getElementById("faultyItems");
let h2LaunchStatus = document.getElementById('launchStatus');
let fuelLevelStatus = document.getElementById('fuelStatus')
let cargoMassStatus = document.getElementById('cargoStatus');
let namesArray = [pilot, copilot];
let numbersArray = [fuelLevel, cargoMass];
let statusCounter = 0;

// VALIDATION OF STRINGS
// for (const item of namesArray) {
//   if (validateInput(namesArray[item]) !== 'Not a Number' || validateInput(namesArray[item]) == 'Empty') {
//     alert('Please enter correct input type');
//   } else {
//     alert('Right info!')
//   }
// };

// for (const item of numbersArray) {
//   if (validateInput(numbersArray[item]) !== 'Is a Number' || validateInput(numbersArray[item]) == 'Empty') {
//     alert('Please enter correct input type');
//   } else {
//     alert('Right info!')
//   }
// };

// LAUNCH CHECKLIST WHEN CARGO IS TOO HEAVY AND FUEL TOO LOW FOR LAUNCH-PASSES TEST
if (fuelLevel < 10000 && cargoMass > 10000){
  listFaultyItems.style.visibility = 'visible';
  h2LaunchStatus.style.color = 'red';
  h2LaunchStatus.innerHTML = 'Shuttle Not Ready for Launch';
  pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
  copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
  fuelLevelStatus.innerHTML = "Fuel level too low for launch";
  cargoMassStatus.innerHTML = "Cargo mass too heavy for launch";
  // response = 'Shuttle not Ready';
}

//LAUNCH CHECKLIST WHEN FUEL IS TOO LOW FOR LAUNCH-PASSES TEST
else if (fuelLevel < 10000) {
  listFaultyItems.style.visibility = 'visible';
  h2LaunchStatus.style.color = 'red';
  h2LaunchStatus.innerHTML = 'Shuttle Not Ready for Launch';
  pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
  copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
  fuelLevelStatus.innerHTML = "Fuel level too low for launch";
  cargoMassStatus.innerHTML = "Cargo mass low enough for launch"
  // response = 'Shuttle not Ready';
  }

//  LAUNCH CHECKLIST WHEN CARGO TOO HEAVY FOR LAUNCH-PASSES TEST
else if (cargoMass > 10000) {
  listFaultyItems.style.visibility = 'visible';
  h2LaunchStatus.style.color = 'red';
  h2LaunchStatus.innerHTML = 'Shuttle Not Ready for Launch';
  pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
  copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
  fuelLevelStatus.innerHTML = "Fuel level high enough for launch";
  cargoMassStatus.innerHTML = "Cargo mass too heavy for launch";
  // response = 'Shuttle not Ready';
  }

// LAUNCH CHECKLIST WHEN EVERYTHING IS GOOD TO GO
// STRATUS COUNTER??
   else {
    listFaultyItems.style.visibility = 'visible';
    h2LaunchStatus.style.color = 'green';
    h2LaunchStatus.innerHTML = 'Shuttle is Ready for Launch';
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelLevelStatus.innerHTML = "Fuel level high enough for launch";
    cargoMassStatus.innerHTML = "Cargo mass low enough for launch";
    // response = 'Shuttle is Ready';
   } 

}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});
  console.log(JSON.stringify(planetsReturned, null, 2));
  return planetsReturned;
}

function pickPlanet(planets) {
  let num = Math.random(planets)*10;
  let planetSingular = Math.floor(num);

  return planetSingular
  // random number
  //return random planets.randomnumber
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;