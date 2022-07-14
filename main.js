var elForm = document.querySelector(".km__form");
var elInput = document.querySelector(".km__input")
var elWalk = document.querySelector("#first");
var elBike = document.querySelector("#second");
var elCar = document.querySelector("#third");
var elPlane = document.querySelector("#fourth");


elForm.addEventListener ("submit" , function (event) {

  event.preventDefault();
  var elInputValue = elInput.value

  if(!isNaN(elInputValue)){
    elWalk.textContent = (`${Math.floor(((elInputValue) / 3.6)).toFixed(0)} hours 
    ${ ((((elInputValue / 3.6).toFixed(2)) % 1) * 60).toFixed(0) } minutes`);

    elBike.innerHTML = (`${Math.floor(((elInputValue) / 20.1)).toFixed(0)} hours 
    ${ ((((elInputValue / 20.1).toFixed(2)) % 1) * 60).toFixed(0) } minutes`);

    elCar.innerHTML = (`${Math.floor(((elInputValue) / 70)).toFixed(0)} hours 
    ${ ((((elInputValue / 70).toFixed(2)) % 1) * 60).toFixed(0) } minutes`);

    elPlane.innerHTML = (`${Math.floor(((elInputValue) / 800)).toFixed(0)} hours 
    ${ ((((elInputValue / 800).toFixed(2)) % 1) * 60).toFixed(0) } minutes`);
  }
})