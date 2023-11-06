<?php

namespace model;

class BoardModel extends ParentsModel {
    public function getBoardList($arrBoardInfo) {
        
        $sql = 
        "  SELECT  "
        ."      id   "
        ."  ,u_pk "
        ."  ,b_title "
        ."  ,b_content "
        ."  ,b_img "
        ."  ,created_at "
        ."  ,updated_at "
        ." FROM board "
        ." WHERE "
        ."      b_type = :b_type "
        ." AND deleted_at IS NULL "
        ;

        $prepare = [
            ":b_type" => $arrBoardInfo["b_type"]
        ];

        try {
            $stmt = $this->conn->prepare($sql);
            $stmt->execute($prepare);
            $result =  $stmt->fetchAll();
            return $result;
        } catch (Exception $e) {
            echo "BoardModel->getBoardList Error :".$e->getMessage();
            exit();
        }
    }
}