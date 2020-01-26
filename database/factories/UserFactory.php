<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/







/* puuuuuuuuuuuuuuuu que cagada faltaba la direccion disque mamadas esta
App\Task */
$factory->define(App\Task::class, function (Faker $faker) {
    return [
        'keep' => $faker->sentence,
    ];
});
