var category = document.querySelector(".side");
var card = document.querySelector(".middle");
var icon = document.querySelector(".fas");
var cart = document.querySelector(".cart");
icon.addEventListener("click", function () {
    cart.style.right === "-50%"
        ? (cart.style.right = "0")
        : (cart.style.right = "-50%");
});
fetch("https://fakestoreapi.com/products")
    .then(function (response) { return response.json(); })
    .then(function (data) {
    console.log(data);
    appendData(data);
});
function appendData(data) {
    data.forEach(function (element) {
        category.innerHTML += "<div><a class='category' href='#" + element.category + "' >" + element.category + "</a></div>";
        card.innerHTML += "<div class='card' id='" + element.category + "'><h3>" + element.title + "</h3><div>" + element.id + "</div><div>$" + element.price + "</div><div ><img src='" + element.image + "' height='300px' width='250px'></div><div>" + element.description + "</div></div>";
    });
}
