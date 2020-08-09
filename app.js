$(function () {
  $("#pCheckbox").change(function () {
    if (this.checked) {
      $("input:checkbox.form-check-pinput").prop("checked", this.checked);

      $(":text.fRate").prop("disabled", true);
    } else if (this.checked == false) {
      $("input:checkbox.form-check-pinput").prop("checked", false);

      $(":text.fRate").prop("disabled", false);
    }
  });

  $("#fCheckbox").change(function () {
    if (this.checked) {
      $("input:checkbox.form-check-finput").prop("checked", this.checked);
      $(":text.pRate").prop("disabled", true);
    } else if (this.checked == false) {
      $("input:checkbox.form-check-finput").prop("checked", false);
      $(":text.pRate").prop("disabled", false);
    }
  });

  $(".pRate").on("input", function () {
    var input = $(this);
    var value = parseInt(input.val());

    if (value < 1 || value > 100) {
      alert("Value range between 1-100");
      $(this).val("");
    }
  });

  $(".fRate").on("input", function () {
    var input = $(this);
    var value = parseInt(input.val());

    if (value < 1) {
      alert("Value can not be negative");
      $(this).val("");
    }
  });
});
