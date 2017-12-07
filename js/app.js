document.addEventListener('DOMContentLoaded', function(){

    // **************************************************************
    // ******** Submenu -->
    // ************************************************************** 

    // var btnsMenu = document.querySelectorAll('.main-nav-menu > li > a');
    var btnsMenu = document.querySelectorAll('.main-nav-menu > li');
    var btnMenu01 = btnsMenu[0];
    
    
    
    var submenu01 = document.querySelector('.main-nav-menu-sub');
    
    btnMenu01.addEventListener('mouseover', function(e){
        e.preventDefault();
        submenu01.classList.remove('sub-hidden');

    })

    btnMenu01.addEventListener('mouseout', function(e){
        e.preventDefault();
        submenu01.classList.add('sub-hidden');

    })
        
}) 

// **************************************************************
// ******** Slider -->
// ************************************************************** 


var btnsSlider = document.querySelectorAll('.main-slider-nav-btn');
var slide01 = document.querySelector('#slide1');
var slide02 = document.querySelector('#slide2');

btnsSlider[1].addEventListener('click', function (e) {
    slide01.classList.add('slider-hidden');
    slide02.classList.remove('slider-hidden');

    
})

btnsSlider[0].addEventListener('click', function (e) {
    slide01.classList.remove('slider-hidden');
    slide02.classList.add('slider-hidden');

    
})

