// create an init function  (done)
    // Create 16 x 16 square of divs
    // nest within a DOMcontent loaded event
    // target the container
    // create a variable for dimensions, set to 16
    // loop over creating divs in container

// in css, 
    //set dimensions for container (960px wide) as well as logic for placing divs using flex and grid -> WIP
    // set color of background, container
    // set two colors for contained divs - starting and changed

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
    // console.log(sideNum);

    let container = document.querySelector("#container")

    // console.log(container)

    for (let i = 0; i < sideNum * sideNum; i++) {
        let nestedDiv = document.createElement("div")
        container.appendChild(nestedDiv);
    }

}