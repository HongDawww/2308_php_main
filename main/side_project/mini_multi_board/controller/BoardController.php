<?php

namespace controller;

use model\BoardModel;

class BoardController extends ParentsController {
	protected $arrBoardInfo; 

	// 게시판 리스트 페이지
	protected function listGet() {
		// 파라미터 셋팅
		$b_type = isset($_GET["b_type"]) ? $_GET["b_type"] : "0";

		$arrBoardInfo = [
			"b_type" => $b_type
		];

		// 모델 인스턴스
		$boardModel = new BoardModel();

		// board 리스트 획득
		$this->arrBoardInfo = $boardModel->getBoardList($arrBoardInfo); 
	
		
		// // 데이터 가공처리 
		// $this->arrBoardInfo["b_content"] = mb_substr($this->arrBoardInfo["b_content"], 0 , 7)."...";
		// $this->arrBoardInfo["b_img"] = isset($this->arrBoardInfo["b_img"]) ? _PATH_USERIMG.$this->arrBoardInfo["b_img"] : "";

		// 사용 모델 파기
		$boardModel->destroy();

		return "view/list.php";
	}
}