document.querySelector('#audio-play')?.addEventListener('mousedown', function (e) {
    this.classList.add('clicked')
    console.log(e, this)
    if (this.classList.contains('playing')) {
        document.querySelector('.audio-div > audio.playing').pause()
        document.querySelector('.audio-div > audio.playing').currentTime = 0
        this.classList.remove('playing')
        document.querySelector('.audio-div > audio.playing').classList.remove('playing')
        document.querySelector('#audio-title').innerHTML = 'Not playing'
    } else {
        playingAudio = document.querySelectorAll('.audio-div > audio')[Math.floor(Math.random() * document.querySelectorAll('.audio-div > audio').length)]
        playingAudio.play()
        playingAudio.classList.add('playing')
        this.classList.add('playing')
        document.querySelector('#audio-title').innerHTML = 'Now Playing:' + playingAudio.innerHTML
    }
})
document.querySelector('#audio-play')?.addEventListener('mouseup', function (e) {
    this.classList.remove('clicked')
    console.log(e, this)
})
document.querySelector('.audio-div > input')?.addEventListener('change', function (e) {
    let audioinp = this
    document.querySelectorAll('.audio-div > audio').forEach(function (audioele) {
        audioele.volume = audioinp.value / 100
    })
})
document.querySelectorAll('.audio-div > audio')?.forEach(function (audioele) {
    audioele.volume = document.querySelector('.audio-div > input').value / 100
})