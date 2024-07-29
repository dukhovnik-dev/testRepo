<?php    
require_once('config.php');

//header('Content-type: text/csv; charset=UTF-8');
/*mb_internal_encoding('UTF-8'); 
mb_http_output('UTF-8'); 
mb_http_input('UTF-8'); 
mb_regex_encoding('UTF-8'); 
*/
header('Content-Type: text/html; charset=UTF-8');
function mapCSV($file){
 	$rows   = array_map('str_getcsv', file(CSV_DIR.'/'.$file));
    $header = array_shift($rows);
    $csv    = array();
    foreach($rows as $row) {
        $csv[] = array_combine($header, $row);
    }
	array_walk_recursive($csv, function(&$value, $key) {
	    if (is_string($value)) {
	        //$value = iconv('windows-1250', 'utf-8', $value);
	    }
	});
    return $csv;
}
function sortCat($item1,$item2)
{
    if ($item1['Product'] == $item2['Product']) return 0;
    return ($item1['Product'] > $item2['Product']) ? 1 : -1;
}
$printHouses = mapCSV("list24.csv");
$productsDuplicated = mapCSV("products24.csv");
$products = removeDuplicates($productsDuplicated);
usort($products,'sortCat');
usort($productsDuplicated, 'sortCat');
function removeDuplicates($arr){
	$userNames = array();
	foreach($arr as $key=>$value){
		if(!empty($userNames) && in_array($value['Product'],$userNames)) unset($arr[$key]);
		$userNames[] = $value['Product'];
		}
		return $arr;
}

function mapCategory($arr,$catName){
	removeDuplicates($arr);
	foreach ($arr as $row) {
		if($row['Category'] === $catName){
			echo '<li class="filters__sub-el">'. 
				 '<a class="filters__sub-a" href="#">'.$row['Product'].'</a>'.
				 '</li>';
		}
	}
}
function filterCategory_old($arr,$filterWord){
	$filter = array();
	foreach ($arr as $key => $item) {
		if (strpos(strtolower($item["Category"]), $filterWord) !== false) {
	    	$filter[] = intval($item["Print_ID"]);
		}
	}

	return array_unique($filter);
}

function filterCategory($arr,$filterWord){
	$filter = array();
	foreach ($arr as $key => $item) {
		if (strtolower($item["Category"]) == $filterWord) {
	    	$filter[] = intval($item["Print_ID"]);
		}
	}
	$filter = array_unique($filter);
	$finalFilter = array();
	foreach ($filter as $key => $item) {
		$finalFilter[] = $item;
	}
	$filter = array_values($filter);
	return $filter;
}
function filterParentCategory($arr,$filterWord){
	$filter = array();
	foreach ($arr as $key => $item) {
		if (strtolower($item["ParentCategory"]) == $filterWord) {
	    	$filter[] = intval($item["Print_ID"]);
		}
	}
	$filter = array_unique($filter);
	$finalFilter = array();
	foreach ($filter as $key => $item) {
		$finalFilter[] = $item;
	}
	$filter = array_values($filter);
	return $filter;
}
if(isset($_POST["filter"])){
	$filtered = filterCategory($productsDuplicated,$_POST["filter"]);
	echo json_encode($filtered);
}
if(isset($_POST["ParentFilter"])){
	$parentFiltered = filterParentCategory($productsDuplicated,$_POST["ParentFilter"]);
	echo json_encode($parentFiltered);
}
?> 