$(document).ready(function () {
  
  $('.nav-click').on('click', function(){
    $('.left-menu').toggleClass('show');
    $('.bg-menu').toggleClass('show');
    $(this).toggleClass('active')
  });
  
  $('.bg-menu').on('click', function(){
    $('.left-menu').removeClass('show');
    $(this).removeClass('show');
    $('.nav-click').toggleClass('active')
  });
  
 $('.a-dropdown').click(function(e){
    $('.a-dropdown').toggleClass('active');
    $(".box-dropdown").toggleClass('show');
  });

  $('.left-menu, .content-main').click(function(){
    $('.a-dropdown').removeClass('active');
    $(".box-dropdown").removeClass('show');
  });
  $('.filter-btn').on('click', function(){
    $('.box-filter').toggle();
  });
  $('.close-filter').on('click', function(){
    $('.box-filter').hide();
  });
  $('.icon-left-pannel').on('click', function(){
    $('.left-pannel').toggle();
    $(this).toggleClass('active')
  });
  $('.hidemodal').on('click', function(){
    $('.mymodal').modal('hide')
    $('.mymodalNew').modal('show')
  });
});