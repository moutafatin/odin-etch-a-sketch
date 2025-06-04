import './style.css'

const app = document.querySelector("#app") as HTMLDivElement


// creating a 16x16 grid div using javascript 



function createDiv() {
  const div = document.createElement("div")
  div.className = "grid-item"
  div.addEventListener("mouseover", () => {

    div.style.backgroundColor = generateRandomColor()

  })
  return div
}


function generateRandomInt(min: number, max: number) {

  return Math.floor(Math.random() * max) + 1

}

function generateRandomColor() {
  const r = generateRandomInt(0, 255)
  const g = generateRandomInt(0, 255)
  const b = generateRandomInt(0, 255)

  const color = `rgb(${[r, g, b].join(',')})`

  return color

}




for (let i = 0; i < 16 * 16; i++) {
  const div = createDiv()
  app.appendChild(div)
}
