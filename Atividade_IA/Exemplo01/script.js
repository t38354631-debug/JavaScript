
const butao = document.getElementById("calcular");

butao.addEventListener("click", calcular);

function calcular(){
    const nome_produto = document.getElementById("p").value;
    const preco = Number(document.getElementById("pr").value);
    const qtd = Number(document.getElementById("q").value);

  let valor_total = preco * qtd;
  //  console.log(valor_total)

 // let teste = 10/3;

 //resultado: 3.3333333333333335
    // console.log(teste)
      // document.getElementById("resultado").textContent = teste;
    // 
document.getElementById("resultado").textContent = `Produto: ${nome_produto }| Valor Total: R$ ${valor_total}  `;
}


//como usar parametros estudar
//porque tirar o value do butão, como fazer uma versão usando parametro
//concluido com sucesso! mas como exibir mais casas decimais, 
//fazer css
