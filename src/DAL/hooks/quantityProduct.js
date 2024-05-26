import $ from "jquery";

export const initializeQuantityButtons = () => {
  // Check if the quantity buttons have already been initialized
  if (!$(".pro-qty").hasClass("quantity-initialized")) {
    // Add a class to indicate that the initialization has been done
    $(".pro-qty").addClass("quantity-initialized");

    // Add quantity buttons
    $(".pro-qty").prepend('<span class="dec qtybtn">-</span>');
    $(".pro-qty").append('<span class="inc qtybtn">+</span>');

    // Attach click event handler to the quantity buttons
    $(".pro-qty").on("click", ".qtybtn", function () {
      var $button = $(this);
      var oldValue = $button.parent().find("input").val();
      if ($button.hasClass("inc")) {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        // Don't allow decrementing below zero
        if (oldValue > 1) {
          newVal = parseFloat(oldValue) - 1;
        } else if (oldValue <= 1){
          newVal = 1;
        }
      }
      $button.parent().find("input").val(newVal);
    });
  }
};
