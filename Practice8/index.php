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
              break;
            }
          }
        } else {
          echo "0 results";
        }
        if ($isCorrect) {
          echo "<h1>You logged in</h1>";
        } else {
          echo "<h1>Incorrect data</h1>";
        }
      }
      
      if (isset($_POST['submit']) && $_POST['submit'] != '') {
        login();
      }


      mysqli_close($conn);
    ?>  
  </body>
</html>  
