var sliderMain = document.querySelector('.slider-main');
let item = sliderMain.getElementsByClassName('item');

function next(){
    sliderMain.append(item[0]);
}

function prev(){
    sliderMain.prepend(item[item.length-1]);
}

setInterval(
    next, 1000)