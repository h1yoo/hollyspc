$(document).ready(function(){
    //메인메뉴 mouseenter되면 하위메뉴 보이게 하기
	$(".mainMenu").mouseenter(function(){		
		$(".subMenu, #gray").stop().slideDown();
        $("#gray").stop().slideDown();
        $(this).children("span").removeClass("gray"); //span의 원래 글씨는 하얀색. 서브메뉴 호버되면 메인메뉴 span 회색으로 변하게 함. 
        $(this).parent().siblings().find("span").addClass("gray");
		$(".subMenu, #gray").mouseenter(function(){
			$(this).children("span").removeClass("gray");
			$(this).parent().siblings().find("span").addClass("gray");
		});
	});
    $(".subMenu, #gray").mouseenter(function(){
        $(".subMenu, #gray").stop().slideDown();
        $(".mainMenu>span").addClass("gray");
        $(".mainMenu").mouseenter(function(){
            $(this).children("span").removeClass("gray").parent().siblings().find("span").addClass("gray");
            $(this).children("span").addClass("white");
        });
    });
    //메뉴에 mouseleave되면 하위메뉴 사라지게 하기
    $('#container, #gray').mouseleave(function(){
		$(".subMenu, #gray").stop().slideUp();
        $(".mainMenu>span").removeClass("gray");
    });

	//이미지 페이드
	let sliding = setInterval(fading, 2800);
	let i = 4;//<a>보이는 index()부분
	let j = 0;//원형블릿순서
	function fading(){	
		//console.log(i); 2,1,0,2,1,0......
		//console.log(i==0);false,false,true.....
		i--;
		//j++;
		if(i==0){j=4;}
		if(i==1){j=3;}
		if(i==2){j=2;}
		if(i==3){j=1;}
		if(i==4){j=0;}
		if( i == -1 ){i=4; j=0;}		
		$("#slide a").eq(i).fadeIn("slow").siblings().fadeOut("slow");				
		//if(j == 3) { j=0; i=2; }
        $("#circle div").eq(j).addClass("red").siblings().removeClass("red");  //인덱스번호가 j인 #circle의 자손 div에 red라는 클래스를 추가하고 나머지 형제들에 있는 red 클래스 지움
	
	}
	//상단슬라이드 원형블릿 클릭시
	$("#circle div").click(function(){
		clearInterval(sliding);
		//alert('ddd');
		j =  $(this).index(); //[0,1,2]
		//j = $("#circle div.red").index(); 
		//alert(j);	
		if(j==0){i=4;}
		if(j==1){i=3;}		
		if(j==2){i=2;}	
		if(j==3){i=1;}	
		if(j==4){i=0;}
		$("#slide a").eq(i).fadeIn("slow").siblings().fadeOut("slow");
		$("#circle div").eq(j).addClass("red").siblings().removeClass("red");
		sliding = setInterval(fading, 2200);
	});
	

    /*//왼쪽방향으로 자동 슬라이드 (==>슬라이드 말고 페이드로 변경)
	const slide = setInterval(leftMove, 4000 );
	let j = 0;  //원형불릿 (= 0,1,2)
	function leftMove(){   //자동으로 계속 슬라이드 되게 하려면 setInterval(functionName, timeSet) 필수 !!
		j++;
		if(j == 3) { j=0; }
        $("#slide").stop().animate({left:"-3840px"}, "slow", function(){  
            $(this).append($(this).children().first());  // #slide의 첫번째자식을 맨뒤로 보낸다
            $(this).css("left", "-1920px"); 
			$("#circle div").eq(j).addClass("red").siblings().removeClass("red");  //인덱스번호가 j인 #circle의 자손 div에 red라는 클래스를 추가하고 나머지 형제들에 있는 red 클래스 지움
        });
	}*/


});  /////END
