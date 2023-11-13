let cradits = document.querySelector(".cradits");
let ancor = document.querySelectorAll("a");
let gredBtn = document.querySelector(".grid-btn");
let gredMessage = document.querySelector(".grid-options");
let restBtn = document.querySelector(".reset-btn");
let board = document.querySelector(".board");
let art = document.querySelector(".art")
let gred = 30;
let defaultGred = 16;
let clickCount = 1;
let currentSize = defaultGred;






function gredPrinter(givenSize) {
    board.innerHTML = ""; // Clear the board before creating a new grid
    makeGrid(givenSize);
}

function makeGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement("div");
        row.className = "rowCells";
        for (let j = 0; j < gridSize; j++) {
            let smallCell = document.createElement("div");
            smallCell.className = "smallCells";
            smallCell.addEventListener("mouseover", () => {
                smallCell.style.backgroundColor = "blue"; // Change the background color on hover
            })
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




