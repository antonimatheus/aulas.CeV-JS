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
        itxtn.value = ''
        itxtn.focus()
    }  
}

function verificar() {
    var options = resu.getElementsByTagName('option')
    if (options.length == 0) {
        window.alert('Nenhum número para VERIFICAR!')
    } else {
        res.innerHTML = ''
        let maior = valores[0]
        let menor = valores[0]
        //ao todo temos .. números cadastrados.
        var res = document.getElementById('res')
        res.innerHTML += `Ao todo temos ${resu.length} números cadastrados.<br>`
        //o maior número informado foi..
        for (let pos in valores) {
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        res.innerHTML += `O maior valor informado foi ${maior}`
        res.innerHTML += `O menor valor informado foi ${menor}`
        
        
        //o menor número informado foi..

        //somando todos os valores, temos..
        /*var soma = 0;
        for (var i = 0; i < options.length; i++) {
            soma += parseInt(options[i].value);
        }
        res.innerHTML += ` Somando todos os valores, temos ${soma}.`;*/

        //a média dos valores digitados foi de..
    }
}





