$(".text-input").on("click", function () {
  if ($(this).html() === "") {
    let textInput = $("<textarea>").addClass("text-form");
    $(this).append(textInput);
    textInput.trigger("focus");
    return textInput;
  }
});

$(".text-input").on("click", "p", function () {
  var text = $(this).text().trim();

  let textInput = $("<textarea>").addClass("text-form").val(text);
  $(this).replaceWith(textInput);

  textInput.trigger("focus");
  return textInput;
});

$(".time-block").on("click", ".saveBtn", function () {
  var text = $(".text-form").val();

  var taskP = $("<p>").addClass().text(text);

  $(".text-form").replaceWith(taskP);
});
