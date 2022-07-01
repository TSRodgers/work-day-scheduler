$("#currentDay").html(moment().format("dddd, MMMM Do"));

var eventArr = {};

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
  $("#1 .description").text(localStorage.getItem("1"));
  $("#2 .description").text(localStorage.getItem("2"));
  $("#3 .description").text(localStorage.getItem("3"));
  $("#4 .description").text(localStorage.getItem("4"));
  $("#5 .description").text(localStorage.getItem("5"));
  $("#6 .description").text(localStorage.getItem("6"));
  $("#7 .description").text(localStorage.getItem("7"));
  $("#8 .description").text(localStorage.getItem("8"));
  $("#9 .description").text(localStorage.getItem("9"));
}

loadEvents();
