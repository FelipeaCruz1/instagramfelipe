function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  const frase = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    frase.setAttribute(
      "alt",
      "Foto Felipe sério, usando óculos escuro, camiseta preta com fundo cinza e borda cinza escuro"
    )
  } else {
    frase.setAttribute(
      "alt",
      "Foto Felipe sério, usando óculos, camiseta preta com fundo amarelo e borda branca"
    )
  }
}
