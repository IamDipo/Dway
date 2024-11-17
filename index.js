const seeAllLink = document.getElementById("seeAllLink");
const WhatsAppBtn = document.getElementById(`WhatsAppBtn`);
const EmailBtn = document.getElementById(`EmailBtn`);
const hiddenImages = document.querySelectorAll(".hidden");
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".lists");

seeAllLink.addEventListener("click", function (event) {
  event.preventDefault();

  hiddenImages.forEach(function (image) {
    image.classList.remove("hidden");
  });

  seeAllLink.style.display = "none";
});

hamburger.addEventListener(`click`, function () {
  menu.classList.toggle("active");
});

// WhatsAppBtn.addEventListener(`click`, function () {
//   WhatsAppBtn.innerText = `+2349013673813`;

//   setTimeout(function () {
//     WhatsAppBtn.innerText = "WhatsApp";
//   }, 3000);
// });

// EmailBtn.addEventListener(`click`, function () {
//   EmailBtn.innerText = `dipo.olami23@gmail.com`;

//   setTimeout(function () {
//     EmailBtn.innerText = `Email`;
//   }, 3000);
// });

let isPhoneNumberVisible = false;
let isEmailVisible = false;

WhatsAppBtn.addEventListener("click", function () {
  if (isPhoneNumberVisible) {
    WhatsAppBtn.innerText = "WhatsApp";
    isPhoneNumberVisible = false;
  } else {
    WhatsAppBtn.innerText = "+2349013673813";
    isPhoneNumberVisible = true;
  }
});

EmailBtn.addEventListener("click", function () {
  if (isEmailVisible) {
    EmailBtn.innerText = "Email";
    isEmailVisible = false;
  } else {
    EmailBtn.innerText = "dipo.olami23@gmail.com";
    isEmailVisible = true;
  }
});

document
  .querySelector('a[href="#"]')
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("AboutUsSection").scrollIntoView({
      behavior: "smooth",
    });
  });

document
  .querySelector('a[href="#"]')
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("OurServiceSection").scrollIntoView({
      behavior: "smooth",
    });
  });

document
  .querySelector('a[href="#"]')
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("PastProjectSection").scrollIntoView({
      behavior: "smooth",
    });
  });

document
  .querySelector('a[href="#"]')
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("PastProjectSection").scrollIntoView({
      behavior: "smooth",
    });
  });
