const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate()
 // return date (1 - 31)
 
 
 const dateAtual = now.getDate()  // return date (1 - 31)
 const dateBoleto  = now.getDate() -1 +1// return date (1 - 31)

console.log(`${dateAtual}/${month}/${year}`)
console.log(`${dateBoleto}/${month}/${year}`)

if ( dateAtual >= dateBoleto) {
    console.log("boleto vencido")
    console.log(dateBoleto >= dateAtual)
} else {
    console.log("boleto no prazo")
    console.log(dateBoleto < dateAtual)

}