const category = document.querySelector(".side");
const card = document.querySelector(".middle");
const icon = document.querySelector(".fas");
const cart = document.querySelector(".cart") as HTMLDivElement;

icon.addEventListener("click", () => {
  cart.style.right === "-50%"
    ? (cart.style.right = "0")
    : (cart.style.right = "-50%");
});
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    appendData(data);
  });

interface Data {
  category?: string;
  description?: string;
  id?: number;
  image?: string;
  price?: number;
  title?: string;
}
function appendData(data: Data[]): void {
  data.forEach((element) => {
    category.innerHTML += `<div><a class='category' href='#${element.category}' >${element.category}</a></div>`;
    card.innerHTML += `<div class='card' id='${element.category}'><h3>${element.title}</h3><div>${element.id}</div><div>$${element.price}</div><div ><img src='${element.image}' height='300px' width='250px'></div><div>${element.description}</div></div>`;
  });
}
