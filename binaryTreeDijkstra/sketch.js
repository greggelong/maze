let cols, rows;
let w = 50; // width of the cell used in cell class
let grid =[];
let mybutton, myslider;
let asciiArt="";
let textArt; // for pre
let runners= [];
let numOfRunners =20;
// runner is its own class with own method to show so dont use visited



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
    dijkstra();
}

function draw(){
    background(0);
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
    background(0);
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
    
    let root = grid[0][0];
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
            print('1',newfront)
            addtonewfront= getfront(front[x],distCount);
            print('2', addtonewfront)
            newfront = newfront.concat(addtonewfront);
            print('3', newfront)
        }
        front =[]
        for (let i =0;i<newfront.length;i++){
            front[i] = newfront[i]

        }
         
       }
       print("newFront",front)

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

   