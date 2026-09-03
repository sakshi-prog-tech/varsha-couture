let index = 0;
let slides = document.querySelectorAll(".slide");

function showSlides(){

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    index++;

    if(index > slides.length){
        index = 1;
    }

    slides[index-1].style.display = "block";

    setTimeout(showSlides, 3000);
}

showSlides();
function sendWhatsApp(){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let message = document.getElementById("message").value;

let text = "Name: " + name +
"\nPhone: " + phone +
"\nMessage: " + message;

let url = "https://wa.me/919454567812?text=" + encodeURIComponent(text);

window.open(url, "_blank");

}