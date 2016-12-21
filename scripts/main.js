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

bal.style = 'margin:calc(58%) auto auto calc(20%);animation: figureAnimate 10s infinite linear;transform-origin: center;transform-style:preserve-3d;';
indoorUnitMain.style = 'margin:calc(92%) auto auto calc(15%);box-shadow: 0 10px 40px 5px rgba(0, 52, 89, 1);transform:translateZ(-16em) rotateX(41deg) rotateY(60deg);background: rgba(0, 44, 28, 0.71);opacity: 0.5;padding: 5px;border-radius:15px;border: 1px solid black;';

balLeft.style = 'position:absolute;width:8em;height:8em;background:red;opacity:0.7;transform: translateY(-4em) rotateX(90deg);perspective: 2em;';
balRight.style = 'position:absolute;width:8em;height:8em;background:blue;opacity:0.7;transform: translate(0,0) rotateX(-90deg);perspective: 2em;';
balMain.style = 'position:absolute;width:8em;height:8em;background:silver;opacity:0.7;transform: translateY(4em);perspective: 2em;';
balBackMain.style = 'position:absolute;width:8em;height:8em;background:yellowgreen;opacity:0.7;transform: translateY(-4em);perspective: 2em;';
balTop.style = 'position:absolute;width:8em;height:8em;background:orange;opacity:0.7;transform: translateY(-4em) rotateX(90deg);';
balBottom.style = 'position:absolute;width:8em;height:8em;background:green;opacity:0.7;transform: translateY(-4em) rotateX(-90deg);';

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