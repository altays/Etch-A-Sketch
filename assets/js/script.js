// add a button to reset colors

// Push your project to GitHub!

window.onload = (event) => {
    let sides = 20
    createGrid(sides)
};

let numBox = document.querySelector("#sides")
    
numBox.addEventListener('change', (event) => {
    createGrid(event.target.value)
});


// set container class to number 
// pull container number, use that to set the size

let createGrid = sideNum => {
    let etch = document.querySelector("#etchContainer")
    let etchChildren = document.getElementsByClassName("etchDiv")
    
    if (etchChildren.length > 0) {
        console.log("removing children")
        console.log("Middle: " + etchChildren.length)
        etch.replaceChildren()
    }

    for (let i = 0; i < sideNum * sideNum; i++) {
        let nestedDiv = document.createElement("div")
        nestedDiv.classList.add("etchDiv", "etchDivStart")
        nestedDiv.addEventListener("mouseover",function(event) {
            toggleColor(event)
        })
        etch.appendChild(nestedDiv);
    }

    etch.setAttribute("style",`grid-template-rows: repeat(${sideNum},1fr);`)
    etch.setAttribute("style",`grid-template-columns: repeat(${sideNum},1fr);`)
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