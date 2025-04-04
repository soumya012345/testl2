document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".dropdown > a");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", (e) => {
            e.preventDefault();
            const menu = dropdown.nextElementSibling;
            menu.style.display = menu.style.display === "block" ? "none" : "block";
        });
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown-menu").forEach(menu => {
                menu.style.display = "none";
            });
        }
    });
});




document.addEventListener('DOMContentLoaded', function () {
    new Splide('#brands-carousel', {
        type: 'loop',
        perPage: 3,
        gap: '20px',
        autoplay: true,
        interval: 3000,
        pauseOnHover: true,
        breakpoints: {
            1024: { perPage: 2 },
            768: { perPage: 1 }
        }
    }).mount();
});




document.addEventListener('DOMContentLoaded', function () {
    new Splide('#custom-slider', {
        type: 'loop', // Infinite scrolling
        perPage: 1,   // Show 1 card at a time
        perMove: 1,   // Move 1 card per slide
        gap: '0px',   // No gap to make it full width
        pagination: true, // Show dots for navigation
    }).mount();
});




document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const tabButtons = document.querySelectorAll(".tab-button");

    const products = {
        syrups: [
            { category: "Mazzana . Chocolate", title: "Whole Strawberry Fruit Crush", price: "₹396", rating: 4.8, quantity: "750ml▼", img: "./asset/butter-cashew-nut-cookies-mapro-1.webp" },
            { category: "Mazzana . Chocolate", title: "Rose Sharbat", price: "₹198", rating: 4.4, quantity: "500ml▼", img: "./asset/strawberry-mapro-1_940x.webp" },
            { category: "Mazzana . Chocolate", title: "Alphonso Mango Fruit Crush", price: "₹396", rating: 4.5, quantity: "700ml▼", img: "asset/green-apple-sharbat-mapro-1.webp" },
            { category: "Mazzana . Chocolate", title: "Alphonso Mango Fruit Crush", price: "₹396", rating: 4.5, quantity: "600ml▼", img: "asset/green-apple-sharbat-mapro-1.webp" },
            { category: "Mazzana . Chocolate", title: "Alphonso Mango Fruit Crush", price: "₹396", rating: 4.5, quantity: "550ml▼", img: "asset/falchoos-mapro-1_940x.webp" },
            { category: "Mazzana . Chocolate", title: "Alphonso Mango Fruit Crush", price: "₹396", rating: 4.5, quantity: "500ml▼", img: "asset/green-apple-sharbat-mapro-1.webp" }
        ],
        jams: [
            { category: "Mazzana . Chocolate", title: "Mixed Fruit Jam", price: "₹250", rating: 4.7, quantity: "200g▼", img: "./asset/green-apple-sharbat-mapro-1.webp" },
            { category: "Mazzana . Chocolate", title: "Pineapple Jam", price: "₹210", rating: 4.6, quantity: "250g▼", img: "./asset/strawberry-fruit-crush-mapro-1_940x.webp" },
            { category: "Mazzana . Chocolate", title: "Pineapple Jam", price: "₹210", rating: 4.6, quantity: "180g▼", img: "./asset/rose-sharbat-mapro-1_940x.webp" },
            { category: "Mazzana . Chocolate", title: "Pineapple Jam", price: "₹210", rating: 4.6, quantity: "300g▼", img: "asset/whole-strawberry-fruit-crush-mapro-1.webp" },
            { category: "Mazzana . Chocolate", title: "Pineapple Jam", price: "₹210", rating: 4.6, quantity: "275g▼", img: "./asset/green-apple-sharbat-mapro-1.webp" },
            { category: "Mazzana . Chocolate", title: "Pineapple Jam", price: "₹210", rating: 4.6, quantity: "220g▼", img: "asset/falchoos-mapro-1_940x.webp" }
        ],
        fruit_chews: [
            { category: "Mazzana . Chocolate", title: "Mango Chews", price: "₹150", rating: 4.5, quantity: "100g▼", img: "asset/alphonso-mango-fruit-crush-mapro-1_940x.webp" },
            { category: "Mazzana . Chocolate", title: "Guava Chews", price: "₹180", rating: 4.6, quantity: "120g▼", img: "./asset/green-apple-sharbat-mapro-1.webp" },
            { category: "Mazzana . Chocolate", title: "Guava Chews", price: "₹180", rating: 4.6, quantity: "110g▼", img: "asset/whole-strawberry-fruit-crush-mapro-1.webp" },
            { category: "Mazzana . Chocolate", title: "Guava Chews", price: "₹180", rating: 4.6, quantity: "130g▼", img: "./asset/green-apple-sharbat-mapro-1.webp" },
            { category: "Mazzana . Chocolate", title: "Guava Chews", price: "₹180", rating: 4.6, quantity: "90g▼", img: "asset/whole-strawberry-fruit-crush-mapro-1.webp" },
            { category: "Mazzana . Chocolate", title: "Guava Chews", price: "₹180", rating: 4.6, quantity: "140g▼", img: "./asset/green-apple-sharbat-mapro-1.webp" }
        ],
        snacks: [
            { category: "Mazzana . Chocolate", title: "Choco Chip Cookies", price: "₹250", rating: 4.8, quantity: "200g▼", img: "asset/alphonso-mango-fruit-crush-mapro-1_940x.webp" },
            { category: "Mazzana . Chocolate", title: "Choco Chip Cookies", price: "₹250", rating: 4.8, quantity: "220g▼", img: "./asset/green-apple-sharbat-mapro-1.webp" },
            { category: "Mazzana . Chocolate", title: "Choco Chip Cookies", price: "₹250", rating: 4.8, quantity: "250g▼", img: "asset/falchoos-mapro-1_940x.webp" },
            { category: "Mazzana . Chocolate", title: "Choco Chip Cookies", price: "₹250", rating: 4.8, quantity: "180g▼", img: "./asset/green-apple-sharbat-mapro-1.webp" },
            { category: "Mazzana . Chocolate", title: "Choco Chip Cookies", price: "₹250", rating: 4.8, quantity: "210g▼", img: "./asset/green-apple-sharbat-mapro-1.webp" },
            { category: "Mazzana . Chocolate", title: "Butter Classic Cookie", price: "₹220", rating: 4.5, quantity: "200g▼", img: "asset/falchoos-mapro-1_940x.webp" }
        ],
        chocolates: [
            { category: "Mazzana . Chocolate", title: "Dark Chocolate Bar", price: "₹350", rating: 4.9, quantity: "100g▼", img: "asset/rose-sharbat-mapro-1_940x.webp" },
            { category: "Mazzana . Chocolate", title: "Dark Chocolate Bar", price: "₹350", rating: 4.9, quantity: "120g▼", img: "./asset/green-apple-sharbat-mapro-1.webp" },
            { category: "Mazzana . Chocolate", title: "Dark Chocolate Bar", price: "₹350", rating: 4.9, quantity: "90g▼", img: "./asset/green-apple-sharbat-mapro-1.webp" },
            { category: "Mazzana . Chocolate", title: "Dark Chocolate Bar", price: "₹350", rating: 4.9, quantity: "110g▼", img: "asset/rose-sharbat-mapro-1_940x.webp" },
            { category: "Mazzana . Chocolate", title: "Dark Chocolate Bar", price: "₹350", rating: 4.9, quantity: "150g▼", img: "./asset/green-apple-sharbat-mapro-1.webp" },
            { category: "Mazzana . Chocolate", title: "Milk Chocolate Bar", price: "₹330▼", rating: 4.7, quantity: "130g▼", img: "asset/rose-sharbat-mapro-1_940x.webp" }
        ]

    };

    let splide;

    function loadProducts(category) {
        productList.innerHTML = "";

        const items = products[category] || [];

        items.forEach(product => {
            const li = document.createElement("li");
            li.classList.add("splide__slide");

            li.innerHTML = `
          <div class="product-card">
            <img src="${product.img}" alt="${product.title}" onerror="this.src='./asset/placeholder.png'">
            <div class="product-info">
            <div class="product-category">${product.category}</div>
            <div class="product-price">${product.price}</div>
              <div class="product-title">${product.title}</div>
              <div class="product-rating">⭐⭐⭐⭐⭐ ${product.rating}</div>
              <div class="product-quantity">${product.quantity}</div>
            </div>
            <button class="add-to-cart">ADD TO BAG</button>
          </div>
        `;
            productList.appendChild(li);
        });

        if (splide) splide.destroy();

        splide = new Splide("#product-slider", {
            type: "slide",
            perPage: 3,
            gap: "1rem",
            pagination: false,
            arrows: true,
            breakpoints: {
                1024: { perPage: 3 },
                768: { perPage: 2 },
                480: { perPage: 1 }
            }
        });

        splide.mount();
    }

    loadProducts("syrups");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            document.querySelector(".tab-button.active").classList.remove("active");
            button.classList.add("active");
            const category = button.getAttribute("data-category");
            loadProducts(category);
        });
    });
});