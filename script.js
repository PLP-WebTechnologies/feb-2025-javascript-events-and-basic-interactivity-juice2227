let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
  submitButton.textContent = "submitted succesfully";
});

const text = document.getElementById("about-us");
text.style.fontSize = "30px";
text.style.alignItems = "center";
text.style.fontWeight = "bold";
function handleSubmit(event) {
  event.preventDefault(); // prevents page reload
  const submitButton = document.getElementById("submit");
  submitButton.textContent = "Submitted successfully";
}
// Mobile Menu Toggle
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// Smooth Scroll
document.querySelectorAll("a.nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // adjust for navbar height
        behavior: "smooth",
      });
    }
    navList.classList.remove("active"); // close mobile nav
  });
});

// Active Link on Scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
