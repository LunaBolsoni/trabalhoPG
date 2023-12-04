
const button = document.querySelector('.button-click')
const input = document.querySelector('.text')
const pronta = document.querySelector('.objetivo')
let minhaLista = []

function valorInput() {
    minhaLista.push({
item: input.value,
concluida : false

    })

    console.log(minhaLista)

    input.value = ''
    mostrar()

}

    function mostrar() {
        let novaLi = ''

        minhaLista.forEach((i, index )=> {
            novaLi = novaLi + 
            ` 
            <li class="texto">
            <img src="Studio_X.jpg" alt="lixo" onclick="deletarItem(${index})">
            <p> ${i.item} </p> 
            <img src="bad.png" alt="volta vida" onclick="termianrTarefa(${index})">


            </li>
            `
        })

        pronta.innerHTML = novaLi
    }
function termianrTarefa(index) {
    minhaLista[index].concluida=
}

    function deletarItem(index){
        minhaLista.splice(index, 1)

        mostrar()
    }
button.addEventListener('click', valorInput)