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
	var fakeDt=$(".select_deco dt");//가짜 셀렉트의 dt를 선택
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
		var thisNum=$(".select_deco dd").index(this);
		var thisDt=$(".select_deco dd").eq(thisNum);
		var myDropDown=thisDt.parent().prev("select");
		var dropLength = myDropDown.children().length;
		
		$("select").attr("size",dropLength);
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
		var fakeUl=$(".select_deco>dd>ul");
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

////////////////////////////////웹접근성 코드들/////////////////////////////////

/* 진짜 셀렉트 포커스시 다음 가짜셀렉트로 강제 포커스 이동 시작*/
theSelect.focus(function(){
	var thisNum=theSelect.index(this);
	var thisSelect=theSelect.eq(thisNum);
	var nextFake=thisSelect.parent().next(".select_deco").children("dt").children("a");

	thisSelect.parent().blur();
	nextFake.mouseover();
})
/* 진짜 셀렉트 포커스시 다음 가짜셀렉트로 강제 포커스 이동 끝 */

/* 가짜 셀렉트 포커스이벤트 시작 */
$(".select_deco dt").children().focus(function(){
	var thisNum=$(".select_deco dt").children().index(this);
	var thisDt=$(".select_deco dt").children().eq(thisNum);

	$(".select_deco dt").blur();
	thisDt.mouseover();
})

$(".select_deco dt").children().blur(function(){
	var thisNum=$(".select_deco dt").children().index(this);
	var thisDt=$(".select_deco dt").children().eq(thisNum);
	
	thisDt.mouseleave();
})
/* 가짜 셀렉트 포커스이벤트 끝 */

/* 가짜 셀렉트 포커스상태에서 키보드 접근성 시작 */
$(".select_deco dt").children().keydown(function(e){
	var thisNum=$(".select_deco dt").children().index(this);
	var thisDt=$(".select_deco dt").children().eq(thisNum);

	if (e.keyCode == "9") {
		thisDt.parent().click();
	}

	if (e.keyCode == "40") {
		thisDt.parent().click();
		thisDt.parent().next().children().children().eq(0).children().focus();
		return false;
	}
	
})
/* 가짜 셀렉트 포커스상태에서 키보드 접근성 끝 */


/* 가짜 셀렉트 안쪽 리스트 포커스이벤트 시작 */
$(".select_deco>dd>ul>li").children().focus(function(){
	var thisNum=$(".select_deco>dd>ul>li").children().index(this);
	var thisLi=$(".select_deco>dd>ul>li").children().eq(thisNum);

	thisLi.mouseover();
})

$(".select_deco>dd>ul>li").children().blur(function(){
	var thisNum=$(".select_deco>dd>ul>li").children().index(this);
	var thisLi=$(".select_deco>dd>ul>li").children().eq(thisNum);

	thisLi.mouseleave();
})
/* 가짜 셀렉트 안쪽 리스트 포커스이벤트 끝 */

/* 가짜 셀렉트 안쪽 리스트 포커스시 키보드접근성 시작 */
$(".select_deco li:last-child a").keydown(function(e){
	var thisNum=$(".select_deco li:last-child a").index(this);
	var thisLi=$(".select_deco li:last-child a").eq(thisNum);

	if (e.keyCode == "9") {
	thisLi.parent().parent().parent().slideUp(speed);
	}

	if (e.keyCode == "40") {
	thisLi.parent().parent().parent().slideUp(speed);
	return false;
	}
	
})

$(".select_deco li a").keydown(function(e){
	var thisNum=$(".select_deco li a").index(this);
	var thisLi=$(".select_deco li a").eq(thisNum);

	if (e.keyCode == "40") {
	thisLi.parent().next().children().focus();
	return false;
	}

	if (e.keyCode == "38") {
	thisLi.parent().prev().children().focus();
	return false;
	}

})
/* 가짜 셀렉트 안쪽 리스트 포커스시 키보드접근성 끝 */
/* 디자인셀럭트 end */