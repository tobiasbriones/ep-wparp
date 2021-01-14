<?php
/*
 * Copyright (c) 2019 Tobias Briones. All rights reserved.
 *
 * SPDX-License-Identifier: MIT
 *
 * This file is part of Example Project: WPARP.
 *
 * This source code is licensed under the MIT License found in the
 * LICENSE file in the root directory of this source tree or at
 * https://opensource.org/licenses/MIT.
 */

session_start();
header("Content-Type: application/json");

$response = ["status" => "OK", "data" => ["hasChanges" => false]];
$files = json_decode($_SESSION["wparp"]);

set_error_handler(
    function () {
    },
    E_WARNING
);
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
