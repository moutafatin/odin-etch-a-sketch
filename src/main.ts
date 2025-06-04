import './style.css'

const app = document.querySelector("#app") as HTMLDivElement

const gridInput = document.querySelector(".grid-input") as HTMLInputElement
let gridSize = gridInput.valueAsNumber

createGrid(gridSize)

const gridForm = document.querySelector('.grid-form') as HTMLFormElement

gridForm.addEventListener("submit", (e) => {
  e.preventDefault()

  gridSize = gridInput.valueAsNumber

  if (!gridSize || gridSize < 1) {
    alert("Please enter a valid grid size")
    return
  }

  document.querySelectorAll(".grid-item").forEach(el => el.remove())

  createGrid(gridSize)
})

function createGrid(size: number) {
  for (let i = 0; i < size * size; i++) {
    app.appendChild(createDiv(size))
  }

}

function createDiv(size: number) {
  const div = document.createElement("div")
  div.className = "grid-item"
  div.style.backgroundColor = "whitesmoke"
  div.style.aspectRatio = "1/1"
  // removing the size of the gaps.
  div.style.flex = `0 0 calc((100% - (${size - 1}px)) / ${size})`
  div.addEventListener("mouseover", () => {

    div.style.backgroundColor = generateRandomColor()

  })
  return div
}

function generateRandomInt(min: number, max: number) {

  return Math.floor(Math.random() * (max - min + 1)) + min

}









function generateRandomColor() {
  const r = generateRandomInt(0, 255)
  const g = generateRandomInt(0, 255)
  const b = generateRandomInt(0, 255)

  const color = `rgb(${[r, g, b].join(',')})`

  return color

}