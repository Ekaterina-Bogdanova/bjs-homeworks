'use strict'
//Задача 1
function calculateTotalMortgage(percent, contribution, amount, date) {
    
    let argumentsFunc = [percent, contribution, amount];

    for (let i = 0;  i < argumentsFunc.length; i++) {
        argumentsFunc[i] = parseInt(argumentsFunc[i]);
        if (isNaN(argumentsFunc[i]) || typeof(argumentsFunc[i]) !== 'number') {
            return console.log('Параметр ' + Number(i + 1) + ' содержит неправильное значение: ' + argumentsFunc[i]);
        }        
    }

    percent = argumentsFunc[0] / 100;
    contribution = argumentsFunc[1];
    amount = argumentsFunc[2];

    if (percent <= 0 || percent > 1) {
        return console.log('Введён невалидный процент');            
    } else if (contribution < 0 || contribution >= amount) {
        return console.log('Введён невалидный первоначальный взнос'); 
    } else if (amount <= 0) {
        return console.log('Введёна невалидная общая стоимость'); 
    } else if (date <= new Date()) {
        return console.log('Введёна невалидная дата'); 
    }

    let bodyCredit = amount - contribution;
    let currentDate = new Date();
    let months = (date.getFullYear() - currentDate.getFullYear()) * 12 + (date.getMonth() - currentDate.getMonth());
    let percentMounth = percent / 12;
    let everyMounth = bodyCredit * (percentMounth  + percentMounth / (((1+percentMounth)**months)-1));
    let totalAmount = (months * everyMounth).toFixed(2);
    // console.log('Общая сумма платежа: ' + totalAmount)
    return totalAmount;
}

//Задача 2
function getGreeting(name) {
    if (!name) {
        name = 'Аноним';
        console.log('Я аноним');
    }
    let greeting = `Привет, мир! Меня зовут ${name}.`;
    console.log(greeting);
    return greeting;
}