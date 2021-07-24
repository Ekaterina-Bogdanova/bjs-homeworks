//Задача №1
function parseCount(number) {
    let parseNum = parseInt(number);
    if (isNaN(parseNum)) {
        const parseCountError = new Error('Невалидное значение');
        throw parseCountError;        
    } else {
        return parseNum;
    }
}

function validateCount(count) {
    try {
        return parseCount(count);
    } catch(parseCountError) {
        return parseCountError;
    }
}


//Задача №2
class Triangle {
    constructor(side1, side2, side3) {
        if ((side1 <= 0 || side2 <= 0 || side3 <= 0) || ((side1 + side2 < side3) || (side2 + side3 < side1) || (side1 + side3 < side2))) {
            const notTriangleError = new Error('Треугольник с такими сторонами не существует');
            throw notTriangleError;
        } else {
            this.side1 = side1;
            this.side2 = side2;
            this.side3 = side3;
        }
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    getArea() {
        let semiPerimeter = (this.getPerimeter()) / 2;
         let square = Math.sqrt(semiPerimeter * (semiPerimeter - this.side1) * (semiPerimeter - this.side2) * (semiPerimeter - this.side3));
         square = square.toFixed(3)
         return parseInt(square);
    }
}

function getTriangle(a,b,c) {
    try {
        return new Triangle(a, b, c);
    } catch (notTriangleError) {
        let objError = new Object();
        objError.getPerimeter = () => notTriangleError;
        objError.getArea = () => notTriangleError;
           
        return objError;            
    }
}


