let FIELD_SIZE_X = 20;
let FIELD_SIZE_Y = 20;

// Select color input

let colorPicker = $('#colorPicker');
colotPicker



// Select size input
let row = $('#input_width');
  row.on('click', function(){
    
  });

let cell = $('#input_height');
  cell.on('click', function(){
     
  });

 
  let submitButton = $('#submit').on('click', function makeGrid() {
    
    let drawTable = $('#pixel_canvas');
  
  for(let i = o; i < FIELD_SIZE_X; i++){
    let row = document.createElement('tr');
    row.classList.add('draw-table-row');
    row.classList.add('row-' + i);

    for(let j = 0; j < FIELD_SIZE_Y; j++){
      let cell = document.createElement('td');
      cell.classList.add('game-table-cell');
      cell.classList.add('row-' + i + '-' + j);

      row.appendChild(cell);
    }
    drawTable.appendChild(row);
  }
  document.getElementById('#sizePicker').appendChild(drawTable)
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