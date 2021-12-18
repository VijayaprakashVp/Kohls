function showProducts() {
    let paren = document.getElementById("pro_dec");
    console.log('parent:', parent)
    let cart = JSON.parse(localStorage.getItem("cart"));
    console.log('cart:', cart)

  cart.forEach(function (product) {
    let div_1 = document.createElement("div");

    let img = document.createElement("img");
    img.src = product.img;

    let product_price = document.createElement("p");
    product_price.textContent = product.price;

    let product_name = document.createElement("p");
    product_name.textContent = product.name;

    div_1.append(img,product_price,product_name);
    parent.append(div_1);

  });
}
showProducts();
