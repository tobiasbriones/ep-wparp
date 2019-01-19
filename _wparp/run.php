<?php
session_start();
header("Content-Type: application/json");
$params = json_decode(file_get_contents("php://input"));
$response = array("status" => "OK");
$register = array();

set_error_handler(function() {}, E_WARNING);
foreach($params as $file) {
    $fileSize = filesize($file);
    $register[$file] = $fileSize;
    
    if($fileSize === FALSE) {
        $response["status"] = "Fail to register file: $file";
        
    }
    
}
$_SESSION["wparp"] = json_encode($register);
echo json_encode($response);

?>
