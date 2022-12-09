function valor_meses(arquivo){
  var labels_meses = Object.keys(arquivo)
  return labels_meses
}

function valor(arquivo){
  var dados_valores = Object.values(arquivo)
  return dados_valores
}

if(variavel1 != null){
  let categoria = valor_meses(variavel1)

  let valoresCategorias = valor(variavel1)
  
  console.log(categoria)
  
  console.log(valoresCategorias)
  
  //Código do Gráfico
  
  const ctx2 = document.getElementById("myChart2")
  
  const labels2 = categoria
  
  const data2 = {
      labels2,
      datasets:[{
          backgroundColor: 'rgb(103, 169, 243)',
          borderColor: 'rgb(21, 60, 234)',
          data: valoresCategorias,
          label: "Despesas por Categoria"
      }]
  }
  
  const config2 = {
      type: 'bar',
      data: data2,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart'
          }
        },
        maintainAspectRatio: false
      },
    };
  
  const myChart2 = new Chart(ctx2, config2);
};