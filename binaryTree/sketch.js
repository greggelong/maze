let cols, rows;
let w = 60; // width of the cell used in cell class
let grid =[];
let mybutton, myslider;



function setup(){
    createCanvas(600,600);
    cols = floor(width/w);
    rows= floor(height/w);
    // put 2 d cell positions in a 1 d array
    gridSetup(); // runs on global grid don't need to pass or return
    mybutton = createButton("click to change");
    mybutton.mousePressed(doItAll)
    myslider = createSlider(10, 120, 60, 1);
    runGrid();
    background(0)
    showGrid();
}

function doItAll(){
    background(0);
    w = myslider.value();
    cols = floor(width/w);
    rows= floor(height/w);
    grid =[];
    gridSetup();
    runGrid();
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
 
 
function runGrid(){
    for (let j =0; j< rows;j++){
       for(let i =0; i< cols;i++){
       grid[j][i].doBinary();
       }

    }
   }



function showGrid(){
     for (let j =0; j< rows;j++){
        for(let i =0; i< cols;i++){
        grid[j][i].showCell();
        }

     }
    }
    
    
    
  
  
  
  
  
   