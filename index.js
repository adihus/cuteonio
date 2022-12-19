
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count++
    countEl.innerText = count
}

let savedCount = document.getElementById("saved-Count")

function save(){
    savedCount.textContent += count + " - "
    count = 0
    countEl.innerText = count
}

function reset(){
    count=0
    countEl.innerText = count
    savedCount.innerText = count
}




