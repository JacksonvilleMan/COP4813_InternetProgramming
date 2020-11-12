<?php

$EMAIL_ID = 462573803; // 9-digit integer value (i.e., 123456789)

require_once '/home/common/php/dbInterface.php'; // Add database functionality
require_once '/home/common/php/mail.php'; // Add email functionality
require_once '/home/common/php/p4Functions.php'; // Add Project 4 base functions

processPageRequest(); // Call the processPageRequest() function

// DO NOT REMOVE OR MODIFY THE CODE OR PLACE YOUR CODE ABOVE THIS LINE

function authenticateUser($username, $password) 
{
	$validateCheck = validateUser($username, $password);

	if($validateCheck == NULL)
	{
		return false;
	}

	session_start();

	$_SESSION["userId"] = $validateCheck["ID"];
	$_SESSION["displayName"] = $validateCheck["DisplayName"];
	$_SESSION["emailAddress"] = $validateCheck["Email"];
	
	/*
	echo "{$_SESSION["userId"]}<br>";
    echo "{$_SESSION["displayName"]}<br>";
    echo "{$_SESSION["emailAddress"]}<br>";

	foreach($validateCheck as $value => $value2)
	{
		echo "$value => $value2<br>";
	}
	*/

	return true;
}

function displayLoginForm($message = "")
{
	require_once './templates/logon_form.html';
	echo $message;
}

function processPageRequest()
{
	// DO NOT REMOVE OR MODIFY THE CODE OR PLACE YOUR CODE BELOW THIS LINE
	if(session_status() == PHP_SESSION_ACTIVE)
	{
		session_destroy();
	}
	// DO NOT REMOVE OR MODIFY THE CODE OR PLACE YOUR CODE ABOVE THIS LINE	

	if($_SERVER["REQUEST_METHOD"] == "POST")
	{
		if(isset($_POST['submit']))
		{
			$username = $_POST["username"];
			$password = $_POST["password"];
			if(authenticateUser($username, $password))
			{
				header("Location: index.php");
				die;
			}
			else
			{
				displayLoginForm("Incorrect Username and/or Password");
			}
		}
	}
	else
	{
		displayLoginForm();
	}
}

?>
