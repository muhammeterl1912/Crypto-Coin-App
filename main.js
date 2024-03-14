import "./scss/style.scss"
import { getCoins } from "./src/getCoins"
// Selector
const form = document.querySelector("form")

// Event
form.addEventListener("submit",(event)=>{
event.preventDefault()
event.target.reset() 
} )

const getCoibsData = () =>{
  const input = document.querySelector("form input").value
  if (!input.trim()) {
    alert("Input area can not be empty.")
  } else {
    getCoins()
  }
}