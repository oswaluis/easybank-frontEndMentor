const btnHamburger = document.getElementById('btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
    
    if(header.classList.contains('open')){//cierro menu
        header.classList.remove('open')
        body.classList.remove('no-scroll')
        fadeElements.forEach(function(element){
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })
        
        
    }else{//abre menu
        header.classList.add('open')
        body.classList.add('no-scroll')
        fadeElements.forEach(function(element){
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        })
      
    }
    
})

$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });