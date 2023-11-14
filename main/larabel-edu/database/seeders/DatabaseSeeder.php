<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    // \App\Models\User::factory(10)->create();
    public function run()
    {
        $cnt = 0;
        while ($cnt < 60) {
            \App\Models\Board::factory(10)->create();
            $cnt++;
        }
    }
}
