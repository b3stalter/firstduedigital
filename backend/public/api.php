<?php
require_once '../src/config/database.php';
require_once '../src/controllers/ApiController.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$controller = new ApiController();
$controller->handleRequest();
