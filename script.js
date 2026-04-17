// Loader remove
window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none";
});

// Scroll function
function scrollToSection() {
  document.querySelector(".about").scrollIntoView({
    behavior: "smooth"
  });
}

// Typing effect
const text = "Hello, I am Developer";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}

document.getElementById("text").innerHTML = "";
typing();
