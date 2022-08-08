let cols, rows;
let w = 50; // width of the cell used in cell class
let grid =[];
let mybutton, myslider;
let asciiArt="";
let textArt; // for pre
let runners= [];
let numOfRunners =2;
// runner is its own class with own method to show so dont use visited
let words;
let root; // for dijkstra and longest path
let greatestDistance =0;


function preload() {
    words = loadStrings("qianziwen1b1.txt");
  }

function setup(){
    textArt = select('#textart');
    createCanvas(1000,1000);
    frameRate(10)
    textAlign(CENTER,CENTER)
    cols = floor(width/w);
    rows= floor(height/w);
    // put 2 d cell positions in a 1 d array
    gridSetup(); // runs on global grid don't need to pass or return
    mybutton = createButton("click to change");
    mybutton.mousePressed(doItAll)
    myslider = createSlider(10, 100, 50, 10);
    runGrid();
    background(0)
    showGrid();

    // set up runners
    for (let i =0; i<numOfRunners; i++){
        runners[i] = new Runner (floor(cols/2),floor(rows/2),color(random(255),random(255),random(255))); // need to do runner before show ascii
    }
   // showGridAscii();   // must show ascii after runners
    root = grid[floor(rows/2)][floor(cols/2)]; // need this before calling dijkstra or 
    dijkstra();
    longestPath();  // can have this return an array to be used for animation and speech 
}

function draw(){
    background(255);
    // show grids
    showGrid()
    //showGridAscii();

    //loop through runners
    for (let i = 0; i < runners.length;i++){
    runners[i].moveRunner();
    runners[i].showRunner()
    }
     
    
}



function doItAll(){
    background(255);
    w = myslider.value();
    cols = floor(width/w);
    rows= floor(height/w);
    grid =[];
    gridSetup();
    runGrid();
    showGrid();
    // reset runners
    for (let i =0; i<numOfRunners; i++){
        runners[i] = new Runner (floor(cols/2),floor(rows/2),color(random(255),random(255),random(255))); // need to do runner before show ascii
    }
     
    //showGridAscii(); // need to do runner before show ascii
    root = grid[floor(rows/2)][floor(cols/2)]; // need this before calling dijkstra or 
    dijkstra();
    longestPath(); // only call after dijkstra
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


    for (let l =0; l< rows;l++){
        let middle = "|"; // adds in the west wall
        let bottom = "+" 
        for(let k =0; k< cols;k++){

            if (runners[0].j == l && runners[0].i == k){  // just one
                if (grid[l][k].walls.east){
                    middle += " * |"; // three spaces and a pipe if an east wall
                }else{
                    middle+=" *  "; // otherwise for spaces
                }
            }else{
                if (grid[l][k].walls.east){
                    middle += "   |"; // three spaces and a pipe if an east wall
                }else{
                    middle+="    "; // otherwise for spaces
                }
            }
            if (grid[l][k].walls.south){
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

  
 function dijkstra(){
    
    
    root.distance = 0;
    root.visited = true;
    let distCount =1;
    let current = root;
    let front = getfront(current, distCount);
    console.log(front)
    while (front.length>0){
        distCount++
        let newfront = []
        for (let x =0; x < front.length; x++){
           // print('1',newfront)
            addtonewfront= getfront(front[x],distCount);
            //print('2', addtonewfront)
            newfront = newfront.concat(addtonewfront);
            //print('3', newfront)
        }
        front =[]
        for (let i =0;i<newfront.length;i++){
            front[i] = newfront[i]

        }
         
       }
       print("largest",distCount-1)
       greatestDistance = distCount-1

    }


    
     

  


 function getfront(mycell, distCount){
    let result =[];
    let neighbor = mycell.connected
    mycell.visited=true;
    if (mycell.connected == undefined){
        return []
    }else{

    for(let f = 0; f<neighbor.length;f++){
        if (neighbor[f] == "north"){
            if ( grid[mycell.j-1][mycell.i].visited== false){
            grid[mycell.j-1][mycell.i].distance=distCount;
            result.push(grid[mycell.j-1][mycell.i])
            }

        }
        else if (neighbor[f] == "south"){
            if(grid[mycell.j+1][mycell.i].visited == false){
           grid[mycell.j+1][mycell.i].distance=distCount;
            result.push(grid[mycell.j+1][mycell.i])
            }
        }
        else if (neighbor[f] == "east"){
            if(grid[mycell.j][mycell.i+1].visited == false){
           grid[mycell.j][mycell.i+1].distance=distCount;
            result.push(grid[mycell.j][mycell.i+1])
            }

        }
        else if (neighbor[f] == "west"){
            if(grid[mycell.j][mycell.i-1].visited == false){
            grid[mycell.j][mycell.i-1].distance=distCount;
            result.push(grid[mycell.j][mycell.i-1])
            }

        }
    }
    return result;
    }

 }


 function longestPath(){
    // returns longest path

    // no backtracking required if you work backwards from largest distance I will save the largest distance from dijkstra in a var
    //
    // then search in my cell class for that distance
    // cell.onpath can color a cell
    let mypath =[];
    root.onpath = true;
    // find longest // could be more than one
    for (let j =0; j< rows;j++){
        for(let i =0; i< cols;i++){
            if (grid[j][i].distance === greatestDistance){
                grid[j][i].onpath = true;
                mypath.push(grid[j][i])
                print("gotit")
            }
        }

     }

     // for greatest disstance -1 start checking neighbors in path list (a list of cell objects)
     // while current path 
     let p =0 // array index counter
     let currentStep = mypath[p]// 
     
     while(currentStep.distance>0){
        // find neighbor with distance -1
        
        // check neighbors
        let neighbor = currentStep.connected

        for(let f = 0; f<neighbor.length;f++){
            if (neighbor[f] == "north"){
                if ( grid[currentStep.j-1][currentStep.i].distance === currentStep.distance-1){
                grid[currentStep.j-1][currentStep.i].onpath = true;
                mypath.push(grid[currentStep.j-1][currentStep.i])
                }
    
            }
            else if (neighbor[f] == "south"){
                if(grid[currentStep.j+1][currentStep.i].distance === currentStep.distance-1){
               grid[currentStep.j+1][currentStep.i].onpath=true;
                mypath.push(grid[currentStep.j+1][currentStep.i])
                }
            }
            else if (neighbor[f] == "east"){
                if(grid[currentStep.j][currentStep.i+1].distance === currentStep.distance-1){
               grid[currentStep.j][currentStep.i+1].onpath=true;
                mypath.push(grid[currentStep.j][currentStep.i+1])
                }
    
            }
            else if (neighbor[f] == "west"){
                if(grid[currentStep.j][currentStep.i-1].distance  === currentStep.distance-1){
                grid[currentStep.j][currentStep.i-1].onpath=true;
                mypath.push(grid[currentStep.j][currentStep.i-1])
                }
    
            }
        }

        //increment 
        p=p+1
        currentStep = mypath[p]; // set current step

     }

 }

   