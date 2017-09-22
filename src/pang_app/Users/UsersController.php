<?php

namespace App\Users;

/**
 * @PrivateController(label="Users", description="Hosts all the actions for the users facility")
 */
class UsersController extends \Skeleton\Users\UsersController {
  
  function __construct($app) {
    parent::__construct($app);
  }

  function index_all() {

    $user_service = $this->_app->services->get('user_service');
    $elastic = $this->_app->services->get('elastic');
    $str_service = $this->_app->services->get('string_service');
    $users = $user_service->getAllUsers();

    foreach($users as $user) {
      $params['body'][] = [
        'index' => [
          '_index' => 'angular_skeleton',
          '_type' => 'users',
        ]
      ];

      $params['body'][] = [
        'id' => $user["id"],
        'search_body' => implode(" ", $str_service->arrayToSearchString($user))
      ];
    }

    $responses = $elastic->bulk($params);

    $response_body = array(
      "status" => true,
      "message" => "Your request was successful",
      "result" => $responses
    );

    $newresponse = $this->_app->response->withJson($response_body);
    return $newresponse;

  }


}