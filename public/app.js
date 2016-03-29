window.onload = function(){
  console.log('App started');
  var url = "https://restcountries.eu/rest/v1";
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function(){
    if(request.status === 200){
      console.log('got the data success');
      var jsonString = request.responseText;
      var countries = JSON.parse(jsonString);
      var selectDropDown = document.createElement('select');
      populateSelect(countries, selectDropDown);
    }
  };
  request.send();
};

function populateSelect(countries, selectDropDown){
  for (i = 0; i < countries.length; i++) {
    var option = document.createElement('option');
    option.innerText = countries[i].name;
    option.value = i;
    countries[i].value = i;
    selectDropDown.appendChild(option);
  };
  var appContainer = document.getElementById('app');
  appContainer.appendChild(selectDropDown);

  // var showDetails = function(countryDetails);
  //   selectDropDown.appendChild(showDetails);


    // var showDetails = document.createElement("showDetails");
    //   showDetails.innerHTML = items[i].countries;
    //   countries.appendChild(showDetails);


  // onchange selectDropDown
  // selectDropDown.onchange = showDetails;

}

