let cols, rows;
let w = 60; // width of the cell used in cell class
let grid= [];



function setup(){
    createCanvas(600,600);
    cols = floor(width/w);
    rows= floor(height/w);
    // put 2 d cell positions in a 1 d array
     

    for (let j =0; j < rows; j++){
        for (let i =0; i < cols; i++){
            grid.push(new Cell(i,j));
        }
    }

    background(0)
    showGrid();
}

 
function index(i, j) {
    if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
      return -1;
    }
    return i + j * cols;
  }




function showGrid(){
     for (let i =0; i<grid.length;i++){
        grid[i].showCell();

     }
    }
    
    
    
  
  
  
  
  
   