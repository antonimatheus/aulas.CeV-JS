var resu = document.getElementById('isel');

function adicionar() {
    var num = document.getElementById('itxtn').value;
    

    if (num == '') {
        window.alert('Adicione um número!');
    } else {
        if (resu.querySelector(`option[value="${num}"]`) || num < 1 || num > 100) {
            window.alert('Valor inválido ou já encontrado na lista!')
        } else {
            var item = document.createElement('option');
            item.value = num
            item.text = `Número ${num} adicionado`;
            resu.appendChild(item);
        }
    }  
}

function verificar() {
    var options = resu.getElementsByTagName('option')
    if (options.length == 0) {
        window.alert('Nenhum número para VERIFICAR!')
    } else {
    var res = document.getElementById('res')
    res.innerHTML = `Ao todo temos ${resu.length} números cadastrados.`
    }
}


