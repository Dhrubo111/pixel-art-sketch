let cradits = document.querySelector(".cradits");
let ancor = document.querySelectorAll("a");
let gredBtn = document.querySelector(".grid-btn");
let gredMessage = document.querySelector(".grid-options");
let restBtn = document.querySelector(".reset-btn");
let board = document.querySelector(".board");
let art = document.querySelector(".art")
let eraseBtn = document.querySelector(".eraser-btn")
let pixel = document.querySelectorAll(".smallCells")
let gred = 30;
let defaultGred = 16;
let clickCount = 1;
let currentSize = defaultGred;





function gredPrinter(givenSize) {
    board.innerHTML = ""; // Clear the board before creating a new grid
    makeGrid(givenSize);
}

function makeGrid(gridSize) {
    let interactionActive = false; // Variable to track interaction state

    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement("div");
        row.className = "rowCells";

        // Mouse event listeners
        row.addEventListener("mousedown", () => {
            interactionActive = true; // Set the interaction state to active
        });

        row.addEventListener("mouseup", () => {
            interactionActive = false; // Set the interaction state to inactive
        });

        // Touch event listeners
        row.addEventListener("touchstart", () => {
            interactionActive = true; // Set the interaction state to active
        });

        row.addEventListener("touchend", () => {
            interactionActive = false; // Set the interaction state to inactive
        });

        for (let j = 0; j < gridSize; j++) {
            let smallCell = document.createElement("div");
            smallCell.className = "smallCells";

            // Mouse and touch event for coloring on interaction
            let setColor = () => {
                if (interactionActive) {
                    smallCell.style.backgroundColor = "blue"; // Change the color on click-and-drag
                }
            };

            // Mouse event listeners
            smallCell.addEventListener("mouseenter", setColor);

            // Touch event listeners
            smallCell.addEventListener("touchmove", (event) => {
                
                setColor();
            });

            row.appendChild(smallCell);
        }
        board.appendChild(row);
    }
}



gredPrinter(currentSize);

restBtn.addEventListener("click", () => {
    currentSize = defaultGred;
    gredPrinter(currentSize);
});

function clickCounter() {
    clickCount += 1;

    if (clickCount % 2 === 0) {
        gredMessage.textContent = `${gred} x ${gred}`;
        currentSize = gred;
    } else {
        gredMessage.textContent = `${defaultGred} x ${defaultGred}`;
        currentSize = defaultGred;
    }


    gredPrinter(currentSize);
}

gredBtn.addEventListener("click", clickCounter);

cradits.addEventListener("click", () => {
    ancor.forEach(a => {
        a.style.display = "block";
    });
});




