function checkValidValue(guesses){
    const number = +guesses

    if (guessesInvalid(number)) {
        elementGuesses.innerHTML += '<div>Valor inválido</div>'
        return 
    }

    if (numberGreaterLessThan(number)) {
        elementGuesses.innerHTML += `
        <div>Valor inválido: o número secreto precisa estar entre
         ${lowerValue} e ${higherValue}</div>
         `
         return
    }

    if (number === numSecret) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numSecret}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (number > numSecret) {
        elementGuesses.innerHTML += `
        <div>O número secreto é menor 
        <i class="fa-solid fa-down-long"></i>
        </div>
        `
    } else {
        elementGuesses.innerHTML += `
        <div>O número secreto é maior 
        <i class="fa-solid fa-up-long"></i>
        </div>
        `
    }
}

function guessesInvalid(number) {
    return Number.isNaN(number)
}

function numberGreaterLessThan(number){
    return number > higherValue || number < lowerValue
}

document.body.addEventListener('click', e =>{
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})