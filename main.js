$(function(){

  
        $('.slideshow').each(function() {
          // スライド（画像）の数を取得
          var $slides = $(this).find('img'),
              slideNum = $slides.length,
              idx = 0; // 何番目か
        
          // idx番目目の画像をフェードイン
          $(".slideshow img").eq(idx).fadeIn();
        })
    
      
});