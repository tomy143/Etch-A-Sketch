$(document).ready(function() {
	makeGrid(16); //function is taking on the parameter of 16.

	$(".resetGrid").on("click", function() { //this creates the function of resetting the grid when the button is clicked
		$(".finishGrid").remove();

		var customize = prompt("How big do you want the new grid? Please enter a number");
		if (isNaN(customize)) { //isNaN is a function that determines whether or not what the user entered is not a number. If user does not enter a number the alert will come up.
			alert("Please enter a number!");
		}
		else {
			makeGrid(customize); 
		}
	});
});

  function makeGrid(x) { //this names the function. Can be named anything
    for (var y = 0; y < x; y++)  { //create nested for loop. Y and Z are your columns.
      for (var z = 0; z < x; z++) {
        $("#container").append("<div class='finishGrid'></div>"); //this creates a <div> that is placed below the #container
      }; //finish grid is essentially the outline of the grid #container holds the y z for loops.
    };
    $(".finishGrid").height(400/x);
    $(".finishGrid").width(400/x);

    $(".finishGrid").mouseover(function() { //This creates the hover effect
      $(this).css("background-color", "black"); // *this is placed so that when the mouse cursor is placed over the grid the mouse.over effect takes place just on the specific area.
    });
  };
