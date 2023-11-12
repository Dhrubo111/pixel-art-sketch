let cradits = document.querySelector(".cradits")

let ancor = document.querySelectorAll("a")

let gredBtn = document.querySelector(".grid-btn")

let gridOptions = document.querySelector(".buttons")
//to select the grid size 
//f2
gredBtn.addEventListener(
    "click" , ()=>{
    gridOptions.style.display="block"    
    }
)
//f2





// to show the cradits from where the images came from 
//f1
cradits.addEventListener(
    "click", ()=>{
        ancor.forEach(
            a =>{
                a.style.display = "block"
            }
        )
    }
)
//f1



