let amigo  = {nome:'Antoni',
idade: 16,
sexo: 'M',
peso:80,
engordar(p=0) {
    console.log('engordou')
    this.peso += p 
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)