<?php

namespace model;

class BoardNameModel extends ParentsModel {
    public function getBoardNameList() {
        $sql = 
        " SELECT "
        ."  b_type "
        ."  b_name "
        ." FROM boardname "
        ." ORDER BY b_type "
        ;
    }
}

?>
