<?php

namespace todoList\database;
use JeroenZwart\CsvSeeder\CsvSeeder;

class Seeder extends CsvSeeder
{
    public function __construct()
    {
        $this->file = '/database/seeds/'.get_class($this).'.csv';
        $this->truncate = false;
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Recommended when importing larger CSVs
        \DB::disableQueryLog();
        parent::run();
    }
}
