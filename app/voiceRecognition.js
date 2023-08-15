const elementGuesses = document.getElementById('guesses')

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  const voiceRecognition = new SpeechRecognition
  voiceRecognition.lang = 'pt-Br'
  voiceRecognition.start()

  voiceRecognition.addEventListener('result', onSpeak)

  function onSpeak(e) {
    guesses = e.results[0][0].transcript
    displayGuessesScreen(guesses)
    checkValidValue(guesses)
  }


  function displayGuessesScreen(guesses) {
    elementGuesses.innerHTML = `
      <div>Você disse</div>
      <span class="box">${guesses}</span> 
    `
  }

  voiceRecognition.addEventListener('end', () => voiceRecognition.start())
