<?php

use App\Users\UserMysqlService;
use App\Roles\RoleMysqlService;
use App\Auth\AuthService;
use App\Privileges\PrivilegeMysqlService;

$app_services_array = [

  "user_service" => function($c) {
        
      return new UserMysqlService($c["entity_manager"], $c["auth_service"], $c["search"]);
      
  },
      
  "auth_service" => function($c) {
        
        return new AuthService($c["entity_manager"], $c["string_service"]);
        
  },

  "privilege_service" => function($c) {
      
      return new PrivilegeMysqlService($c["entity_manager"]);
      
  },
  
  "role_service" => function($c) {
      
      return new RoleMysqlService($c["privilege_service"], $c["entity_manager"]);
      
  },
  
];

?>