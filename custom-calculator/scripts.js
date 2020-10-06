//console.log("TESTING");

const selectColor = document.querySelector('#selectColor')
const color = selectColor.options[selectColor.selectedIndex].value;

const selectBandNumber = document.querySelector('#bandNumber')
const number = selectBandNumber.options[selectBandNumber.selectedIndex].value;

const voltageElement = document.querySelector('#Voltage')
voltageElement.value = 1.0;
const voltage = voltageElement.value

const firstBand = document.querySelector('.firstBand')
const secondBand = document.querySelector('.secondBand')
const thirdBand = document.querySelector('.thirdBand')
const fourthBand = document.querySelector('.fourthBand')

const dislayResistance = document.querySelector('#displayResistance')
const displayTolerance = document.querySelector('#displayTolerance')
const displayCurrent = document.querySelector('#displayCurrent')

firstBand.style.backgroundColor = "black";
secondBand.style.backgroundColor = "black";
thirdBand.style.backgroundColor = "black";
fourthBand.style.backgroundColor ="gold";

const colorValues = {"black": 0,"brown": 1,"red": 2,"orange": 3,"yellow": 4,"green": 5,"blue": 6, "violet": 7,
 "gray": 8,"white": 9}
const toleranceValues = {"brown": 1, "red": 2, "gold": 5, "silver": 10}
//---------------Event Listeners-------------------------
selectColor.addEventListener("change",changeBandColor);
selectBandNumber.addEventListener("change",changeBandColor);
selectColor.addEventListener("change",getNumericalValues);
voltageElement.addEventListener("change",getNumericalValues);

changeBandColor();
getNumericalValues();

//---------------Functions-------------------------

function changeBandColor() {
    const color = selectColor.options[selectColor.selectedIndex].value;
    const number = parseInt(selectBandNumber.options[selectBandNumber.selectedIndex].value);

    console.log(color);
    console.log(number);
    if (number == 1 || number == 2 || number == 3 ){
            let colorStr = `<option value="Black">Black</option>
            <option value="Brown">Brown</option>
            <option value="Red">Red</option>
            <option value="Orange">Orange</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Violet">Violet</option>
            <option value="Gray">Gray</option>
            <option value="White">White</option>`

            selectColor.innerHTML = colorStr
            if (number == 1){
                firstBand.style.backgroundColor = color ;
            } else if (number == 2){
            secondBand.style.backgroundColor = color ;
            } else if (number == 3){
            thirdBand.style.backgroundColor = color ;
            }
    } else if (number == 4){
        let colorStr = `<option value="Brown">Brown</option>
        <option value="Red">Red</option>
        <option value="Gold">Gold</option>
        <option value="Silver">Silver</option>`
        selectColor.innerHTML = colorStr
        fourthBand.style.backgroundColor = color ;
    }
}

function getNumericalValues(){
    const voltage = voltageElement.value;
    let digitOne =   colorValues[firstBand.style.backgroundColor];
    let digitTwo =   colorValues[secondBand.style.backgroundColor];
    let multiplier = 10 ** colorValues[thirdBand.style.backgroundColor];
    let tolerance =   toleranceValues[fourthBand.style.backgroundColor]/100;
    console.log(digitOne,digitTwo,multiplier,tolerance);

    totalResistance = parseInt(String(digitOne) + String(digitTwo)) * multiplier
    console.log(totalResistance);

    let peakResistance = totalResistance + totalResistance*tolerance;
    let lowestResistance = totalResistance - totalResistance*tolerance;

    let current = voltage/totalResistance;
    console.log(current);
    updateOutputValues(totalResistance,peakResistance,lowestResistance,current)
    
}

function updateOutputValues(Resistance, High, Low, Current ){
    dislayResistance.innerHTML = `Resistance: ${Resistance}Ω`
    displayTolerance.innerHTML =  `Tolerance Range: ${Low}Ω - ${High}Ω`
    displayCurrent.innerHTML = `Current: ${Current} Amperes`
}

