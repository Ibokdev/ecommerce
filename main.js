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