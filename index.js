
let MeterToFeet = 3.281
let LiterToGallon = 0.264
let KilogramToPound = 2.204


const convertBtn= document.getElementById("convert-el")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


console.log(lengthEl)
convertBtn.addEventListener("click",function() {
    // get input value
    const inputValue = parseFloat(inputEl.value);
    const FeetToMeter = round(inputValue / 3.281,3)
    const GallonToLiter = round(inputValue / 0.264,3)
    const PoundToKilogram = round(inputValue / 2.204,3)
    // convert and add to template strings inside list
    const convLength = round(inputValue * MeterToFeet,3)
    const convVol = round(inputValue * LiterToGallon,3)
    const convMass = round(inputValue * KilogramToPound,3)
    lengthEl.innerHTML = `
    Length (Meter/Feet)
    
    ${inputValue} meters = ${convLength} feet | ${inputValue} feet = ${FeetToMeter} meters
    ` 
    volumeEl.innerHTML = `
    Volume (Liters/gallons)
    
    ${inputValue} liters = ${convVol} gallon | ${inputValue} gallon = ${GallonToLiter} liters
    ` 
    massEl.innerHTML = `
    Mass (kilograms/pounds)
    
    ${inputValue} kilo = ${convMass} pounds | ${inputValue} pounds = ${PoundToKilogram} kilo
    ` 
})

function round(num, decimal){
    let factor = Math.pow(10, decimal)
    return Math.round(num*factor) / factor;
}