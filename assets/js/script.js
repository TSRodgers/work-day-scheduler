$("#currentDay").html(moment().format("dddd, MMMM Do"));

var eventArr = {};

var currentTime = moment().format("HH");

$(".time-block").on("click", "p", function () {
  var text = $(this).text().trim();

  let textInput = $("<textarea>")
    .addClass("col-9 w-100 h-100 text-input")
    .val(text);
  $(this).replaceWith(textInput);

  textInput.trigger("focus");
});

$(".saveBtn").on("click", function (event) {
  if ($(this).prev().is("p")) {
    return false;
  } else {
    var text = $(this).prev().val();
    var taskP = $("<p>")
      .addClass("col-9 border border-light p-3 text-input mr-0 p-0 description")
      .text(text);
    $(this).prev().replaceWith(taskP);

    var text = $(this).prev().text();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
  }
});

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
    var eventTime = parseInt($(this).attr("id"));
    $(this).children(".description").removeClass("past present future");
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

setInterval(function () {
  auditEvents();
}, 1000 * 120);

loadEvents();
