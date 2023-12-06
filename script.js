
const button = document.querySelector('.button-click')
const input = document.querySelector('.text')
const pronta = document.querySelector('.objetivo')
let minhaLista = []

function valorInput() { //chamando a função
    minhaLista.push({
        item: input.value,
        concluida: false
    })

    console.log(minhaLista)
    input.value = ''     //limpar o input
    mostrar()

}

function mostrar() {
    let novaLi = ''
    minhaLista.forEach((i, index) => {
        novaLi = novaLi +  //pegar oque ja tem e adicionar mais um para não sobrepor
            ` 
            <li class="texto  ${i.concluida && "right"}">
            <div class="remove">
            <img src="img/Studio_X.jpg" alt="lixo" onclick="deletarItem(${index})">        
            <div class="${i.concluida && "act"}">
            <p> ${i.item} </p> 
            <img src="img/bad.png" alt="volta vida" onclick="termianrTarefa(${index})">
            <div/>
            <div/>
            </li>
            `
    })
    pronta.innerHTML = novaLi //executar na tela os itens
}
function termianrTarefa(index) {
    minhaLista[index].concluida = !minhaLista[index].concluida
    mostrar()

}
function deletarItem(index) { //posição dos elementos
    minhaLista.splice(index, 1) //deletar os elementos
    mostrar()
}
button.addEventListener('click', valorInput) //qunado o botão for clicado, chamar a função
