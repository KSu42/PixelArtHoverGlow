console.log('bonjour');

// Select color input
var pickedColor = $('#colorPicker').val();
// Select size input
// var height = $('#inputHeight').val();
// var width = $('#inputWeight').val();
// Select canvas
var pixelCanvas = $('#pixelCanvas');
// Select submit button
// var button = $('submitButton');

// Submit button
$("input[type='submit']").on("click",function(event) {

	event.preventDefault();

	const height = $("#inputHeight").val();
	const width = $('#inputWeight').val();

	makeGrid(height,width);
});

// When size is submitted by the user, call makeGrid()

function makeGrid(height,width) {

	// for number up to hieght
	for (let i = 0; i < height; i++) {

		// create row
		$("#pixelCanvas").append($("<tr></tr>"));

		// for number up to width
		for (let j = 0; j < width; j++) {

			// add cell to row
			$("tr").last().append($("<td></td>"));
		}
	}
}

