
const oneMetre = 3.28084  // feet
const oneFeet = 0.3048  // metre
const oneLitre = 0.26417  // gallon
const oneGallon = 3.7854  // litre
const oneKilo = 2.204623  // pound
const onePound = 0.4535924  // kilo

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")

const lengthPara = document.getElementById("length")
const volumePara = document.getElementById("volume")
const massPara = document.getElementById("mass")

const suggestPara = document.getElementById("suggest")



function render(val) {
    lengthPara.textContent = `${val} metres = ${(val*oneMetre).toFixed(3)} feet | ${val} feet = ${(val*oneFeet).toFixed(3)} metres`

    volumePara.textContent = `${val} litres = ${(val*oneLitre).toFixed(3)} gallons | ${val} gallons = ${(val*oneGallon).toFixed(3)} litres`
    
    massPara.textContent = `${val} kilos = ${(val*oneKilo).toFixed(3)} pounds | ${val} pounds = ${(val*onePound).toFixed(3)} kilos`
}


convertBtn.addEventListener("click", function() {

    let value = inputEl.value
    
    render(value)
    
})


inputEl.addEventListener("input", function () {
    suggestPara.classList.add("disp")
    convertBtn.classList.add("adding-margin")
})