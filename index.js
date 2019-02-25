$(window).mousemove(function(evt){
    var x = evt.pageX ;
    var y = evt.pageY ; 
    console.log("x = " , x ,"+" ,"y = ", y) ;
    
  //   circle action coding
    $(".circle1").css("left",x-30,"px");
    $(".circle1").css("top",y-15,"px");
    $(".circle2").css("left",x-17,"px");
    $(".circle2").css("top",y+5,"px");
    $(".circle3").css("left",x+10,"px");
    $(".circle3").css("top",y+13,"px");
    
    if(x >= 1220 & x <= 1280 & (y>= 50 & y <= 150) ){
        $(".about").css("left",x-10,"px")
        $(".about").css("top",y-10,"px")
    }
     
  });

//   | (y>= 750 & y<=900) | (y>=1200 & y<=1400) | (y>=2200 & y <=2400) 