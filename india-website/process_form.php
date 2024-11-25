<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Simulate form processing (e.g., saving to a database or sending an email)
    $success = true; // Set to true for demonstration purposes

    if ($success) {
        $response = "<div class='form-response success'>Thank you, $name! Your message has been successfully sent.</div>";
    } else {
        $response = "<div class='form-response error'>Sorry, there was an issue submitting your form. Please try again later.</div>";
    }
} else {
    $response = "<div class='form-response error'>Invalid request method. Please use the form to submit your details.</div>";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submission</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php include 'includes/header.php'; ?>
    <main>
        <?= $response; ?>
    </main>
    <?php include 'includes/footer.php'; ?>
</body>
</html>
