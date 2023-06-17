<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Project;

class DeleteEmptyProjects extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'project:delete-empty';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete projects if contract_title and commitment_year and contract_year are empty';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        // Retrieve all projects where contract_title is null or "null",
        // and commitment_year and contract_year are null
        $projects = Project::where(function ($query) {
            $query->whereNull('contract_title')
                ->orWhere('contract_title', 'null');
        })->whereNull('commitment_year')
            ->whereNull('contract_year')
            ->get();

        if (!$projects->isEmpty()) {
            // Delete each project and its associated records
            foreach ($projects as $project) {
                $project->delete();  // You may need to setup cascading deletes in your Project model to remove associated records
                $this->info('Deleted project with id: ' . $project->id);
            }

            $this->info('Deleted ' . $projects->count() . ' projects.');
        } else {
            $this->info('No projects to delete.');
        }

        return 0;
    }

}
