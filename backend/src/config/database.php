<?php
class Database
{
    private $host = "db5017337580.hosting-data.io";
    private $db_name = "dbs13903179";
    private $username = "dbu757681";
    private $password = "Matt0525$";
    public $conn;

    public function getConnection()
    {
        $this->conn = null;
        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        } catch (PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }
        return $this->conn;
    }
}
