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


let pilotStatus = document.getElementById("pilotStatus");
let copilotStatus = document.getElementById('copilotStatus');
let listFaultyItems = document.getElementById("faultyItems");
let h2LaunchStatus = document.getElementById('launchStatus');
let fuelLevelStatus = document.getElementById('fuelStatus')
let cargoMassStatus = document.getElementById('cargoStatus');

// LAUNCH CHECKLIST WHEN CARGO IS TOO HEAVY AND FUEL TOO LOW FOR LAUNCH-PASSES TEST
if (fuelLevel < 10000 && cargoMass > 10000){
  listFaultyItems.style.visibility = 'visible';
  h2LaunchStatus.style.color = 'red';
  h2LaunchStatus.innerHTML = 'Shuttle Not Ready for Launch';
  pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
  copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
  fuelLevelStatus.innerHTML = "Fuel level too low for launch";
  cargoMassStatus.innerHTML = "Cargo mass too heavy for launch";
  statusCounter += 1
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
  statusCounter += 1
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
  statusCounter += 1;
  }

// // LAUNCH CHECKLIST WHEN CARGO IS TOO HEAVY AND FUEL TOO LOW FOR LAUNCH-PASSES TEST
// if (fuelLevel <= 10000 && cargoMass >= 10000){
//   listFaultyItems.style.visibility = 'visible';
//   h2LaunchStatus.style.color = 'red';
//   h2LaunchStatus.innerHTML = 'Shuttle Not Ready for Launch';
//   pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
//   copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
//   fuelLevelStatus.innerHTML = "Fuel level too low for launch";
//   cargoMassStatus.innerHTML = "Cargo mass too heavy for launch";
//   statusCounter += 1
// }



// test("Launch Checklist when everything is good to go", () => { 
//   // Shuttle should be ready for launch, enough fuel and cargo
//   studentFunctions.formSubmission(document, list, "Chris", "Bob", 10000, 1);
//   expect(list).toBeVisible();
//   expect(h2).toHaveStyle({color: 'green'});
//   expect(h2).toHaveTextContent("Shuttle is Ready for Launch");
//   expect(pilotStatus).toHaveTextContent("Pilot Chris is ready for launch");
//   expect(copilotStatus).toHaveTextContent("Co-pilot Bob is ready for launch");
//   expect(fuelStatus).toHaveTextContent("Fuel level high enough for launch");
//   expect(cargoStatus).toHaveTextContent("Cargo mass low enough for launch");
// });

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
    response = 'Shuttle is Ready';
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