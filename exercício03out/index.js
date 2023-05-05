function contar() {
    var ini = document.getElementById('itxti')
    var fim = document.getElementById('itxtf')
    var pas = document.getElementById('itxtp')
    var res = document.getElementById('res')
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(pas.value)

    if (ini.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = 'Impossível Contar!'
    } else {
        res.innerHTML = 'Contando..<br>'
        if (p <= 0) {
            window.alert = 'Impossível Contar! Contando PASSO 1!'
            p = 1
            if (i < f)
            //ordem crescente
            for (var c = i; c >= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            } else if (i > f){
                //ordem decrescente
                for (var c = i; c <= f; c -= p) {
                    res.innerHTML += `${c} \u{1F449}`
                }
                res.innerHTML = `\u{1F3C1}`
            }
        }
    }
}