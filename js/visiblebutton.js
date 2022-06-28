document.querySelector('.btn-all-add').onclick = allrealese;

let all = document.querySelector('.all-panel-visible');
let sliderShow = document.querySelector('.slider-visible');
let btnAll = document.querySelector('.btn-all-add');




function allrealese() {
    all.style.display = 'block';
    sliderShow.style.display = 'none';
    btnAll.style.display = 'none';
};


