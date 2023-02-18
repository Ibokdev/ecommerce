

let query = location.search

let params = new URLSearchParams(query);

console.log(params)

let product_id = params.get("product_id")
console.log(product_id)

fetch(`https://dummyjson.com/products/${product_id}`)
.then(res => res.json())
.then ( (data) => {
    printproduct(data)
} )

let productcontainer = document.querySelector("#productcontainer");

function printproduct(data){
        productcontainer.innerHTML += `
        <div class="grid-cols-1">
        <img class="px-10 rounded" src="${data.thumbnail}" alt="">
        <div class="descriptionCard flex w-[30%] px-10">
          <img class="" src="${data.thumbnail}" alt="">
          <img class="" src="${data.thumbnail}" alt="">
          <img class="" src="${data.thumbnail}" alt="">
          <img class="" src="${data.thumbnail}" alt="">
        </div>
      </div>
      <div class="grid-cols-1 px-10 py-6 bg-red">
        <div class="">
            <h5 class="text-3xl font-bold">${data.title}</h5>
        </div>
        <div class="footer">
          <div class="w-[100%]">
            <h3 class="font-semibold mt-2 mb-2">Details</h3>
            <h2>${data.description}</h2>
          </div>
        <div class="flex py-5 flex-row">
          <div class="flex justify-between w-full">
            <div class="star">
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            </div>
            <h3 class="text-black font-semibold" >${data.rating}Reviews</h3>
            <h3 class="text-black font-semibold" >Add your Reviews</h3>
          </div>
          </div>
          <div class="">
            <h3 class="text-3xl font-semibold">$${data.price}</h3>
        </div>
        <div class="">
          <button class="rounded bg-orange-500 px-2 py-2 mt-10 text-center text-white text-sm ">Add to Cart</button>
      </div>
      </div>
      </div>`
}