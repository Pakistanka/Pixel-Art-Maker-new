// Select color input
let colorPicker = $('#colorPicker');
 
let submitButton = $('#submit').on('click', function makeGrid() {
  
  // clear the table before drawing rows and columns
  let drawTable = $('#pixel_canvas');
  drawTable.empty();

  // draw rows and columns
  for(let i = 0; i < $('#input_height').val(); i++){
    createRow = '<tr>';
    for(let j = 0; j < $('#input_width').val(); j++){
      createRow += '<td>&nbsp;</td>';
    }
    createRow += '</tr>';
    drawTable.append(createRow);
  }

})


//function makeGrid()

// When size is submitted by the user, call makeGrid()



/*Now, open up design.js. As you start writing your code, 
keep these three tasks in mind:

Define your variables 
by selecting the DOM elements 
that the user will interact with. 
This is where your jQuery skills can come into play! 
For instance, the submit button, the table, 
and the color picker need to be accessed. 
The value of the color selected needs to be stored as well, 
since the clicked cell in the table needs to be set to the selected color.

Add event listeners to the relevant DOM elements, 
so that user input can be color values 
and table sizes can be dynamically set by the user.

Set the size of the cross stitch canvas 
as an N by M grid with the makeGrid() function. 
Use your knowledge of JavaScript loops to dynamically clear 
and create the table based on user input. 
Each cell should have an event listener 
that sets the background color of the cell to the selected color.
*/