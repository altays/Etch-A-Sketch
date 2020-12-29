// add a box asking the user how many squares per side to make the new grid
    // make a new grid based on that number
    // set the limit for that number to 100

// add a button to reset colors

// Push your project to GitHub!


window.onload = (event) => {
    let sides = 16
    
    init(sides)
};
// set container class to number 
// pull container number, use that to set the size

let createGrid = sideNum => {
    let etch = document.querySelector("#etchContainer")

    for (let i = 0; i < sideNum * sideNum; i++) {
        let nestedDiv = document.createElement("div")
        nestedDiv.classList.add("etchDiv", "etchDivStart")
        nestedDiv.addEventListener("mouseover",function(event) {
            toggleColor(event)
        })
        etch.appendChild(nestedDiv);
    }

}

let toggleColor = event => {
    let state = event.target.classList[1]
    
    if (state == "etchDivStart"){
        event.target.classList.remove("etchDivStart")
        event.target.classList.add("etchDivOver")
    } else if (state = "etchDivOver"){
        event.target.classList.add("etchDivStart")
        event.target.classList.remove("etchDivOver")
    }
}

let resetColor = event => {
    // target reset button
    // traverse DOM, target the divs
}

let resizeSketch = event => {
    //target number input, store invariable
    // run createGrid with that new number

}

let init = (sideNum) => {
    createGrid(sideNum)


}

