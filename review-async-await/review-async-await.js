// function ferverAgua(callback){ // O objetivo do callback é dar ordem as coisas
//     console.log("Ferver Água")

//     setTimeout(() => {
//         console.log("Água fervida")
//         callback()
//     }, 5000) // Milissegundos
// }

// function prepararCoado(callback){
//     console.log("Passo 1")
//     console.log("Passo 2")
//     console.log("Passo 3")
//     console.log("Passo 4")
//     console.log("Passo 5")
//     callback()
// }

// function passarCafe(callback){
//     console.log("Despejar água sobre o pó e deixar agir")
// }

// ferverAgua(() => { // Callback hell
//     prepararCoado(() => {
//         passarCafe(() => {
//             console.log("Seu café está pronto!")
//         })
//     })
// })

// function ferverAgua(callback){ 
//     console.log("Ferver Água")

//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log("Água fervida")
//             resolve()
//         }, 5000)
//     })


// }

// function prepararCoado(callback){
//     console.log("Passo 1")
//     console.log("Passo 2")
//     console.log("Passo 3")
//     console.log("Passo 4")
//     console.log("Passo 5")
//     callback()
// }

// function passarCafe(callback){
//     console.log("Despejar água sobre o pó e deixar agir")
// }

// ferverAgua()
//     .then(prepararCoado)
//     .then(passarCafe)
//     .then(()=>{
//         console.log("")
//     })
//     .catch((error)=>{
//          console.error("Algo deu errado: ", erro)
//     })

function ferverAgua(){ 
    console.log("Ferver Água")

    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("Água fervida")
            resolve()
        }, 5000)
    })


}

function prepararCoado(){
    console.log("Passo 1")
    console.log("Passo 2")
    console.log("Passo 3")
    console.log("Passo 4")
    console.log("Passo 5")
}

function passarCafe(){
    console.log("Despejar água sobre o pó e deixar agir")
}

// Promise.all(([
//     ferverAgua(),
//     Promise.resolve(prepararCoado())

// ])).then(passarCafe)
// .catch((erro)=>{
//     console.error("Algo deu errado: ", erro)
// })

async function rotinaCafe(){
    try{
        await ferverAgua()
        await prepararCoado()
        await passarCafe()
    } catch(erro){
        console.error("Algo deu errado: ", erro)
    }
}

rotinaCafe()
console.log("Teste")