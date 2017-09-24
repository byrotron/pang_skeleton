<?php

use \Pangphp\Bootstrap;

require_once "../vendor/autoload.php";

try {

  $bootstrap = new Bootstrap(dirname(__FILE__), "development");
  $bootstrap->run();

} catch(Exception $e) {

  echo $e->getMessage();

}
