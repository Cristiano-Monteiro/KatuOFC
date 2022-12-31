/*=== Getting random data ====*/

function get_random_number(){
    let number = Math.ceil(Math.random() * 500);
    return number;
};

let random_data_1 = [];
let random_data_2 = [];

for(let i = 0; i <= 3; i++){
    let random_number = get_random_number();
    random_data_1.push(random_number);
    random_number = get_random_number();
    random_data_2.push(random_number);
};

let pie_data = [
    get_random_number(),
    get_random_number()
];

/*=== Chart configs ===*/

function generate_options_for_chart(chart_container, type_chart, series_data){
    let option = {
        chart: {
            renderTo: chart_container,
            type: type_chart
        },
        title: {
            text: 'Chart Title'
        },
        series: series_data
    };
    return option;
};

const chart_data = [{
    name: 'Value 1',
    color: '#000278',
    data: random_data_1
}, {
    name: 'Value 2',
    color: '#0206fa',
    data: random_data_2
}];

const pie_chart_data = [{
    name: 'Value 1',
    colors: ['#000278','#0206fa'],
    data: pie_data
}];

const options1 = generate_options_for_chart('myChart1', 'bar', chart_data);

const options2 = generate_options_for_chart('myChart2', 'line', chart_data);

const options3 = generate_options_for_chart('myChart3', 'column', chart_data);

const options4 = generate_options_for_chart('myChart4', 'pie', pie_chart_data);

/*======================*/

const chart1 = Highcharts.chart(options1); 
const chart2 = Highcharts.chart(options2);
const chart3 = Highcharts.chart(options3);
const chart4 = Highcharts.chart(options4);