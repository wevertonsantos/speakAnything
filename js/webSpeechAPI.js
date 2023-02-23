elementView = document.querySelector('.main_view')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
	const numberRecognition = e.results[0][0].transcript
	viewOnWebSite(numberRecognition)
}

function viewOnWebSite(numberRecognition){
	elementView.innerHTML = numberRecognition
}