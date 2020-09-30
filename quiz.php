<?php
header("Access-Control-Allow-Origin: *");

$inputJSON = file_get_contents('php://input');

// $inputJSON = '{"body":[{"answerTitle":"Вопрос 1","answerCheck":"Неправильно, очень плохо."},{"answerTitle":"Вопрос 2","answerCheck":"Правильный ответ"}]}';
$input = json_decode($inputJSON, TRUE);
if (!isset($input)) { die('Не все поля заполнены!'); }

foreach ($input['body'] as $row) {
    $result .= $row['answerTitle'].": ".$row['answerCheck'] ."\r\n\r\n";
}

$resultQuiz = $input;
$text = "Ответы на опрос: \r\n\r\n";
$text .= $result;

/*
foreach ($resultQuiz as &$value) {
    $text .= $value. "\r\n";
}
*/
echo $text;


 
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/plain; charset=utf-8' . "\r\n";

if (mail('alex@lilysamer.com, r399055750@gmail.com', 'Ответы опроса', $text, $headers))
{ die('Ваша заявка успешно принята! \n Мы с Вами свяжемся в ближайшее время'); }
else
{ die('Произошла ошибка при отправке заявки!'); }

