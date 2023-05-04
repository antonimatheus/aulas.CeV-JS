function carregar() {
    var horas = window.document.getElementById('tela')
    var img = window.document.getElementById('img')
    var agora = new Date()
    var hora = agora.getHours()
    //var hora = 16

    horas.innerHTML = `<p>Agora são ${hora} horas!</p>`
    
    if (hora >= 1 && hora < 6) {
        img.src = 'midia/madrugada.png'
        document.body.style.background = '#1D2F40'
    } else if (hora >= 6 && hora < 12) {
        img.src = 'midia/manha.png'
        document.body.style.background = '#FEC26C'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'midia/tarde.png'
        document.body.style.background = '#F29A2E'
    } else if (hora >= 18 && hora < 24) {
        img.src = 'midia/noite.png'
        document.body.style.background = '#080B0D'
    } else {
        img.src = 'midia/noite.png'
        document.body.style.background = '#080B0D'
    } 
}
