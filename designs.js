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
	console.log("LISTEN!");

	const height = $("#inputHeight").val();
	const width = $('#inputWeight').val();

	makeGrid(height,width);
});

// When size is submitted by the user, call makeGrid()

function makeGrid(height,width) {

// Your code goes here!
	console.log(height,width);

}
