'use strict';
var indoorUnitMain = document.createElement('div'),
    bal = document.createElement('div'),
    balLeft = document.createElement('div'),
    balRight = document.createElement('div'),
    balMain = document.createElement('div'),
    balBackMain = document.createElement('div'),
    balTop = document.createElement('div'),
    balBottom = document.createElement('div'),
    spanSecond = document.createElement('span'),
    spanMinute = document.createElement('span'),
    spanHours = document.createElement('span'),
    mainBlock = $('.home');

bal.style = 'flex-flow: wrap row;margin:calc(58%) auto auto calc(80%);box-shadow: 0 10px 40px 5px rgba(0, 52, 89, 1);transform:translateZ(-6em) rotateX(-8deg) rotateY(65deg);background: rgba(0, 44, 28, 0.71);opacity: 0.5;padding: 5px;border-radius:15px;border: 1px solid black;';
indoorUnitMain.style = 'margin:calc(58%) auto auto calc(20%);box-shadow: 0 10px 40px 5px rgba(0, 52, 89, 1);transform:translateZ(-6em) rotateX(-8deg) rotateY(65deg);background: rgba(0, 44, 28, 0.71);opacity: 0.5;padding: 5px;border-radius:15px;border: 1px solid black;';

spanHours.style = 'color:red;border-radius:15px;padding:0 10px;flex-grow:1;font-size:2em;box-shadow:0 0 10px 0 green;';
spanMinute.style = 'color:red;border-radius:15px;padding:0 10px;flex-grow:1;font-size:2em;box-shadow:0 0 10px 0 green;';
spanSecond.style = 'color:red;border-radius:15px;padding:0 10px;flex-grow:1;font-size:2em;box-shadow:0 0 10px 0 green;';

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
    }, 985)
}, 1000);

mainBlock.append(indoorUnitMain,bal);
bal.append(balLeft, balRight, balMain, balBackMain, balTop, balBottom);
indoorUnitMain.append(spanHours, spanMinute, spanSecond);