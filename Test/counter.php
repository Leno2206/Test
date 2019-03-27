<?php
$db = "db.txt";
$handle = fopen($db, 'r+');
$data=fread($handle, 512);

$count=$data+1;
print $count;
fseek($handle,0);
fwrite($handle, $count);
fclose($handle);
?>
