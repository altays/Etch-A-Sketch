// set a "hover" effect so the grid divs change color when mouse passes over them -> use an event listener to add a class
    // don't use the add / remove class method, but the one that alternates

// add a box asking the user how many squares per side to make the new grid
    // make a new grid based on that number
    // set the limit for that number to 100

// (Optional): Instead of just changing the color of your grid from black to white (for example) have each pass through it with the mouse change to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.

// Push your project to GitHub!

// when DOM content loaded -> run init function

window.onload = (event) => {createGrid(16)};

let createGrid = sideNum => {
 
    let etch = document.querySelector("#etchContainer")

    for (let i = 0; i < sideNum * sideNum; i++) {
        let nestedDiv = document.createElement("div")
        nestedDiv.classList.add("etchDiv", "etchDivStart")
        // attach event listener - mouseover, toggle class
        nestedDiv.addEventListener("mouseover",function(event) {
            toggleColor(event)
        })
        etch.appendChild(nestedDiv);
    }

}


toggleColor = function (event){
    console.log(event.target.classList)
    // console.log(event.target.className.split(" ")[1])

    let state = event.target.classList[1]
    if (state == "etchDivStart"){
        // console.log("true")
        // state = "etchDivOver"
        event.target.classList.remove("etchDivStart")
        event.target.classList.add("etchDivOver")
        // event.target.classList("etchDivOver")
    } else if (state = "etchDivOver"){
        // console.log("false")
        // state = "etchDivStart"
        event.target.classList.add("etchDivStart")
        event.target.classList.remove("etchDivOver")
    }
}