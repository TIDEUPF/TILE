<?php
include_once (__DIR__ . '/../../../dbvar.php');
include_once (__DIR__ . '/libldshake.php');

$document_id = isset($_REQUEST['document_id']) ? (int)$_REQUEST['document_id'] : null;
$sectoken = $_REQUEST['sectoken'];

$data = \ldshake\get_document_data($document_id);
\ldshake\send_binary_data($data);
exit;