<?php

namespace App\Privileges\Entities;

/**
* @Entity
* @Table(name="actions", uniqueConstraints={@UniqueConstraint(name="unique_action", columns={"controller_id", "action"})})
*/
class Action extends \Skeleton\Privileges\Entities\Action {}
