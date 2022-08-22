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
  
  var saveTasks = function() {
    localStorage.setItem("hour-9", JSON.stringify(tasks));
  };

  $(".list-group").on("click", "p", function() {
    var text = $(this)
    .text()
    .trim();
      // replace p element with a new textarea
  var textInput = $("<textarea>").addClass("form-control").val(text);
  $(this).replaceWith(textInput);

  // auto focus new element
  textInput.trigger("focus");
  });

  // editable field was un-focused
$(".list-group").on("blur", "textarea", function() {
    // get current value of textarea
    var text = $(this).val();
  
    // get status type and position in the list
    var status = $(this)
      .closest(".list-group")
      .attr("id")
      .replace("list-", "");
    var index = $(this)
      .closest(".list-group-item")
      .index();
  
    // update task in array and re-save to localstorage
    tasks[status][index].text = text;
    saveTasks();

    // recreate p element
var taskP = $("<p>")
.addClass("m-1")
.text(text);

// replace textarea with p element
$(this).replaceWith(taskP);
});