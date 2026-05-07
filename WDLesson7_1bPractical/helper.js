//get( ) accepts an id of an element and returns the actual element with that id. This functions serves to shorten the code required to get an element
function get(id){
  return document.getElementById(id);
}

//Challeng 1: Create a function card that accepts a JSON of a 311 complaint, generates and returns an appropriate card for the complaint
function card(info){
  build = `<div class="fitted card">
              <h2>${info.violation}</h2>
              <h4>${info.issue_date}</h4>
              <h4>${info.violation_time}</h2>
              <hr>
              <p>${info.license_type}</p>
              <p>${info.issuing_agency}</p>
              <p>${info.county}</p>
           </div>`;
  return build;
}


//Challenge 2: Create a function cards that accepts an array of JSON of Open Parking and Camera Violations, generates and return cards for each violation


