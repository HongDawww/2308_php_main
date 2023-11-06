<?php

namespace controller;

use model\BoardModel;

class BoardController extends ParentsController {
	protected $arrBoardInfo;
	protected $titleBoardName;

	// 게시판 리스트 페이지
	protected function listGet() {
		// 파라미터 셋팅
		$b_type = isset($_GET["b_type"]) ? $_GET["b_type"] : "0";

		$arrBoardInfo = [
			"b_type" => $b_type
		];

		// 페이지 제목 셋팅
		foreach($this->arrBoardNameInfo as $item) {
			if($item["b_type"] === $b_type) {
				$this->titleBoardName = $item["b_name"];
				break;
			} 
		}

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