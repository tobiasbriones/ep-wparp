<?php
/*
 * Copyright (c) 2019 Tobias Briones.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

session_start();
header("Content-Type: application/json");
$response = array("status" => "OK", "data" => array("hasChanges" => false));
$files = json_decode($_SESSION["wparp"]);

set_error_handler(function () {}, E_WARNING);
foreach ($files as $file => $size) {
  $currentFileSize = filesize($file);
  
  if ($currentFileSize != $size) {
    $wparp = json_decode($_SESSION["wparp"], true);
    $response["data"]["hasChanges"] = true;
    
    $wparp[$file] = $currentFileSize;
    $_SESSION["wparp"] = json_encode($wparp);
    break;
  }
  if ($currentFileSize === false) {
    $response["status"] = "Fail to read file: $file";
  }
}
echo json_encode($response);
