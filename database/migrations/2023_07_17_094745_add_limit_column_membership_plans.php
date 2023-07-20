<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLimitColumnMembershipPlans extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('membership_plans', function (Blueprint $table) {
            $table->integer('reserve_books_limit')->default(0);
            $table->integer('issue_books_limit')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('membership_plans', function (Blueprint $table) {
            $table->dropColumn('reserve_books_limit');
            $table->dropColumn('issue_books_limit');
        });
    }
}
