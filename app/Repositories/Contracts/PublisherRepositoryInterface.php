<?php

namespace App\Repositories\Contracts;

use App\Models\Publisher;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

/**
 * Interface PublisherRepositoryInterface
 */
interface PublisherRepositoryInterface
{
    /**
     * @return array
     */
    public function getFieldsSearchable();

    /**
     * @return mixed
     */
    public function model();

    /**
     * Retrieve all records with given filter criteria
     *
     * @param  array  $search
     * @param  int|null  $skip
     * @param  int|null  $limit
     * @param  array  $columns
     *
     * @return Publisher[]|Collection
     */
    public function all($search = [], $skip = null, $limit = null, $columns = ['*']);

    /**
     * Create model record
     *
     * @param  array  $input
     *
     * @return Model
     */
    public function create($input);

    /**
     * Update model record for given id
     *
     * @param  array  $input
     * @param  int  $id
     *
     * @return Publisher|Collection
     */
    public function update($input, $id);
}
