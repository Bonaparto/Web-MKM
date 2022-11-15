<!DOCTYPE html>
<html>
	<head>
		<title>Practice 9</title>
	</head>

	<body>	
    <form action="index.php" method="post">
      <input type="email" name="email" />
      <input type="text" name="name" />
      <input type="password" name="password" />
      <button type="submit">
        Submit
      </button>
    </form>

    <a href="./test.php">Check data</a>

		<?php
      session_start();
      $_SESSION['name'] = $_POST['name'];
      $_SESSION['email'] = $_POST['email'];
      $_SESSION['password'] = $_POST['password'];
    ?>
	 </body>
</html>  
