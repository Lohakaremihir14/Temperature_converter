var celcius = document.querySelector("#celcius");
var fahrenheit = document.querySelector("#farenheit");

function CelTofar(){
    let output =(parseFloat(celcius.value) * 9) / 5 + 32; 
    fahrenheit.value = parseFloat(output);
}

function farTocel(){
    let output =((parseFloat(fahrenheit.value) - 32) * 5) / 9;
    celcius.value = parseFloat(output.toFixed(2));
}
