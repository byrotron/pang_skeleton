<?php 

namespace App\Roles;

/**
 * @PrivateController(label="Roles", description="Each role is allocated to a user, this role is also allocated privileges to all actions within the application. Applying a role to a user determines their privileges within the system")
 */
class RolesController extends \Pangphp\Roles\RolesController {

  function __construct($app) {
    parent::__construct($app);
  }

}
