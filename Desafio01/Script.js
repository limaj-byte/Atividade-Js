let botao = document.querySelector("#botao");
let input = document.querySelector("#input");
let list = document.querySelector("#list");
let total = document.querySelector("#total");

let contador = 0;

botao.addEventListener("click", function() {
    if (input.value.trim() === "") {
        alert("Insira um item para adicionar a lista!");
        return;
    }

    let lista = document.createElement("li");
    lista.innerHTML = `
        <span>${input.value}</span>
        <div>
            <button class="concluir">Concluir</button>
            <button class="delete">Excluir</button>
        </div>
    `;

    list.appendChild(lista);
    contador++;
    total.innerHTML = `Total: ${contador}`;
    input.value = "";

    let concluir = lista.querySelector(".concluir");
    concluir.addEventListener("click", function() {
        lista.style.textDecoration = "line-through";
    });

    let excluir = lista.querySelector(".delete");
    excluir.addEventListener("click", function() {
        list.removeChild(lista);
        contador--;
        total.innerHTML = `Total: ${contador}`;
    });
});
