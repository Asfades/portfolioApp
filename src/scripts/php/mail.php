<?php

    $to  = 'energum_k@ukr.net';
    $subject = 'Обращение от клиента';

    $message = $_POST['name'] . '<br />' . $_POST['email'] . '<br />' . $_POST['message'];

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    // Дополнительные заголовки
    $headers .= 'To: Alexandr <energum_k@ukr.net>' . "\r\n";
    $headers .= 'From: '  . $_POST['name'] . '<' . $_POST['email'] . '>' . "\r\n";

    mail($to, $subject, $message, $headers);

?>