<?php

namespace controller;

class ParentsController {
	protected $controllerChkUrl; // 헤더 표시 제어용 문자열
	protected $arrErrorMsg = []; // 화면에 표시할 에러메세지 리스트

	// 페이지 권한 (로그인 없이 접속 불가능한 url 리스트)
	private $arrNeedAuth = [
		"board/list"
	]; 

	public function __construct($action) {
		// 뷰관련 체크 접속 url 셋팅
		$this->controllerChkUrl = $_GET["url"];

		// session 시작
		if(!isset($_SESSION)) {
			session_start();
		}

		// user 로그인 및 권한 체크 
		$this->chkAuthorization();

		// controller 메소드 호출
		$resultAction = $this->$action();

		// view 호출
		$this->callView($resultAction);
		exit();
	}

	// user 권한 체크용 메소드
	private function chkAuthorization() {
		$url = $_GET["url"];

		// 접속 권한이 없는 페이지 접속 차단
		if( !isset($_SESSION["u_id"]) && in_array($url,$this->arrNeedAuth)) {
			header("Location: /user/login");
			exit();
		}
		
		// 로그인 상태에서 로그인 페이지 접속시 list로 이동 (board/list)
		if(isset($_SESSION["u_id"]) && $url === "user/login") {
			header("Location: /board/list");
			exit();
		}

	}

	// view 호출용 메소드
	private function callView($path) {
		// view.list.php
		// Location: /board/list
		if(strpos($path, "Location:") === 0) {
			header($path);
			exit();
		} else {
			require_once($path);
		}
		
	}
}