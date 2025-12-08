<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    // send email to you
    $to = "mayapkeren@gmail.com";          // <-- put your real email
    $subject = "New Newsletter Subscriber";
    $message = "Someone subscribed with this email: $email";
    $headers = "From: no-reply@yourdomain.com";

    // send the email
    mail($to, $subject, $message, $headers);

    // optional: show a message to the user
    echo "Thanks for signing up for my newsletter <3";
}
?>
