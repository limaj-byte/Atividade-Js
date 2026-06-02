let botao = document.querySelector("#botao");
let input = document.querySelector("#input");
let lista = document.querySelector("#lista");
let total = document.querySelector("#total");
let totalPresentes = document.querySelector("#total-presentes");
let totalAusentes = document.querySelector("#total-Ausentes");
let contador = 0;
let contadorPresentes = 0;
let contadorAusentes = 0;

botao.addEventListener("click", function(){
    if (input.value === ""){
        alert("Insira o nome do aluno para adicionar a lista!");
        return;
    }

    let itemLista = document.createElement("li");
    itemLista.innerHTML = `
        <span>${input.value}</span>
        <div>
            <button class="presente">Presente</button>
            <button class="faltou">Faltou</button>
        </div>
    `;
    lista.appendChild(itemLista);
    contador++;
    total.innerHTML = `Total de Alunos: ${contador}`;
    input.value = "";

    let presente = itemLista.querySelector(".presente");
    let faltou = itemLista.querySelector(".faltou");

    presente.addEventListener("click", function(){
        if (itemLista.dataset.status) return;
        itemLista.dataset.status = "presente";
        itemLista.style.color = "green";
        itemLista.style.backgroundColor = "#d4edda";
        itemLista.style.marginBottom = "5px";
        contadorPresentes++;
        totalPresentes.innerHTML = `Total de Alunos Presentes: ${contadorPresentes}`;
        presente.disabled = true;
        faltou.disabled = true;
    });

    faltou.addEventListener("click", function(){
        if (itemLista.dataset.status) return;
        itemLista.dataset.status = "ausente";
        itemLista.style.color = "red";
        itemLista.style.backgroundColor = "#f8d7da";
        itemLista.style.marginBottom = "5px";
        contadorAusentes++;
        totalAusentes.innerHTML = `Total de Alunos Ausentes: ${contadorAusentes}`;
        presente.disabled = true;
        faltou.disabled = true;
    });
});