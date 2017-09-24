<?php

namespace App\Roles\Entities;

/**
 * @Entity 
 * @Table(name="roles", uniqueConstraints={@UniqueConstraint(name="unique_action", columns={"name"})})
*/
class Role extends \Pangphp\Roles\Entities\Role {}
