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
// const textPilotStatus = document.getElementById("pilotStatus");
// const textCopilotStatus = document.getElementById('copilotStatus');
const containerFaultyItems = document.getElementById("faultyItems");

function formSubmission(
  document,
  list,
  pilot,
  copilot,
  fuelLevel,
  cargoMass
) {
let response;

// if (validateInput(pilot.value) !== 'Not a Number') 
// {
//     window.alert('Please enter a valid input for Pilot Name');
//   } else 
//   {
//     containerPilotStatus.innerHTML = 'asdasda'
//   }

  // if (validateInput(copilot.value) !== 'Not a Number') {
  //   window.alert('Please enter a valid input for Co-pilot Name');
  // } else {
  //   window.alert('Yes my boy!')
  //  }

  if(validateInput(fuelLevel.value) !== 'Is a Number' ) {
    window.alert('Please enter a valid input for Fuel Level')
  } else if (fuelLevel.value < 10000) {
    console.log('visability test')
    containerFaultyItems.innerHTML.style.visibility = "visible"
  } 

  // if(validateInput(cargoMass.value) !== 'Is a Number') {
  //   window.alert('Please enter a valid input for Cargo Mass')
  // } else {
  //   window.alert('Yes my boy!')
  //  }
  // return response;
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
