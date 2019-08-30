<?
$mail_to = "test@gmail.com";
$mail_from = "webmaster@example.com";
$mail_subject = "Форма замовлення палетів";

$name = strip_tags(trim($_POST['name']));
$email = strip_tags(trim($_POST['email']));
$phone = strip_tags(trim($_POST['phone']));
$type = strip_tags(trim($_POST['type']));
$size = strip_tags(trim($_POST['size']));
$from = strip_tags(trim($_POST['from']));
$to = strip_tags(trim($_POST['to']));
$text = strip_tags(trim($_POST['message']));
if($text=="") $text = "---";

$message = "<h3>Форма замовлення палетів, надіслана із сайту.</h3>"."<br>";
$message .= "<b>Ім'я:</b> ".$name."<br>";
$message .= "<b>Email:</b> ".$email."<br>";
$message .= "<b>Телефон:</b> ".$phone."<br>";
$message .= "<b>Вид палетів:</b> ".$type."<br>";
$message .= "<b>Розмір палетів:</b> ".$size."<br>";
$message .= "<b>Кількість палетів:</b> від ".$from." - до ".$to."<br>";
$message .= "<b>Особливі відмітки:</b> ".$text."<br>";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= "From: <".$mail_from.">" . "\r\n";

mail($mail_to,$mail_subject,$message,$headers);
?>