const form = document.querySelector("#form");
const addressInput = document.querySelector("#address");
const price = document.getElementById("Price");
const rooms = document.getElementById("rooms");
const btn = document.querySelector(".btn");
const property = document.querySelector(".property");
const imgInput = document.querySelector("#img");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const inputValue = addressInput.value;
//   console.log(inputValue);
//   console.log(price.value);
//   console.log(rooms.value);

// });

// console.log(rooms)

// btn.addEventListener("click", (e) => {
//   e.preventDefault();

//   if (addressInput.value && price.value) {
//     let item = {
//       address: addressInput.value,
//       price: price.value,
//       roomss: rooms.value,
//     };
//     console.log(item);
//   } else {
//     alert("plase fill");
//   }

// });
// console.log(imgInput);

btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (!addressInput.value || !price.value || !rooms.value) {
    alert("Please fill in all fields.");
    return;
  }

  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "card");

  const img = document.createElement("img");
  img.src = imgInput.value;
  newDiv.appendChild(img);

  const h4 = document.createElement("h4");
  const h4Text = document.createTextNode(addressInput.value);
  h4.appendChild(h4Text);
  newDiv.appendChild(h4);

  const p = document.createElement("p");
  const pText = document.createTextNode(rooms.value);
  p.appendChild(pText);
  newDiv.appendChild(p);

  const h6 = document.createElement("h6");
  const h6text = document.createTextNode(price.value);
  h6.appendChild(h6text);
  newDiv.appendChild(h6);

  form.reset();

  console.log(newDiv);
});
