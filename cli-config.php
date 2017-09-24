<?php
// cli-config.php
use \Doctrine\ORM\Tools\Setup;
use \Doctrine\ORM\EntityManager;

require_once "vendor/autoload.php";
require_once 'src/app/entities.php';
require_once 'src/skeleton/entities.php';

// Keep the application split and insert the entities from the different sections
$entities = array_merge($skeleton_entities_array, $app_entities_array);

$isDevMode = true;
$config = Setup::createAnnotationMetadataConfiguration($entities, $isDevMode);
$config->addCustomStringFunction("MATCH_AGAINST", 'Skeleton\Classes\MatchAgainst');

$db_config = json_decode(file_get_contents('config/development-config.json'));

// database configuration parameters
$conn = array(
  'driver'   => $db_config->database->driver,
  'user'     => $db_config->database->user,
  'password' => $db_config->database->password,
  'dbname'   => $db_config->database->db_name
);

// obtaining the entity manager
$em = EntityManager::create($conn, $config);

return \Doctrine\ORM\Tools\Console\ConsoleRunner::createHelperSet($em);