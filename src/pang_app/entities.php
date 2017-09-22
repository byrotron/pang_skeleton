<?php

$path = dirname(__FILE__);

$app_entities_array = [
  'Privileges',
  'Users',
  'Roles',
  'Errors'
];

foreach($app_entities_array as $k => $folder) {

  $app_entities_array[$k] = $path . DIRECTORY_SEPARATOR . $folder . DIRECTORY_SEPARATOR . 'Entities';

  if(!is_dir($app_entities_array[$k])) {
    throw new Exception("Could not find: " . $app_entities_array[$k]);
  }

}
