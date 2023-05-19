function adicionar() {
    var num = document.getElementById('itxtn').value;
    var resu = document.getElementById('isel');

    if (num == 0) {
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

