// Select color input


// Select size input

function makeGrid() {
  //clear the table before drawing rows and columns  
  let drawTable = $('#pixel_canvas');
  drawTable.empty();

  // draw rows and columns
  for(let i = 0; i < $('#input_height').val(); i++){
    createRow = '<tr>';
    for(let j = 0; j < $('#input_width').val(); j++){
      createRow += '<td>&nbsp;</td>';
    }
    drawTable.append(createRow); //add children elements to parent
  }

$('td').click(function() {
    let colorPicker = $("#colorPicker").val(); //choose and save user's variant of color
    $(this).css('backgroundColor', colorPicker); //add css styles
  });
};

