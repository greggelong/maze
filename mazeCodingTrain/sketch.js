let cols, rows;
let w = 60; // width of the cell used in cell class
let grid =[];



function setup(){
    createCanvas(600,600);
    cols = floor(width/w);
    rows= floor(height/w);
    // put 2 d cell positions in a 1 d array
    gridSetup(); // runs on global grid don't need to pass or return
    grid[0][0].walls.down = false;
    grid[1][0].walls.up = false;
    background(0)
    showGrid();
}

function gridSetup(){
    // sets up a blank 2d grid using the global grid array
    for (let j =0; j < rows; j++){
        let row = [];
        for (let i =0; i < cols; i++){
            row.push(new Cell(i,j));
        }
        grid.push(row)
    }
}
 
 




function showGrid(){
     for (let j =0; j< rows;j++){
        for(let i =0; i< cols;i++){
        grid[j][i].showCell();
        }

     }
    }
    
    
    
  
  
  
  
  
   