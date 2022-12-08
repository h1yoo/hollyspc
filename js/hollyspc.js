$(document).ready(function(){
    //메인메뉴 mouseenter되면 하위메뉴 보이게 하기
	$(".mainMenu").mouseenter(function(){		
		$(".subMenu, #gray").stop().slideDown();
        $("#gray").stop().slideDown();
        $(this).children("span").removeClass("ho");
        $(this).children("span").addClass("white");
        $(this).parent().siblings().find("span").addClass("ho");
	});
    $(".subMenu, #gray").mouseenter(function(){
        $(".subMenu, #gray").stop().slideDown();
        $(".mainMenu>span").addClass("ho");
        $(".mainMenu").mouseenter(function(){
            $(this).children("span").removeClass("ho").parent().siblings().find("span").addClass("ho");
            $(this).children("span").addClass("white");
        });
    });
    //메뉴에 mouseleave되면 하위메뉴 사라지게 하기
    $('nav>div, #gray').mouseleave(function(){
		$(".subMenu, #gray").stop().slideUp();
        $(".mainMenu>span").removeClass("ho");
    });

    //왼쪽방향으로 자동 슬라이드
    setInterval(slide, 2000);
    function slide() {  //자동으로 계속 슬라이드 되게 하려면 setInterval(functionName, timeSet) 필수 !!
        $("#slide").stop().animate({left:"-3700px"}, "slow", function(){  //원래 left:-1630px; 인데 왼쪽으로 1630px 더 이동하니까 -1630px 더하면 -3260px
            $(this).append($(this).children().first());  // #slide의 첫번째자식을 맨뒤로 보낸다
            $(this).css("left", "-1850px"); //원래 설정으로
        });
    }


    
    //아래 원형 블릿 클릭하면 클릭한 위치에 맞는 사진 나타내기
    //swatch의 js 참고. (+하고 싶은 것 ==> )


    /*//오른쪽버튼 클릭하면, 왼쪽 방향으로 이동
    $("#right").click(function(){
        //alert("D");
        $("#slide").stop().animate({right:0}, "fast", function(){
            $(this).append($(this).children().first());
            $(this).css("right", "-160px");        
        });이건 내가 한 건데 작동되긴 하지만 맞는 코드인지는 모름
        $("#slide").stop().animate({left:"-320px"},"fast", function(){
            $(this).append($(this).children().first());
            $(this).css("left", "-160px");
            $("#slide img").removeClass("big");
            $("#slide img").eq(2).addClass("big");
        });
    });*/

});  /////END