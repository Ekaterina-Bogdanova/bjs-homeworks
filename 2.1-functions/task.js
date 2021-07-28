'use strict';

// Задача №1
function getSolutions( a, b, c ) {
    let discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        return { D: discriminant, roots: [] };
    } else if (discriminant === 0) {
        let  root1 = -b / (2 * a);
        return { D: discriminant, roots: [ root1 ] };
    } else {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return { D: discriminant, roots: [ root1, root2 ] };
    };
}

function showSolutionsMessage( a, b, c ) {
    let result = getSolutions( a, b, c );
    console.log('Вычисляем корни квадратного уравнения ' + a + 'x² + ' + b + 'x + ' + c);
    console.log('Значение дискриминанта: ' + result.D);

    if (result.D < 0) {
        console.log('Уравнение не имеет вещественных корней');
        return;
    } else if (result.D === 0) {
        console.log('Уравнение имеет один корень X₁ = ' + result.roots);
        return;
    } else {
        console.log('Уравнение имеет два корня. X₁ = ' + result.roots[0] + ', X₂ = ' + result.roots[1]);
        return;
    };
}

showSolutionsMessage( 1, 2, 3);
showSolutionsMessage( 7, 20, -3);
showSolutionsMessage( 2, 4, 2);

// Задача №2
function getAverageScore(data) {
    let result = new Object();

    function getAverageMark(marks) {
        let mark = 0;      
        if (marks.length === 0) {
            return 0;
        } else {
            for (let i = 0; i < marks.length; i++) {
                mark += marks[i];                
            }
            mark /= marks.length;
            return mark;
        }     
    }

    let averageScore = 0;
    for (let property in data) {
        result[property] = getAverageMark(data[property]);
        averageScore += getAverageMark(data[property]);
    }
    result.avrege = averageScore / Object.keys(data).length;
    return result;
};

const progress = {
    algebra : [4, 5, 5, 4],
    geometry : [2, 5],
    russian : [3, 3, 4, 5],
    physics : [5, 5],
    music : [ 2, 2, 5],
    english : [4, 4, 3, 3],
    poetry : [5, 3, 4],
    chemistry : [2],
    french : [4, 4] 
};
console.log(getAverageScore(progress));

