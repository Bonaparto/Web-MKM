<!DOCTYPE html>
<html>
	<head>
		<title>Practice 9</title>
	</head>

	<body>	
		<?php
      session_start();
      
      if ($_SESSION['count'] == 0) {
        echo "You haven't reloaded page yet";
      } else {
        echo "You have reloaded page " . $_SESSION['count'] . " time(s)";
      }

      $_SESSION['count']++;
    ?>
	 </body>
</html>  
