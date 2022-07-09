<html>
<php

$to = "8088928155@vtext.com";
$from = "muyezu808@gmail.com";
$message = "this is a test message";
$headers = "from: $from/n";
mail($to, "", $message, $headers);

?>
</html>
