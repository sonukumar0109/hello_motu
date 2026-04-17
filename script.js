const name = "Hello Motu ❤️"; // 👉 yaha uska naam likh

const text = `Hello ${Motu}... 💖 Do You still Love me the same ?`;

let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 70);
  }
}

typing();

// YES click
function yesClick() {
  document.getElementById("result").innerHTML =
    "Yayyyy 💖 I know you love me so much 😭❤️ so do I ";
  document.body.style.background = "#ff4d6d";
}

// NO button bhaagega 😂
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth - 100;
  const y = Math.random() * window.innerHeight - 50;

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});
