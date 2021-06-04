import $ from 'jquery';
import * as selectJs from './design_select.js';
import {hangulJs} from './hangul';
// import {keyJs} from './jquery.keyboard';

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

	// $("#container").css("height",windowH-(headerH+fooderH));
	// $("#container").css("top",headerH+1);
	
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

/* 키보드 start */
/* 
export function setKey(){

	var hanGulVal;
	var theCompHangul;
	var hanGulIndex;
	var hanGulArr=new Array;

	function makeHangul(){
		hanGulVal=$(".ui-keyboard-preview-wrapper input").val();
		hanGulArr=hangulJs.Hangul.disassemble(hanGulVal);
		theCompHangul=hangulJs.Hangul.assemble(hanGulArr);
		$(".ui-keyboard-preview-wrapper input").eq(hanGulIndex).val(theCompHangul);
	}

	function hideBlind(){
		var blind=$(".lay_pop_blind");
		var thePop=$(".popup :visible").length;

		if(thePop > 0){
			$(".lay_pop_blind").stop().fadeIn("500");
		}else{
			$(".lay_pop_blind").stop().fadeOut("500");
		}
	}

	$(".hangul").on('keyboardChange', function(e, keyboard, el){
		hanGulIndex=$(this).index(this);
		
		makeHangul();
		}).keyboard({
			accepted: function(e, keyboard, el) {
				 hideBlind();
			},
			canceled: function(e, keyboard, el){
				 hideBlind();
			},
			visible: function(e, keyboard, el) {
				$(".lay_pop_blind").stop().fadeIn("500");
			},
			layout: 'custom',
			usePreview: true,
			autoAccept: true,
			display : {
				'accept': '등록',
				'cancel': '취소',
				'bksp': '삭제',
				'shift': '쌍자음'
			},
			customLayout: {
				"normal" : [
				"ㅂ ㅈ ㄷ ㄱ ㅅ ㅕ ㅕ ㅑ ㅐ ㅔ",
				" ㅁ ㄴ ㅇ ㄹ ㅎ ㅗ ㅓ ㅏ ㅣ ",
				"{shift} ㅋ ㅌ ㅊ ㅍ ㅠ ㅜ ㅡ {bksp}",
				"{cancel} {accept}",
			],
			"shift" : [
				"ㅃ ㅉ ㄸ ㄲ ㅆ ㅛ ㅕ ㅑ ㅒ ㅖ",
				"ㅁ ㄴ ㅇ ㄹ ㅎ ㅗ ㅓ ㅏ ㅣ",
				"{shift} ㅋ ㅌ ㅊ ㅍ ㅠ ㅜ ㅡ {bksp}",
				"{cancel} {accept}",
			]
		}
	}).addTyping();

	$(".number_key").on('keyboardChange', function(e, keyboard, el){
		
		}).keyboard({
			accepted: function(e, keyboard, el) {
				hideBlind();
			},
			canceled: function(e, keyboard, el){
				hideBlind();
			},
			visible: function(e, keyboard, el) {
				$(".ui-keyboard").addClass('numkey hide010');
				$(".lay_pop_blind").stop().fadeIn("500");
			},
			layout: 'custom',
			usePreview: true,
			autoAccept: true,
			display : {
				'accept': '등록',
				'cancel': '취소',
				'bksp': '삭제',
				'shift': '쌍자음'
			},
			customLayout: {
				"normal" : [
				"1 2 3",
				"4 5 6",
				"7 8 9",
				"0 {bksp}",
				"{cancel} {accept}"
			]
		},
		maxLength : 4,
	}).addTyping();

	$(".number_key2").on('keyboardChange', function(e, keyboard, el){
		
		}).keyboard({
			accepted: function(e, keyboard, el) {
				hideBlind();
			},
			canceled: function(e, keyboard, el){
				hideBlind();
			},
			visible: function(e, keyboard, el) {
				$(".ui-keyboard").addClass('numkey hide010');
				$(".lay_pop_blind").stop().fadeIn("500");
			},
			validate: function(keyboard, value, isClosing){
				var thisIndex=$(".number_key2").index(keyboard.$el);

				if (value.length==4) {// if the value is invalid, alert the user
					$(".number_key2").eq(thisIndex).closest("li").removeClass("alert");
					return true;
				}else{
					$(".number_key2").eq(thisIndex).closest("li").addClass("alert");
					return true;
				}
				
			},
			layout: 'custom',
			usePreview: true,
			autoAccept: true,
			display : {
				'accept': '등록',
				'cancel': '취소',
				'bksp': '삭제',
				'shift': '쌍자음'
			},
			customLayout: {
				"normal" : [
				"1 2 3",
				"4 5 6",
				"7 8 9",
				"0 {bksp}",
				"{cancel} {accept}"
			]
		},
		maxLength : 4,
	}).addTyping();

	$(".phone_key").on('keyboardChange', function(e, keyboard, el){
		}).keyboard({
			accepted: function(e, keyboard, el) {
				hideBlind();
			},
			canceled: function(e, keyboard, el){
				hideBlind();
			},
			visible: function(e, keyboard, el) {
				$(".ui-keyboard").addClass('numkey');
				$(".lay_pop_blind").stop().fadeIn("500");
			},
			validate: function(keyboard, value, isClosing){
				var test = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value);// test value for an phone address
				var thisIndex=$(".phone_key").index(keyboard.$el);

				if (!test && isClosing) {// if the value is invalid, alert the user
					$(".phone_key").eq(thisIndex).closest("li").addClass("alert");
					return true;
				}else{
					$(".phone_key").eq(thisIndex).closest("li").removeClass("alert");
					return true;
				}
				
				return test;// return valid test (true or false)
			},
			layout: 'custom',
			usePreview: true,
			autoAccept: true,
			display : {
				'accept': '등록',
				'cancel': '취소',
				'bksp': '삭제',
				'shift': '쌍자음'
			},
			customLayout: {
				"normal" : [
				"1 2 3",
				"4 5 6",
				"7 8 9",
				"010 0 {bksp}",
				"{cancel} {accept}"
			]
		},
		maxLength : 11,
	}).addTyping();

	$(".mail_key").on('keyboardChange', function(e, keyboard, el){
		}).keyboard({
			accepted: function(e, keyboard, el) {
				hideBlind();
			},
			canceled: function(e, keyboard, el){
				hideBlind();
			},
			visible: function(e, keyboard, el) {
				$(".lay_pop_blind").stop().fadeIn("500");
			},
			validate: function(keyboard, value, isClosing){
				var test = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/.test(value);// test value for an email address
				var thisIndex=$(".mail_key").index(keyboard.$el);

				if (!test && isClosing) {// if the value is invalid, alert the user
					$(".mail_key").eq(thisIndex).closest("li").addClass("alert");
					return true;
				}else{
					$(".mail_key").eq(thisIndex).closest("li").removeClass("alert");
					return true;
				}
				
				return test;// return valid test (true or false)
			},
			layout: 'custom',
			usePreview: true,
			autoAccept: true,
			display : {
				'accept': '등록',
				'cancel': '취소',
				'bksp': '삭제',
				'shift': '쌍자음'
			},
			customLayout: {
				"normal" : [
				"1 2 3 4 5 6 7 8 9 0",
				"q w e r t y u i o p",
				"a s d f g h j k l @",
				"z x c v b n m .com {bksp}",
				"{cancel} {accept}"
			]
		},
		maxLength : 30,
	}).addTyping();

	$(".pass_key").on('keyboardChange', function(e, keyboard, el){
		}).keyboard({
		accepted: function(e, keyboard, el) {
			hideBlind();
		},
		canceled: function(e, keyboard, el){
           hideBlind();
        },
		visible: function(e, keyboard, el) {
			$(".lay_pop_blind").stop().fadeIn("500");
		},
		validate: function(keyboard, value, isClosing){
				var test = /^^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(value);// test value for an pass
				var thisIndex=$(".pass_key").index(keyboard.$el);

				if (!test && isClosing) {// if the value is invalid, alert the user
					$(".pass_key").eq(thisIndex).closest("li").addClass("alert");
					return true;
				}else{
					$(".pass_key").eq(thisIndex).closest("li").removeClass("alert");
					return true;
				}
				
				return test;// return valid test (true or false)
			},
			layout: 'custom',
			usePreview: true,
			autoAccept: true,
			display : {
				'accept': '등록',
				'cancel': '취소',
				'bksp': '삭제',
				'shift': '쌍자음',
				'alt': '특수' 
			},
			customLayout: {
				"normal" : [
					"1 2 3 4 5 6 7 8 9 0",
					"q w e r t y u i o p",
					"a s d f g h j k l ",
					"{alt} z x c v b n m {bksp}",
					"{cancel} {accept}"
				],
				"alt" : [
					"! @ # $ % ^ & * ( )",
					" ; : , < . > / ? \  - ",
					"{alt} _ = + [ ] { } {bksp}",
					"{cancel} {accept}"
				]
		},
		maxLength : 16,
	}).addTyping();

	$(".pass_key_a").on('keyboardChange', function(e, keyboard, el){
		}).keyboard({
		accepted: function(e, keyboard, el) {
			hideBlind();
		},
		canceled: function(e, keyboard, el){
            hideBlind();
        },
		visible: function(e, keyboard, el) {
			$(".lay_pop_blind").stop().fadeIn("500");
		},
		validate: function(keyboard, value, isClosing){
			var passVal=$(".pass_prev").val();		
			var thisIndex=$(".pass_key_a").index(keyboard.$el);

				if (isClosing) {// if the value is invalid, alert the user

					if(value==passVal){
						$(".pass_key_a").eq(thisIndex).closest("li").removeClass("alert");
					}else{
						$(".pass_key_a").eq(thisIndex).closest("li").addClass("alert");
					}
					return true;
				}
			},
			layout: 'custom',
			usePreview: true,
			autoAccept: true,
			display : {
				'accept': '등록',
				'cancel': '취소',
				'bksp': '삭제',
				'shift': '쌍자음',
				'alt': '특수' 
			},
			customLayout: {
				"normal" : [
					"1 2 3 4 5 6 7 8 9 0",
					"q w e r t y u i o p",
					"a s d f g h j k l ",
					"{alt} z x c v b n m {bksp}",
					"{cancel} {accept}"
				],
				"alt" : [
					"! @ # $ % ^ & * ( )",
					" ; : , < . > / ? \  - ",
					"{alt} _ = + [ ] { } {bksp}",
					"{cancel} {accept}"
				]
		},
		maxLength : 16,
	}).addTyping();
} */
/* 키보드 end */

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

/* 프로필정보 폼체크 start */
$(document).on(
	"change", ".pro_b_form :text", function(){
	
	if($(this).val().length > 0){
		$(this).addClass("pass");
	}else{
		$(this).removeClass("pass");
	}

	var thisInput=$(this).parents("form").find(":text").length;
	var thisInputPass=$(this).parents("form").find(".pass").length;
	
	if(thisInput==thisInputPass){
		$(".pro_b_form .last_btn button").removeClass("disabled");
		$(".pro_b_form .last_btn button").attr("data-link-show","profile_save");
	}else{
		$(".pro_b_form .last_btn button").addClass("disabled");
		$(".pro_b_form .last_btn button").attr("data-link-show","profile_more");
	}
	
})

export function gotoEmpty(){
	var thisText=$(".pro_b_form :text").not(".pass").eq(0);
	var thisImg=$(".add_big_btn a img").length;

	if(thisImg == 0){
		$("html,body").scrollTop($(".add_big_btn").offset().top-$("#header").innerHeight());
		$(".add_big_btn a").click();
	}else{
		$("html,body").scrollTop(thisText.offset().top-$("#header").innerHeight());
		thisText.focus();
	}	
}

$(document).on(
	"click", "#profile_more .btns a", function(){

		setTimeout(gotoEmpty,300);
		return false;
})

$(document).on(
	"click", ".pro_b_form .last_btn button", function(){
		var thisText=$(".pro_b_form :text").not(".pass").eq(0).closest("td").prev("th").find("p").text();
		var thisImg=$(".add_big_btn a img").length;

		if(thisImg == 0){
			thisText="사진";
			$("#profile_more .pop_cont p span").text("을 등록해 주세요.");
		}else{
			if(thisText=="이름"){
				$("#profile_more .pop_cont p span").text("을 입력해 주세요.");
			}else if(thisText=="생년월일"){
				$("#profile_more .pop_cont p span").text("을 입력해 주세요.");
			}else{
				$("#profile_more .pop_cont p span").text("를 입력해 주세요.");
			}
		}
		
		$("#profile_more .pop_cont p span").prepend("<em>"+thisText+"</em>");
})
/* 프로필정보 폼체크 end */

/* 일반 폼체크 start */
/* $(document).on(
	"change", ".normal_form input", function(){
	var thisInput=$(".normal_form input");
	
	for(var i=0; i<thisInput.length; i++){
		var thisVal=thisInput.eq(i).val();
		
		if(thisVal===""){
			thisInput.eq(i).addClass("empty");
		}else{
			thisInput.eq(i).removeClass("empty");
		}
	}
	var emptyInput=$(".normal_form .empty").length;
	var alertInput=$(".normal_form .inputs > .alert").length;

	if(emptyInput+alertInput===0){
		$(".last_btn button").attr("disabled",false);
	}else{
		$(".last_btn button").attr("disabled",true);
	}
}) */

$(document).on(
	"change", ".agr_btn :checkbox", function(){
		
	if($(this).is(":checked")){
		$(this).closest(".agr_btn").find("button").attr("disabled",false);
	}else{
		$(this).closest(".agr_btn").find("button").attr("disabled",true);
	}	
})

$(document).on(
	"change", ".agreed_all .must :checkbox", function(){
	var thisCheck=$(".agreed_all .must :checkbox").not(".all").length;
	var thisCheckNum=$(".agreed_all .must :checked").not(".all").length;
	
	if($(this).hasClass("all")){
		if($(this).is(":checked")){
			$(".agreed_all .must :checkbox").prop("checked",true);
			$(".agr_btn").find("button").attr("disabled",false);
		}else{
			$(".agreed_all .must :checkbox").prop("checked",false);
			$(".agr_btn").find("button").attr("disabled",true);
		}
	}else{
		if(thisCheckNum===thisCheck){
			$(".agreed_all .must .all").prop("checked",true);
			$(".agr_btn").find("button").attr("disabled",false);
		}else{
			$(".agreed_all .must .all").prop("checked",false);
			$(".agr_btn").find("button").attr("disabled",true);
		}
	}
})
/* 일반 폼체크 end */

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
	// setKey();

	if($(".pin_pass").length > 0){
		makePinPad();
	}	

	if($(".index .mbanner").length > 0){
		// setIndex();
	}	
};
window.onload = onloadCall; 

export function resizeCall(){//화면 리사이즈시 세팅 스크립트 실행
	setContents();
};
window.onresize = resizeCall;