function likePlant(button) {
  if (button.innerText.includes("Liked")) {
    button.innerText = "❤️ Like";
  } else {
    button.innerText = "❤️ Liked";
  }
}
