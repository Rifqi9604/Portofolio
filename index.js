console.log('tes');


buttonPlay = document.querySelector('.button-play')
landingPageAudio  = document.querySelector('.audio-landing-page')

buttonPlay.addEventListener('click', () => {
    landingPageAudio.currentTime = 0
    landingPageAudio.play()
})

teknikInformatika = document.querySelector('.informatika')
teknikInformatika.addEventListener('DOMContentLoaded', ()=> {
    teknikInformatika.classList.add('tes')
})