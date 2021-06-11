import $ from "jquery";
import { setNormalPop, bodyNoScroll, bodyYesScroll } from "./common_pub";

//이메일 입력값 체크
export function emailValueCheck(value) {
  // const regex=/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
  const regex =
    /^\s*[\w\-+_]+(\.[\w\-+_]+)*@[\w\-+_]+\.[\w\-+_]+(\.[\w\-+_]+)*\s*$/;
  const test = regex.test(value);
  return test;
}

//비밀번호 입력값 체크(영문, 숫자, 특수문자 조합 8 ~ 16 )
export function passwordValueCheck(value) {
  const regex = /^^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  const test = regex.test(value);
  return test;
}

//전화번호 입력값 체크
export function phoneValueCheck(value) {
  // const regex= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  const regex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  const test = regex.test(value);
  return test;
}

//모달 열기
export function modalShow(targetId) {
  const targetShow = $("#" + targetId + "");
  targetShow.stop().fadeIn("500");
  $(".lay_pop_blind").stop().fadeIn("500");
  setNormalPop();
  bodyNoScroll();
  // return target;
}

//모달 닫기
export function modalHide(id) {
  const thisPop = $(`#${id}`);
  thisPop.stop().fadeOut("500");
  if ($(".popup:visible").length > 1) {
  } else $(".lay_pop_blind").stop().fadeOut("500");
  bodyYesScroll();
  return false;
}

export function makePinPad() {
  /* 랜덤값 만들기 start */
  var numbers = [];
  var pickNumbers = 10;

  for (var insertCur = 0; insertCur < pickNumbers; insertCur++) {
    numbers[insertCur] = Math.floor(Math.random() * 10);

    for (var searchCur = 0; searchCur < insertCur; searchCur++) {
      if (numbers[insertCur] === numbers[searchCur]) {
        insertCur--;
        break;
      }
    }
  }

  return numbers;
}

export function clickPinPad() {
  var pinInput = $(".pin_pass :password");
  if ($(this).parent().hasClass("del")) {
    //지우기
    pinInput.val(pinInput.val().substr(0, pinInput.val().length - 1));
  } else if ($(this).parent().hasClass("submit")) {
    //입력완료
  } else {
    //숫자입력
    var thisVal = $(this).text();
    if (pinInput.val().length < 5) {
      pinInput.val(pinInput.val() + thisVal);
    } else {
    }
  }

  $(".pin_pass .fake_key li").removeClass("on");

  for (var i = 0; i <= pinInput.val().length - 1; i++) {
    $(".pin_pass .fake_key li").eq(i).addClass("on");
  }
}
