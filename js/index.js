

// モーダルが複数ある場合
$(function () {
  $('.modal_trigger .modal_btn').on('click', function() {
    var btnIndex = $(this).index();
    $('.modal_area1 .modal_box').eq(btnIndex).fadeIn();
  });
  $('.modal_ui .modal_btn').on('click', function() {
    var btnIndex = $(this).index();
    $('.modal_area2 .modal_box').eq(btnIndex).fadeIn();
  });
  $('.modal_close , .modal_bg').click(function(){
    $('.modal_box').fadeOut();
  });
});
