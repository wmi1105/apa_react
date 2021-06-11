import $ from 'jquery';
import * as common from './common_pub.js';
/* 디자인셀럭트 start */
////////////만약 select를 동적으로 변경,추가 하는 기능과 같이 사용하는경우 동적으로 변경,추가 하는 함수를 실행하고 나서 reMakeSelect(); 함수를 실행해야지만 동적으로 변경된 태그도 적용된다.
	
var theSelect=$("select");//모든 셀렉트를 선택
var speed=200; //가짜 셀렉트 클릭시 옵션 나오는 속도 1000=1초

export function makeSelect(){
	theSelect=$("select");//모든 셀렉트를 선택
	theSelect.addClass("blind"); //셀렉트를 회면 밖으로 보내버림
	/* 보여지는 셀렉트 태그들 추가 시작 */
	theSelect.wrap("<div class='select_box'>");
	theSelect.after("<dl class='select_deco'>");
	$(".select_deco").append("<dt><a href='#'></a></dt>");
	$(".select_deco").append("<dd></dd>");
	$(".select_deco dd").append("<ul></ul>");
	/* 보여지는 셀렉트 태그들 추가 끝 */
	
	var theFakeSelect=$(".select_deco");//가짜 셀렉트를 선택
	// var fakeDt=$(".select_deco dt");//가짜 셀렉트의 dt를 선택
	var fakeDd=$(".select_deco dd");//가짜 셀렉트의 dd를 선택

	for(var i=0; i<=theFakeSelect.length-1; i++){

		theFakeSelect.eq(i).children("dt").children("a").append(theFakeSelect.eq(i).prev("select").children("option:selected").text().replace(',', '')); //셀렉트 옵션의 첫 텍스트를 맨처음 보이게 함

		var theOption=theFakeSelect.eq(i).parent("div").children("select").children();//셀렉트 옵션값을 가져옴
		/* 셀렉트 옵션값을 가져와서 배열로 li안에 뿌림 시작*/
		for(var k=0; k<=theOption.length-1; k++){	
			theFakeSelect.eq(i).children("dd").children().append("<li><a href='#'>"+theFakeSelect.eq(i).parent("div").children("select").children().eq(k).text()+"</a></li>");
		}
		/* 셀렉트 옵션값을 가져와서 배열로 li안에 뿌림 끝*/
		theFakeSelect.eq(i).css("width",fakeDd.eq(i).width()+1); //가짜 셀렉트 dt의 높이를 dd안에 요소를 가져와서 맞춤
	}
}

export function reMakeSelect(){
	theSelect.unwrap();
	$(".select_deco").remove();
	makeSelect();
}

/* 보여지는 셀렉트 클릭이벤트 시작 */	
$(document).on(
	"click", ".select_deco dt", 
	function(){
		var thisNum=$(".select_deco dt").index(this);
		var thisDt=$(".select_deco dt").eq(thisNum);
		var thisDd=$(".select_deco dt").eq(thisNum).next("dd");
		$(".select_deco dd").fadeOut(speed);//다른 활성화된 가짜 셀렉트를 닫는다
		var myDropDown=thisDt.parent().prev("select");
		var dropLength = myDropDown.children().length;
		
		$("select").attr("size",dropLength);


		if(thisDd.is(":visible")){
			thisDd.fadeOut(speed);
			common.bodyYesScroll();
		}else{
			thisDd.fadeIn(speed);
			common.bodyNoScroll();
		}
		return false;
	}
);

$(document).on(
	"click", ".select_deco dd", 
	function(){
		$(".select_deco dd").fadeOut(speed)
		common.bodyYesScroll();
		return false;
	}
);
/* 보여지는 셀렉트 클릭이벤트 끝 */

/* 보여지는 셀렉트 안쪽요소 클릭이벤트 시작 */	
$(document).on(
	"click", ".select_deco>dd>ul>li", 
	function(){
		// var fakeUl=$(".select_deco>dd>ul");
		var fakeLi=$(".select_deco>dd>ul>li");
		var thisNum=fakeLi.index(this);
		var thisNum2=$(this).parent().children().index(this);
		var overLi=fakeLi.eq(thisNum);
		var thisDt=overLi.parent().parent().prev().children();
		var thisDd=overLi.parent().parent();

		$(this).addClass("on");
		$(this).siblings().removeClass("on");
		thisDd.fadeOut(speed);
		thisDt.text(overLi.text());
		thisDd.parent().prev("select").children().eq(thisNum2).prop("selected", "ture"); //가짜 셀렉트 선택시 진짜 셀렉터도 선택된다.
		thisDd.parent().prev("select").children().eq(thisNum2).trigger("change");//가짜 셀렉트 선택시 진짜 셀렉터도 선택된다.
		common.bodyYesScroll();
		return false;
	}
);
/* 보여지는 셀렉트 안쪽요소 클릭이벤트 끝 */

/* 디자인셀럭트 end */