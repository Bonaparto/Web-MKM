<!DOCTYPE html>
<html>
	<head>
		<title>Practice 8</title>
	</head>

	<body>	
    <form action="index.php" method="post">
      <input type="text" name="name" />
      <input type="password" name="password" />
      <input type="submit" value="click" name="submit" />
    </form>
    <?php
      session_start();
      $isCorrect = False;
      
      function login() {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "Authorization";
        $conn = new mysqli($servername, $username, $password, $database);

        $sql = "SELECT * FROM Users";
        $result = $conn->query($sql);
        
        if ($result->num_rows > 0) {
          while($row = $result->fetch_assoc()) {
            if ($row['name'] == $_POST['name'] && $row['password'] == $_POST['password']) {
              $isCorrect = True;
              $_SESSION['isLoggedIn'] = True;
              break;
            }
          }
          if (!$isCorrect) $_SESSION['isLoggedIn'] = false;
        } else {
          echo "0 results";
        }
      }
      
      if (isset($_POST['submit']) && $_POST['submit'] != '') {
        login();
      }

      if ($_SESSION['isLoggedIn']) {
        echo "<h1>This is menu:)</h1>";
        echo '<button type="button" onclick="">Logout</button>';
      } else {
        echo "<h1>Incorrect data</h1>";
      }

      mysqli_close($conn);
    ?>  
  </body>
</html>  
