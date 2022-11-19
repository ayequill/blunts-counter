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
