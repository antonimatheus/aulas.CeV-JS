function verificar() {
    var nas = window.document.getElementById('itxtn')
    var res = window.document.getElementById('res')
    var atual = new Date()
    var ano = atual.getFullYear()
    if (nas.value.length == 0 || nas.value > ano) {
        window.alert('[ERRO] Data Inválida! Tente Novamente!')
    } else {
      var idade = ano - Number(nas.value)
      var rsex = window.document.getElementsByName('radsex')
      var gênero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (rsex[0].checked) {
        gênero = 'Homem'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'midia/foto-bebe-m.png')
        } else if (idade < 19) {
            //jovem
            img.setAttribute('src', 'midia/foto-adolecente-m.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'midia/foto-adulto-m.png')
        } else {
            //idoso
            img.setAttribute('src', 'midia/foto-idoso-m.png')
        }
      }else if (rsex[1].checked) {
        gênero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'midia/foto-bebe-f.png')
        } else if (idade < 19) {
            //jovem
            img.setAttribute('src', 'midia/foto-adolecente-f.png')
        } else if (idade < 50) {
            //adulta
            img.setAttribute('src', 'midia/foto-adulto-f.png')
        } else {
            //idosa
            img.setAttribute('src', 'midia/foto-idoso-f.png')
        }
 
      }
      res.style.textAlign = 'center'
      res.innerHTML = `${gênero} com ${idade} anos.`
      res.appendChild(img)
    }
}