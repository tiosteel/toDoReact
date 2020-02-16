<?php

use Illuminate\Database\Seeder;

class StatusesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (['Initial', 'In Progress', 'Completed'] as $sStatus) {
            DB::table('statuses')->insert([
                'name' => $sStatus
            ]);
        }
    }
}
