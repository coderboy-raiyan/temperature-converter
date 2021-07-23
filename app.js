let calculateTemp = function(){
    let numberTemp = document.getElementById('temp').value;
    let tempSelected = document.getElementById('temp_diff');
   let valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

   let celToFah = function(cel){
    let fahrenheit = Math.round((cel * 9/5) + 32 ) 
    return fahrenheit
   }
   let fahToCel = function(fah){
       let celsius = Math.round((fah - 32) * 5/9 ) 
      return celsius
   }

   let result;
   if(valueTemp === 'cel'){
       result = celToFah(numberTemp)
       document.getElementById('resultContainer').innerHTML = `= ${result} Fahrenheit`;
   }else{
    result = fahToCel(numberTemp)
    document.getElementById('resultContainer').innerHTML = `= ${result} Celsius`;
   }
}


