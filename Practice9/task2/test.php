<!DOCTYPE html>
<html>
	<head>
		<title>Practice 9</title>
	</head>

	<body>	
		<?php
      session_start();
      echo $_SESSION['name'] . " " . $_SESSION['country'];
    ?>
	 </body>
</html>  
