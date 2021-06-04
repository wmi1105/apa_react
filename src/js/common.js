import $ from 'jquery';
import {setNormalPop, bodyNoScroll, bodyYesScroll} from './common_pub';

//이메일 입력값 체크
export function emailValueCheck(value){
    var test = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/.test(value);
    return test;
}

//비밀번호 입력값 체크(영문, 숫자, 특수문자 조합 8 ~ 16 )
export function passwordValueCheck(value){
    var test = /^^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(value);
    return test;
}

//전화번호 입력값 체크
export function phoneValueCheck(value){
    var test = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value);
    return test;
}

//모달 열기
export function modalShow(targetId){
	var targetShow=$("#"+targetId+"");
	targetShow.stop().fadeIn("500");
	$(".lay_pop_blind").stop().fadeIn("500");
	setNormalPop();
	bodyNoScroll();
	// return target;
}

//모달 닫기
export function modalHide(id){
	var thisPop = $("#"+id+"");
	thisPop.stop().fadeOut("500");
	if($(".popup:visible").length > 1){}
    else $(".lay_pop_blind").stop().fadeOut("500");
	bodyYesScroll();
	return false;
}