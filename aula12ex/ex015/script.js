function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique o ano e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 18) {
                //ADOLECENTE
                img.setAttribute('src', 'foto-adolecente-m.png')
            } else if (idade < 26) {
                //JOVEM
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 18) {
                //ADOLECENTE
                img.setAttribute('src', 'foto-adolecente-f.png')
            } else if (idade < 26) {
                //JOVEM
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                //ADULTA
                img.setAttribute('src', 'foto-adulto-f.png')
            }  else {
                //IDOSA
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`    
        res.appendChild(img)
    }
}