<?php
// === Basic Settings ===
$subject = 'New Join Request';  // Subject of your email
$to = 'contact@designesia.com';        // Recipient's email address

// === Get Form Data Safely ===
$first_name = isset($_POST['first_name']) ? trim($_POST['first_name']) : '';
$last_name  = isset($_POST['last_name']) ? trim($_POST['last_name']) : '';
$email      = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone      = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$gender     = isset($_POST['gender']) ? trim($_POST['gender']) : '';
$birth_date = isset($_POST['birth_date']) ? trim($_POST['birth_date']) : '';
$plan       = isset($_POST['plan']) ? trim($_POST['plan']) : '';
$message    = isset($_POST['message']) ? trim($_POST['message']) : '';
$terms      = isset($_POST['terms']) ? 'Agreed' : 'Not Agreed';

// === Validate Required Fields ===
if (empty($first_name) || empty($last_name) || empty($email) || empty($phone) || empty($gender) || empty($birth_date) || empty($plan)) {
    echo 'failed';
    exit;
}

// === Email Content ===
$email_from = $first_name . ' ' . $last_name . ' <' . $email . '>';

$headers  = "MIME-Version: 1.1\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8\r\n";
$headers .= "From: " . $email_from . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";

$body  = "New Join Request Details:\n\n";
$body .= "Full Name: " . $first_name . " " . $last_name . "\n";
$body .= "Email: " . $email . "\n";
$body .= "Phone: " . $phone . "\n";
$body .= "Gender: " . $gender . "\n";
$body .= "Birth Date: " . $birth_date . "\n";
$body .= "Selected Plan: " . $plan . "\n";
$body .= "Message: " . $message . "\n";
$body .= "Terms Accepted: " . $terms . "\n";

// === Send Email ===
if (@mail($to, $subject, $body, $headers)) {
    echo 'sent';
} else {
    echo 'failed';
}
?>
