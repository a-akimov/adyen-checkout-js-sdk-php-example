<?php
/**
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 *
 * Adyen Checkout Example (https://www.adyen.com/)
 *
 * Copyright (c) 2017 Adyen BV (https://www.adyen.com/)
 *
 * Author: Adyen
 */
include ('config/timezone.php');
?>

<!DOCTYPE html>
<html class="html">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="robots" content="noindex"/>
    <title>Example PHP checkout</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://checkoutshopper-test.adyen.com/checkoutshopper/assets/js/sdk/checkoutSDK.1.0.min.js"></script>
    <link rel="stylesheet" href="assets/css/main.css">
</head>
<body class="body">
<div class="content">
    <div class="explanation">
        <h3>To run this web checkout example, edit the following variables in the <b>config/authentication.ini</b> file:</h3>
        <p>
            <b>merchantAccount</b>= "YOUR MERCHANT ACCOUNT", more information in our <a href="https://docs.adyen.com/support/getting-started/step-1-create-a-test-account">Getting started guide</a>.<br/>
            <b>checkoutAPIkey</b>= "YOUR CHECKOUT API KEY".
        </p>
    </div>

    <div class="checkout-container">
        <div class="checkout">

        </div>
    </div>
</div>
<script src = "assets/js/setupCall.js" ></script >
</body>
</html>