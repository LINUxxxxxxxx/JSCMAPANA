console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
let dolarDun = 9.10
}



console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 //const ile değişken tanımladığımızda sadece bir kere tanımlanabilir yoksa hata verir//

console.log(euroDun)
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Duygu Kredisi","Hakan Kredisi"] 

console.log("<ul>")
for(let i =0;i<konutKredileri.length;i++ ){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")




console.log(konutKredileri)