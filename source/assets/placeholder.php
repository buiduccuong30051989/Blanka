<?php

class scanDir {
    static private $directories, $files, $ext_filter, $recursive;

// ----------------------------------------------------------------------------------------------
    // scan(dirpath::string|array, extensions::string|array, recursive::true|false)
    static public function scan(){
        // Initialize defaults
        self::$recursive = false;
        self::$directories = array();
        self::$files = array();
        self::$ext_filter = false;

        // Check we have minimum parameters
        if(!$args = func_get_args()){
            die("Must provide a path string or array of path strings");
        }
        if(gettype($args[0]) != "string" && gettype($args[0]) != "array"){
            die("Must provide a path string or array of path strings");
        }

        // Check if recursive scan | default action: no sub-directories
        if(isset($args[2]) && $args[2] == true){self::$recursive = true;}

        // Was a filter on file extensions included? | default action: return all file types
        if(isset($args[1])){
            if(gettype($args[1]) == "array"){self::$ext_filter = array_map('strtolower', $args[1]);}
            else
                if(gettype($args[1]) == "string"){self::$ext_filter[] = strtolower($args[1]);}
        }

        // Grab path(s)
        self::verifyPaths($args[0]);
        return self::$files;
    }

    static private function verifyPaths($paths){
        $path_errors = array();
        if(gettype($paths) == "string"){$paths = array($paths);}

        foreach($paths as $path){
            if(is_dir($path)){
                self::$directories[] = $path;
                $dirContents = self::find_contents($path);
            } else {
                $path_errors[] = $path;
            }
        }

        if($path_errors){echo "The following directories do not exists<br />";die(var_dump($path_errors));}
    }

    // This is how we scan directories
    static private function find_contents($dir){
        $result = array();
        $root = scandir($dir);
        foreach($root as $value){
            if($value === '.' || $value === '..') {continue;}
            if(is_file($dir.DIRECTORY_SEPARATOR.$value)){
                if(!self::$ext_filter || in_array(strtolower(pathinfo($dir.DIRECTORY_SEPARATOR.$value, PATHINFO_EXTENSION)), self::$ext_filter)){
                    self::$files[] = $result[] = $dir.DIRECTORY_SEPARATOR.$value;
                }
                continue;
            }
            if(self::$recursive){
                foreach(self::find_contents($dir.DIRECTORY_SEPARATOR.$value) as $value) {
                    self::$files[] = $result[] = $value;
                }
            }
        }
        // Return required for recursive search
        return $result;
    }
}

$dir_input = './1';
$dir_output = './2';
$file_output_type = ''; // png
$file_output_color = 'eee';
$file_output_background_color = '666';

//        $file = $_FILES['xml'];

$file_output_design = $file_output_color . '/' . $file_output_background_color;

if (!file_exists($dir_output)) {
    mkdir($dir_output, 0744, true);
}

$file_ext = array(
    "jpg",
    "bmp",
    "png"
);

$files = scanDir::scan($dir_input, $file_ext, true);

foreach($files as $value) {
    $file_info = pathinfo($value);
    $dirname = $file_info['dirname'];
    $basename = $file_info['basename'];
    $extension = $file_info['extension'];
    $filename = $file_info['filename'];
    
    $image_info = @getimagesize($value);
    
    $width = $image_info[0];
    $height = $image_info[1];

    $file_output_fullname = $basename;

    if ($file_output_type != '') {
        $file_output_fullname = $filename . '.' . $file_output_type;
    }

    $output = str_replace($dir_input, $dir_output, $dirname);

    if (!file_exists($output)) {
        mkdir($output, 0755, true);
    }

    $placeholder_file = $dir_output . '/' . $file_output_fullname;

    $placeholder_it = 'https://dummyimage.com/' . $width . 'x' . $height . '/' . $file_output_design . '&text=BiFirm' . '.' . $extension;
    // $image_content = file_get_contents($placeholder_it);
    
    if (!$data = @file_get_contents($placeholder_it)) {
            $error = error_get_last();
            echo "HTTP request failed. Error was: " . $error['message'];
    } else {
            echo "Everything went better than expected";
            @file_put_contents($placeholder_file, $data);
    }


    sleep(1);
}

die();