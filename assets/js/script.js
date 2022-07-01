// updates time stamp under title
$("#currentDay").html(moment().format("dddd, MMMM Do"));

// current time variable for auditEvent()
var currentTime = moment().format("HH");

// event Listener for clicks on event rows, replaces p with a textarea that contains the same text on click
$(".time-block").on("click", "p", function () {
  var text = $(this).text().trim();

  let textInput = $("<textarea>")
    .addClass("col-9 w-100 h-100 text-input")
    .val(text);
  $(this).replaceWith(textInput);

  textInput.trigger("focus");
});

$(".saveBtn").on("click", function (event) {
  // keeps save button from creating multiple p elements
  if ($(this).prev().is("p")) {
    return false;
  } else {
    // switches textarea back into a p element on save
    var text = $(this).prev().val();
    var taskP = $("<p>")
      .addClass(
        "col-9 border border-light text-input m-0 p-3 text-left description"
      )
      .text(text);
    $(this).prev().replaceWith(taskP);
    // adds events to local storage
    var text = $(this).prev().text();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
    // runs auditEvents() to reapply classes to recently edited elements
    auditEvents();
  }
});
// loads events saved in localstorage and applies time based classes
function loadEvents() {
  $("#09 .description").text(localStorage.getItem("09"));
  $("#10 .description").text(localStorage.getItem("10"));
  $("#11 .description").text(localStorage.getItem("11"));
  $("#12 .description").text(localStorage.getItem("12"));
  $("#13 .description").text(localStorage.getItem("13"));
  $("#14 .description").text(localStorage.getItem("14"));
  $("#15 .description").text(localStorage.getItem("15"));
  $("#16 .description").text(localStorage.getItem("16"));
  $("#17 .description").text(localStorage.getItem("17"));
  auditEvents();
}

function auditEvents() {
  $(".time-block").each(function () {
    // runs function for each time-block element, converts id into int, and removes all classes
    var eventTime = parseInt($(this).attr("id"));
    $(this).children(".description").removeClass("past present future");
    // compares parsed id class against current time and applies classes accordingly
    if (eventTime < currentTime) {
      $(this).children(".description").addClass("past");
      $(this).children(".description").removeClass("present future");
    } else if (currentTime === eventTime) {
      $(this).children(".description").addClass("present");
      $(this).children(".description").removeClass("past future");
    } else {
      $(this).children(".description").addClass("future");
      $(this).children(".description").removeClass("past present");
    }
  });
}

// autoruns auditEvents every hour (i think? hard to test)
setInterval(function () {
  auditEvents();
}, 1000 * 120);

// loads events on page load
loadEvents();
