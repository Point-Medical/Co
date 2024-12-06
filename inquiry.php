<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "hello@reallygreatsite.com";
    $subject = "Inquiry from $name";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your inquiry, $name. We will get back to you soon.";
    } else {
        echo "Sorry, something went wrong. Please try again.";
    }
}
?>
