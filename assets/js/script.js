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
  }
});

$("#currentDay").html(moment().format("dddd, MMMM Do"));
