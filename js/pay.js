const payBtn = document.querySelector(".checkout-btns");


payBtn.addEventListener("click", () => {
    fetch("/stripe-checkout", {
        method: "POST",
        headers: {
            "Contaent-Type": "application/json",
        },
        body: JSON.stringify({
            items: JSON.parse(localStorage.getItem('carts'))
        }),
})
.then((res) => res.json())
.then((data) => {
    if (data.url) {
        window.location.href = data.id
    } else {
        console.error("Invalid URL Recived From the server:", data.id)
    }
})
 .catch((err) => console.err(err));
});