let cart = [];


// ================= SEARCH =================

function openSearch() {

    document.getElementById("searchBox").style.display = "block";

    document.getElementById("searchInput").focus();

}

function closeSearch() {

    document.getElementById("searchBox").style.display = "none";

}


// ================= SEARCH PRODUCTS =================

function searchProducts() {

    const input =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const products =
        document.querySelectorAll(".product-card");

    products.forEach(product => {

        const name =
            product.querySelector("h3")
            .textContent
            .toLowerCase();

        if (name.includes(input)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


// ================= CART =================

function addToCart(name, price) {

    const product = {

        name: name,

        price: price

    };

    cart.push(product);

    updateCart();

    openCart();

}


function updateCart() {

    const cartCount =
        document.getElementById("cart-count");

    cartCount.textContent = cart.length;


    const cartItems =
        document.getElementById("cart-items");

    const cartTotal =
        document.getElementById("cart-total");


    if (cart.length === 0) {

        cartItems.innerHTML =
            '<p class="empty-cart">Giỏ hàng đang trống.</p>';

        cartTotal.textContent =
            "0 VNĐ";

        return;

    }


    let total = 0;


    cartItems.innerHTML = "";


    cart.forEach((item, index) => {

        total += item.price;


        const div =
            document.createElement("div");

        div.className = "cart-item";


        div.innerHTML = `

            <div>

                <strong>
                    ${item.name}
                </strong>

                <p>
                    ${formatPrice(item.price)}
                </p>

            </div>

            <button
                onclick="removeFromCart(${index})"
                style="
                    border:none;
                    background:none;
                "
            >
                ✕
            </button>

        `;


        cartItems.appendChild(div);

    });


    cartTotal.textContent =
        formatPrice(total);

}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


// ================= OPEN / CLOSE CART =================

function openCart() {

    document.getElementById("cartOverlay")
        .style.display = "flex";

}


function closeCart() {

    document.getElementById("cartOverlay")
        .style.display = "none";

}


// ================= FORMAT PRICE =================

function formatPrice(price) {

    return price
        .toLocaleString("vi-VN") + " VNĐ";

}


// ================= CHECKOUT =================

document
    .querySelector(".checkout-btn")
    .addEventListener("click", function() {

        if (cart.length === 0) {

            alert("Giỏ hàng đang trống!");

            return;

        }

        alert(
            "Cảm ơn bạn! Tính năng đặt hàng sẽ được cập nhật."
        );

    });
