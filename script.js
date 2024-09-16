const wrapper = document.querySelector(".sliderwrapper")
const menuitem = document.querySelectorAll(".menuitem")

const products = [
    {
        id: "1",
        title: "JORDANS",
        price: "149",
        colors: [
            {
                code: "blue",
                img: "./IMG/nike4.png",
            },
            {
                code: "red",
                img: "./IMG/nike1.png",
            }
        ]
    },
    {
        id: "2",
        title: "BOLIONS",
        price: "169",
        colors: [
            {
                code: "pink",
                img: "./IMG/nike6.png",
            },
            {
                code: "black",
                img: "./IMG/nike5.png",
            }
        ]
    },
    {
        id: "3",
        title: "DARNOLDS",
        price: "189",
        colors: [
            {
                code: "white",
                img: "./IMG/nike3.png",
            },
            {
                code: "light green",
                img: "./IMG/nike7.png",
            }
        ]
    },
    {
        id: "4",
        title: "WISHLEY",
        price: "199",
        colors: [
            {
                code: "black",
                img: "./IMG/product1.png",
            },
            {
                code: "green",
                img: "./IMG/nike8.png",
            }
        ]
    },
    {
        id: "5",
        title: "TOTOM",
        price: "159",
        colors: [
            {
                code: "blue",
                img: "./IMG/nike2.png",
            },
            {
                code: "black",
                img: "./IMG/product2.png",
            }
        ]
    },
]

let choosenproduct = products[0]

const currentproductimg = document.querySelector(".productimg");
const currentproducttitle = document.querySelector(".producttitle");
const currentproductprice = document.querySelector(".productprice");
const currentproductcolors = document.querySelectorAll(".color");
const currentproductsizes = document.querySelectorAll(".size");

menuitem.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translatex(${-100 * index}vw)`
        //change the choosen product
        choosenproduct = products[index]
        //change the current text of product
        currentproducttitle.textContent = choosenproduct.title;
        currentproductprice.textContent = "$" + choosenproduct.price;
        currentproductimg.src = choosenproduct.colors[0].img

        currentproductcolors.forEach((color, index) => {
            color.style.backgroundcolor = choosenproduct.colors[index].code;

        });
    });

    currentproductcolors.forEach((color, index) => {
        color.addEventListener("click", () => {
            currentproductimg.src = choosenproduct.colors[index].img
        });
    });

    currentproductsizes.forEach((size, index) => {
        size.addEventListener("click", () => {
            currentproductsizes.forEach((size) => {
                size.style.backgroundcolor = "white"
                size.style.color = "black"
            })
            size.style.backgroundcolor = "black"
            size.style.color = "white"

        });
    });

    const productbutton = document.querySelector(".productbutton");
    const payment = document.querySelector(".payment");
    const close = document.querySelector(".close");

    productbutton.addEventListener("click", () => {
        payment.style.display = "flex"
    });

    close.addEventListener("click", () => {
        payment.style.display = "none"
    });

});   

// code is reserved and developed by ASK