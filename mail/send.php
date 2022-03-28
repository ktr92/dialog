	<?php 
		
	$error = array();
	// полученные данные
	$result = array(
		'name' => $_POST['name'],
		'phone' => $_POST['phone'],
	);
	foreach($result as $fieldName => $oneField){
		if($oneField == '' || !isset($oneField)){
			$error[$fieldName] = 'Поле обязательно для заполнения';
		}
	}	
	if(empty($error)){
		// если нет ошибок сообщаем об успехе
		echo json_encode(array('result' => 'success'));
		
	$to  = "leads.velvetmedia@gmail.com";
				
	$subject = "Geely Диалог-Авто - Новая заявка"; 

	$message = ' <p>Geely Диалог-Авто - Новая заявка</p> </br> 				
				<p>Имя: <b>'.$_POST['name'].'</b></p>  </br> 
				<p>Телефон: '.$_POST['phone'].'</br></p>';

	$headers = 'Content-type: text/html; charset=utf-8' . "\r\n" .
		'From: info@velvetmedia.ru' . "\r\n" .
		'Reply-To: info@velvetmedia.ru' . "\r\n" .
		'X-Mailer: PHP/' . phpversion();

	mail($to, $subject, $message, $headers); 
		
	}else{
		// если есть ошибки то отправляем
		echo json_encode(array('result' => 'error', 'text_error' => $error));
	}
	
?>
