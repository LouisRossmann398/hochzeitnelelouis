<?php
$admin_password = 'nelelouisheiraten2026';
session_start();

// Login-Formular absenden
if (isset($_POST['password'])) {
    if ($_POST['password'] === $admin_password) {
        $_SESSION['admin_logged_in'] = true;
        header('Location: admin.php');
        exit;
    } else {
        $error = 'Falsches Passwort!';
    }
}

// Logout
if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: admin.php');
    exit;
}

// Wenn nicht eingeloggt, Login-Formular anzeigen
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    ?>
    <!DOCTYPE html>
    <html lang="de">
    <head>
        <meta charset="UTF-8">
        <title>Admin Login</title>
        <style>
            body { font-family: Arial, sans-serif; background: #f7f7f7; }
            .container { max-width: 400px; margin: 60px auto; background: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: center; }
            input { padding: 10px; border-radius: 5px; border: 1px solid #ccc; width: 80%; margin-bottom: 15px; }
            button { background: #b48b6c; color: #fff; border: none; padding: 12px; border-radius: 5px; font-size: 1em; cursor: pointer; }
            button:hover { background: #a07a5b; }
            .error { color: red; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Admin Login</h1>
            <?php if (isset($error)) { echo '<div class="error">'.$error.'</div>'; } ?>
            <form method="POST">
                <input type="password" name="password" placeholder="Passwort" required><br>
                <button type="submit">Login</button>
            </form>
        </div>
    </body>
    </html>
    <?php
    exit;
}

// Daten anzeigen
?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Admin Bereich – Antworten</title>
    <style>
        body { font-family: Arial, sans-serif; background: #f7f7f7; }
        .container { max-width: 700px; margin: 40px auto; background: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        h1 { text-align: center; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #ccc; padding: 10px; text-align: left; }
        th { background: #b48b6c; color: #fff; }
        tr:nth-child(even) { background: #f2f2f2; }
        .logout { float: right; }
        .logout a { color: #b48b6c; text-decoration: none; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Antworten zur Hochzeit</h1>
        <div class="logout"><a href="admin.php?logout=1">Logout</a></div>
        <table>
            <tr>
                <th>Datum</th>
                <th>Name</th>
                <th>Status</th>
                <th>Plus Eins</th>
                <th>Allergien</th>
                <th>Musikwunsch</th>
            </tr>
            <?php
            if (file_exists('responses.csv')) {
                $rows = array_reverse(file('responses.csv'));
                foreach ($rows as $row) {
                    $data = str_getcsv($row);
                    echo '<tr>';
                    echo '<td>' . htmlspecialchars($data[0] ?? '') . '</td>';
                    echo '<td>' . htmlspecialchars($data[1] ?? '') . '</td>';
                    echo '<td>' . htmlspecialchars($data[2] ?? '') . '</td>';
                    echo '<td>' . htmlspecialchars($data[3] ?? '') . '</td>';
                    echo '<td>' . htmlspecialchars($data[4] ?? '') . '</td>';
                    echo '<td>' . htmlspecialchars($data[5] ?? '') . '</td>';
                    echo '</tr>';
                }
            } else {
                echo '<tr><td colspan="6">Noch keine Antworten.</td></tr>';
            }
            ?>
        </table>
    </div>
</body>
</html> 