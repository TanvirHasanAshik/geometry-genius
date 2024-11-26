function geometryCalculations(geometry, geometryArea) {
    const area = geometryInputData(geometry);
    document.getElementById(geometryArea).innerText = area;
}


function geometryInputData(geometryType) {
    if (geometryType === 'triangle') {
        const areaInputValue = calculate('triangle-base', 'triangle-height');
        const totalCalculateArea = 0.5 * areaInputValue;
        return totalCalculateArea;
    }
    if (geometryType === 'rectangle') {
        const areaInputValue = calculate('rectangle-width', 'rectangle-height');
        return areaInputValue;
    }
    if (geometryType === 'parallelogram') {
        const areaInputValue = calculate('parallelogram-base', 'parallelogram-height');
        return areaInputValue;
    }
    if (geometryType === 'rhombus') {
        const areaInputValue = calculate('rhombus-diagonal1', 'rhombus-diagonal2');
        const totalCalculateArea = 0.5 * areaInputValue;
        return totalCalculateArea;
    }
    if (geometryType === 'pentagon') {
        const areaInputValue = calculate('pentagon', 'pentagon-apothem');
        const totalCalculateArea = 0.5 * areaInputValue;
        return totalCalculateArea;
    }
    if (geometryType === 'ellipse') {
        const areaInputValue = calculate('ellipse-a', 'ellipse-b');
        const totalCalculateArea = 3.14 * areaInputValue;
        return totalCalculateArea;
    }

}

function calculate(inputId1, inputId2) {
    const inputValue1 = document.getElementById(inputId1).value;
    const parseInputValue1 = parseFloat(inputValue1);
    const inputValue2 = document.getElementById(inputId2).value;
    const parseInputValue2 = parseFloat(inputValue2);
    const result = parseInputValue1 * parseInputValue2;

    document.getElementById(inputId1).value = "";
    document.getElementById(inputId2).value = "";

    return result;
}