<?php
$conn=mysqli_connect("localhost","root"," ");
if(isset($_POST['login_btn'])){
    $username=$_POST['username'];
    $password=$_POST['password'];
    $sql = "SELECT *FROM websitelogin.logindetails WHERE username= '$username' ";
    $result = mysqli_query($conn,$sql);
    while($row = mysqli_fetch_assoc($result)){
        $resultPassword = $row['password'];
        if($password == $resultPassword){
            header("Location:logout.html"); 
        }else{
            echo "<script>
            alert('Login Unsuccessful');
            </script>";
        } 
    }
}
/*// Database connection settings
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "websitelogin";

// Get the product details from a form or any other source
$productName = $_POST['product_name'];
$productPrice = $_POST['product_price'];
$productDescription = $_POST['product_description'];

// Image upload settings
$targetDirectory = "uploads/";
$targetFile = $targetDirectory . basename($_FILES["product_image"]["name"]);
$imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

// Check if the form was submitted with a valid image
if (isset($_POST["submit"])) {
    $check = getimagesize($_FILES["product_image"]["tmp_name"]);
    if ($check !== false) {
        // Connect to the database
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check the connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Prepare the SQL statement to insert the product
        $sql = "INSERT INTO products (name, price, description, image) VALUES (?, ?, ?, ?)";

        // Prepare a statement
        $stmt = $conn->prepare($sql);

        // Bind the parameters to the statement
        $stmt->bind_param("ssss", $productName, $productPrice, $productDescription, $targetFile);

        // Execute the statement
        if ($stmt->execute()) {
            // Move the uploaded image file to the target directory
            move_uploaded_file($_FILES["product_image"]["tmp_name"], $targetFile);
            
            echo "Product added successfully.";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }

        // Close the statement and the connection
        $stmt->close();
        $conn->close();
    } else {
        echo "Invalid image file.";
    }
}*/
?>
