<?php
function header_include(){
	$dir = "styles/";
	if (is_dir($dir)) {
	    if ($dh = opendir($dir)) {
	        while (($file = readdir($dh)) !== false) {
	        	if(is_dir($file)){
		        	//do nothing
	        	}
	        	else{
		        	echo "<link rel='stylesheet' href='styles/".$file."' type='text/css' charset='utf-8'/>";
	        	}
	        }
	        closedir($dh);
	    }
	}
	$dir = "scripts/";
	if (is_dir($dir)) {
	    if ($dh = opendir($dir)) {
	        while (($file = readdir($dh)) !== false) {
	        	if(is_dir($file)){
		        	//do nothing
	        	}
	        	else{
		        	echo "<script src='scripts/".$file."' type='text/javascript'/></script>";
	        	}
	        }
	        closedir($dh);
	    }
      }
}


?>
