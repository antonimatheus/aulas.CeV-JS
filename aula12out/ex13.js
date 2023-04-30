var agora = new Date()
var diaSem = agora.getDay()
//console.log(diaSem)

diaSem = 5

/*
0 - Domingo
1 - Segunda 
2 - Terça
3 - Quarta
4 - Quinta
5 - Sexta
6 - Sabádo
*/

switch (diaSem) {
    case 0:
        console.log('O dia de hoje é Domingo')
        break
    case 1:
        console.log('O dia de hoje é Segunda-Feira')
        break
    case 2:
        console.log('O dia de hoje é Terça-Feira')
        break
    case 3:
        console.log('O dia de hoje é Quarta-Feira')
        break
    case 4:
        console.log('O dia de hoje é Quinta-Feira')
        break
    case 5:
        console.log('O dia de hoje é Sexta-Feira')
        break
    default:
        console.log('O dia de hoje é Sabádo')
        break
}
