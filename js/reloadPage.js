button = document.querySelector('.btn-reload')
body = document.querySelector('body')

body.addEventListener('click', (e) => {
	if (e.target.id === 'again'){
		window.location.reload()
	}
})