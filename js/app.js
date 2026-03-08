new WOW({
    boxClass: 'wow',               
    animateClass: 'animate__animated',  
    offset: 100,                   
    mobile: true,                
    live: true,                    
    delay: '0.3s',  
    callback: function(box) {           
        box.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out'; 
    }             
}).init();
const sliderWrapper = document.querySelector('.sliderWrapper');
const navBottom = document.querySelectorAll('.navBottom h3');
const productImg = document.querySelector('.productImg');
const titleProduct = document.querySelector('.productTitle');
const productPrice = document.querySelector('.productPrice');
const colors = document.querySelectorAll('.color');
const sizes = document.querySelectorAll('.size');

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            { code: "black", img: "./img/air.png" },
            { code: "darkblue", img: "./img/air2.png" },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            { code: "lightgray", img: "./img/jordan.png" },
            { code: "green", img: "./img/jordan2.png" },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            { code: "lightgray", img: "./img/blazer.png" },
            { code: "green", img: "./img/blazer2.png" },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            { code: "black", img: "./img/crater.png" },
            { code: "lightgray", img: "./img/crater2.png" },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            { code: "gray", img: "./img/hippie.png" },
            { code: "black", img: "./img/hippie2.png" },
        ],
    },
];
let selectedProduct = products[0];

const updateProductUI = () => {
    titleProduct.textContent = selectedProduct.title;
    productPrice.textContent = "$" + selectedProduct.price;
    productImg.src = `../${selectedProduct.colors[0].img}`;

    colors.forEach((color, index) => {
        if (selectedProduct.colors[index]) {
            color.style.backgroundColor = selectedProduct.colors[index].code;
            color.addEventListener('click', () => {
                productImg.src = `../${selectedProduct.colors[index].img}`;
            });
        }
    });
};

navBottom.forEach((item, index) => {
    item.addEventListener('click', () => {
        sliderWrapper.style.transform = `translateX(${-100 * index}vw)`;
        selectedProduct = products[index];
        updateProductUI();
    });
});

sizes.forEach((item) => {
    item.addEventListener('click', () => {
        sizes.forEach((innerItem) => {
            innerItem.style.backgroundColor = 'white';
            innerItem.style.color = 'black';
        });
        item.style.backgroundColor = 'black';
        item.style.color = 'white';
    });
});

const paymentContainer = document.querySelector('.payment');
const productButton = document.querySelector('.productButton');
const payButton = document.querySelector('.payButton');

productButton.addEventListener('click', () => {
    paymentContainer.style.display = 'flex';
});

payButton.addEventListener('click', () => {
    paymentContainer.style.display = 'none';
});

document.addEventListener('click', (event) => {
    if (!paymentContainer.contains(event.target) && event.target !== productButton) {
        paymentContainer.style.display = 'none';
    }
});

updateProductUI();
