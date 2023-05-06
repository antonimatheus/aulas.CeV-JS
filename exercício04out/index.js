/*function enviar() {
    var tabu = window.document.getElementById('itxtt')
    var res = window.document.getElementById('res')
    res.innerHTML = ''
    var tab = Number(tabu.value)
    if (tabu.value.length == 0 ) {
        res.innerHTML = 'IMPOSSÍVEL gerar uma tabuada, adicione um número!'
    } else {
      for (var i = 1; i <= 10; i++) {
        var resp = tab * i
        res.innerHTML += `${tab} x ${i} = ${resp}<br>`  
    }
    }
}*/

function enviar() {
    var tabu = document.getElementById('itxtt')
    var res = document.getElementById('seltab')
    
    if (tabu.value.length == 0) {
        window.alert('ERRO! Digite um número!')
    } else {
        let tab = Number(tabu.value)
        var c = 1
        res.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${tab} x ${c} = ${tab*c}`
            res.appendChild(item)
            //item.value = `tabu${c}`
            c++
        }
    }
}