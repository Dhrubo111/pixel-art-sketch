let cradits = document.querySelector(".cradits")

let ancor = document.querySelectorAll("a")

let gredBtn = document.querySelector(".grid-btn")

let gredMassage = document.querySelector(".grid-options")

let restBtn = document.querySelector(".reset-btn")


let board = document.querySelector(".board")



let gred = 30

let defaultGred = 16 

let clickCount = 1 


let currentSize = defaultGred






//f4
//rest work with button 
//reload the page and make to default to initial load 
restBtn.addEventListener(
    "click" , ()=>{
        window.location.reload()
    }
)

//f4



//f3
// grid show logic goes in f2

function clickCounter(){
    clickCount +=1

    if (clickCount %2 == 0){
        gredMassage.textContent = `${gred} x ${gred}`
        currentSize = gred
    }else{
        gredMassage.textContent = `${defaultGred} x ${defaultGred}`
        currentSize = defaultGred
    }
}

//f3


//to select the grid size 
//f2
gredBtn.addEventListener(
    "click" , ()=>{
    clickCounter()
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



