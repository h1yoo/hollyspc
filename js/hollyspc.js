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
	const slide = setInterval(leftMove, 4000 );
	let j = 0;  //원형불릿 (= 0,1,2)
	function leftMove(){   //자동으로 계속 슬라이드 되게 하려면 setInterval(functionName, timeSet) 필수 !!
		j++;
		if(j == 3) { j=0; }
        $("#slide").stop().animate({left:"-3700px"}, "slow", function(){  
            $(this).append($(this).children().first());  // #slide의 첫번째자식을 맨뒤로 보낸다
            $(this).css("left", "-1850px"); 
			$("#circle div").eq(j).addClass("red").siblings().removeClass("red");  //인덱스번호가 j인 #circle의 자손 div에 red라는 클래스를 추가하고 나머지 형제들에 있는 red 클래스 지움
        });
	}


    
    //아래 원형 블릿 클릭하면 클릭한 위치에 맞는 사진 나타내기
    //swatch의 js 참고. (+하고 싶은 것 ==> )


});  /////END
