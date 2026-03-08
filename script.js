// Simulerad blockering av tråden
setInterval(() => {
  let start = Date.now()
  while (Date.now() - start < 1000) {}
}, 3000)

// Skriver ut HTML direkt i dokumentet


// Förhindrar användaren att navigera bakåt


// Ändrar bakgrundsfärgen slumpmässigt var 500ms
setInterval(() => {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16)
}, 500)

// Visar innehållet på sidan efter 5 sekunder
setTimeout(() => {
  document.body.style.display = "block"
}, 5000)

// Loggar 10000 tal till konsolen efter 1 sekund


// // Visar en alert när sidan har laddats
// document.addEventListener("DOMContentLoaded", function () {
//   alert("Page loaded!")
// })

