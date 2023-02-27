// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
 
  //Sets the current date on top of page
//TODO add ordinal to day of month
let todaysDate = dayjs().format('dddd, MMMM, D')
  $('#currentDay').text(todaysDate);

  let currentTime = dayjs().hour();

  //Interval refreshes and runs code every minute
timeIsKey()
setInterval(function() {
  timeIsKey();
}, 60000 );

  function timeIsKey () {
    //contains all text areas
let thisText = $(".description");


$.each ( thisText, function (indexes, values) {

  let workHours = $(this).attr("id")
  
  if (currentTime > workHours) {
    $(values).addClass("past")
    }

    else if (currentTime == workHours) {
      $(values).addClass("present")
    }
    else if ( currentTime < workHours) {
      $(values).addClass("future")
    }


  
  

})

  }

});


function setAtNine () {

  //Variables for local storage execution
let nineAm = document.getElementById("9").value;
let tenAm = document.getElementById("10").value;
let elevenAm = document.getElementById("11").value;
let twelveAm = document.getElementById("12").value;
let onePm = document.getElementById("13").value;
let twoPm = document.getElementById("14").value;
let threePm = document.getElementById("15").value;
let fourPm = document.getElementById("16").value;
let fivePm = document.getElementById("17").value;
let nineButton = document.getElementById("nineBtn");



 
  document.getElementById("nineBtn").addEventListener("click", function ()
  {
      var atNine = document.getElementById("9").value ;
     
      localStorage.setItem("9AM", atNine) ;
      alert("Good Timing") ;
  } , false);
  
}

setAtNine()


// Acceptance Criteria 

//DONE
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down


// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day


// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block


// THEN I can enter an event
// WHEN I click the save button for that time block


// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

