<?php

Route::get('/upgrade-to-v3-5-0', function () {
    Artisan::call('db:seed', ['--class' => 'RemovePenaltiesSeeder']);
});

Route::get('/upgrade-to-v4-2-0', function () {
    Artisan::call('migrate',
        [
            '--force' => true,
            '--path'  => 'database/migrations/2022_08_15_100807_add_other_new_fields_to_subscriptions_table.php',
        ]);
    Artisan::call('migrate',
        [
            '--force' => true,
            '--path'  => 'database/migrations/2022_08_15_112445_change_datatype_of_transaction_id_to_subscriptions_table.php',
        ]);
    Artisan::call('migrate',
        [
            '--force' => true,
            '--path'  => 'database/migrations/2022_08_23_051137_change_datatype_tranaction_id_to_transactions_table.php',
        ]);
});
