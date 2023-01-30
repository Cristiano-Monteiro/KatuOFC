function valor(arquivo){
  var dados_valores = Object.values(arquivo);
  return dados_valores;
};

if(variavel1 != null){
  let valoresLucroXDespesas = valor(variavel1);

  console.log(valoresLucroXDespesas);
  
  //Código do Gráfico
  
  const ctx3 = document.getElementById("myChart3");
  
  const labels3 = [
    
  ]
  
  const data3 = {
      labels: [
          'Lucro',
          'Despesas',
        ],
      datasets:[{
         borderColor: 'rgb(80, 80, 80)',
          data: valoresLucroXDespesas,
          backgroundColor: [
              'rgb(28, 113, 209',
              'rgb(241, 32, 32)',
            ],
        hoverBorderColor: 'rgb(191, 207, 221)',
        hoverBackgroundColor: [
              'rgb(137, 172, 252)',
              'rgb(249, 89, 89)',
          ],
            hoverOffset: 4,
          label: "Progressão de vendas"
      }]
  }
  
  const config3 = {
    type: 'doughnut',
    data: data3,
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
  };
  
  const myChart3 = new Chart(ctx3, config3);
};

/*
const ctx = document.getElementById("myChart")

const labels = []

const data = {
    labels: [
        'Lucro',
        'Despesas',
      ],
    datasets:[{
       //  borderColor: 'rgb(255, 99, 132)',
        data: [62.1 , 37.9],
        backgroundColor: [
            'rgb(28, 113, 209',
            'rgb(241, 32, 32)',
          ],
          hoverOffset: 4,
        label: "Progressão de vendas"
    }]
}

const config = {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true
    }
  };

  const myChart = new Chart(ctx, config)
  
  */
