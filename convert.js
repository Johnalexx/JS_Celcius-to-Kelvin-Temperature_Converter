function convert(){

    var celcius = document.getElementById('convert_celcius').value;
    var fixed = 274.15;

    if (celcius == ""){
        alert ("Input a value")
    }else{
        var converted = Number(celcius) + Number(fixed);
        //Prints the result
        document.getElementById('result').innerHTML = celcius + " degree celcius to degree kelvin is " + converted + " K";
   }
}