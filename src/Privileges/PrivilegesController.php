<?php

namespace App\Privileges;

/**
 * @PrivateController(label="Privileges", description="This will allow you to decide the what actions each user is authorised to complete, this is based on the role allocated to each user")
 */
class PrivilegesController extends \Pangphp\Privileges\PrivilegesController { 

  function __construct($app) {
    parent::__construct($app);
  }

}