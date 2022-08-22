$('#currentDay').text(moment().format('dddd, MMMM Do'));

var tasks = {};

var createTask = function(taskText, taskList) {
  // create elements that make up a task item
  var taskLi = $("<li>").addClass("list-group-item");
  var taskP = $("<p>")
    .addClass("m-1")
    .text(taskText);

  // append span and p element to parent li
  taskLi.append(taskP);


  // append to ul list on the page
  $("#list-" + taskList).append(taskLi);
};

  var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
      tasks = {
        toDo: []
      };
    }
  };
  

  $(".btn").click(function(){
    var textArea = $(this).siblings("textarea")[0].value;
    var textId = $(this).siblings("textarea")[0].id;
    localStorage.setItem("text" + textId, textArea); 
    console.log(textArea);
  })

  function loadText () {
    var text9 = (localStorage.getItem("text9"));
    $("#9").val(text9);

    var text10 = (localStorage.getItem("text10"));
    $("#10").val(text10);

    var text11 = (localStorage.getItem("text11"));
    $("#11").val(text11);

    var text12 = (localStorage.getItem("text12"));
    $("#12").val(text12);

    var text13 = (localStorage.getItem("text13"));
    $("#13").val(text13);

    var text14 = (localStorage.getItem("text14"));
    $("#14").val(text14);

    var text15 = (localStorage.getItem("text15"));
    $("#15").val(text15);

    var text16 = (localStorage.getItem("text16"));
    $("#16").val(text16);

    var text17 = (localStorage.getItem("text17"));
    $("#17").val(text17);


  };

loadText();

//BRYCE EDIT AREA START

var currentTime = moment().format('H');     //currentTime is used to check is the hour matches for color
console.log()

var newTime = new Date();
var thisHour = newTime.getHours();
console.log(thisHour);

const rows = document.getElementsByClassName("row");

Array.from(rows).forEach(row => {
    let
        rowIdString = row.id,
        rowHour;
    
    if (rowIdString){
        rowHour = parseInt(rowIdString);
    }

    if (rowHour){
        if (thisHour === rowHour){
            backgroundColorEdit(row, "red");
        }
        else if ((thisHour < rowHour)){
            backgroundColorEdit(row, "green");
        }
        else 
        {
            backgroundColorEdit(row, "lightgrey");
        }
    }

})

function backgroundColorEdit(element,color){
   element.style.backgroundColor = color;
}



//BRYCE EDIT AREA END

// load tasks for the first time
loadTasks();
