let qty = 1;
const qtyOrder = document.querySelector("#qtyOrder")

function decreaseQty () {
    if (qty > 1) {
        qty = qty - 1
        qtyOrder.innerText = qty
    }
        return
}

const increaseQty = function (){
    qty = qty + 1
    qtyOrder.innerText = qty
}

let productcontainer = document.querySelector('#productcontainer')
let products = []

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then ( (data) => {
    products = data.products
    printproduct(products)
} )

function printproduct(data){
    data.map(product => {
        productcontainer.innerHTML += `
        <div class="h-fit shadow">
        <div class="bg-gray-400 h-fit">
        <img src="${product.thumbnail}" class="h-36 w-full rounded-t" alt="">
        </div>
        <div class="px-2">
            <h3 class=" pt-2 text-left">${product.title}</h3>
            <h5 class="font-bold text-lg mt-1 text-left">$${product.price}</h5>
            <div class="flex justify-between items-center pt-2 pb-2">
                <h2 class="text-xs text-left">Quantity</h2>
                <div class="flex">
                    <div id="minusbtn" onclick="decreaseQty()" class="bg-amber-200 px-2 py-1 rounded"><i class="fa-solid fa-minus"></i></div>
                    <div id="qtyOrder" class="w-10 text-center">1</div>
                    <div id="plusbtn" onclick="increaseQty()" class="bg-amber-200 px-2 py-1 rounded"><i class="fa-solid fa-plus"></i></div>
                </div>
            </div>
            <div class="mb-3 mt-2 flex justify-between items-center">
                <div class="flex ">
                    ${product.rating}
                </div>
                <button class="rounded bg-orange-500 px-2 py-2 text-center text-white text-sm ">Add to Cart</button>
            </div>
        </div>
    </div>`
    })
}
         
           