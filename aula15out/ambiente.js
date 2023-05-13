let num = [6, 8, 2, 9, 5]
num.sort()
//for(let pos = 0; pos < num.length; pos++)
//console.log(`O número na posição ${pos} é o ${num.sort()[pos]}!`)
for (var pos in num) {
    console.log(num[pos])
}
var n = num.indexOf(4)
console.log(`O valor ${n} está na posição ${pos}`)