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





//This function will save user inputs to local storage and ale
function saveToLocalStorage () {

 



 
  document.getElementById("nineBtn").addEventListener("click", function ()
  {
    
      var atNine = document.getElementById("9").value ;
     
      localStorage.setItem("9AM", atNine) ;
      
      
      alert("Good Timing") ;
  } , false);
  

  document.getElementById("tenBtn").addEventListener("click", function ()
  {
      var atTen = document.getElementById("10").value ;
     
      localStorage.setItem("10AM", atTen) ;
      alert("Sounds like a Plan.") ;
  } , false);
  

  document.getElementById("elevenBtn").addEventListener("click", function ()
  {
      var atEleven = document.getElementById("11").value ;
     
      localStorage.setItem("11AM", atEleven) ;
      alert("What better to do than this?") ;
  } , false);
  

  document.getElementById("twelveBtn").addEventListener("click", function ()
  {
      var atTwelve = document.getElementById("12").value ;
     
      localStorage.setItem("12PM", atTwelve) ;
      alert("What a time to be Alive") ;
  } , false);
  

  document.getElementById("oneBtn").addEventListener("click", function ()
  {
      var atOne = document.getElementById("13").value ;
     
      localStorage.setItem("1PM", atOne) ;
      alert("It is all Set") ;
  } , false);
  

  document.getElementById("twoBtn").addEventListener("click", function ()
  {
      var atTwo = document.getElementById("14").value ;
     
      localStorage.setItem("2PM", atTwo) ;
      alert("Do not be late") ;
  } , false);
  

  document.getElementById("threeBtn").addEventListener("click", function ()
  {
      var atThree = document.getElementById("15").value ;
     
      localStorage.setItem("3PM", atThree) ;
      alert("Do not Give Up") ;
  } , false);
  

  document.getElementById("fourBtn").addEventListener("click", function ()
  {
      var atFour = document.getElementById("16").value ;
     
      localStorage.setItem("4PM", atFour) ;
      alert("You got it.") ;
  } , false);
  

  document.getElementById("fiveBtn").addEventListener("click", function ()
  {
      var atFive = document.getElementById("17").value ;
     
      localStorage.setItem("5PM", atFive) ;
      alert("Right on Time") ;
  } , false);
  

  





}

saveToLocalStorage()











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

