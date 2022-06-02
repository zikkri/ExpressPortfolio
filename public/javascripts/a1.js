//flex variables
var result = 0;
var calories = 0;

//EVENT LISTENERS
var buttonI = document.getElementById('calculateI');
var buttonM = document.getElementById('calculateM');
var imperialDiv = document.getElementById('Imperial').style.display = 'block';
var metricDiv = document.getElementById('Metric').style.display = 'none';

buttonI.addEventListener('click', calculateBMRImperial());
buttonM.addEventListener('click', calculateMetricBMR());

//IMPERIAL BMR FUNCTION
function calculateBMRImperial(){

  var genderI = document.getElementsByName('genderI');
  var ageI = parseInt(document.getElementById('ageI').value);
  var feetI = parseInt(document.getElementById('feetI').value);
  var inchesI = parseInt(document.getElementById('inchesI').value);
  var totalInches = (feetI * 12) + inchesI;  
  var lbI = parseInt(document.getElementById('lbI').value);  
  var activityI = document.getElementById('activityI');
  var selectionI = activityI.options[activityI.selectedIndex].value;

  if(genderI[0].value === 'Female'){
    result = Math.round(655 + (4.35 * lbI) + (4.7 * totalInches) - (4.7 * ageI)); 
    
    switch(selectionI){
      case '0':
        calories = Math.round(result * 1.2);
        break;

      case '1':
        calories = Math.round(result * 1.375);
        break;

      case '2':
        calories = Math.round(result * 1.55);
        break;
      
      case '3':
        calories = Math.round(result * 1.725);
        break;

      case '4':
        calories = Math.round(result * 1.9);
        break;

      default:
        calories = result;
        break;
    }

    displayMessage(result, calories);
  }

  else if(genderI[0].value === 'Male'){    
    result = Math.round(66 + (6.2 * lbI) + (12.7 * totalInches) - (6.76 * ageI));

    switch(selectionI){
      case '0':
        calories = Math.round(result * 1.2);
        break;

      case '1':
        calories = Math.round(result * 1.375);
        break;

      case '2':
        calories = Math.round(result * 1.55);
        break;
      
      case '3':
        calories = Math.round(result * 1.725);
        break;

      case '4':
        calories = Math.round(result * 1.9);
        break;

      default:
        calories = result;
        break;
    }

    displayMessage(result, calories);
  }
}

//METRIC BMR FUNCTION
function calculateMetricBMR(){

  var genderM = document.getElementsByName('genderM');
  var ageM = parseInt(document.getElementById('ageM').value);  
  var centimetersM = parseInt(document.getElementById('centimetersM').value);
  var kgM = parseInt(document.getElementById('kgM').value);
  var activityM = document.getElementById('activityM');
  var selectionM = activityM.options[activityM.selectedIndex].value;

  if(genderM[0].value === 'Female'){
    result = Math.round(655 + (9.563 * kgM) + (1.850 * centimetersM) - (4.676 * ageM));
    
    switch(selectionM){
      case '0':
        calories = Math.round(result * 1.2);
        break;

      case '1':
        calories = Math.round(result * 1.375);
        break;

      case '2':
        calories = Math.round(result * 1.55);
        break;
      
      case '3':
        calories = Math.round(result * 1.725);
        break;

      case '4':
        calories = Math.round(result * 1.9);
        break;

      default:
        calories = result;
        break;
    }

    displayMessage(result, calories);
  }
  
  else if(genderM[0].value === 'Male'){
    result = Math.round(66.5 + (13.76 * kgM) + (5.003 * centimetersM) - (6.755 * ageM));
    
    switch(selectionM){
      case '0':
        calories = Math.round(result * 1.2);
        break;

      case '1':
        calories = Math.round(result * 1.375);
        break;

      case '2':
        calories = Math.round(result * 1.55);
        break;
      
      case '3':
        calories = Math.round(result * 1.725);
        break;

      case '4':
        calories = Math.round(result * 1.9);
        break;

      default:
        calories = result;
        break;
    }

    displayMessage(result, calories);
  }
}

//HIDE/UNHIDE DIVS FUNCTION
function hideDiv(x){
  if(x === 0){
    document.getElementById('Imperial').style.display = 'block';
    document.getElementById('Metric').style.display = 'none';
    document.getElementById('result').innerHTML = "";
    document.getElementById('calories').innerHTML = "";
  }
  else if(x === 1){  
    document.getElementById('Metric').style.display = 'block';  
    document.getElementById('Imperial').style.display = 'none';
    document.getElementById('result').innerHTML = "";
    document.getElementById('calories').innerHTML = "";
}
}

//DISPLAY MESSAGE FUNCTION
function displayMessage(result, calories){
  document.getElementById('result').innerHTML = result + "/kcal";
  document.getElementById('calories').innerHTML = calories + "/kcal";
}

//RESET FUNCTION
function closeMessage(){  
  document.getElementById('result').innerHTML = "";
  document.getElementById('calories').innerHTML = "";
  document.getElementById('Imperial').style.display = 'block';
  document.getElementById('Metric').style.display = 'none';
}