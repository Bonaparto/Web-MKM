<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>Buy Your Way to a Better Education!</title>
		<link href="http://www.cs.washington.edu/education/courses/cse190m/09sp/labs/4-buyagrade/buyagrade.css" type="text/css" rel="stylesheet" />
	</head>

	<body>	
		<?php
			$name = $_POST["name"];
			$section = $_POST["section"];
			$card = $_POST["cardNumber"];
			$cardType = $_POST["card"];
			$cardLen = strlen($card);

			$isNumbersValid = False;
			$sum = 0;
			for ($i = 0; $i < strlen($card); $i++) {
				$nextNum = (int)$card[$i];
				if ($i % 2 == 0) {
					$doubledNextNum = $nextNum * 2;
					$sum += (floor($doubledNextNum / 10) + $doubledNextNum % 10);
				} else $sum += $nextNum;
			}

			if ($sum % 10 == 0) $isNumbersValid = True;
 
			$isCardValid = ($cardLen == 16 && 
			($cardType == "MasterCard" && str_starts_with($card, "5")) || 
			($cardType == "Visa" && str_starts_with($card, "4")) && 
			preg_match('/(\d{4}-?){3}\d{4}/', $card) == 1) && $isNumbersValid;

			if (isset($name) && isset($section) && isset($card) && !empty($name) && !empty($section) && !empty($card) && $isCardValid) {
				echo "<h1>Thanks, sucker!</h1>";

				echo "<p>Your information has been recorded.</p>";
			
				echo "<dl>
					<dt>Name</dt>
					<dd>" . $name . "</dd>

					<dt>Section</dt>
					<dd>" . $section . "</dd>

					<dt>Credit Card</dt>
					<dd>" . $card . "</dd>
					</dl>
			
				<p>Here are all the suckers who have submitted here:</p>";
			 
				$file = 'suckers.txt';
				$current = json_encode($_POST);
				file_put_contents($file, $current, FILE_APPEND); 
				$data = file_get_contents("suckers.txt");
				echo $data; 
			} elseif (!$isCardValid) {
				echo "<p>You provided invalid card number.</p>";
				echo '<a href="buyagrade.html">Try again.</a>';
			} else {
				echo "<h1>Sorry</h1>";
				echo '<a href="buyagrade.html">Try again.</a>';
			}
		 ?>
	 </body>
</html>  
