document.addEventListener('DOMContentLoaded', function(){

  function forEach(array, func) {
    for(let i = 0; i < array.length; i++) {
      func(array[i]);
    }
  }

  window.addEventListener('scroll', function(e){
    var topMenu = document.querySelector('.main-header');

    if(window.scrollY > 120) {
      topMenu.classList.add('main-header--active');
      document.querySelector('.first-slider').style.marginTop = 80 + 'px';
    } else {
      topMenu.classList.remove('main-header--active');
      document.querySelector('.first-slider').style.marginTop = "";
    }
  });



  // Аккардионы

  var accordeonItems = document.querySelectorAll('.why-items .item');

  forEach(accordeonItems, (item) => {
    item.addEventListener('click', function(){
      forEach(accordeonItems, (item) => {
        item.classList.remove("item--active");
      });
      item.classList.toggle('item--active');
    });
  })



  // Скролл в меню до блока

  var menuItems = document.querySelectorAll('.main-header-menu .item-link');

  forEach(menuItems, (link) => {
    $(link).on('click', function(e) {

      e.preventDefault();

      $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  	  }).stop(true);
  });


  // Табы

  var tabs = document.querySelectorAll('.composition-tabs .tabs .tab');

  forEach(tabs, (item) => {
    item.addEventListener('click', function(){
      forEach(tabs, (item) => {
        item.classList.remove('tab--active');
      })

      this.classList.add('tab--active');
    });
  });

})
