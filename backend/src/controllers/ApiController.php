<?php
require_once '../src/models/DataModel.php';

class ApiController
{
    public function handleRequest()
    {
        $method = $_SERVER['REQUEST_METHOD'];
        if ($method === 'GET') {
            $this->getData();
        } else {
            http_response_code(405);
            echo json_encode(array("message" => "Method not allowed"));
        }
    }

    private function getData()
    {
        $database = new Database();
        $db = $database->getConnection();
        $model = new DataModel($db);
        $data = $model->getData();
        echo json_encode($data);
    }
}
