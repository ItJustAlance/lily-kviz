<?php
header("Access-Control-Allow-Origin: *");

$user = $_POST['user'];

$inputJSON = file_get_contents('php://input');

$input = json_decode($inputJSON, TRUE);
if (!isset($input)) { die('Не все поля заполнены!'); }

foreach ($input['body'] as $row) {
    $result .= $row['answerTitle'].": ".$row['answerCheck'] ."<br>";
}

$resultQuiz = $input;
$text = "<b>Ответы на опрос:</b> <br><br>";
$text .= $result. "<br>";
$text .= "<b>Пользователь указал следующие данные:</b> <br>";
$text .= "Телефон: " .$input['userPhone']. "<br>";
$text .= "Почта: " .$input['userEmail']. "<br>";

echo $text;


 
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

// if (mail('alex@lilysamer.com, r399055750@gmail.com', 'Ответы опроса', $text, $headers))
if (mail('r399055750@gmail.com', 'Ответы опроса', $text, $headers))
{ die('Ваша заявка успешно принята! \n Мы с Вами свяжемся в ближайшее время'); }
else
{ die('Произошла ошибка при отправке заявки!'); }

