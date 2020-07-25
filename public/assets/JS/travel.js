// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-fly").on("click", function(event) {
      var id = $(this).data("id");
      var newfly = $(this).data("newfly");
  
      var newflyState = {
        fly: newfly
      };
  
      // Send the PUT request.
      $.ajax("/api/travel/" + id, {
        type: "PUT",
        data: newflyState
      }).then(
        function() {
          console.log("changed fly to", newfly);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newCat = {
        name: $("#ci").val().trim(),
        fly: $("[name=fly]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/travel", {
        type: "POST",
        data: newCat
      }).then(
        function() {
          console.log("created new city");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  