<!DOCTYPE html>
<html>
	<head>
		<title>Practice 9</title>
	</head>

  <body>	
		<?php
      session_start();
    ?>

    <form action="index.php" method="post">
      <input type="email" name="email" value="<?php echo $_SESSION['email']; ?>" />
      <input type="name" name="name" value="<?php echo $_SESSION['name']; ?>" />
      <input type="password" name="password" value="<?php echo $_SESSION['password']; ?>" />
    </form>
    
	 </body>
</html>  
