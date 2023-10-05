
let item;

// element selectionné
document.addEventListener('dragstart', (e) => {
    item = e.target;
})

// permet de bouger les element
document.addEventListener("dragover", (e) => {
    e.preventDefault()
    // console.log(e.target);
})

// laisse tomber l element
document.addEventListener('drop', (e) => {
    if (e.target.getAttribute("data-draggable")  == "target") {      
        e.preventDefault()
        e.target.appendChild(item)
    }
})

document.addEventListener('dragend', (e) => {
    item == null;
})

