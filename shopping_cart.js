function populateHTML(){
    let shoppingCart = window.localStorage.getItem("shoppingCart")
    if (!shoppingCart) {
        shoppingCart = [] 
    }else{
        shoppingCart = JSON.parse(shoppingCart)
    }
    const container = document.getElementById("container")
    for (const index in shoppingCart){
        const item = shoppingCart[index]
        const row = document.createElement("div")
        row.classList.add("row")
        // create image column 
        const image_column = document.createElement("div")
        image_column.classList.add("column")
        const image = document.createElement("img")
        image.src = item['imageURL'] 
        image_column.appendChild(image)

        row.appendChild(image_column)

        const productInfoCol = document.createElement("div")
        productInfoCol.classList.add("column")
        const productName = document.createElement("h3")
        productName.classList.add("checkout-text")
        productInfoCol.appendChild(productName)
        productName.innerText = item.product

        const productColor = document.createElement("h3")
        productColor.classList.add("checkout-text")
        productInfoCol.appendChild(productColor)
        productColor.innerText = "Color: " + item.color

        const productSize = document.createElement("h3")
        productSize.classList.add("checkout-text")
        productInfoCol.appendChild(productSize)
        productSize.innerText = "Size: " + item.size

        const productPrice = document.createElement("h3")
        productPrice.classList.add("checkout-text")
        productInfoCol.appendChild(productPrice)
        productPrice.innerText = "Price: $20"

        const productRemove = document.createElement("button")
        productRemove.classList.add("checkout-text")
        productInfoCol.appendChild(productRemove)
        productRemove.innerText = "Remove"

        //when you click remove, it deletes from the array 
        // productRemove.onclick = deleteItem(index, row)
        productRemove.addEventListener("click", function(){deleteItem(index,row)})
        console.log(productRemove)
        row.appendChild(productInfoCol)
        // row.appendChild(productInfoCol)

        container.appendChild(row)
    }

}

// delete an Item
function deleteItem(index, row) {
    let shoppingCart = window.localStorage.getItem("shoppingCart")
    if (!shoppingCart) {
        shoppingCart = [] 
    } else{
        shoppingCart = JSON.parse(shoppingCart)
        shoppingCart.splice(index, 1)
    }
    window.localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))
    row.remove()
}

    //stringify shopping cart, store it back in local storage
    
    // get shoppingCart from localStorage
    // delete index
    // put shopping cart into local storage
    // delete row from HTML