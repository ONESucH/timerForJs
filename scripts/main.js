'use strict';
var indoorUnit = document.createElement('div'),
    spanSecond = document.createElement('span'),
    spanMinute = document.createElement('span'),
    spanHours = document.createElement('span'),
    mainBlock = $('.home');

indoorUnit.style = 'margin: auto; background: rgba(0, 44, 28, 0.71); opacity: 0.5;padding: 10px;border-radius:5px; border: 1px solid black;';

spanHours.style = 'color: red';
spanMinute.style = 'color: red';
spanSecond.style = 'color: red';

setInterval(function () {
    var timer = new Date(),
        hours = timer.getHours(),
        minute = timer.getMinutes(),
        second = timer.getSeconds();

    spanHours.append(hours + ' : ');
    spanMinute.append(minute + ' : ');
    spanSecond.append(second);

    setTimeout(function () {
        $('span').empty();
    }, 990)
}, 1000);

mainBlock.append(indoorUnit);
indoorUnit.append(spanHours, spanMinute, spanSecond);