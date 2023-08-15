const lowerValue = 1
const higherValue = 100
const numSecret = generateRandomNumber()

function generateRandomNumber() {
   return parseInt(Math.random() * higherValue + 1) 

}

console.log('Número Secreto', numSecret)

const elementLowerValue = document.getElementById('lower-value')
elementLowerValue.innerHTML = lowerValue

const elementHigherValue = document.getElementById('higher-value')
elementHigherValue.innerHTML = higherValue