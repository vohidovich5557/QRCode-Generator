let input = document.querySelector(".input");
let form = document.querySelector(".form");
let img = document.querySelector(".img");



const getData = (e) => {
    e.preventDefault();
    if (input.value.length > 0) {
        img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        input.value = " ";
    }
};


form.addEventListener("submit", getData);