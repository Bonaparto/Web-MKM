<!DOCTYPE html>
<html>
	<head>
		<title>Practice 9</title>
	</head>

	<body>	
    <form action="index.php" method="post">
      <input type="text" name="name" />
      <select name="country">
        <option value="Kazakhstan">Kazakhstan</option>
        <option value="USA">USA</option>
        <option value="Japan">Japan</option>
      </select>
      <button type="submit">
        Submit
      </button>
    </form>

    <a href="./test.php">Check data</a>

		<?php
      session_start();
      $_SESSION['name'] = $_POST['name'];
      $_SESSION['country'] = $_POST['country'];
    ?>
	 </body>
</html>  
