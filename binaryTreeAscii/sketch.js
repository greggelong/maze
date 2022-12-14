let cols, rows;
let w = 120; // width of the cell used in cell class
let grid =[];
let mybutton, myslider;
let asciiArt="";
let textArt; // for pre



function setup(){
    textArt = select('#textart');
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
    showGridAscii();
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
    showGridAscii();
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
    
    
    
  
function showGridAscii(){
    //only need to check east and south

    // makes a top edge of as many cols as there are
    asciiArt ="+"
    asciiArt += "---+".repeat(cols);// repeat works likes the * "str" in python
    asciiArt += "\n" // puts a line break on it so it forms a grid
    //


    for (let j =0; j< rows;j++){
        let middle = "|"; // adds in the west wall
        let bottom = "+" 
        for(let i =0; i< cols;i++){
            if (grid[j][i].walls.east){
                middle += "   |"; // three spaces and a pipe if an east wall
            }else{
                middle+="    "; // otherwise for spaces
            }
            if (grid[j][i].walls.south){
                bottom += "---+";
            }else{
                bottom += "   +";
            }

    
        }
        middle +="\n" // east most line breaks
        bottom +="\n" 
        // add to asciiArt
        asciiArt += middle
        asciiArt += bottom;

    }
    textArt.html(asciiArt)
    } 
  
  
  
   