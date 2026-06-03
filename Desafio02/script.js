let botao = document.querySelector("#botao");
let input = document.querySelector("#input");
let lista = document.querySelector("#lista");
let total = document.querySelector("#total");
let totalPresentes = document.querySelector("#totalPresentes");
let totalAusentes = document.querySelector("#totalAusentes");
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

    presente.addEventListener("click", function() {
        itemLista.style.backgroundColor = "Green";
        itemLista.style.color = "White";
        itemLista.style.borderRadius="7px"
        contadorPresentes=contadorPresentes+1;
        totalPresentes.innerHTML = `Total de Alunos Presentes: ${contadorPresentes}`;
        presente.disabled=true;
        ausente.addEventListener("click", function() {
            itemLista.style.backgroundColor = "Red";
            itemLista.style.color = "White";
            itemLista.style.borderRadius="7px"
            contadorPresentes--;
            totalPresentes.innerHTML = `Total de Alunos Presentes: ${contadorPresentes}`;
            faltou.disabled=true;
        });
    });

    faltou.addEventListener("click", function() {
        itemLista.style.backgroundColor = "Red";
        itemLista.style.color = "White";
        itemLista.style.borderRadius="7px"
        contadorAusentes=contadorAusentes+1;
        totalAusentes.innerHTML = `Total de Alunos Ausentes: ${contadorAusentes}`;
        faltou.disabled = true;
        presente.addEventListener("click", function() {
            itemLista.style.backgroundColor = "Green";
            itemLista.style.color = "White";
            itemLista.style.borderRadius="7px"
            contadorAusentes--;
            totalAusentes.innerHTML = `Total de Alunos Ausentes: ${contadorAusentes}`;
            presente.disabled=true;
        });
    });
});