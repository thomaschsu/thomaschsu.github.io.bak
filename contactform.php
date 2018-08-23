<?php

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $textarea1 = $_POST['textarea1'];

    $mailTo = "thomaschsu@outlook.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$name.".\n\n".$textarea1;

    mail($mailTo, $txt, $headers);
    header("Location: index.php?mailsend");
}