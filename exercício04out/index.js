function enviar() {
    var tabu = window.document.getElementById('itxtt')
    var res = window.document.getElementById('res')
    res.innerHTML = ''
    var tab = Number(tabu.value)
    if (tab <=0) {
        res.innerHTML = 'IMPOSSÍVEL gerar uma tabuada, adicione um número!'
    } else {
      for (var i = 1; i <= 10; i++) {
        var resp = tab * i
        res.innerHTML += `${tab} x ${i} = ${resp}<br>`  
    }
    }
}