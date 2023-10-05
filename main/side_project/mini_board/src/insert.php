<?php
	define("ROOT", $_SERVER["DOCUMENT_ROOT"]."/mini_board/src/"); // 웹서버 root 패스 생성
	define("FILE_HEADER", ROOT."header.php"); // 헤더 패스
	define("ERROR_MSG_PARAM", "%s: 필수 입력 사항입니다."); // 파라미터 에러 메세지
	require_once(ROOT."lib/lib_db.php"); // DB관련 라이브러리

	$conn = null; // DB Connection 변수
	$http_method = $_SERVER["REQUEST_METHOD"]; // Method 확인
	$arr_err_msg = []; // 에러 메세지 저장용
	$title = "";
	$content = "";

	if($http_method === "POST") {
		try {
			
			$title = isset($_POST["title"]) ? $_POST["title"] : ""; // title 셋팅
			$content = isset($_POST["content"]) ? $_POST["content"] : ""; // content 셋팅

			if($title === "") {
				$arr_err_msg[] = sprintf(ERROR_MSG_PARAM, "제목");
			}
			if($content === "") {
				$arr_err_msg[] = sprintf(ERROR_MSG_PARAM, "내용");
			}
			if(count($arr_err_msg) === 0) {
								
				if(!my_db_conn($conn)) {
					throw new Exception("DB Error : PDO Instance");
				}
				$conn->beginTransaction(); //트랜잭션 시작

				$arr_param = [
					"title" => $_POST["title"]
					,"content" => $_POST["content"]
				];
				
				if(!db_insert_boards($conn, $arr_param)){
					throw new Exception("DB Error : Insert Boards");
				}
				$conn->commit();
		
				// 리스트 페이지로 이동
					header("Location: list.php");
					exit;
				}
		} catch (Exception $e){
			
			if($conn !== null) {
				$conn ->rollback();
			}
			header("Location: list.php/?err_msg={$e->getMessage()}");
			exit;

		} finally {
			db_destroy_conn($conn);
		}
	}	
	
?>

<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="/mini_board/src/css/common.css">
	<title>작성 페이지</title>
</head>
<body>
	<?php
	require_once (FILE_HEADER);
	?>
	<br>
	<?php
		foreach($arr_err_msg as $val) {
	?>
			<p><?php echo $val ?></p>		
	<?php		
		} 
	?>
	<form action="/mini_board/src/insert.php" method="post">
		<label for="title"> 제목  </label><br>
		<input type="text" name="title" id="title" value="<?php echo $title ?>">
		<br>
		<br>
		<label for="content">내용 </label><br>
		
		<textarea name="content" id="content" cols="40" rows="10"><?php echo $content ?></textarea>
		<br>
		<button class="btn_set"type="submit" class ="btn_gray">작성</button>
		<a href="/mini_board/src/list.php" class ="btn_set btn_cancel"> 취소 </a>
		
	</form>
</body>
</html>