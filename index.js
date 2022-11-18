let countEl = document.getElementById ("count-el")
let saveEl = document.getElementById ("save-el")
let count = 0

function increment() {
    // you can use += to increase or add to a variable 
    count += 1
    countEl.textContent = count
}
function save() {
    let saveEntry =  count 
    saveEl.textContent += "You've smoked " + saveEntry + " blunts so far!"
    countEl.textContent = 0
    count  = 0
}


// increment()
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// let lapsCompleted = 0

// function increase (){
//     lapsCompleted = lapsCompleted +1
//     console.log(lapsCompleted)

//     lapsCompleted = lapsCompleted +1
//     console.log(lapsCompleted)

//     lapsCompleted = lapsCompleted +1
//     console.log(lapsCompleted)

// }
// increase()