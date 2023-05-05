function enviar() {
    var tabu = window.document.getElementById('itxtt')
    var res = window.document.getElementById('res')
    var tab = Number(tabu.value)

    var n = ''
    for (var c = tab; c += n; c++)
    res.innerHTML = `${c}`
}