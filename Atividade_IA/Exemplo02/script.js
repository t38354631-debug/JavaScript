const botoCabeca_de_Ovo = document.getElementById("botaoCalcular");

botoCabeca_de_Ovo.addEventListener("click", ponto_de_referencia);

function ponto_de_referencia(){
    const ano = document.getElementById("anoNasci").value;

    const data = new Date().getFullYear();

    const total = data - ano;

    document.getElementById("resultado").textContent = `Idade: ${total}`;
    
}