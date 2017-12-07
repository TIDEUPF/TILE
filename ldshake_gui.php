<?php
session_start();
include('dbvar.php');
include_once (__DIR__ . '/services/ldshake/ldsdoc/libldshake.php');

global $node_path;

if(isset($_REQUEST['ldshake_save']))	{
    $ldshake_sectoken = $_REQUEST['ldshake_sectoken'];
    $ldshake_doc_id = $_REQUEST['ldshake_doc_id'];
    $ldshake_flow_data = $_REQUEST['flow_data'];
    \ldshake\ldshake_update_document($ldshake_doc_id, $ldshake_sectoken, $ldshake_flow_data);
    \ldshake\return_success();
    exit;
} else {
    $ldshake_sectoken = $_REQUEST['sectoken'];
    $ldshake_doc_id = $_REQUEST['document_id'];
    $ldshake_iframe = true;
}
$sql = <<<SQL
select * from `ldshake_editor` where `doc_id` = '{$ldshake_doc_id}' AND `sectoken` = '{$ldshake_sectoken}'
SQL;

$flow_result = mysqli_query($link, $sql);
if(!(mysqli_num_rows($flow_result) > 0)) {
    throw new Exception("Document not found");
}

$row = mysqli_fetch_assoc($flow_result);
$ldshake_data = empty((array)json_decode($row['json'])) ? "null" : $row['json'];

$js_script = <<<HTML
<script>
    var ldshake_initial_data = {$ldshake_data};
    var ldshake_doc_id = "{$ldshake_doc_id}";
    var ldshake_sectoken = "{$ldshake_sectoken}";
</script>
HTML;

$index = file_get_contents("index.html");

$index = str_replace("</body>", $js_script . "</body>", $index);

echo $index;
exit;