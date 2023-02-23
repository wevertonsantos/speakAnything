const numberChoose = document.querySelector('.main_number')
const max = document.querySelector('#max-number')
const min = document.querySelector('#min-number')

const number = 0
const minNumber = 1
const maxNumber = 100

function mathNumber(){
	return parseInt(math.random() * maxNumber + 1)
}

numberChoose.innerHTML = number
min.innerHTML = minNumber
max.innerHTML = maxNumber