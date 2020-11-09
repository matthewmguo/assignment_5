// function to change the image when selected 
let selectedColor = 'blue'
function clickSquare(i) {
    document.getElementById("red_harness").style.display='none';
    document.getElementById("green_harness").style.display='none';
    document.getElementById("blue_harness").style.display='none';
    document.getElementById(i+ "_harness").style.display = 'initial';

    document.getElementById(selectedColor + "_choose").style.visibility = 'hidden'
    selectedColor = i
    document.getElementById(selectedColor + "_choose").style.visibility = 'visible'
    console.log(selectedColor)
    updateModal()

}

// function to change the size of the product 
let size = "medium"
function sizeSelected(newSize) {
    document.getElementById(size).classList.remove('sizeSelected')
    size = newSize
    document.getElementById(size).classList.add('sizeSelected')
    updateModal()
}

//open modal 
function openModal(modalName) {
    document.getElementById(modalName).style.display='block'
}

function closeModal(modalName) {
    document.getElementById(modalName).style.display='none'
}

function updateModal() {
    let replaceText = "Color: " + selectedColor + " | " + "Size: " + size + " | $20"
    document.getElementById("mode_product_text").textContent = replaceText
    document.getElementById("modal_image").src = "img/" + selectedColor + "_harness.png"

}

function addToBag() {
    item = {"imageURL": "img/" + selectedColor + "_harness.png", "product": "Dog Harness", "color": selectedColor, "size": size, price: "$20"}
    let shoppingCart = window.localStorage.getItem("shoppingCart")
    if (!shoppingCart) {
        shoppingCart = []   
    } else {
        shoppingCart = JSON.parse(shoppingCart)
    }
    shoppingCart.push(item)
    window.localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))
    window.location.href = "shopping_cart.html"
}

//carousel on the bottom of the page 
let currentIndex = 0 
function shiftLeft() {
    let current = document.getElementsByClassName("carouselItem")[currentIndex]
    document.getElementById("carousel").style.marginLeft = current + "px"
    currentIndex += 1
    currentIndex = currentIndex%document.getElementsByClassName("carouselItem").length
    let next = document.getElementsByClassName("carouselItem")[currentIndex]
    console.log(next)
    current.classList.remove("active")
    next.classList.add("active")
}