<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use App\Models\Project;

class DeleteDuplicateProjects extends Command
{
    protected $signature = 'projects:delete-duplicates';
    protected $description = 'Delete duplicate project entries based on contract number';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        // First, group by 'contract_title' and get only the first occurrence in each group
        $uniqueProjects = DB::table('projects')
            ->select('contract_title', DB::raw('MIN(id) as id'))
            ->groupBy('contract_title')
            ->pluck('id');

        // Now delete the entries which have a duplicate 'contract_title' and are not in the unique list
        $deletedRows = Project::whereNotIn('id', $uniqueProjects)->delete();

        // Show the number of deleted items
        $this->info("Deleted {$deletedRows} duplicate projects based on contract_title.");
    }
}
