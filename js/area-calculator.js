function calculateTriangleArea(){
    //get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value ;
    const base = parseFloat(baseValueText); 

    //get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightvalueText = heightField.value ;
    const height = parseFloat(heightvalueText);

    //area

    const area = .5 * base * height;

    //shwo triangle area

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

} 

function calculateRectangleArea(){
    //get rectangle width
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);

    //get rectangle length

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);

    //area of rectangle

    const area = length * width;

    //show rectangle area
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;
}
function calculateParaArea(){
    const base = getInputValue('para-length');
    const height = getInputValue('para-width');
    const area = base * height;
    setElementInnerText('para-area', area);
}
function getInputValue(FieldId){

    const inputField = document.getElementById(FieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setElementInnerText(elementID, area){

    const element = document.getElementById(elementID);
    element.innerText = area;
}