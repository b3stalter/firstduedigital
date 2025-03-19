<?php
class DataModel
{
    private $conn;
    private $table_name = "your_table";

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function getData()
    {
        $query = "SELECT * FROM " . $this->table_name;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $data;
    }
}
