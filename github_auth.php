<?php

// Initialize GitHub OAuth
$client_id = '<your-client-id>';
$client_secret = '<your-client-secret>';
$redirect_uri = '<your-redirect-uri>';

// Initialize a new session
session_start();

// Generate a random state
$_SESSION['state'] = bin2hex(random_bytes(16));

// Generate the GitHub OAuth URL
$url = 'https://github.com/login/oauth/authorize?' . http_build_query(array(
    'client_id' => $client_id,
    'redirect_uri' => $redirect_uri,
    'scope' => 'user:email',
    'state' => $_SESSION['state']
));

// Redirect the user to the GitHub OAuth page
header('Location: ' . $url);

// Handle the redirect from GitHub
if (isset($_GET['state']) && isset($_SESSION['state']) && $_GET['state'] === $_SESSION['state']) {
    // Get the code
    $code = $_GET['code'];

    // Exchange the code for a token
    $token = json_decode(file_get_contents('https://github.com/login/oauth/access_token?' . http_build_query(array(
        'client_id' => $client_id,
        'client_secret' => $client_secret,
        'code' => $code
    ))), true);

    // Get the user info
    $user_info = json_decode(file_get_contents('https://api.github.com/user?' . http_build_query(array(
        'access_token' => $token['access_token']
    ))), true);

    // Log the user in
    $_SESSION['user_info'] = $user_info;
}
