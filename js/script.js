console.log("js ok");

const clickCell = (event, value) => {
    console.log(`You clicked: ${value}`);
    const node = event.target;
    node.classList.toggle("clicked");
}

const createCell = (value, cellClass) => {
    const node = document.createElement("div");
    node.classList.add("cell");
    node.classList.add(cellClass);
    node.innerText = value;
    node.addEventListener("click", () => {clickCell(event, value)});
    return node
}

const grid = document.getElementById("grid");
const selectField = document.getElementById("select");
const playButton = document.getElementById("play");

playButton.addEventListener("click", function(){
    // init grid
    grid.innerHTML = "";
    
    const selectValue = selectField.value;
    let numCells = 100;
    let widthClass = "easy"
    
    if (selectValue === "1"){
        numCells = 81;
        widthClass = "medium";
    }
    else if (selectValue === "2"){
        numCells = 49;
        widthClass = "hard";
    }
    // create cell
    for (let i = 0; i < numCells; i++){
        const cell = createCell(i + 1, widthClass);
        grid.appendChild(cell);
    }
});
