//STATE AND BASE URL



//DOM ELEMENTS

const mainBody = document.querySelector('#main') 
const blogButton = document.querySelector('#blog-button')
const firstDiv = document.querySelector('#first-div')
const secondDiv = document.querySelector('#second-div')
const thirdDiv = document.querySelector('#third-div')
const otherButton = document.querySelector('other-button')


//EVENT LISTENERS

blogButton.addEventListener("click", () => {
  firstDiv.style.display = ""
})

otherButton.addEventListener("click", () => {
  renderTable()
})

//API REQUESTS



//RENDER FUNCTIONS

const renderTable = () => {
  const newTable = document.createElement('table')
  
  newTable.append()

}

//HELPER FUNCTIONS

