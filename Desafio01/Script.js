let botao= document.querySelector("#botao");
let input= document.querySelector("#input");
let list= document.querySelector("#list");
let total= document.querySelector("#total");

let contador=0;

botao.addEventListener("click", function()
{
     if (input.value ===""){
        alert("Insira um item para adicionar a lista!");
        return;
    }
    list.innerHTML += `
    <div class="itens">
        <li>${input.value}</li>
        <button class="concluir">Concluir</button>
        <button class="delete">Excluir</button>
    </div>
    `;
    contador++;
    total.innerHTML = `Total: ${contador}`;
});
