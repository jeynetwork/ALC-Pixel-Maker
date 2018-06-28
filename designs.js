// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let color = "#000000";

function makeGrid(height, width) {

    // Your code goes here!
    
    const table = document.getElementById("pixelCanvas");
    
    clearTable(table);
    
    for(let i = 1; i <= height; i++){
        table.appendChild(makeRowColumns(width));
    }
}

function makeRowColumns(width){
    
    let row = document.createElement("tr");
    
    for(let j = 1; j <= width; j++){
        let column = document.createElement("td");
        column.addEventListener("click",function(){
            this.style.backgroundColor = color; 
        });
        row.appendChild(column);
    }
    
    return row;
}

function clearTable(table){
    
    while ( table.firstChild ) {
        table.removeChild( table.firstChild );
    }
}

document.getElementById("sizePicker").addEventListener("submit", function(event){
    
    event.preventDefault();
    
    let height = document.getElementById("inputHeight").value;
    let width = document.getElementById("inputWeight").value;
    
    makeGrid(height, width);
    
});

document.getElementById("colorPicker").addEventListener("change",function(){
    color = this.value;
});