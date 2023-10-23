<?php
// 19단 출력하기

// for($i=2; $i<=19; $i++) {
// 	echo "{$i}단\n";
$i = 19;
echo "{$i}단\n";
for($j=1; $j<=19; $j++) {
	$num = $i * $j;
	echo "{$i} x {$j} = {$num}\n ";

}
// }


$file = fopen("19.txt","a");

for($dan = 1; $dan<=19; $dan++) {
	// echo "{$dan}단\n";
	fputs($file, $dan . "단" . "\n");
	for($i = 1; $i <= 19; $i++) {
		$res = $dan * $i;
		// echo "{$dan} x {$i} = {$res}";
		fputs($file, $dan. " X " . $i. " = " . $res . "\n");
	}
}