import $ from 'jquery';
import * as selectJs from './design_select.js';
/* 바디스크롤 방지 start */
var oldScrollNum=$(document).scrollTop();
export function bodyNoScroll(){
	oldScrollNum=$(document).scrollTop();
	$("html,body").addClass("noScroll");
	$("html,body").css("top",-oldScrollNum);
}

export function bodyYesScroll(){
	$("html,body").removeClass("noScroll");
	$("html,body").css("top",0);
	$("html,body").scrollTop(oldScrollNum);
}
/* 바디스크롤 방지  end */

/* 화면 컨텐츠 높이 세팅 start */
export function setContents(){
	var windowH=$(window).height();
	var headerH=$("#header").innerHeight();
	var fooderH=$("#footer").innerHeight();
	
	windowH = (windowH) ? windowH : 0;
	headerH = (headerH) ? headerH : 0;
	fooderH = (fooderH) ? fooderH : 0;

	const size = {
		height : windowH-(headerH+fooderH),
		top : headerH+1
	}

	return size;

}
/* 화면 컨텐츠 높이 세팅 end */

/* 토글클래스 start */
$(document).on(
	"click", ".click_add_on", function(){

	var thisNum=$(".click_add_on").index(this);
	var thisAddOn=$(".click_add_on").eq(thisNum);

	thisAddOn.toggleClass("on");
	return false;
});
/* 토글클래스 end*/

/* 레이어 팝업 세팅 start */
export function setNormalPop(){
	var popNormal=$(".help_pop");
	if(popNormal.length > 0){
		for(var i=0; i<popNormal.length; i++){
			
			var theMarginHeight=popNormal.eq(i).height()/2;
			popNormal.eq(i).css("marginTop",-theMarginHeight);
		}
	}	
}
/* 레이어 팝업 세팅 end */

/* Calendar start*/
export function makeCal(){
	var pickerOpts={
	yearRange:'1930:2021',
	dateFormat: "yy-mm-dd",
	defaultDate:'1930-01-01',
	changeMonth:true,
	changeYear:true,
	dayNamesMin:["일","월","화","수","목","금","토"],
	monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
	monthNamesShort:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
	beforeShow: function() {
		$(".ui-datepicker").after("<p class='cal_modal'></p>");
		setTimeout(selectJs.reMakeSelect,1);
		},onClose: function () {
			$(".ui-datepicker + .cal_modal").fadeOut("500");
			$(".ui-datepicker + .cal_modal").remove();
		},onChangeMonthYear: function () {
			setTimeout(selectJs.reMakeSelect,1);
		}
	};

	if($(".j_date input").length > 0){
		$(".j_date  input").datepicker(pickerOpts);
	}
}
/* Calendar end*/

/* 팝업연결 start */
// $(document).on(
// 	"click", ".click_show_evt", function(){

// 	var target=$(this).attr("data-link-show");
// 	var targetShow=$("#"+target+"");
// 	targetShow.stop().fadeIn("500");
// 	$(".lay_pop_blind").stop().fadeIn("500");
// 	setNormalPop()
// 	bodyNoScroll();
// 	return false;
// });

// $(document).on(
// 	"click", ".pop_close, .pop_cancel, .pop_confirm", function(){
// 	var thisPop=$(this).parents(".popup");
// 	thisPop.stop().fadeOut("500");

// 	if($(".popup:visible").length > 1){

// 	}else{
// 		$(".lay_pop_blind").stop().fadeOut("500");
// 	}
// 	bodyYesScroll();
// 	return false;
// });

// $(document).on(
// 	"click", ".lay_pop_blind", function(){

// 	$(".lay_pop_blind, .popup").stop().fadeOut("500");

// 	bodyYesScroll();
// 	return false;
// });
/* 팝업연결 end */

/* 전체체크 start */
$(document).on(
	"change", ".agr_btn :checkbox", function(){
		
	if($(this).is(":checked")){
		$(this).closest(".agr_btn").find("button").attr("disabled",false);
	}else{
		$(this).closest(".agr_btn").find("button").attr("disabled",true);
	}	
})

$(document).on(
	"change", ".n_check_list.must :checkbox", function(){
	var thisCheck=$(".n_check_list.must :checkbox").not(".all").length;
	var thisCheckNum=$(".n_check_list.must :checked").not(".all").length;
	
	if($(this).hasClass("all")){
		if($(this).is(":checked")){
			$(".n_check_list.must :checkbox").prop("checked",true);
			$(".agr_btn").find("button").attr("disabled",false);
		}else{
			$(".n_check_list.must :checkbox").prop("checked",false);
			$(".agr_btn").find("button").attr("disabled",true);
		}
	}else{
		if(thisCheckNum==thisCheck){
			$(".n_check_list.must .all").prop("checked",true);
			$(".agr_btn").find("button").attr("disabled",false);
		}else{
			$(".n_check_list.must .all").prop("checked",false);
			$(".agr_btn").find("button").attr("disabled",true);
		}
	}
})
/* 전체체크 end */

/* 프로필 이미지 선택 start */
$(document).on(
	"click", "#profile_add .pe_list li a", function(){
	var thisImg=$(this).children("img");
	$(".add_big_btn a span").hide();
	$(".add_big_btn a img").remove();
	thisImg.clone().appendTo(".add_big_btn a");
	$("#profile_add .pop_close").click();
	return false;
});
/* 프로필 이미지 선택 end */

/* ai문진 글자영역 컨트롤 start */
$(document).on(
	"keydown keyup", ".check_ai.textarea textarea", function(){
	$(this).height(1).height( $(this).prop("scrollHeight")-28 );	
});

$(document).on(
	"focus", ".check_ai.textarea textarea", function(){
	$("#header").addClass("hideTop");
	$(".check_ai.textarea :radio,.check_ai.textarea :checkbox").prop("checked",false);
});

$(document).on(
	"blur", ".check_ai.textarea textarea", function(){
	$("#header").removeClass("hideTop");
});

$(document).on(
	"click", ".ai :reset", function(){
	$(".check_ai.textarea textarea").height(14);	
	$(".select_side .img img").hide();
	$(".select_side .img img").eq(0).show();
});
/* ai문진 글자영역 컨트롤 end */

/* ai문진 왼/오른쪽 컨트롤 start */
$(document).on(
	"change", ".select_side :radio", function(){
	var thisNum=$(this).parents("li").index();
	$(".select_side .img img").hide();
	$(".select_side .img img").eq(thisNum).show();
});
/* ai문진 왼/오른쪽 컨트롤 end */

/* ai문진 기간선택 start */
$(document).on(
	"change", ".select_four select", function(){
	var thisSelect=$(this).closest("li").index();
	var thisText=$(this).children("option:selected").text();

	if(thisText=="0"){
		$(".select_time li").eq(thisSelect).hide();
	}else{
		$(".select_time li").eq(thisSelect).find("span:first").text(thisText);
		$(".select_time li").eq(thisSelect).show();
	}
});
/* ai문진 기간선택 end */

/* 업슬라이드 start */
// export function setSliderUp(){
// 	var mySwiper = new Swiper(".up_slide .swiper-container", {
// 		effect:"coverflow",
// 		direction:"vertical",
// 		slidesPerView:5,
// 		speed:400,
// 		loop:false,
// 		centeredSlides:true,
// 		  coverflowEffect: {
// 			rotate: 0,
//             stretch: -37,
//             depth:300,
//             modifier: 2,
//             slideShadows : false
// 		  },
// 		updateOnWindowResize:true
// 	});
// }
/* 업슬라이드 end */

/* 셀렉트 선택시 특정영역 보이기 start */
$(document).on(//접기 버튼 클릭시
	"change", ".show_sel", function(){
	var thsSelect=$(this).children("option:selected");
	var thisAttr=$(this).attr("s_target");
	var thisLink=$("."+thisAttr+"");
	
	if(thsSelect.hasClass("none")){
		thisLink.removeClass("on");
	}else{
		thisLink.addClass("on");
	}
});
/* 셀렉트 선택시 특정영역 보이기 end */

/* 진짜탭 동작 start */
$(document).on(
	"click", ".tap_wrap .normal_tap li", function(){
	$(this).addClass("on").siblings().removeClass("on");

	if($(this).closest(".tap_wrap").hasClass("real_tap")){
		var thsIndex=$(this).index();
		$(this).closest(".real_tap").find(".tap_cont").css("display","none");
		$(this).closest(".real_tap").find(".tap_cont").eq(thsIndex).css("display","block");
	}else{

	}

	return false;
})
/* 진짜탭 동작 end */

/* 프로필 앞으로 보내기 start */
$(document).on(
	"click", ".pe_top li", function(){
	if($(this).hasClass("plus")){
	}else{
		$(this).prependTo(".pe_top");
	}
	return false;
})
/* 프로필 앞으로 보내기 end */

/* pin 키보드 start */
export function makePinPad(){
	var pinInput=$(".pin_pass :password");

	/* 랜덤값 만들기 start */
	var numbers = [];
	var pickNumbers = 10;

	for(var insertCur = 0; insertCur < pickNumbers ; insertCur++){
		numbers[insertCur] = Math.floor(Math.random() * 10) ;

		for(var searchCur = 0; searchCur < insertCur; searchCur ++){
			if(numbers[insertCur] === numbers[searchCur]){
				insertCur--; 
				break; 
			}
		}
	}
	/* 랜덤값 만들기 end */
	
	/* 랜덤값 버튼에 뿌리기 start */
	for(var i=0; i<=pickNumbers; i++){
		$(".pin_pass .key li").eq(i).children("button").text(numbers[i]);
	}
	/* 랜덤값 버튼에 뿌리기 end */

	$(document).on(
	"click", ".pin_pass button", function(){

		if($(this).parent().hasClass("del")){//지우기

			pinInput.val(pinInput.val().substr(0, pinInput.val().length -1)); 

		}else if($(this).parent().hasClass("submit")){//입력완료
			
		}else{//숫자입력
			var thisVal=$(this).text();
			if(pinInput.val().length<5){
				pinInput.val(pinInput.val()+thisVal);
			}else{
			}
		}

		$(".pin_pass .fake_key li").removeClass("on");

		for(var i=0; i<=pinInput.val().length-1; i++){
			$(".pin_pass .fake_key li").eq(i).addClass("on");
		}
	})
		
}
/* pin 키보드 end */

/* 제이쿼리ui 팝업창 시작 */
export function makeUiPopup(UiPopupId,UiPopupMsg,dialogOpts){
	$( "#"+UiPopupId+"" ).remove();//여러번 클릭시 여러개 생성 방지하기
	$("html").append("<div class='dig_box' id="+UiPopupId+"></div>"); //팝업창 생성하기
	$(".dig_box").append("<p>"+UiPopupMsg+"</p>"); //팝업창 생성하기
	$( "#"+UiPopupId+"" ).dialog(dialogOpts);//다이얼로그 호출함수
}
/* 팝업 실행 예시
makeUiPopup(
	"login_false",//(팝업창 ID를 입력)
	"일치하는 회원정보가 없습니다.<br />회원가입 하시겠습니까?",{//(메세지를 입력)
	modal:true,//(모달옵션 설정)
	buttons: [//(버튼 설정 2개까지)
		{text:"아니요",//버튼 이름
		click :function(){//버튼 클릭시 이벤트 설정
			$(this).dialog('close');//팝업창 닫기
		},class:"btn gray"},//버튼 클래스
		{text:"예",
		click :function(){
		},class:"btn"}
	],
	open: function () {//기본으로 첫번째 버튼으로 포커스 이동하는것을 막는다           
		jQuery(this).closest( ".ui-dialog" ).find(":button").blur();
	}
});
*/
/* 제이쿼리ui 팝업창 끝 */

export function onloadCall(){//화면 로드시 세팅 스크립트 실행
	// setContents();
	selectJs.makeSelect();
	makeCal();
	
	// if($(".up_slide").length > 0){
	// 	setSliderUp();
	// }
	if($(".pin_pass").length > 0){
		makePinPad();
	}	

	// if($(".index .mbanner").length > 0){
	// 	setIndex();
	// }	
};
window.onload = onloadCall; 

export function resizeCall(){//화면 리사이즈시 세팅 스크립트 실행
	setContents();
};
window.onresize = resizeCall;