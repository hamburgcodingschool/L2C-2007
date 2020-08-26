// CREATE 4 functions
// calculateAreaCircle
// calculateCircumference
// calculateAreaRectangle
// calculatePerimeterRectangle

function circleArea(radius) {
    // let result = Math.PI * radius * radius;
    // let result = Math.PI * Math.pow(radius, 2);
    let result = Math.PI * radius ** 2;
    
    return result;
}

function circumference(radius) {
    return Math.PI * radius * 2;
}

function rectArea(sideA, sideB) {
    return sideA * sideB;
}

function rectPerimeter(sideA, sideB) {
    // return sideA + sideA + sideB + sideB;
    return (sideA + sideB) * 2;
}

function squareArea(side) {
    // let result = rectArea(side, side);
    // return result;

    return rectArea(side, side);
}

function squarePerimeter(side) {
    return rectPerimeter(side, side);
}

let area = circleArea(2);
console.log(area);

console.log(squarePerimeter(4));