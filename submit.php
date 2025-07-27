<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $status = trim($_POST['status'] ?? '');
    $plusone = trim($_POST['plusone'] ?? '');
    $allergies = trim($_POST['allergies'] ?? '');
    $music = trim($_POST['music'] ?? '');
    $date = date('Y-m-d H:i:s');

    if ($name === '' || ($status !== 'Ja' && $status !== 'Nein')) {
        echo '<p>Bitte fülle alle Pflichtfelder aus.</p>';
        exit;
    }

    $row = [$date, $name, $status, $plusone, $allergies, $music];
    $file = fopen('responses.csv', 'a');
    fputcsv($file, $row);
    fclose($file);
    ?>
    <!DOCTYPE html>
    <html lang="de">
    <head>
        <meta charset="UTF-8">
        <title>Danke für deine Antwort!</title>
        <style>
            body { font-family: Arial, sans-serif; background: #f7f7f7; }
            .container { max-width: 400px; margin: 60px auto; background: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: center; }
            a { color: #b48b6c; text-decoration: none; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Danke für deine Antwort!</h1>
            <p>Wir freuen uns auf dich (oder hoffen, dich beim nächsten Mal zu sehen)!</p>
            <a href="index.html">Zurück zur Startseite</a>
        </div>
    </body>
    </html>
    <?php
} else {
    header('Location: index.html');
    exit;
} 