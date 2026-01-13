$(function () {
    $('.header-top__burger').on('click', function(){
          $('.side').addClass('on');
      });

      $('.side-box__close').on('click', function(){
          $('.side').removeClass('on');
      });


       // Модалка запись
      $('.btn-click').on('click', function(){
          $('.modal--zapis').addClass('show-modal');
           $('.modal--zapis').removeClass('hide-modal');
      });

      $('.modal__close--zapis').on('click', function(){
          $('.modal--zapis').addClass('hide-modal');
          $('.modal--zapis').removeClass('show-modal');
      });


       // Вопросы и ответы
       $('.questions-accardion__btn').on('click', function(){
        $(this).next().slideToggle(500);
        $(this).toggleClass('open');
     });
})

window.addEventListener('DOMContentLoaded', () => {


     const headerShadow = document.querySelector('.header-top');
     window.addEventListener('scroll', () => {

        if(window.scrollY > 10){
            headerShadow.classList.add('box-shadow');
        }else{
            headerShadow.classList.remove('box-shadow');
        }
        
    })


    const btn = document.querySelector('.btnUp');

        btn.addEventListener('click', ()=>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth' 

            });
        });
        function up() {


            
        window.addEventListener('scroll', () => {
            if(window.scrollY > 690){
            btn.classList.add('btnUp-visible');
            }else{
            btn.classList.remove('btnUp-visible');
            }
        })
        }
        up();


          // Маска для Инпута
            var element = document.getElementById('input-mask');
            var element1 = document.getElementById('input-mask1');
            
            var maskOptions = {
                mask: '+{7}(000)000-00-00'
            };

            if(element){
                var mask = IMask(element, maskOptions);
            }
            if(element1){
                var mask1 = IMask(element1, maskOptions);
            }
           



})