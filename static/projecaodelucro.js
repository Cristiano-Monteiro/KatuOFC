function valor_meses(arquivo){
  var labels_meses = Object.keys(arquivo)
  return labels_meses
}

function valor(arquivo){
  var dados_valores = Object.values(arquivo)
  return dados_valores
}

if(variavel1 != null){
  let mesesProjecaodelucro = valor_meses(variavel1)

  let valoresProjecaodelucro = valor(variavel1)
  
  console.log(mesesProjecaodelucro)
  
  console.log(valoresProjecaodelucro)
  
  // Código do Gráfico
  
  const ctx4 = document.getElementById("myChart4")
  
  const labels4 = mesesProjecaodelucro
  
  const data4 = {
      labels4,
      datasets:[{
          backgroundColor: 'rgb(200, 216, 252)',
          borderColor: 'rgb(21, 60, 234)',
          hoverBackgroundColor: 'rgb(5, 231, 42)',
          data: valoresProjecaodelucro,
          label: "Projeção de lucro"
      }]
  }
  
  const config4 = {
      type: 'line',
      data: data4,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Line Chart - Cubic interpolation mode'
          },
        },
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Value'
            },
            suggestedMin: -10,
            suggestedMax: 200
          }
        },
        maintainAspectRatio: false
      },
    };
  
  const myChart4 = new Chart(ctx4, config4);
};
