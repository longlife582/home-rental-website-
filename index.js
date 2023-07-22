const form = document.querySelector("#form");
const addressInput = document.querySelector("#address");
const price = document.getElementById("Price");
const rooms = document.getElementById("rooms");
const btn = document.querySelector(".btn");
const property = document.querySelector(".property");
const description = document.querySelector("#des");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    !addressInput.value ||
    !price.value ||
    !rooms.value ||
    !description.value
  ) {
    alert("Please fill in all fields.");
    return;
  }else{
    alert("property added")
  }

  const items = {
    address: addressInput.value,
    price: price.value,
    room_type: rooms.value,
    description: description.value,
  };

  fetch("http://localhost:5000/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(items),
  }).then((response) => {
    if (response.ok) alert("your property have been added");
    return response.json();
  });

  const newDiv = document.createElement("div");
  newDiv.className = "top1";
  var fileInput = document.getElementById("img");
  var file = fileInput.files[0];

  var reader = new FileReader();
  reader.onload = function (e) {
    var img = document.createElement("img");
    img.src = e.target.result;
    img.style.borderTopLeftRadius = "15px";
    img.style.borderTopRightRadius = "15px";

    newDiv.appendChild(img);
    newDiv.insertBefore(img, newDiv.firstChild);
  };

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
  property.appendChild(newDiv);

  form.reset();
  reader.readAsDataURL(file);
});
