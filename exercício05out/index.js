var resu = document.getElementById('isel'); // Obtém o elemento com o ID 'isel' e armazena na variável 'resu'
var res = document.getElementById('res'); // Obtém o elemento com o ID 'res' e armazena em 'res'
var valores = []; // Array para armazenar os números digitados

function adicionar() {
    var num = document.getElementById('itxtn').value; // Obtém o valor digitado no elemento com o ID 'itxtn' e armazena em 'num'
    if (num == '') { // Verifica se o campo está vazio
        window.alert('Adicione um número!'); // Exibe um alerta informando que é necessário adicionar um número
    } else {
        if (resu.querySelector(`option[value="${num}"]`) || num < 1 || num > 100) {
            // Verifica se o número já existe na lista ou se é inválido (menor que 1 ou maior que 100)
            window.alert('Valor inválido ou já encontrado na lista!');
        } else {
            var item = document.createElement('option'); // Cria um novo elemento de opção
            item.value = num; // Atribui o valor 'num' ao atributo 'value' do elemento
            item.text = `Número ${num} adicionado`; // Define o texto a ser exibido para a opção
            resu.appendChild(item); // Adiciona o elemento como uma nova opção ao elemento 'resu'
            valores.push(Number(num)); // Converte o valor para número e o adiciona ao array 'valores'
        }
        document.getElementById('itxtn').value = ''; // Limpa o campo de entrada
        document.getElementById('itxtn').focus(); // Dá foco ao campo de entrada para facilitar a digitação
    }
}

function verificar() {
    
    var options = resu.getElementsByTagName('option'); // Obtém todos os elementos de opção dentro de 'resu'
    if (options.length == 0) { // Verifica se não há números cadastrados
        window.alert('Nenhum número para VERIFICAR!'); // Exibe um alerta informando que não há números para verificar
    } else {
        res.innerHTML = ''; // Limpa o conteúdo do elemento 'res'
        var maior = valores[0]; // Inicializa a variável 'maior' com o primeiro valor do array 'valores'
        var menor = valores[0]; // Inicializa a variável 'menor' com o primeiro valor do array 'valores'
        var tot = 0; // Inicializa a variável 'tot' com zero para somar todos os valores
        for (var pos in valores) { // Percorre o array 'valores'
            tot += valores[pos]; // Soma o valor atual ao total
            if (valores[pos] > maior) { // Verifica se o valor atual é maior que o 'maior'
                maior = valores[pos]; // Atribui o novo maior valor à variável 'maior'
            }
            if (valores[pos] < menor) { // Verifica se o valor atual é menor que o 'menor'
                menor = valores[pos]; // Atribui o novo menor valor à variável 'menor'
            }
        }
        var media = tot / valores.length; // Calcula a média dos valores

        res.innerHTML += `Ao todo temos ${options.length} números cadastrados.<br>`
        res.innerHTML += `O maior valor informado foi ${maior}.<br>`; // Exibe o maior valor
        res.innerHTML += `O menor valor informado foi ${menor}.<br>`; // Exibe o menor valor
        res.innerHTML += `Somando todos os valores, temos ${tot}.<br>`; // Exibe a soma de todos os valores
        res.innerHTML += `A média dos valores digitados foi de ${media.indexOf(2)}.`; // Exibe a média dos valores
    }
}
