function show(){
    document.querySelector(".email").classList.remove("d-none")
}
function not(){
    document.querySelector(".email").classList.add("d-none")
}

$("#2").mouseenter(function(){
    document.querySelector("#services").classList.remove("d-none")        
});
$("#services").mouseleave(function(){
    document.querySelector("#services").classList.add("d-none")    
});

$("#3").mouseenter(function(){
    document.querySelector("#services").classList.add("d-none")
});
$("#1").mouseenter(function(){
    document.querySelector("#services").classList.add("d-none")
});


// Active Class
function add(id){
    let active = document.getElementsByClassName("active")
    active[0].classList.remove("active");
    document.getElementById(id).classList.add("active")
}


// Scroll İşlemleri
jQuery(document).ready(function() {
  
    var btn = $('.up');   
 
    $(window).scroll(function() {
      if ($(window).scrollTop() > 100) {
        btn.removeClass("d-none");
      } else {
        btn.addClass("d-none");
      }
    });    

    $(window).scroll(function() {
      if ($(window).scrollTop() > 10) {
        document.querySelector("#services").classList.add("d-none")
      }
    });
 
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
  });

  






