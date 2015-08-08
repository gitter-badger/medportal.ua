<?php
//обезательно!!!
header('Access-Control-Allow-Origin: *');

if (isset($_REQUEST['email'])) {$email=trim(htmlspecialchars(stripslashes(strip_tags($_REQUEST['email'])))); if ($email =='')  unset($email); }

//обработка email

$answer = array(
    'email' => $email
);

 print ($_GET["callback"])."(".json_encode($answer).");";

?>

