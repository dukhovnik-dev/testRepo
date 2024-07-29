<?php

    require_once('config.php');

    function printuj( $x ){
        echo '<div>';
        echo '<pre>';
        if( is_array($x) || is_object($x) ){
            print_r($x);
        }else{
            echo $x;
        }
        echo '</pre>';
        echo '</div>';
    }

    function part( $name, $subname = '' ){
        $names = array();
        if( !empty($subname) ){ $names[] = $name.'-'.$subname; };
        $names[] = $name;
        foreach($names as $name){
            $file_path = PARTS_DIR.'/'.$name.'.php';
            if( file_exists($file_path) ){
                require( $file_path );
            }
        }
    }

?>
