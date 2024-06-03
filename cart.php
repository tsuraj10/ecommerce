<?php
session_start();

// Retrieve the cart from the session
$cart = isset($_SESSION['cart']) ? $_SESSION['cart'] : array();

?>

<!DOCTYPE html>
<html>
<head>
    <title>Cart</title>
    <style>
        .cart-item {
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <h1>Cart</h1>
    
    <?php if (empty($cart)) { ?>
        <p>Your cart is empty.</p>
    <?php } else { ?>
        <?php foreach ($cart as $product) { ?>
            <div class="cart-item">
                <h3><?php echo $product['name']; ?></h3>
                <p><?php echo $product['description']; ?></p>
            </div>
        <?php } ?>
    <?php } ?>
    
    <a href="index.php">Continue Shopping</a>
</body>
</html>
