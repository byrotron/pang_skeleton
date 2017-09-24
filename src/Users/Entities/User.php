<?php

namespace App\Users\Entities;

/**
 * @Entity 
 * @Table(name="users", indexes={@Index(name="search_indx", columns={"name", "surname", "email"}, flags={"fulltext"})})
*/
class User extends \Pangphp\Users\Entities\User {}
