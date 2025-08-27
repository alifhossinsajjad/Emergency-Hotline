function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

document.getElementById("survice-box").addEventListener("click", function (e) {
  const cardInfo = e.target.parentNode.previousElementSibling.children;

  const title = cardInfo[0].innerText;

  const titleNumber = cardInfo[2].innerText;

  if (e.target.className.includes("cart-btn")) {
    alert(`${title} ${titleNumber}`);

    const totalCoin = getElement("coin-btn").innerText;

    if (Number(totalCoin) <= 0) return alert("❌ insufficient Coint");
    const currentCoin = parseInt(totalCoin) - 20;

    getElement("coin-btn").innerText = currentCoin;
  }
});

const heartBtns = document.querySelectorAll(".heart-btn");

for (let heartCount of heartBtns) {
  heartCount.addEventListener("click", function (e) {
    const totalHeartCount = document.getElementById("heart-count").innerText;
    const currentHeartCount = parseInt(totalHeartCount) + 1;
    document.getElementById("heart-count").innerText = currentHeartCount;
  });
}

getElement("survice-box").addEventListener("click", function (e) {
  if (e.target.className.includes("cart-btn")) {
    const cartButton = e.target;
    const serviceTitle =
      cartButton.parentNode.parentNode.children[1].children[0].innerText;

    const serviceNumber =
      cartButton.parentNode.parentNode.children[1].children[2].innerHTML;

    const cartContainer = getElement("cart-container");

    const newCart = document.createElement("div");

    newCart.innerHTML = `
         <div class="bg-gray-200 rounded-xl flex  justify-between p-4 my-5">
           <div class="">
                <h2 class="font-bold">${serviceTitle}</h2>
                   <p class="">${serviceNumber}</p>
                   </div>

                   <div>
             ${new Date().toLocaleTimeString()}
             </div>
             </div>
             
        `;

    cartContainer.append(newCart);
  }
});

document.getElementById("btn-clear").addEventListener("click", function () {
  const cartConatainer = getElement("cart-container");
  cartConatainer.innerHTML = " ";
});
